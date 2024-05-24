package ch.zhaw.youvsyou.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeState;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;

public class ChallengeServiceTest {

    private ChallengeService challengeService;
    private ChallengeRepository challengeRepository;
    private FitnessuserRepository fitnessuserRepository;
    private BalanceAccountRepository balanceAccountRepository;
    private FitnesscoachRepository fitnesscoachRepository;
    private MailService mailService;

    @BeforeEach
    void setUp() {
        challengeRepository = mock(ChallengeRepository.class);
        fitnessuserRepository = mock(FitnessuserRepository.class);
        fitnesscoachRepository = mock(FitnesscoachRepository.class);
        balanceAccountRepository = mock(BalanceAccountRepository.class);
        mailService = mock(MailService.class);
        challengeService = new ChallengeService(challengeRepository, fitnessuserRepository, balanceAccountRepository, fitnesscoachRepository, mailService);
    }

    @Test
    void testCompeteInAndFinanceChallenge() {
        String challengeId = "1";
        String userEmail = "user1@test.com";
        String userEmail2 = "user2@test.com";
        String challengeName = "Challenge 1";

        Challenge challenge = new Challenge();
        challenge.setId(challengeId);
        challenge.setName(challengeName);
        challenge.setWager(100.0);
        challenge.setChallengeState(ChallengeState.OPEN);

        Fitnessuser fitnessuser = new Fitnessuser();
        fitnessuser.setEmail(userEmail);
        BalanceAccount balanceAccount = new BalanceAccount();
        balanceAccount.setBalance(500.0);

        Fitnessuser fitnessuser2 = new Fitnessuser();
        fitnessuser2.setEmail(userEmail2);
        BalanceAccount balanceAccount2 = new BalanceAccount();
        balanceAccount2.setBalance(250.0);

        //TEST 1
        when(challengeRepository.findById(challengeId)).thenReturn(Optional.of(challenge));
        when(fitnessuserRepository.findFirstByEmail(userEmail)).thenReturn(fitnessuser);
        when(balanceAccountRepository.findFirstByUserEmail(userEmail)).thenReturn(balanceAccount);

        Optional<Challenge> result = challengeService.competeInAndFinanceChallenge(challengeId, userEmail);

        assertEquals(true, result.isPresent());
        assertEquals(ChallengeState.WAITING, result.get().getChallengeState());
        assertEquals(450.0, balanceAccount.getBalance());
        assertEquals(fitnessuser.getId(), result.get().getFitnessuserId1());
        assertEquals("Challenge wager from challenge: " + challengeName, balanceAccount.getTransactions().get(0).getDescription());
        assertEquals(50.0, balanceAccount.getTransactions().get(0).getAmount());

        verify(challengeRepository).save(challenge);
        verify(balanceAccountRepository).save(balanceAccount);


        //TEST 2
        challenge.setChallengeState(ChallengeState.WAITING);
        when(challengeRepository.findById(challengeId)).thenReturn(Optional.of(challenge));
        when(fitnessuserRepository.findFirstByEmail(userEmail2)).thenReturn(fitnessuser2);
        when(balanceAccountRepository.findFirstByUserEmail(userEmail2)).thenReturn(balanceAccount2);

        Optional<Challenge> result2 = challengeService.competeInAndFinanceChallenge(challengeId, userEmail2);

        assertEquals(true, result2.isPresent());
        assertEquals(ChallengeState.RUNNING, result2.get().getChallengeState());
        assertEquals(200.0, balanceAccount2.getBalance());
        assertEquals(fitnessuser2.getId(), result2.get().getFitnessuserId2());
        assertEquals("Challenge wager from challenge: " + challengeName, balanceAccount2.getTransactions().get(0).getDescription());
        assertEquals(50.0, balanceAccount2.getTransactions().get(0).getAmount());
    }


    @Test
    void testFinishChallenge() {
        String challengeId = "1";
        String coachId = "12345";
        String coachEmail = "coach@test.com";
        String winnerEmail = "winner@test.com";
        String challengeName = "Challenge 1";

        Challenge challenge = new Challenge();
        challenge.setId(challengeId);
        challenge.setName(challengeName);
        challenge.setFitnesscoachId(coachId);
        challenge.setFitnessuserEmail1(winnerEmail);
        challenge.setFitnessuserEmail2("bla@test.ch");
        challenge.setWager(100.0);
        challenge.setChallengeState(ChallengeState.RUNNING);
        challenge.setBalance(100.0);

        Fitnesscoach coach = new Fitnesscoach();
        coach.setEmail(coachEmail);
        coach.setId(coachId);


        Fitnessuser winner = new Fitnessuser();
        winner.setEmail(winnerEmail);

        BalanceAccount coachAccount = new BalanceAccount();
        coachAccount.setUserEmail(coachEmail);
        coachAccount.setBalance(120.0);

        BalanceAccount winnerAccount = new BalanceAccount();
        winnerAccount.setUserEmail(winnerEmail);
        winnerAccount.setBalance(500.0);

        BalanceAccount platformAccount = new BalanceAccount();
        platformAccount.setUserEmail("admin@youvsyou.ch");
        platformAccount.setBalance(100.0);

        when(challengeRepository.findById(challengeId)).thenReturn(Optional.of(challenge));
        when(fitnessuserRepository.findFirstByEmail(winnerEmail)).thenReturn(winner);
        when(fitnesscoachRepository.findFirstByEmail(coachEmail)).thenReturn(coach);
        when(balanceAccountRepository.findFirstByUserEmail(coachEmail)).thenReturn(coachAccount);
        when(balanceAccountRepository.findFirstByUserEmail(winnerEmail)).thenReturn(winnerAccount);
        when(balanceAccountRepository.findFirstByUserEmail("admin@youvsyou.ch")).thenReturn(platformAccount);

        Optional<Challenge> result = challengeService.finishChallenge(challengeId, coachEmail, winnerEmail);

        assertTrue(result.isPresent());
        assertEquals(ChallengeState.FINISHED, result.get().getChallengeState());
        assertEquals(580.0, winnerAccount.getBalance());
        assertEquals(135.0, coachAccount.getBalance());  
        assertEquals(5.0, platformAccount.getBalance());
        assertEquals(challenge.getBalance(), result.get().getBalance());
        assertEquals("Challenge win from challenge: " + challengeName, winnerAccount.getTransactions().get(0).getDescription());
        assertEquals(80.0, winnerAccount.getTransactions().get(0).getAmount());
        assertEquals("Challenge coach fee from challenge: " + challengeName, coachAccount.getTransactions().get(0).getDescription());
        assertEquals(15.0, coachAccount.getTransactions().get(0).getAmount());
        assertEquals("Challenge platform fee from challenge: " + challengeName, platformAccount.getTransactions().get(0).getDescription());
        assertEquals(5.0, platformAccount.getTransactions().get(0).getAmount());
    }
}
