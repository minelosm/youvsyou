package ch.zhaw.youvsyou.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeType;

public interface ChallengeRepository extends MongoRepository<Challenge, String> {
    Page<Challenge> findByWagerGreaterThan(Double wager, Pageable pageable);
    Page<Challenge> findByChallengeType(ChallengeType challengeType, Pageable pageable);
    Page<Challenge> findByChallengeTypeAndWagerGreaterThan(ChallengeType challengeType, Double wager,
            Pageable pageable);

    /*
    List<Challenge> findByWagerGreaterThan(Double wager);
    List<Challenge> findByChallengeType(ChallengeType type);
    @Aggregation("{'$group':{'_id':'$challengeState','challengeIds':{'$push':'$_id'},'count':{'$count':{}}}}")
    List<ChallengeStateAggregation> getChallengeStateAggregation();
    */
}
