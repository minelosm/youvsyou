package ch.zhaw.youvsyou.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Fitnesscoach;

public interface FitnesscoachRepository extends MongoRepository<Fitnesscoach, String>{
    
}
