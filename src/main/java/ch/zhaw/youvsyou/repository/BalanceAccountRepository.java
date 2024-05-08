package ch.zhaw.youvsyou.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.BalanceAccount;

public interface BalanceAccountRepository extends MongoRepository<BalanceAccount, String>{
    
    Optional<BalanceAccount> findByUserEmail(String userEmail);

    BalanceAccount findFirstByUserEmail(String userEmail);

}
