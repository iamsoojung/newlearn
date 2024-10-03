import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import locationState from "@store/locationState";
import styled from "styled-components";
import BackArrow from "@assets/icons/BackArrow";
import WordTestResultWordList from "@components/testpage/WordTestResultWordList";
import WordTestResultWordDetail from "@components/testpage/WordTestResultWordDetail";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  getWordTestResultDetail,
  WordTestResultDetailResponseDto,
} from "@services/wordTestService";
import Spinner from "@components/Spinner";
import { useMediaQuery } from "react-responsive"; // 모바일 여부 감지
import WordTestResultListMobilePage from "./mobile/WordTestResultListMobilePage";

const WordTestResultPage: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { quizId } = useParams<{ quizId: string }>();
  const setCurrentLocation = useSetRecoilState(locationState);

  useEffect(() => {
    setCurrentLocation("Word Test Page");
  }, [setCurrentLocation]);

  // 서버에서 데이터를 가져오기
  const {
    data: testDetail,
    isLoading,
    error,
  } = useQuery<WordTestResultDetailResponseDto[]>({
    queryKey: ["wordTestDetail", quizId],
    queryFn: () => getWordTestResultDetail(Number(quizId)),
  });

  // 현재 선택된 단어 인덱스와 단어
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");

  const wordExplainDetailHandler = (index: number) => {
    setCurrentWordIndex(index);
    setCurrentWord(testDetail![index].correctAnswer);
  };

  // 로딩 상태 처리
  if (isLoading) return <Spinner />;

  // 에러 상태 처리
  if (error)
    return <ErrorText>에러가 발생했습니다. 다시 시도해 주세요.</ErrorText>;

  // testDetail이 null일 때
  if (!testDetail || testDetail.length === 0)
    return <ErrorText>데이터가 없습니다.</ErrorText>;

  // 모바일
  if (isMobile) return <WordTestResultListMobilePage />;

  return (
    <MainLayout>
      <MainContainer>
        <BackHeader>
          <BackArrow width={48} height={48} url="/testhistory" />
          <BackHeaderText>
            평가 리스트로 돌아가기
          </BackHeaderText>
        </BackHeader>
        <WordListLayout>
          {testDetail.map((item, index) => {
            return (
              <WordTestResultWordList
                word={item.correctAnswer}
                userAnswer={item.answer}
                index={index}
                key={index}
                onClick={() => wordExplainDetailHandler(index)}
                isFocusWord={item.correctAnswer === currentWord}
              />
            );
          })}
        </WordListLayout>
      </MainContainer>
      <MainContainer>
        <WordExplainContainer>
          {currentWord ? (
            <WordTestResultWordDetail
              answerWord={testDetail[currentWordIndex].correctAnswer}
              userAnswer={testDetail[currentWordIndex].answer}
              sentence={testDetail[currentWordIndex].sentence}
              isCorrect={testDetail[currentWordIndex].correct}
            />
          ) : (
            <Explain>
              단어를 클릭하면 테스트 상세 정보를 확인할 수 있습니다.
            </Explain>
          )}
        </WordExplainContainer>
      </MainContainer>
    </MainLayout>
  );
};

export default WordTestResultPage;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  min-height: 45rem;
  max-height: 45rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.cardBackground + "BF"};
  box-shadow: ${(props) => props.theme.shadows.medium};
  border-radius: 0.75rem;
  transition: box-shadow 0.5s;
  backdrop-filter: blur(0.25rem);
`;

const BackHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top : 0.5rem;
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WordListLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 12rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

const WordExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.75rem;
  width: 100%;
  text-align: center;
`;

const ErrorText = styled.div`
  color: ${(props) => props.theme.colors.danger};
  font-size: 1.25rem;
  text-align: center;
`;

const BackHeaderText = styled.span`
margin-left: 1rem;
`

const Explain = styled.p`
  display: flex;
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.placeholder};
  margin-top: 25%;
  justify-content: center;
`;