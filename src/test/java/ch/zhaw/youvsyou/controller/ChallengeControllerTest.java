package ch.zhaw.youvsyou.controller;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ChallengeControllerTest {

        private static final String TEST_NAME = "MOUNTAIN WALKING";
        private static final String TEST_DESCRIPTION = " ";
        private static final String TEST_STARTDATE = "09.05.2024";
        private static final String TEST_ENDDATE = "10.05.2024";
        private static final Double TEST_WAGER = 100.0;
        private static final ChallengeType TEST_CHALLENGETYPE = ChallengeType.STAMINA;
        private static final String TEST_FITNESSCOACHID = "1";
        private static ObjectMapper mapper = new ObjectMapper();
        private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

        @Autowired
        ChallengeRepository challengeRepository;

        @Autowired
        private MockMvc mvc;

        @Test
        @WithMockUser
        void testCreateChallenge() throws Exception {
                ChallengeCreateDTO challengeDTO = new ChallengeCreateDTO();
                challengeDTO.setName(TEST_NAME);
                challengeDTO.setDescription(TEST_DESCRIPTION);
                challengeDTO.setStartDate(TEST_STARTDATE);
                challengeDTO.setEndDate(TEST_ENDDATE);
                challengeDTO.setWager(TEST_WAGER);
                challengeDTO.setChallengeType(TEST_CHALLENGETYPE);
                challengeDTO.setFitnesscoachId(TEST_FITNESSCOACHID);

                var jsonBody = ow.writeValueAsString(challengeDTO);

                mvc.perform(post("/api/challenge")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(jsonBody)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")) // Mocked token is sufficient
                                .andDo(print())
                                .andExpect(status().isCreated())
                                .andExpect(jsonPath("$.name").value(TEST_NAME))
                                .andExpect(jsonPath("$.challengeType").value(TEST_CHALLENGETYPE.name()));
        }

        @Test
        @WithMockUser
        void testGetAllChallenges_DefaultPagination() throws Exception {
                mvc.perform(get("/api/challenge")
                                .contentType(MediaType.APPLICATION_JSON)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")) // Simulated authorization
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
                                "2002"
                );

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
                                fitnessCoachId);
                challengeRepository.save(challenge1);

                // Challenge 2
                Challenge challenge2 = new Challenge(
                                "Strength Training Challenge",
                                "A strength training challenge for participants.",
                                "01.10.2024",
                                "31.10.2024",
                                300.0,
                                ChallengeType.POWER,
                                fitnessCoachId);
                challengeRepository.save(challenge2);

                mvc.perform(get("/api/challenge/fitness/{id}", fitnessCoachId)
                                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                                .contentType(MediaType.APPLICATION_JSON))
                                .andDo(print())
                                .andExpect(status().isOk())
                                .andExpect(jsonPath("$[0].name").value("Weight Loss Challenge"))
                                .andExpect(jsonPath("$[0].fitnesscoachId").value(fitnessCoachId))
                                .andExpect(jsonPath("$[1].name").value("Strength Training Challenge"))
                                .andExpect(jsonPath("$[1].fitnesscoachId").value(fitnessCoachId));
        }

}
