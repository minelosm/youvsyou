package ch.zhaw.youvsyou.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.zhaw.youvsyou.controller.ServiceController;
import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.model.BalanceAccount.Transaction;
import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeState;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.model.Mail;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;

@Service
public class ChallengeService {
        private static final Logger logger = LoggerFactory.getLogger(ServiceController.class);


    public ChallengeService(ChallengeRepository challengeRepository, 
                            FitnessuserRepository fitnessuserRepository, 
                            BalanceAccountRepository balanceAccountRepository,
                            FitnesscoachRepository fitnesscoachRepository) {
        this.challengeRepository = challengeRepository;
        this.fitnessuserRepository = fitnessuserRepository;
        this.balanceAccountRepository = balanceAccountRepository;
        this.fitnesscoachRepository = fitnesscoachRepository;
    }

    @Autowired
    ChallengeRepository challengeRepository;

    @Autowired
    FitnessuserRepository fitnessuserRepository;

    @Autowired
    FitnesscoachRepository fitnesscoachRepository;

    @Autowired
    BalanceAccountRepository balanceAccountRepository;

    @Autowired
    MailService mailService;

    public Optional<Challenge> finishChallenge(String challengeId, String fitnesscoachEmail, String winnerEmail) {
        Optional<Challenge> challengeToFinish = challengeRepository.findById(challengeId);
        BalanceAccount coachAccount = balanceAccountRepository.findFirstByUserEmail(fitnesscoachEmail);
        BalanceAccount winnerAccount = balanceAccountRepository.findFirstByUserEmail(winnerEmail);
        BalanceAccount platform = balanceAccountRepository.findFirstByUserEmail("admin@youvsyou.ch");
        if (challengeToFinish.isPresent()) {    
            Challenge challenge = challengeToFinish.get();
            if (challenge.getChallengeState() == ChallengeState.RUNNING) {
                Fitnesscoach fitnesscoach = fitnesscoachRepository.findFirstByEmail(fitnesscoachEmail);
                if (fitnesscoach != null && fitnesscoach.getId().equals(challenge.getFitnesscoachId())) {
                    challenge.setChallengeState(ChallengeState.FINISHED);
                    double totalWager = challenge.getBalance();
                    double winnerWager = totalWager * 0.8;
                    double coachWager = totalWager * 0.15;
                    double platformWager = totalWager * 0.05;
                    Transaction winnerTransaction = new Transaction();
                    Mail mail = new Mail();
                    mail.setTo(winnerEmail);
                    mail.setSubject("Challenge " + challenge.getName() + " is now finished");
                    mail.setMessage("Hi, the challenge " + challenge.getName() + " is now finished. You can check the challenge by clicking on the following link: http://localhost:8080/challenge/" + challenge.getId());
                    if(challenge.getFitnessuserEmail1().equals(winnerEmail)) {
                        mail.setTo(challenge.getFitnessuserEmail2());
                        mail.setSubject("Challenge " + challenge.getName() + " is now finished");
                        mail.setMessage("Hi, the challenge " + challenge.getName() + " is now finished. You can check the challenge by clicking on the following link: http://localhost:8080/challenge/" + challenge.getId());
                    }
                    winnerAccount.setBalance(winnerAccount.getBalance() + winnerWager);
                    winnerTransaction.setAmount(winnerWager);
                    winnerTransaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                    winnerTransaction.setDescription("Challenge win from challenge: " + challenge.getName());
                    winnerAccount.getTransactions().add(winnerTransaction);
                    Transaction coachTransaction = new Transaction();
                    coachAccount.setBalance(coachAccount.getBalance() + coachWager);
                    coachTransaction.setAmount(coachWager);
                    coachTransaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                    coachTransaction.setDescription("Challenge coach fee from challenge: " + challenge.getName());
                    coachAccount.getTransactions().add(coachTransaction);
                    Transaction platformTransaction = new Transaction();
                    platform.setBalance(platformWager);
                    platformTransaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                    platformTransaction.setDescription("Challenge platform fee from challenge: " + challenge.getName());
                    platformTransaction.setAmount(platformWager);
                    platform.getTransactions().add(platformTransaction);
                    challenge.setBalance(0.0);
                    challengeRepository.save(challenge);
                    balanceAccountRepository.save(winnerAccount);
                    balanceAccountRepository.save(coachAccount);
                    balanceAccountRepository.save(platform);
                    return Optional.of(challenge);
                }
            }
        }
        return Optional.empty();
    }

    public Optional<Challenge> competeInAndFinanceChallenge(String challengeId, String userEmail) {
        Optional<Challenge> challengeToCompete = challengeRepository.findById(challengeId);
        BalanceAccount fromAccount = balanceAccountRepository.findFirstByUserEmail(userEmail);
        Mail mail = new Mail();
        if (challengeToCompete.isPresent()) {
            Challenge challenge = challengeToCompete.get();
            Double oneWager = challenge.getWager() / 2;
            if (challenge.getChallengeState() == ChallengeState.OPEN) {
                Fitnessuser fitnessuser1 = fitnessuserRepository.findFirstByEmail(userEmail);
                if (fitnessuser1 != null && fromAccount.getBalance() >= oneWager){
                    challenge.setFitnessuserId1(fitnessuser1.getId());
                    challenge.setFitnessuserEmail1(userEmail);
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
                    mail.setTo(challenge.getFitnessuserEmail1());
                    mail.setSubject("Challenge " + challenge.getName() + " is now waiting for a competitor.");
                    mail.setMessage("Hi, the challenge " + challenge.getName() + "is now waiting for a competitor. You can join the challenge by clicking on the following link: http://localhost:8080/challenge/"
                    + challenge.getId() + ". Your new Balance is: " + fromAccount.getBalance() + " CHF.");
                    boolean mailSent = mailService.sendMail(mail);
                    if (mailSent) {
                        System.out.println("Mail sent to " + challenge.getFitnessuserEmail1());
                    } else {
                        System.out.println("Mail not sent");
                    }
                    return Optional.of(challenge);
                }
            }
            if (challenge.getChallengeState() == ChallengeState.WAITING) {
                Fitnessuser fitnessuser2 = fitnessuserRepository.findFirstByEmail(userEmail);
                if (fitnessuser2 != null && fromAccount.getBalance() >= oneWager){
                    mail.setTo(challenge.getFitnessuserEmail2());
                    mail.setSubject("Challenge " + challenge.getName() + " is now running");
                    mail.setMessage("Hi, the challenge " + challenge.getName() + " is now running. You can check the challenge by clicking on the following link: http://localhost:8080/challenge/" + challenge.getId());
                    challenge.setFitnessuserId2(fitnessuser2.getId());
                    challenge.setFitnessuserEmail2(userEmail);
                    challenge.setChallengeState(ChallengeState.RUNNING);
                    challenge.setBalance(challenge.getBalance() + oneWager);
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
}