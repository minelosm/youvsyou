package ch.zhaw.youvsyou.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeState;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;

@Service
public class ChallengeService {
    
    @Autowired
    ChallengeRepository challengeRepository;

    @Autowired
    FitnessuserRepository fitnessuserRepository;


    public Optional<Challenge> competeChallenge(String challengeId, String fitnessuserEmail1, String fitnessuserEmail2) {
        Optional<Challenge> challengeToCompete = challengeRepository.findById(challengeId);
        if (challengeToCompete.isPresent()) {
            Challenge challenge = challengeToCompete.get();
            if (challenge.getChallengeState() == ChallengeState.OPEN) {
                Fitnessuser fitnessuser1 = fitnessuserRepository.findFirstByEmail(fitnessuserEmail1);
                Fitnessuser fitnessuser2 = fitnessuserRepository.findFirstByEmail(fitnessuserEmail2);
                if (fitnessuser1 != null && fitnessuser2 != null) {
                    challenge.setFitnessuserId1(fitnessuser1.getId());
                    challenge.setFitnessuserId2(fitnessuser2.getId());
                    challenge.setChallengeState(ChallengeState.RUNNING);
                    challengeRepository.save(challenge);
                    return Optional.of(challenge);
                }
            }
        }
        return Optional.empty();
    }
}