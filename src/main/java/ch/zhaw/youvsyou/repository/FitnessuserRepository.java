package ch.zhaw.youvsyou.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Fitnessuser;

public interface FitnessuserRepository extends MongoRepository<Fitnessuser, String>{
    Fitnessuser findFirstByEmail(String email);
}
