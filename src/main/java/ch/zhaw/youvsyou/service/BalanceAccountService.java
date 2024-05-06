package ch.zhaw.youvsyou.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ch.zhaw.youvsyou.model.BalanceAccount;
import ch.zhaw.youvsyou.model.BalanceAccount.Transaction;
import ch.zhaw.youvsyou.repository.BalanceAccountRepository;

@Service
public class BalanceAccountService {

    @Autowired
    BalanceAccountRepository balanceAccountRepository;

    @Autowired
    AuthService authService;
    
    public Optional<BalanceAccount> plusBalance(double amount, String userEmail) {
        Optional<BalanceAccount> balanceAccount = balanceAccountRepository.findByUserEmail(userEmail);
        if (balanceAccount.isPresent()) {
            BalanceAccount account = balanceAccount.get();
            if (account.getBalance() == null) {
                double start = 0.0;
                account.setBalance(start + amount);
                Transaction transaction = new Transaction();
                transaction.setAmount(amount);
                transaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                transaction.setDescription("Initial deposit");
                account.getTransactions().add(transaction);
                balanceAccountRepository.save(account);
                return Optional.of(account);
            } else {
                account.setBalance(account.getBalance() + amount);
                Transaction transaction = new Transaction();
                transaction.setAmount(amount);
                transaction.setTransactionDate(LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
                transaction.setDescription("Initial deposit");
                account.getTransactions().add(transaction);
                balanceAccountRepository.save(account);
                return Optional.of(account);
            }
        }
        return Optional.empty();
    }
}
