package ch.zhaw.youvsyou.controller;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;

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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeCreateDTO;
import ch.zhaw.youvsyou.model.ChallengeType;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;
import ch.zhaw.youvsyou.service.ChallengeService;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ChallengeControllerTest {

        @BeforeEach
        void setup() {
                challengeRepository.deleteAll();
        }

        private static final String TEST_NAME = "Mountain Climber";
        private static final String TEST_DESCRIPTION = " ";
        private static final String TEST_STARTDATE = "09.05.2024";
        private static final String TEST_ENDDATE = "10.05.2024";
        private static final Double TEST_WAGER = 100.0;
        private static final ChallengeType TEST_CHALLENGETYPE = ChallengeType.STAMINA;
        private static final String TEST_FITNESSCOACHID = "1";
        private static final String TEST_FITNESSCENTER = "Cleverfit";
        private static ObjectMapper mapper = new ObjectMapper();
        private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

        @Autowired
        ChallengeRepository challengeRepository;

        @Autowired
        ChallengeService challengeService;

        @Autowired
        FitnessuserRepository fitnessuserRepository;

        @Autowired
        FitnesscoachRepository fitnesscoachRepository;

        @Autowired
        private MockMvc mvc;

        @Test
        void testCreateChallenge() throws Exception {
                ChallengeCreateDTO challengeDTO = new ChallengeCreateDTO();
                challengeDTO.setName(TEST_NAME);
                challengeDTO.setDescription(TEST_DESCRIPTION);
                challengeDTO.setStartDate(TEST_STARTDATE);
                challengeDTO.setEndDate(TEST_ENDDATE);
                challengeDTO.setWager(TEST_WAGER);
                challengeDTO.setChallengeType(TEST_CHALLENGETYPE);
                challengeDTO.setFitnesscoachId(TEST_FITNESSCOACHID);
                challengeDTO.setFitnesscenter(TEST_FITNESSCENTER);

                var jsonBody = ow.writeValueAsString(challengeDTO);

                mvc.perform(post("/api/challenge")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonBody)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three"))
                                .andDo(print())
                                .andExpect(status().isCreated())
                                .andExpect(jsonPath("$.name").value(TEST_NAME))
                                .andExpect(jsonPath("$.challengeType").value(TEST_CHALLENGETYPE.name()));
        }

        @Test
        @WithMockUser
        void testCreateChallenge_Failing() throws Exception {
                ChallengeCreateDTO challengeDTO = new ChallengeCreateDTO();
                challengeDTO.setName(TEST_NAME);
                challengeDTO.setDescription(TEST_DESCRIPTION);
                challengeDTO.setStartDate(TEST_STARTDATE);
                challengeDTO.setEndDate(TEST_ENDDATE);
                challengeDTO.setWager(TEST_WAGER);
                challengeDTO.setChallengeType(TEST_CHALLENGETYPE);
                challengeDTO.setFitnesscoachId(TEST_FITNESSCOACHID);
                challengeDTO.setFitnesscenter(TEST_FITNESSCENTER);

                var jsonBody = ow.writeValueAsString(challengeDTO);

                mvc.perform(post("/api/challenge")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonBody))
                                .andDo(print())
                                .andExpect(status().isForbidden());
        }

        @Test
        @WithMockUser
        void testGetAllChallenges_DefaultPagination() throws Exception {
                Challenge challenge1 = new Challenge(
                                "Marathon Training",
                                "A challenge for marathon runners.",
                                "01.09.2024",
                                "15.09.2024",
                                150.0,
                                ChallengeType.STAMINA,
                                "2002",
                                "Cleverfit");
                challengeRepository.save(challenge1);

                Challenge challenge2 = new Challenge(
                                "Weight Loss Challenge",
                                "A challenge for weight loss.",
                                "16.09.2024",
                                "30.09.2024",
                                200.0,
                                ChallengeType.WEIGTHLOSS,
                                "2002",
                                "Cleverfit");
                challengeRepository.save(challenge2);

                mvc.perform(get("/api/challenge")
                                .contentType(MediaType.APPLICATION_JSON)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.content").isArray())
                                .andExpect(jsonPath("$.content[0].id").isNotEmpty());
        }

        @Test
        @WithMockUser
        void testGetAllChallenges_WithFilters() throws Exception {
                double minWager = 50.0;
                ChallengeType challengeType = ChallengeType.STAMINA;

                mvc.perform(get("/api/challenge")
                                .contentType(MediaType.APPLICATION_JSON)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .param("min", String.valueOf(minWager))
                                .param("type", challengeType.name()))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.content").isArray())
                                .andExpect(jsonPath("$.content[*].wager", everyItem(greaterThanOrEqualTo(minWager))))
                                .andExpect(jsonPath("$.content[*].challengeType",
                                                everyItem(equalTo(challengeType.name()))));
        }

        @Test
        @WithMockUser
        void testGetChallengeById() throws Exception {
                Challenge challenge = new Challenge(
                                "Marathon Training",
                                "A challenge for marathon runners.",
                                "01.09.2024",
                                "15.09.2024",
                                150.0,
                                ChallengeType.STAMINA,
                                "2002",
                                "Cleverfit");

                challenge = challengeRepository.save(challenge);

                mvc.perform(get("/api/challenge/{id}", challenge.getId())
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.id").value(challenge.getId()))
                                .andExpect(jsonPath("$.name").value("Marathon Training"))
                                .andExpect(jsonPath("$.description").value("A challenge for marathon runners."))
                                .andExpect(jsonPath("$.wager").value(150.0))
                                .andExpect(jsonPath("$.challengeType").value(ChallengeType.STAMINA.name()))
                                .andExpect(jsonPath("$.fitnesscoachId").value("2002"));
        }

        @Test
        @WithMockUser
        void testGetChallengeById_NotFound() throws Exception {
                mvc.perform(get("/api/challenge/{id}", "123")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isNotFound());
        }

        @Test
        @WithMockUser
        void testGetChallengesByFitnessId() throws Exception {
                String fitnessCoachId = "187";

                // Challenge 1
                Challenge challenge1 = new Challenge(
                                "Weight Loss Challenge",
                                "A weight loss challenge for participants.",
                                "16.09.2024",
                                "30.09.2024",
                                200.0,
                                ChallengeType.WEIGTHLOSS,
                                fitnessCoachId,
                                "Cleverfit");
                challengeRepository.save(challenge1);

                // Challenge 2
                Challenge challenge2 = new Challenge(
                                "Strength Training Challenge",
                                "A strength training challenge for participants.",
                                "01.10.2024",
                                "31.10.2024",
                                300.0,
                                ChallengeType.POWER,
                                fitnessCoachId,
                                "Cleverfit");
                challengeRepository.save(challenge2);

                mvc.perform(get("/api/challenge/fitness/{id}", fitnessCoachId)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$[0].name").value("Weight Loss Challenge"))
                                .andExpect(jsonPath("$[0].fitnesscoachId").value(fitnessCoachId))
                                .andExpect(jsonPath("$[1].name").value("Strength Training Challenge"))
                                .andExpect(jsonPath("$[1].fitnesscoachId").value(fitnessCoachId));
        }

        @Test
        @WithMockUser
        void testGetChallengesByFitnessId_two() throws Exception {
                String fitnessCoachId = "187";

                Fitnessuser fitnessuser = new Fitnessuser("user@test.ch", "User One");
                fitnessuser.setId("987");
                fitnessuserRepository.save(fitnessuser);

                // Challenge 1
                Challenge challenge1 = new Challenge(
                                "Weight Loss Challenge",
                                "A weight loss challenge for participants.",
                                "16.09.2024",
                                "30.09.2024",
                                200.0,
                                ChallengeType.WEIGTHLOSS,
                                fitnessCoachId,
                                "Cleverfit");
                challenge1.setId("99");
                challenge1.setFitnessuserId1(fitnessuser.getId());
                challenge1.setFitnessuserEmail1(fitnessuser.getEmail());
                challengeRepository.save(challenge1);

                Challenge challenge2 = new Challenge(
                                "Strength Training Challenge",
                                "A strength training challenge for participants.",
                                "01.10.2024",
                                "31.10.2024",
                                300.0,
                                ChallengeType.POWER,
                                fitnessCoachId,
                                "Cleverfit");
                challengeRepository.save(challenge2);

                mvc.perform(get("/api/challenge/fitness/{id}", fitnessuser.getId())
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$[0].name").value("Weight Loss Challenge"))
                                .andExpect(jsonPath("$[0].fitnesscoachId").value(fitnessCoachId))
                                .andExpect(jsonPath("$[0].fitnessuserId1").value(fitnessuser.getId()))
                                .andExpect(jsonPath("$[0].fitnessuserEmail1").value(fitnessuser.getEmail()));
        }

        @Test
        @WithMockUser
        void testGetChallengesByFitnessId_NotFound() throws Exception {
                String fitnessCoachId = "2222";
                mvc.perform(get("/api/challenge/fitness/{id}", fitnessCoachId)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isNotFound());
        }

        @Test
        @WithMockUser
        void testGetChallengesByFitnessId_User1() throws Exception {
                String fitnessCoachId = "187";
                String fitnessuserId = "987";

                // Challenge 1
                Challenge challenge1 = new Challenge(
                                "Weight Loss Challenge",
                                "A weight loss challenge for participants.",
                                "16.09.2024",
                                "30.09.2024",
                                200.0,
                                ChallengeType.WEIGTHLOSS,
                                fitnessCoachId,
                                "Cleverfit");
                challenge1.setFitnessuserId1(fitnessuserId);
                challengeRepository.save(challenge1);

                // Challenge 2
                Challenge challenge2 = new Challenge(
                                "Strength Training Challenge",
                                "A strength training challenge for participants.",
                                "01.10.2024",
                                "31.10.2024",
                                300.0,
                                ChallengeType.POWER,
                                fitnessCoachId,
                                "Cleverfit");
                challengeRepository.save(challenge2);

                mvc.perform(get("/api/challenge/fitness/{id}", fitnessuserId)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$[0].name").value("Weight Loss Challenge"))
                                .andExpect(jsonPath("$[0].fitnessuserId1").value(fitnessuserId));
        }

        @Test
        @WithMockUser
        void testGetChallengesByFitnessId_User2() throws Exception {
                String fitnessCoachId = "187";
                String fitnessuserId = "987";

                // Challenge 1
                Challenge challenge1 = new Challenge(
                                "Weight Loss Challenge",
                                "A weight loss challenge for participants.",
                                "16.09.2024",
                                "30.09.2024",
                                200.0,
                                ChallengeType.WEIGTHLOSS,
                                fitnessCoachId,
                                "Cleverfit");
                challenge1.setFitnessuserId2(fitnessuserId);
                challengeRepository.save(challenge1);

                // Challenge 2
                Challenge challenge2 = new Challenge(
                                "Strength Training Challenge",
                                "A strength training challenge for participants.",
                                "01.10.2024",
                                "31.10.2024",
                                300.0,
                                ChallengeType.POWER,
                                fitnessCoachId,
                                "Cleverfit");
                challengeRepository.save(challenge2);

                mvc.perform(get("/api/challenge/fitness/{id}", fitnessuserId)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_two")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$[0].name").value("Weight Loss Challenge"))
                                .andExpect(jsonPath("$[0].fitnessuserId2").value(fitnessuserId));
        }

        @Test
        void testDeleteChallenge() throws Exception {
                Challenge challenge = new Challenge(
                                "Marathon Training",
                                "A challenge for marathon runners.",
                                "01.09.2024",
                                "15.09.2024",
                                150.0,
                                ChallengeType.STAMINA,
                                "2002",
                                "Cleverfit");
                challenge = challengeRepository.save(challenge);

                Fitnesscoach fitnesscoach = new Fitnesscoach("coach@test.ch", "Coach One");
                fitnesscoach.setId("2002");
                fitnesscoachRepository.save(fitnesscoach);

                mvc.perform(delete("/api/challenge/" + fitnesscoach.getId() + "/" + challenge.getId())
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$.id").value(challenge.getId()));
        }

        @Test
        void testDeleteChallenge_NotFound() throws Exception {
                mvc.perform(delete("/api/challenge/2002/123")
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isNotFound());
        }
}