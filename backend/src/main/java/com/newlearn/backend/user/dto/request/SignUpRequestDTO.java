package com.newlearn.backend.user.dto.request;

import java.util.List;

import com.newlearn.backend.user.model.Avatar;
import com.newlearn.backend.user.model.Users;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignUpRequestDTO {


	private String name;
	private String email;
	private String nickname;
	private String provider;
	private String providerId;
	private Long difficulty;
	private List<String> categories;
	// 아바타 정보
	private Long skin;
	private Long eyes;
	private Long mask;

	public Users toUserEntity() {
		return Users.builder()
			.name(this.name)
			.email(this.email)
			.nickname(this.nickname)
			.provider(this.provider)
			.providerId(this.providerId)
			.difficulty(this.difficulty)
			.experience(0L)
			.totalNewsReadCount(0L)
			.scrapCount(0L)
			.totalWordCount(0L)
			.build();
	}

	public Avatar toAvatarEntity(Users user) {
		return Avatar.builder()
			.user(user)
			.skin(this.skin)
			.eyes(this.eyes)
			.mask(this.mask)
			.build();
	}
}
