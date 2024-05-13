package ch.zhaw.youvsyou.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Document("challenge")
public class Challenge {
    @Id private String id;
    @NonNull private String name;
    @NonNull private String description;
    @NonNull private String startDate;
    @NonNull private String endDate;
    @NonNull private Double wager;
    @NonNull private ChallengeType challengeType;
    private ChallengeState challengeState = ChallengeState.OPEN;
    @NonNull private String fitnesscoachId;
    private String fitnessuserId1;
    private String fitnessuserEmail1;
    private String fitnessuserId2;
    private String fitnessuserEmail2;
    private Double balance;


}
