package ch.zhaw.youvsyou.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.model.BalanceAccount.Transaction;
import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeState;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;
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

    @Autowired
    BalanceAccountRepository balanceAccountRepository;

    /*
     * ALTE FUNKTIONIERENDE FUNKTION
     * public Optional<Challenge> competeChallenge(String challengeId, String
     * fitnessuserEmail) {
     * Optional<Challenge> challengeToCompete =
     * challengeRepository.findById(challengeId);
     * if (challengeToCompete.isPresent()) {
     * Challenge challenge = challengeToCompete.get();
     * if (challenge.getChallengeState() == ChallengeState.OPEN) {
     * Fitnessuser fitnessuser1 =
     * fitnessuserRepository.findFirstByEmail(fitnessuserEmail);
     * if (fitnessuser1 != null) {
     * challenge.setFitnessuserId1(fitnessuser1.getId());
     * challenge.setChallengeState(ChallengeState.WAITING);
     * challengeRepository.save(challenge);
     * return Optional.of(challenge);
     * }
     * }
     * if (challenge.getChallengeState() == ChallengeState.WAITING) {
     * Fitnessuser fitnessuser2 =
     * fitnessuserRepository.findFirstByEmail(fitnessuserEmail);
     * if (fitnessuser2 != null) {
     * challenge.setFitnessuserId2(fitnessuser2.getId());
     * challenge.setChallengeState(ChallengeState.RUNNING);
     * challengeRepository.save(challenge);
     * return Optional.of(challenge);
     * }
     * }
     * }
     * return Optional.empty();
     * }
     */

    public Optional<Challenge> finishChallenge(String challengeId, String fitnesscoachEmail) {
        Optional<Challenge> challengeToFinish = challengeRepository.findById(challengeId);
        if (challengeToFinish.isPresent()) {
            Challenge challenge = challengeToFinish.get();
            if (challenge.getChallengeState() == ChallengeState.RUNNING) {
                Fitnesscoach fitnesscoach = fitnesscoachRepository.findFirstByEmail(fitnesscoachEmail); // eigentlich
                                                                                                        // ein
                                                                                                        // fitnesscoach
                if (fitnesscoach != null && fitnesscoach.getId().equals(challenge.getFitnesscoachId())) {
                    challenge.setChallengeState(ChallengeState.FINISHED);
                    challengeRepository.save(challenge);
                    return Optional.of(challenge);
                }
            }
        }
        return Optional.empty();
    }

    /*
     * public Optional<Challenge> transferMoneyToChallenge(String toChallengeId,
     * String userEmail) {
     * Optional<BalanceAccount> fromAccount =
     * balanceAccountRepository.findByUserEmail(userEmail);
     * Optional<Challenge> toChallenge =
     * challengeRepository.findById(toChallengeId);
     * if (fromAccount.isPresent() && toChallenge.isPresent()) {
     * BalanceAccount account = fromAccount.get();
     * Challenge challenge = toChallenge.get();
     * double wager = challenge.getWager();
     * double oneWager = (wager / 2);
     * account.setBalance(account.getBalance() - oneWager);
     * balanceAccountRepository.save(account);
     * challenge.setBalance(challenge.getBalance() + oneWager);
     * challengeRepository.save(challenge);
     * return Optional.of(challenge);
     * }
     * return Optional.empty();
     * }
     */

    public Optional<Challenge> competeInAndFinanceChallenge(String challengeId, String userEmail) {
        Optional<Challenge> challengeToCompete = challengeRepository.findById(challengeId);
        BalanceAccount fromAccount = balanceAccountRepository.findFirstByUserEmail(userEmail);
        if (challengeToCompete.isPresent()) {
            Challenge challenge = challengeToCompete.get();
            Double oneWager = challenge.getWager() / 2;
            if (challenge.getChallengeState() == ChallengeState.OPEN) {
                Fitnessuser fitnessuser1 = fitnessuserRepository.findFirstByEmail(userEmail);
                if (fitnessuser1 != null) {
                    challenge.setFitnessuserId1(fitnessuser1.getId());
                    challenge.setChallengeState(ChallengeState.WAITING);
                    challenge.setBalance(oneWager);
                    fromAccount.setBalance(fromAccount.getBalance() - oneWager);
                    Transaction transaction = new Transaction();
                    transaction.setAmount(oneWager);
                    transaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                    transaction.setDescription("Challenge wager from challenge: " + challenge.getName());
                    fromAccount.getTransactions().add(transaction);
                    challengeRepository.save(challenge);
                    balanceAccountRepository.save(fromAccount);
                    return Optional.of(challenge);
                }
            }
            if (challenge.getChallengeState() == ChallengeState.WAITING) {
                Fitnessuser fitnessuser2 = fitnessuserRepository.findFirstByEmail(userEmail);
                if (fitnessuser2 != null) {
                    challenge.setFitnessuserId2(fitnessuser2.getId());
                    challenge.setChallengeState(ChallengeState.RUNNING);
                    challenge.setBalance(oneWager);
                    fromAccount.setBalance(fromAccount.getBalance() - oneWager);
                    Transaction transaction = new Transaction();
                    transaction.setAmount(oneWager);
                    transaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                    transaction.setDescription("Challenge wager from challenge: " + challenge.getName());
                    fromAccount.getTransactions().add(transaction);
                    challengeRepository.save(challenge);
                    balanceAccountRepository.save(fromAccount);
                    return Optional.of(challenge);
                }
            }
        }
        return Optional.empty();
    }

    /*
     * public Optional<Challenge> competeAndTransfer(String challengeId, String
     * userEmail) {
     * Optional<Challenge> competedChallenge = competeChallenge(challengeId,
     * userEmail);
     * if (!competedChallenge.isPresent()) {
     * return Optional.empty();
     * }
     * Optional<Challenge> challengeAfterTransfer =
     * transferMoneyToChallenge(challengeId, userEmail);
     * if (!challengeAfterTransfer.isPresent()) {
     * return Optional.empty();
     * }
     * return challengeAfterTransfer;
     * }
     */
}