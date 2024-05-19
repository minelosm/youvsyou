package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
import org.springframework.test.web.servlet.MockMvc;

import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;
import ch.zhaw.youvsyou.security.SecurityConfigTest;

@Import(SecurityConfigTest.class)
@SpringBootTest
@AutoConfigureMockMvc
public class BalanceAccountControllerTest {

    @Autowired
    BalanceAccountRepository balanceAccountRepository;

    @Autowired
    private MockMvc mvc;

    @BeforeEach
    void setUp() {
        balanceAccountRepository.deleteAll();
    }

    @Test
    void testAddBalance() throws Exception {
        BalanceAccount balanceAccount = new BalanceAccount("coach@test.ch");
        balanceAccount.setBalance(100.0);
        balanceAccountRepository.save(balanceAccount);

        mvc.perform(put("/api/balance/account/add")
                .param("amount", "50")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.balance").value(150.0))
                .andExpect(jsonPath("$.transactions[0].amount").value(50.0))
                .andExpect(jsonPath("$.transactions[0].description").value("Initial deposit"));
    }

    @Test
    void testAddBalance_failing() throws Exception {
        mvc.perform(put("/api/balance/account/add")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isBadRequest());

    }

    @Test
    void testGetMyInfo() throws Exception {
        BalanceAccount balanceAccount = new BalanceAccount("coach@test.ch");
        balanceAccount.setBalance(100.0);
        balanceAccountRepository.save(balanceAccount);
        mvc.perform(get("/api/balance/account/myinfo")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    void testGetMyInfo_failing() throws Exception {
        mvc.perform(get("/api/balance/account/myinfo")
                .header(HttpHeaders.AUTHORIZATION, "Bearer token_three")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

}
