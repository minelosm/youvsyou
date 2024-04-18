package ch.zhaw.youvsyou.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Fitnessuser;

public interface FitnessuserRepository extends MongoRepository<Fitnessuser, String>{
    Page<Fitnessuser> findAll(Pageable pageable);


    Fitnessuser findFirstByEmail(String email);

    Optional<Fitnessuser> findByEmail(String email);

}
