package ch.zhaw.youvsyou.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Challenge;

public interface ChallengeRepository extends MongoRepository<Challenge, String>{
    
}
