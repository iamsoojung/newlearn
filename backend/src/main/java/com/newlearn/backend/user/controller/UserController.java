package com.newlearn.backend.user.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newlearn.backend.common.ApiResponse;
import com.newlearn.backend.common.ErrorCode;
import com.newlearn.backend.common.JwtTokenProvider;
import com.newlearn.backend.user.dto.request.AvatarUpdateDTO;
import com.newlearn.backend.user.dto.request.SignUpRequestDTO;
import com.newlearn.backend.user.dto.response.LoginResponseDTO;
import com.newlearn.backend.user.dto.response.RefreshTokenResponseDTO;
import com.newlearn.backend.user.model.Users;
import com.newlearn.backend.user.service.TokenService;
import com.newlearn.backend.user.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

	private final UserService userService;
	private final TokenService tokenService;
	private final JwtTokenProvider jwtTokenProvider;


	//회원가입
	@PostMapping("/sign-up")
	public ApiResponse<?> signUp(@RequestBody SignUpRequestDTO signUpRequestDTO) {
		try {
			userService.signUp(signUpRequestDTO);

			return ApiResponse.createSuccess(null, "성공적으로 회원가입하였습니다");
		} catch (Exception e) {
			return ApiResponse.createError(ErrorCode.USER_REGISTER_FAILED);
		}
	}

	//아바타 수정
	@PutMapping("/update-avatar")
	public ApiResponse<?> updateAvatar(Authentication authentication, @RequestBody AvatarUpdateDTO avatarUpdateDTO) throws
		Exception {
		try {
			Users user = userService.findByEmail(authentication.getName())
				.orElseThrow(() -> new Exception("회원정보 없음"));

			userService.updateAvatar(user.getUserId(), avatarUpdateDTO);

			return ApiResponse.createSuccess(null, "성공적으로 아바타 업데이트");
		} catch (Exception e) {
			return ApiResponse.createError(ErrorCode.USER_UPDATE_FAILED);
		}
	}

	//로그아웃
	@PostMapping("/logout")
	public ApiResponse<?> logout(HttpServletRequest request, HttpServletResponse response) {
		String refreshToken = extractRefreshToken(request);

		if (refreshToken != null && jwtTokenProvider.validateToken(refreshToken)) {
			tokenService.blacklistRefreshToken(refreshToken);

			Cookie cookie = new Cookie("refreshToken", null);
			cookie.setMaxAge(0);
			cookie.setPath("/");
			response.addCookie(cookie);

			return ApiResponse.createSuccess(null, "로그아웃이 완료되었습니다.");
		}
		return ApiResponse.createError(ErrorCode.INVALID_JWT_TOKEN);
	}

	private String extractRefreshToken(HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		if(cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals("refreshToken")) {
					return cookie.getValue();
				}
			}
		}
		return null;
	}

	@PostMapping("refresh-token")
	public ApiResponse<?> refreshToken(@CookieValue(name = "refreshToken", required = false) String refreshToken,
		HttpServletResponse response) throws Exception {
		try {
			if(refreshToken != null || refreshToken.isEmpty()) {
				return ApiResponse.createError(ErrorCode.REFRESH_TOKEN_NOT_FOUND);
			}

			RefreshTokenResponseDTO responseDTO = tokenService.getRefreshToken(refreshToken);

			if(responseDTO == null) {
				return ApiResponse.createError(ErrorCode.REFRESH_TOKEN_NOT_FOUND);
			}
			String newAccessToken = responseDTO.getAccessToken();;
			String newRefreshToken = responseDTO.getRefreshToken();

			ResponseCookie responseCookie = ResponseCookie.from("refreshToken", newRefreshToken)
				.httpOnly(true)
				.secure(true)
				.maxAge(60*60*24*14)
				.path("/")
				.sameSite("None")
				.domain("j11d105.p.ssafy.io")
				.build();

			response.setHeader(HttpHeaders.SET_COOKIE, responseCookie.toString());

			newAccessToken = "Bearer " + newAccessToken;
			LoginResponseDTO loginResponseDTO = new LoginResponseDTO();
			loginResponseDTO.setAccessToken(newAccessToken);

			return ApiResponse.createSuccess(loginResponseDTO, "토큰 재발급에 성공하였습니다.");
		}
		catch (Exception e) {
			return ApiResponse.createError(ErrorCode.INVALID_JWT_TOKEN);
		}
	}
}
