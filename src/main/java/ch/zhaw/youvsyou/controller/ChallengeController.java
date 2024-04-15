package ch.zhaw.youvsyou.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeCreateDTO;
import ch.zhaw.youvsyou.model.ChallengeStateAggregation;
import ch.zhaw.youvsyou.model.ChallengeType;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.service.AuthService;


@RestController
@RequestMapping("/api")
public class ChallengeController {

    @Autowired
    ChallengeRepository challengeRepository;

    @Autowired
    AuthService authService;

    @PostMapping("/challenge")
    public ResponseEntity<Challenge> createChallenge(@RequestBody ChallengeCreateDTO cDTO, @AuthenticationPrincipal Jwt jwt) { 
        if (!authService.isFitnesscoach()) {
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        Challenge cDAO = new Challenge(cDTO.getName(), cDTO.getDescription(), cDTO.getStartDate(), cDTO.getEndDate(), cDTO.getWager(), cDTO.getChallengeType());
        Challenge c = challengeRepository.save(cDAO);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }

    @GetMapping("/challenge")
    public ResponseEntity<List<Challenge>> getAllChallenges(@RequestParam(required = false) Double min,
            @RequestParam(required = false) ChallengeType type) {
        if (min != null && type != null) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } else if (min != null) {
            return new ResponseEntity<>(challengeRepository.findByWagerGreaterThan(min), HttpStatus.OK);
        } else if (type != null) {
            return new ResponseEntity<>(challengeRepository.findByChallengeType(type), HttpStatus.OK);
        }
        return new ResponseEntity<>(challengeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/challenge/aggregation/state")
    public List<ChallengeStateAggregation> getChallengeStateAggregation() {
        return challengeRepository.getChallengeStateAggregation();
    }

    @GetMapping("/challenge/{id}")
    public ResponseEntity<Challenge> getChallengeById(@PathVariable String id) {
        Optional<Challenge> optChallenge = challengeRepository.findById(id);
        if(optChallenge.isPresent()) {
            return new ResponseEntity<>(optChallenge.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
