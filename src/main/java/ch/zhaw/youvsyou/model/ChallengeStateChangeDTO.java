package ch.zhaw.youvsyou.model;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class ChallengeStateChangeDTO {
    @Id private String challengeId;
    private String fitnessuserEmail;    
}
