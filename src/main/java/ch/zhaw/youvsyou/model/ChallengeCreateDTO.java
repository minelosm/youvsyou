package ch.zhaw.youvsyou.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ChallengeCreateDTO {
    private String name;
    private String description;
    private String startDate;
    private String endDate;
    private Double wager;
    private ChallengeType challengeType;
    private String fitnesscoachId;
    private String fitnesscenter;

    public void setDescription(String description) {
        this.description = description;
    }
    
}
