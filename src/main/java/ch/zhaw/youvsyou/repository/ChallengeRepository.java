package ch.zhaw.youvsyou.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeType;


public interface ChallengeRepository extends MongoRepository<Challenge, String>{
    List<Challenge> findByWagerGreaterThan(Double wager);
    List<Challenge> findByChallengeType(ChallengeType type);
    
}
