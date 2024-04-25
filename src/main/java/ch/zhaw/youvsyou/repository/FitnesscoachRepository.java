package ch.zhaw.youvsyou.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Fitnesscoach;

public interface FitnesscoachRepository extends MongoRepository<Fitnesscoach, String>{
    Fitnesscoach findFirstByEmail(String email);
    
    Optional<Fitnesscoach> findByEmail(String email);
}
