package ch.zhaw.youvsyou.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeState;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;

@Service
public class ChallengeService {

    @Autowired
    ChallengeRepository challengeRepository;

    @Autowired
    FitnessuserRepository fitnessuserRepository;

    @Autowired
    FitnesscoachRepository fitnesscoachRepository;

    public Optional<Challenge> competeChallenge(String challengeId, String fitnessuserEmail) {
        Optional<Challenge> challengeToCompete = challengeRepository.findById(challengeId);
        if (challengeToCompete.isPresent()) {
            Challenge challenge = challengeToCompete.get();
            if (challenge.getChallengeState() == ChallengeState.OPEN) {
                Fitnessuser fitnessuser1 = fitnessuserRepository.findFirstByEmail(fitnessuserEmail);
                if (fitnessuser1 != null) {
                    challenge.setFitnessuserId1(fitnessuser1.getId());
                    challenge.setChallengeState(ChallengeState.WAITING);
                    challengeRepository.save(challenge);
                    return Optional.of(challenge);
                }
            } if (challenge.getChallengeState() == ChallengeState.WAITING) {
                Fitnessuser fitnessuser2 = fitnessuserRepository.findFirstByEmail(fitnessuserEmail);
                if (fitnessuser2 != null) {
                    challenge.setFitnessuserId2(fitnessuser2.getId());
                    challenge.setChallengeState(ChallengeState.RUNNING);
                    challengeRepository.save(challenge);
                    return Optional.of(challenge);
                }
            }
        }
        return Optional.empty();
    }


    public Optional<Challenge> finishChallenge(String challengeId, String fitnesscoachEmail) {
        Optional<Challenge> challengeToFinish = challengeRepository.findById(challengeId);
        if (challengeToFinish.isPresent()) {
            Challenge challenge = challengeToFinish.get();
            if (challenge.getChallengeState() == ChallengeState.RUNNING) {
                Fitnessuser fitnessuser = fitnessuserRepository.findFirstByEmail(fitnesscoachEmail); //eigentlich ein fitnesscoach
                if (fitnessuser != null && fitnessuser.getId().equals(challenge.getFitnesscoachId())) {
                    challenge.setChallengeState(ChallengeState.FINISHED);
                    challengeRepository.save(challenge);
                    return Optional.of(challenge);
                }
            }
        }
        return Optional.empty();
    }


    /*
    // Method to define conditions for competing challenges
    private boolean meetChallengeConditions(Challenge challenge, Fitnessuser user1, Fitnessuser user2) {
        // Example condition: Only allow competing if both users have a certain fitness level
        // Add your specific conditions here
        // For example:
        // return user1.getFitnessLevel() >= challenge.getMinFitnessLevel() && user2.getFitnessLevel() >= challenge.getMinFitnessLevel();
        return true; // For demonstration purposes, always return true
    }

    // Method to define conditions for finishing challenges
    private boolean meetFinishConditions(Challenge challenge) {
        // Example condition: Only allow finishing if challenge duration has passed
        // Add your specific conditions here
        // For example:
        // return challenge.getEndDate().isBeforeNow();
        return true; // For demonstration purposes, always return true
    }
    */
}