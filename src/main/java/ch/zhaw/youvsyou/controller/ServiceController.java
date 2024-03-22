package ch.zhaw.youvsyou.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.ChallengeStateChangeDTO;
import ch.zhaw.youvsyou.service.ChallengeService;



@RestController
@RequestMapping("/api/service")
public class ServiceController {
    
    @Autowired
    ChallengeService challengeService;

    @PutMapping("/competechallenge")
    public ResponseEntity<Challenge> competeChallenge(@RequestBody ChallengeStateChangeDTO changeC) {
        String challengeId = changeC.getChallengeId();
        String fitnessuserEmail1 = changeC.getFitnessuserEmail1();
        String fitnessuserEmail2 = changeC.getFitnessuserEmail2();
        Optional<Challenge> challenge = challengeService.competeChallenge(challengeId, fitnessuserEmail1, fitnessuserEmail2);
        if (challenge.isPresent()) {
            return new ResponseEntity<>(challenge.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    }

    @PutMapping("/finishchallenge")
    public ResponseEntity<Challenge> finishChallenge(@RequestBody ChallengeStateChangeDTO changeC) {
        String challengeId = changeC.getChallengeId();
        String fitnessuserEmail1 = changeC.getFitnessuserEmail1();
        String fitnessuserEmail2 = changeC.getFitnessuserEmail2();
        Optional<Challenge> challenge = challengeService.finishChallenge(challengeId, fitnessuserEmail1, fitnessuserEmail2);
        if (challenge.isPresent()) {
            return new ResponseEntity<>(challenge.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
