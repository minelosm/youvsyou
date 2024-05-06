package ch.zhaw.youvsyou.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;
import ch.zhaw.youvsyou.service.AuthService;
import ch.zhaw.youvsyou.service.BalanceAccountService;

@RestController
@RequestMapping("api/balance")
public class BalanceAccountController {

    @Autowired
    BalanceAccountService BalanceAccountService;

    @Autowired
    BalanceAccountRepository balanceAccountRepository;

    @Autowired  
    AuthService authService;

    @PutMapping("/account/add")
    public ResponseEntity<BalanceAccount> addBalance(@RequestParam Double amount, @AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Optional<BalanceAccount> balanceAccount = BalanceAccountService.plusBalance(amount, userEmail);
        if (balanceAccount.isPresent()) {
            return new ResponseEntity<>(balanceAccount.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/account/myinfo")
    public ResponseEntity<BalanceAccount> getMyInfo(@AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Optional<BalanceAccount> balanceAccount = balanceAccountRepository.findByUserEmail(userEmail);
        if(balanceAccount.isPresent()) {
            return new ResponseEntity<>(balanceAccount.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
