package com.newlearn.backend.word.repository;

import com.newlearn.backend.word.model.WordQuizAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WordQuizAnswerRepository extends JpaRepository<WordQuizAnswer, Long> {

    List<WordQuizAnswer> findByWordQuizQuestion_WordQuiz_QuizId(Long quizId);
    List<WordQuizAnswer> findByWordQuizQuestion_WordQuiz_QuizIdAndWordQuizQuestion_WordQuizQuestionId(Long quizId, Long questionId);


}