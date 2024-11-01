package com.newlearn.backend.study.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class PronounceTestResultResponseDTO {

    private long audioFileId;
    private long totalScore;
    private LocalDateTime createdAt;
    private long accuracyScore;
    private long fluencyScore;
    private long completenessScore;
    private long prosodyScore;
}
