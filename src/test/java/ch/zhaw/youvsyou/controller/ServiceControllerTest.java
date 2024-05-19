package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeType;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;
import ch.zhaw.youvsyou.service.ChallengeService;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ServiceControllerTest {

        @Autowired
        FitnesscoachRepository fitnesscoachRepository;

        @Autowired
        ChallengeService challengeService;

        @Autowired
        ChallengeRepository challengeRepository;

        @Autowired
        FitnessuserRepository fitnessuserRepository;

        @Autowired
        BalanceAccountRepository balanceAccountRepository;

        @Autowired
        private MockMvc mvc;

        private static final String TEST_NAME = "Mountain Climber Challenge";
        private static final String TEST_DESCRIPTION = "";
        private static final String TEST_STARTDATE = "10.05.2024";
        private static final String TEST_ENDDATE = "15.05.2024";
        private static final Double TEST_WAGER = 100.0;
        private static final ChallengeType TEST_CHALLENGETYPE = ChallengeType.STAMINA;
        private static final String TEST_FITNESSCOACHID = "1";
        private static final String TEST_FITNESSCENTER = "Cleverfit Schaffhausen";

        @BeforeAll
        void setup() {
                challengeRepository.deleteAll();
                fitnessuserRepository.deleteAll();
                balanceAccountRepository.deleteAll();

                // Challenge 1
                Challenge challenge = new Challenge(TEST_NAME, TEST_DESCRIPTION, TEST_STARTDATE, TEST_ENDDATE,
                                TEST_WAGER,
                                TEST_CHALLENGETYPE, TEST_FITNESSCOACHID, TEST_FITNESSCENTER);
                challenge.setId("12345");
                challengeRepository.save(challenge);

                // Chalenge 2
                Challenge challenge2 = new Challenge(TEST_NAME, TEST_DESCRIPTION, TEST_STARTDATE, TEST_ENDDATE,
                                TEST_WAGER,
                                TEST_CHALLENGETYPE, TEST_FITNESSCOACHID, TEST_FITNESSCENTER);
                challenge2.setId("98765");
                challengeRepository.save(challenge2);
                challengeService.competeInAndFinanceChallenge("98765", "user@test.ch");

                // Fitnessuser
                Fitnessuser fitnessuser = new Fitnessuser("user@test.ch", "User One");
                fitnessuserRepository.save(fitnessuser);
                BalanceAccount balanceAccount = new BalanceAccount("user@test.ch");
                balanceAccount.setBalance(1000.0);
                balanceAccountRepository.save(balanceAccount);

                // Fitnessuser 2
                Fitnessuser fitnessuser2 = new Fitnessuser("user2@test.ch", "User Two");
                fitnessuserRepository.save(fitnessuser2);
                BalanceAccount balanceAccount2 = new BalanceAccount("user2@test.ch");
                balanceAccount2.setBalance(500.0);
                balanceAccountRepository.save(balanceAccount2);

                // Fitnesscoach
                Fitnesscoach fitnesscoach = new Fitnesscoach("coach@test.ch", "Coach One");
                fitnesscoach.setId("1");
                fitnesscoach.setFitnesscenter("Cleverfit Schaffhausen");
                fitnesscoachRepository.save(fitnesscoach);
                BalanceAccount balanceAccount3 = new BalanceAccount("coach@test.ch");
                balanceAccount3.setBalance(100.0);
                balanceAccountRepository.save(balanceAccount3);

                BalanceAccount balanceAccount4 = new BalanceAccount("admin@youvsyou.ch");
                balanceAccount4.setBalance(100.0);
                balanceAccountRepository.save(balanceAccount4);
        }

        @Test
        @Order(1)
        @WithMockUser
        void testassignToMe() throws Exception {
                mvc.perform(put("/api/service/me/competechallenge")
                                .param("challengeId", "12345")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.name").value(TEST_NAME))
                                .andExpect(jsonPath("$.fitnessuserEmail1").value("user@test.ch"));
        }

        @Test
        @Order(2)
        @WithMockUser
        void testassignToMe_Two() throws Exception {
                mvc.perform(put("/api/service/me/competechallenge")
                                .param("challengeId", "12345")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_two")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.name").value(TEST_NAME))
                                .andExpect(jsonPath("$.fitnessuserEmail2").value("user2@test.ch"));
        }

        @Test
        @Order(3)
        @WithMockUser
        void tesfinishChallenge_NotAllowed() throws Exception {
                mvc.perform(put("/api/service/me/finishchallenge")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isMethodNotAllowed());
        }

        @Test
        @Order(5)
        @WithMockUser
        void tesfinishChallenge_NotAllowed_Two() throws Exception {
                mvc.perform(put("/api/service/me/finishchallenge")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_two")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isMethodNotAllowed());
        }

        @Test
        @Order(6)
        @WithMockUser
        void testgetMyInfo() throws Exception {
                mvc.perform(get("/api/service/me/myinfo")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk());
        }

        @Test
        @Order(7)
        @WithMockUser
        void testgetMyInfo_Two() throws Exception {
                mvc.perform(get("/api/service/me/myinfo")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_two")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk());
        }

        @Test
        @Order(8)
        @WithMockUser
        void testgetMyInfo_Three() throws Exception {
                mvc.perform(get("/api/service/me/myinfo")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk());
        }

        @Test
        @Order(9)
        @WithMockUser
        void testfinishChallenge() throws Exception {
                mvc.perform(put("/api/service/finishchallenge")
                                .param("challengeId", "12345")
                                .param("winnerEmail", "user@test.ch")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk());
        }

        @Test
        @Order(10)
        @WithMockUser
        void testfinishChallenge_notFound() throws Exception {
                mvc.perform(put("/api/service/finishchallenge")
                                .param("challengeId", "123456")
                                .param("winnerEmail", "user@test.ch")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isNotFound());
        }
}