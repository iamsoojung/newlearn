package com.newlearn.backend.study.service;

import com.newlearn.backend.study.dto.request.GoalRequestDTO;
import com.newlearn.backend.study.dto.request.WordTestResultRequestDTO;
import com.newlearn.backend.study.dto.response.*;
import com.newlearn.backend.study.model.Goal;
import com.newlearn.backend.word.model.*;
import com.newlearn.backend.study.repository.StudyRepository;
import com.newlearn.backend.user.model.Users;
import com.newlearn.backend.word.repository.WordQuizAnswerRepository;
import com.newlearn.backend.word.repository.WordQuizQuestionRepository;
import com.newlearn.backend.word.repository.WordQuizRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Slf4j
public class StudyServiceImpl implements StudyService{

    private final StudyRepository studyRepository;
    private final WordQuizRepository wordQuizRepository;
    private final WordQuizAnswerRepository wordQuizAnswerRepository;
    private final WordQuizQuestionRepository wordQuizQuestionRepository;

    @Override
    public boolean isGoalExist(Long userId) {
        return studyRepository.existsByUserId(userId);
    }

    @Override
    public void saveGoal(Long userId, GoalRequestDTO goalRequestDTO) {
        Goal goal = Goal.builder()
            .userId(userId)
            .goalReadNewsCount(goalRequestDTO.getGoalReadNewsCount())
            .goalPronounceTestScore(goalRequestDTO.getGoalPronounceTestScore())
            .goalCompleteWord(goalRequestDTO.getGoalCompleteWord())
            .currentReadNewsCount(0L)
            .currentPronounceTestScore(0L)
            .currentCompleteWord(0L)
            .build();
        studyRepository.save(goal);
    }

    @Override
    public StudyProgressDTO getStudyProgress(Long userId) {
        Goal goal = studyRepository.findByUserId(userId)
            .orElseThrow(() -> new RuntimeException("목표가 없습니다."));

        return StudyProgressDTO.builder()
            .goalReadNewsCount(goal.getGoalReadNewsCount())
            .goalPronounceTestScore(goal.getGoalPronounceTestScore())
            .goalCompleteWord(goal.getGoalCompleteWord())
            .currentReadNewsCount(goal.getCurrentReadNewsCount())
            .currentPronounceTestScore(goal.getCurrentPronounceTestScore())
            .currentCompleteWord(goal.getCurrentCompleteWord())
            .build();
    }

    @Override
    public List<WordTestResponseDTO> getWordTestProblems(Long userId, Users user, Long totalCount) {
        WordQuiz newQuiz = new WordQuiz();
        newQuiz.setUser(user);
        newQuiz.setTotalCount(totalCount);
        newQuiz.setCorrectCount(0L);
        wordQuizRepository.save(newQuiz);

        // 랜덤 단어 ${totalCount}개 가져오기
        List<Word> words = wordQuizQuestionRepository.findRandomWords(userId, totalCount);
        List<WordTestResponseDTO> tests = new ArrayList<>();

        for (Word word : words) {
            WordSentence sentence = wordQuizQuestionRepository.findRandomSentenceByWordId(word.getWordId());

            WordQuizQuestion question = new WordQuizQuestion();
            question.setQuiz(newQuiz);
            question.setWord(word);
            question.setSentence(sentence.getSentence());
            question.setSentenceMeaning(sentence.getSentenceMeaning());
            question.setCorrectAnswer(word.getWord());
            wordQuizQuestionRepository.save(question);

            tests.add(WordTestResponseDTO.builder()
                .word(word.getWord())
                .wordMeaning(word.getWordMeaning())
                .sentence(sentence.getSentence())
                .sentenceMeaning(sentence.getSentenceMeaning())
                .build());
        }
        return tests;
    }

    @Override
    public void saveWordTestResult(Long userId, WordTestResultRequestDTO wordTestResultRequestDTO) {
        for (WordTestResultRequestDTO.WordTestDetail result : wordTestResultRequestDTO.getResults()) {
            // 퀴즈 가져오기
            WordQuiz quiz = wordQuizRepository.findById(wordTestResultRequestDTO.getQuizId())
                    .orElseThrow(() -> new IllegalArgumentException("퀴즈를 찾을 수 없습니다."));

            // 질문 저장
            WordQuizQuestion question = WordQuizQuestion.builder()
                    .quiz(quiz) // 퀴즈
                    .sentence(result.getSentence())
                    .correctAnswer(result.getCorrectAnswer())
                    .build();
            wordQuizQuestionRepository.save(question);

            // 답안 저장
            WordQuizAnswer answer = WordQuizAnswer.builder()
                    .wordQuizQuestion(question) // 질문
                    .answer(result.getAnswer())
                    .isCorrect(result.isCorrect())
                    .build();
            wordQuizAnswerRepository.save(answer);
        }
    }

    @Override
    public List<WordTestResultResponseDTO> getWordTestResults(Long userId) {
        // 유저와 관련된 모든 시험 가져오기
        List<WordQuiz> wordQuizzes = wordQuizRepository.findByUserId(userId);

        return wordQuizzes.stream().map(quiz -> {
            // 시험에 관련된 답변 가져오기
            List<WordQuizAnswer> answers = wordQuizAnswerRepository.findByQuizId(quiz.getQuizId());

            String answer = answers.isEmpty() ? "" : answers.get(0).getAnswer();    // 정답이 안비었는지
            boolean isCorrect = quiz.getCorrectCount() > 0; // 정답 수가 0보다 큰지

            return WordTestResultResponseDTO.builder()
                    .quizId(quiz.getQuizId())
                    .answer(answer)
                    .totalCnt(String.valueOf(quiz.getTotalCount()))
                    .correctCnt(isCorrect)
                    .createAt(quiz.getCreatedAt())
                    .build();
        }).collect(Collectors.toList());
    }

    @Override
    public WordTestResultDetailResponseDTO getWordTestResult(Long userId, Long quizId) {
        // 퀴즈 가져오기
        WordQuiz quiz = wordQuizRepository.findById(quizId)
                .orElseThrow(() -> new IllegalArgumentException("퀴즈를 찾을 수 없습니다."));

        // 퀴즈 질문 가져오기
        List<WordQuizQuestion> questions = wordQuizQuestionRepository.findByQuizId(quizId);

        // 결과 리스트는 하나의 질문과 답변만 포함
        if (questions.isEmpty()) {
            throw new IllegalArgumentException("퀴즈 질문이 없습니다.");
        }

        WordQuizQuestion question = questions.get(0);

        // 해당 질문에 대한 답변 찾기
        List<WordQuizAnswer> answers = wordQuizAnswerRepository.findByQuizIdAndQuestionId(quizId, question.getWordQuizQuestionId());

        // 첫 번째 답변을 기준으로 결과 생성
        String answer = answers.isEmpty() ? "" : answers.get(0).getAnswer();
        boolean isCorrect = !answers.isEmpty() && answers.get(0).getIsCorrect();

        WordTestResultDetailResponseDTO resultDetail = WordTestResultDetailResponseDTO.builder()
                .quizId(question.getWordQuizQuestionId())
                .answer(answer)
                .correctAnswer(question.getCorrectAnswer())
                .isCorrect(isCorrect)
                .sentence(question.getSentence())
                .createAt(quiz.getCreatedAt())
                .build();

        return resultDetail;
    }

    @Override
    public List<PronounceTestResponseDTO> getPronounceTestProblems(Long userId, Users user) {
        // 랜덤 단어 3개 가져오기
        List<Word> words = wordQuizQuestionRepository.findRandomWords(userId, 3L);
        List<PronounceTestResponseDTO> tests = new ArrayList<>();

        for (Word word : words) {
            WordSentence sentence = wordQuizQuestionRepository.findRandomSentenceByWordId(word.getWordId());

            tests.add(PronounceTestResponseDTO.builder()
                    .sentence(sentence.getSentence())
                    .sentenceMeaning(sentence.getSentenceMeaning())
                    .build());
        }
        return tests;
    }
}
