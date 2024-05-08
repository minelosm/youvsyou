package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.model.ChallengeType;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ServiceControllerTest {

    private static final String TEST_EMAIL = "user@example.com";
    private static final String TEST_COACH_EMAIL = "coach@example.com";
    private static final String TEST_CHALLENGE_ID = "testChallenge";
    private static final String TEST_NAME = "Test Name";
    private static final String TEST_BIRTHDATE = "2000-01-01";
    private static final String TEST_HEIGHT = "175";
    private static final String TEST_WEIGHT = "70";

    @Autowired
    private MockMvc mvc;

    @Autowired
    FitnesscoachRepository fitnesscoachRepository;

    @Autowired
    FitnessuserRepository fitnessuserRepository;

    @Autowired
    ChallengeRepository challengeRepository;

    @BeforeEach
    void setUp() {
        fitnesscoachRepository.deleteAll();
        fitnessuserRepository.deleteAll();
        challengeRepository.deleteAll();

        Fitnesscoach fitnesscoach = new Fitnesscoach(TEST_COACH_EMAIL, "Coach Name");
        fitnesscoachRepository.save(fitnesscoach);

        Fitnessuser fitnessuser = new Fitnessuser(TEST_EMAIL, TEST_NAME);
        fitnessuser.setBirthDate(TEST_BIRTHDATE);
        fitnessuser.setHeight(TEST_HEIGHT);
        fitnessuser.setWeight(TEST_WEIGHT);
        fitnessuserRepository.save(fitnessuser);

        Challenge challenge = new Challenge("Challenge Name", "Description", "2024-05-08", "2024-06-08", 50.0, ChallengeType.STAMINA, fitnesscoach.getId());
        challenge.setId(TEST_CHALLENGE_ID);
        challengeRepository.save(challenge);
    }

    @Test
    @WithMockUser(username = "user@example.com", roles = {"fitnessuser"})
    void testAssignToMe() throws Exception {
        mvc.perform(put("/api/service/me/competechallenge")
                .param("challengeId", TEST_CHALLENGE_ID)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(TEST_CHALLENGE_ID))
                .andExpect(jsonPath("$.fitnessuserId1").exists());
    }

    @Test
    @WithMockUser(username = "coach@example.com", roles = {"fitnesscoach"})
    void testFinishChallenge() throws Exception {
        mvc.perform(put("/api/service/finishchallenge")
                .param("challengeId", TEST_CHALLENGE_ID)
                .param("winner", TEST_EMAIL)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(TEST_CHALLENGE_ID))
                .andExpect(jsonPath("$.challengeState").value("FINISHED"));
    }

    @Test
    @WithMockUser(username = "coach@example.com", roles = {"fitnesscoach"})
    void testGetMyInfo_Fitnesscoach() throws Exception {
        mvc.perform(get("/api/service/me/myinfo")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value(TEST_COACH_EMAIL));
    }

    @Test
    @WithMockUser(username = "user@example.com", roles = {"fitnessuser"})
    void testGetMyInfo_Fitnessuser() throws Exception {
        mvc.perform(get("/api/service/me/myinfo")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value(TEST_EMAIL));
    }
}
