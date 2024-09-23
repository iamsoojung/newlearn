package com.newlearn.backend.study.controller;

import com.newlearn.backend.common.ApiResponse;
import com.newlearn.backend.common.ErrorCode;
import com.newlearn.backend.study.dto.request.GoalRequestDTO;
import com.newlearn.backend.study.dto.request.WordTestRequestDTO;
import com.newlearn.backend.study.dto.request.WordTestResultDTO;
import com.newlearn.backend.study.dto.response.PronounceTestResponseDTO;
import com.newlearn.backend.study.dto.response.StudyProgressDTO;
import com.newlearn.backend.study.dto.response.WordTestResponseDTO;
import com.newlearn.backend.study.service.StudyService;
import com.newlearn.backend.user.model.Users;
import com.newlearn.backend.user.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/study")
public class StudyController {

    private final UserService userService;
    private final StudyService studyService;

    // 학습 목표 설정
    @PostMapping("/goal")
    public ApiResponse<?> setStudyGoal(Authentication authentication,
        @RequestBody GoalRequestDTO goalRequestDTO) throws Exception {
        try {
            Users user = userService.findByEmail(authentication.getName());
            if (user == null) {
                return ApiResponse.createError(ErrorCode.USER_NOT_FOUND);
            }

            boolean isGoalExist = studyService.isGoalExist(user.getUserId());   // 목표가 이미 존재하면 재설정 불가
            if (isGoalExist) {
                return ApiResponse.createError(ErrorCode.GOAL_ALREADY_EXISTS);
            }

            studyService.saveGoal(user.getUserId(), goalRequestDTO);    // 새로운 목표 저장

            return ApiResponse.createSuccess(null, "학습 목표 설정 성공");
        } catch (Exception e) {
            log.error("목표 설정 중 오류 발생", e);
            return ApiResponse.createError(ErrorCode.GOAL_CREATE_FAILED);
        }
    }

    // 개인 학습 진도율 조회
    @GetMapping("/progress")
    public ApiResponse<?> getStudyProgress(Authentication authentication) throws Exception {
        try {
            Users user = userService.findByEmail(authentication.getName());
            if (user == null) {
                return ApiResponse.createError(ErrorCode.USER_NOT_FOUND);
            }

            StudyProgressDTO progress = studyService.getStudyProgress(user.getUserId());

            return ApiResponse.createSuccess(progress, "개인 진도율 조회 성공");
        } catch (Exception e) {
            log.error("진도율 조회 중 오류 발생", e);
            return ApiResponse.createError(ErrorCode.STUDY_PROGRESS_NOT_FOUND);
        }
    }

    // 단어 테스트 문제 가져오기
    @GetMapping("/word/test")
    public ApiResponse<?> getStudyWordTest(Authentication authentication,
        @RequestBody WordTestRequestDTO wordTestRequestDTO) throws Exception {
        try {
            Users user = userService.findByEmail(authentication.getName());
            if (user == null) {
                return ApiResponse.createError(ErrorCode.USER_NOT_FOUND);
            }

            List<WordTestResponseDTO> tests = studyService.getWordTestProblems(user.getUserId(), user, wordTestRequestDTO.getTotalCount());

            return ApiResponse.createSuccess(tests, "단어 상세 조회 성공");
        } catch (Exception e) {
            log.error("단어 테스트 문제 조회 중 오류 발생", e);
            return ApiResponse.createError(ErrorCode.WORD_TEST_NOT_FOUND);
        }
    }

    // 단어 테스트 결과 저장

    // 단어 테스트 결과 리스트 조회

    // 발음 테스트 예문 가져오기
    @GetMapping("/pronounce/test")
    public ApiResponse<?> getPronounceWordTest(Authentication authentication) throws Exception {
        try {
            Users user = userService.findByEmail(authentication.getName());
            if (user == null) {
                return ApiResponse.createError(ErrorCode.USER_NOT_FOUND);
            }

            List<PronounceTestResponseDTO> tests = studyService.getPronounceTestProblems(user.getUserId(), user);

            return ApiResponse.createSuccess(tests, "발음 테스트 예문 가져오기 성공");
        } catch (Exception e) {
            log.error("발음 테스트 문제 조회 중 오류 발생", e);
            return ApiResponse.createError(ErrorCode.PRONOUNCE_TEST_NOT_FOUND);
        }
    }

    // 발음 테스트 결과 저장

    // 발음 테스트 결과 리스트 조회

    // 발음 테스트 결과 상세 조회

}

