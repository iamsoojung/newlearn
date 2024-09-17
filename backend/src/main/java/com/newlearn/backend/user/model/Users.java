package com.newlearn.backend.user.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Builder
@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@EqualsAndHashCode(of = "userId")
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "email", nullable = false, unique = true)
	private String email;

	@Column(name = "nickname", nullable = false, unique = true)
	private String nickname;

	@Column(name = "provider")
	@ColumnDefault(value = "local")
	private String provider;

	@Column(name = "provider_id")
	private String providerId;

	@Column(name = "difficulty")
	private Long difficulty;

	@Column(name = "total_news_read_count")
	private Long totalNewsReadCount;

	@Column(name = "total_word_count")
	private Long totalWordCount;

	@Column(name = "scrap_count")
	private Long scrapCount;

	@Column(name = "experience")
	private Long experience;

	@Setter
	@ManyToMany
	@JoinTable(
		name = "user_interest",
		joinColumns = @JoinColumn(name = "user_id"),
		inverseJoinColumns = @JoinColumn(name = "interest_id")
	)
	private Set<Category> categories = new HashSet<>();

	@Column(name = "created_at", nullable = false, updatable = false,
		insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;

	public void updateOAuthInfo(String provider, String providerId) {
		this.provider = provider;
		this.providerId = providerId;
	}

	public void updateCategories(Set<Category> newCategories) {
		this.categories.clear();
		this.categories.addAll(newCategories);
	}
}
