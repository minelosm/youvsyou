package ch.zhaw.youvsyou.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ChallengeCreateDTO {
    private String name;
    private String description;
    private String startDate;
    private String endDate;
    private Double wager;
    private ChallengeType challengeType;
    private String fitnesscoachId;
}
