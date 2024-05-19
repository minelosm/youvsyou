package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
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
        FitnesscoachCreateDTO fitnesscoachDTO = new FitnesscoachCreateDTO("coach@test.ch", "Test Coach");
        String jsonBody = ow.writeValueAsString(fitnesscoachDTO);

        mvc.perform(post("/api/fitnesscoach")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three"))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.email").value("coach@test.ch"))
                .andExpect(jsonPath("$.name").value("Test Coach"));
    }

    @Test
    @WithMockUser
    void testGetAllFitnesscoach() throws Exception {
        Fitnesscoach fitnesscoach1 = new Fitnesscoach("coach1@test.ch", "Coach One");
        Fitnesscoach fitnesscoach2 = new Fitnesscoach("coach2@test.ch", "Coach Two");
        fitnesscoachRepository.saveAll(List.of(fitnesscoach1, fitnesscoach2));

        mvc.perform(get("/api/fitnesscoach")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].email").value("coach1@test.ch"))
                .andExpect(jsonPath("$[1].email").value("coach2@test.ch"));
    }

    @Test
    @WithMockUser
    void testGetFitnesscoachById() throws Exception {
        Fitnesscoach fitnesscoach = new Fitnesscoach("coach@test.ch", "Coach Three");
        fitnesscoachRepository.save(fitnesscoach);

        mvc.perform(get("/api/fitnesscoach/{id}", fitnesscoach.getId())
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("coach@test.ch"))
                .andExpect(jsonPath("$.name").value("Coach Three"));
    }

    @Test
    @WithMockUser
    void testGetFitnesscoachById_notFound() throws Exception {
        mvc.perform(get("/api/fitnesscoach/{id}", "998877")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    @WithMockUser
    void testGetMyFitnesscoachId() throws Exception {
        Fitnesscoach fitnesscoach = new Fitnesscoach("coach@test.ch", "Coach Myself");
        fitnesscoachRepository.save(fitnesscoach);

        mvc.perform(get("/api/me/fitnesscoach")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("coach@test.ch"))
                .andExpect(jsonPath("$.name").value("Coach Myself"));
    }

    @Test
    @WithMockUser
    void testGetMyFitnesscoachId_notFound() throws Exception {
        mvc.perform(get("/api/me/fitnesscoach")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    @WithMockUser
    void testPutAccountDetails() throws Exception {
        String coachEmail = "coach@test.ch";

        Fitnesscoach fitnesscoach = new Fitnesscoach(coachEmail, "Coach Example");
        fitnesscoachRepository.save(fitnesscoach);

        Fitnesscoach updatedFitnesscoach = new Fitnesscoach();
        updatedFitnesscoach.setEmail(coachEmail);
        updatedFitnesscoach.setName("Coach Example");
        updatedFitnesscoach.setFitnesscenter("Cleverfit");

        String jsonBody = ow.writeValueAsString(updatedFitnesscoach);

        mvc.perform(put("/api/fitnesscoach/edit/{email}", "coach@test.ch")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("coach@test.ch"))
                .andExpect(jsonPath("$.fitnesscenter").value("Cleverfit"));
    }

    @Test
    @WithMockUser
    void testPutAccountDetails_notFound() throws Exception {
        Fitnesscoach updatedFitnesscoach = new Fitnesscoach();
        updatedFitnesscoach.setEmail("coach@test.ch");
        updatedFitnesscoach.setName("Coach Example");

        String jsonBody = ow.writeValueAsString(updatedFitnesscoach);

        mvc.perform(put("/api/fitnesscoach/edit/{email}", "coach@test.ch")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody))
                .andDo(print())
                .andExpect(status().isNotFound());
    }
}
