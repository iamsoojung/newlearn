import styled from "styled-components";
import MyPageProfile from "@components/mypage/MyPageProfile";
import MyPageInfo from "@components/mypage/MyPageInfo";
import MyPageCount from "@components/mypage/MyPageCount";
import MyPageCategory from "@components/mypage/MyPageCategory";
import MyPageGrass from "@components/mypage/MyPageGrass";
import MyPageScrapNews from "@components/mypage/MyPageScrapNews";

const MyPage = () => {
  return (
    <div>
      <MyPageContainer>
        <FlexContainer>
          <FlexItem $flex={5}>
            <WidgetContainer>
              <MyPageProfile />
            </WidgetContainer>
          </FlexItem>
          <FlexItem $flex={4}>
            <WidgetContainer>
              <MyPageInfo />
            </WidgetContainer>
          </FlexItem>
          <FlexItem $flex={3}>
            <WidgetContainer>
              <MyPageCount />
            </WidgetContainer>
          </FlexItem>
        </FlexContainer>
        <FlexContainer>
          <FlexItem $flex={7}>
            <WidgetContainer>
              <MyPageCategory />
            </WidgetContainer>
          </FlexItem>
          <FlexItem $flex={8}>
            <WidgetContainer>
              <MyPageGrass />
            </WidgetContainer>
          </FlexItem>
        </FlexContainer>
        <FlexContainer>
          <FlexItem $flex={1}>
            <WidgetContainer>
              <MyPageScrapNews />
            </WidgetContainer>
          </FlexItem>
        </FlexContainer>
      </MyPageContainer>
    </div>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  padding: 0 4rem;
  margin-bottom: 5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

const FlexItem = styled.div<{ $flex: number }>`
  flex: ${(props) => props.$flex};
  margin: 1rem 0;
`;

const WidgetContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.75rem;
  background-color: ${(props) => props.theme.colors.cardBackground + "BF"};
  border-radius: 12px;
  transition: box-shadow 0.5s;
  backdrop-filter: blur(4px);
  box-shadow: ${(props) => props.theme.shadows.small};
  box-sizing: border-box;
`;
