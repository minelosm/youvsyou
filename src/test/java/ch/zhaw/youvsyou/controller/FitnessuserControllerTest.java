package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.model.FitnessuserCreateDTO;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
public class FitnessuserControllerTest {

    private static final String TEST_EMAIL = "user@test.ch";
    private static final String TEST_NAME = "User One";
    private static final String TEST_BIRTHDATE = "01.01.2000";
    private static final String TEST_HEIGHT = "175";
    private static final String TEST_WEIGHT = "70";

    private static final ObjectMapper mapper = new ObjectMapper();
    private static final ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();

    @Autowired
    FitnessuserRepository fitnessuserRepository;

    @Autowired
    private MockMvc mvc;

    @BeforeEach
    void setup() {
        fitnessuserRepository.deleteAll();
    }

    @Test
    @WithMockUser
    void testCreateFitnessuser() throws Exception {
        FitnessuserCreateDTO userDTO = new FitnessuserCreateDTO(TEST_EMAIL, TEST_NAME, TEST_BIRTHDATE, TEST_HEIGHT,
                TEST_WEIGHT);
        var jsonBody = ow.writeValueAsString(userDTO);

        mvc.perform(post("/api/fitnessuser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonBody)
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.email").value(TEST_EMAIL))
                .andExpect(jsonPath("$.name").value(TEST_NAME));
    }

    @Test
    @WithMockUser
    void testGetAllFitnessuser() throws Exception {
        Fitnessuser fitnessuser = new Fitnessuser(TEST_EMAIL, TEST_NAME);
        fitnessuserRepository.save(fitnessuser);

        mvc.perform(get("/api/fitnessuser")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].email").value(TEST_EMAIL));
    }

    @Test
    @WithMockUser
    void testGetFitnessuserById() throws Exception {
        Fitnessuser fitnessuser = new Fitnessuser(TEST_EMAIL, TEST_NAME);
        fitnessuserRepository.save(fitnessuser);

        mvc.perform(get("/api/fitnessuser/{id}", fitnessuser.getId())
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value(TEST_EMAIL));
    }

    @Test
    @WithMockUser
    void testGetFitnessuserById_notFound() throws Exception {
        mvc.perform(get("/api/fitnessuser/{id}", "998877")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    @WithMockUser
    void testPutAccountDetails() throws Exception {
        Fitnessuser fitnessuser = new Fitnessuser(TEST_EMAIL, TEST_NAME);
        fitnessuserRepository.save(fitnessuser);

        Fitnessuser updatedUser = new Fitnessuser();
        updatedUser.setEmail(TEST_EMAIL);
        updatedUser.setName(TEST_NAME);
        updatedUser.setBirthDate(TEST_BIRTHDATE);
        updatedUser.setHeight(TEST_HEIGHT);
        updatedUser.setWeight(TEST_WEIGHT);

        mvc.perform(put("/api/fitnessuser/edit/{email}", TEST_EMAIL)
                .contentType(MediaType.APPLICATION_JSON)
                .content(ow.writeValueAsString(updatedUser))
                .header(HttpHeaders.AUTHORIZATION, "Bearer token"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value(TEST_EMAIL))
                .andExpect(jsonPath("$.birthDate").value(TEST_BIRTHDATE))
                .andExpect(jsonPath("$.height").value(TEST_HEIGHT))
                .andExpect(jsonPath("$.weight").value(TEST_WEIGHT));
    }
}
