package ch.zhaw.youvsyou.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ChallengeStateAggregation {
    private String id;
    private List<String> challengeIds;
    private String count;
    
}
