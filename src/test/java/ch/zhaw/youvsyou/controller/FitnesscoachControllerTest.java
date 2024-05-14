package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

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

import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.FitnesscoachCreateDTO;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
public class FitnesscoachControllerTest {
    @Autowired
    private MockMvc mvc;

    @Autowired
    FitnesscoachRepository fitnesscoachRepository;

    private static ObjectMapper mapper = new ObjectMapper();
    private static ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

    @BeforeEach
    void setup() {
        fitnesscoachRepository.deleteAll();
    }

    @Test
    @WithMockUser
    void testCreateFitnesscoach() throws Exception {
        FitnesscoachCreateDTO fitnesscoachDTO = new FitnesscoachCreateDTO("coach@fitness.com", "Test Coach");
        String jsonBody = ow.writeValueAsString(fitnesscoachDTO);

        mvc.perform(post("/api/fitnesscoach")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.email").value("coach@fitness.com"))
                .andExpect(jsonPath("$.name").value("Test Coach"));
    }

    @Test
    @WithMockUser
    void testGetAllFitnesscoach() throws Exception {
        Fitnesscoach fitnesscoach1 = new Fitnesscoach("coach1@fitness.com", "Coach One");
        Fitnesscoach fitnesscoach2 = new Fitnesscoach("coach2@fitness.com", "Coach Two");
        fitnesscoachRepository.saveAll(List.of(fitnesscoach1, fitnesscoach2));

        mvc.perform(get("/api/fitnesscoach")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].email").value("coach1@fitness.com"))
                .andExpect(jsonPath("$[1].email").value("coach2@fitness.com"));
    }

    @Test
    @WithMockUser
    void testGetFitnesscoachById() throws Exception {
        Fitnesscoach fitnesscoach = new Fitnesscoach("coach3@fitness.com", "Coach Three");
        fitnesscoachRepository.save(fitnesscoach);

        mvc.perform(get("/api/fitnesscoach/{id}", fitnesscoach.getId())
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("coach3@fitness.com"))
                .andExpect(jsonPath("$.name").value("Coach Three"));
    }

    @Test
    @WithMockUser
    void testGetMyFitnesscoachId() throws Exception {
        Fitnesscoach fitnesscoach = new Fitnesscoach("coach@example.com", "Coach Example");
        fitnesscoachRepository.save(fitnesscoach);

        mvc.perform(get("/api/me/fitnesscoach")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("coach@example.com"))
                .andExpect(jsonPath("$.name").value("Coach Example"));
    }

}
