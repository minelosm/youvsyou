package ch.zhaw.youvsyou.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

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
    // Preset data
    BalanceAccount balanceAccount = new BalanceAccount("coach@example.com");
    balanceAccount.setBalance(100.0);
    balanceAccountRepository.save(balanceAccount);

    // Perform PUT request with 'amount' as a request parameter
    mvc.perform(put("/api/balance/account/add")
            .param("amount", "50")  // Send 'amount' as a parameter
            .header(HttpHeaders.AUTHORIZATION, "Bearer token")
            .contentType(MediaType.APPLICATION_JSON))  // Ensure content type is still set for other parts of the context
        .andDo(print())
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.balance").value(150.0));  // Check if the balance has been correctly updated
}

}
