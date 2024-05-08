package ch.zhaw.youvsyou.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.youvsyou.model.Challenge;
import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;
import ch.zhaw.youvsyou.service.AuthService;
import ch.zhaw.youvsyou.service.ChallengeService;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    @Autowired
    ChallengeService challengeService;


    @Autowired
    AuthService authService;

    @Autowired
    FitnessuserRepository fitnessuserRepository;

    @Autowired
    FitnesscoachRepository fitnesscoachRepository;

    @PutMapping("/me/competechallenge")
    public ResponseEntity<Challenge> assignToMe(@RequestParam String challengeId,
            @AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Optional<Challenge> challenge = challengeService.competeInAndFinanceChallenge(challengeId, userEmail);
        if (challenge.isPresent()) {
            return new ResponseEntity<>(challenge.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/finishchallenge")
    public ResponseEntity<Challenge> finishChallenge(@RequestParam String challengeId,
            @RequestParam String winnerEmail,
            @AuthenticationPrincipal Jwt jwt) {
        if (!authService.isFitnesscoach()) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        String fitnesscoachEmail = jwt.getClaimAsString("email");
        Optional<Challenge> challenge = challengeService.finishChallenge(challengeId, fitnesscoachEmail, winnerEmail);
        if (challenge.isPresent()) {
            return new ResponseEntity<>(challenge.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/me/myinfo")
    public ResponseEntity<?> getMyInfo(@AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (userRoles.contains("fitnesscoach")) {
            Optional<Fitnesscoach> optFitnesscoach = fitnesscoachRepository.findByEmail(userEmail);
            return optFitnesscoach.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } else {
            Optional<Fitnessuser> optFitnessuser = fitnessuserRepository.findByEmail(userEmail);
            return optFitnessuser.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        }
    }
}

/*
     * @PutMapping("/competechallenge")
     * public ResponseEntity<Challenge> competeChallenge
     * (@RequestBody ChallengeStateChangeDTO changeC,
     * 
     * @AuthenticationPrincipal Jwt jwt) {
     * if (!authService.isFitnesscoach()) {
     * return new ResponseEntity<>(HttpStatus.FORBIDDEN);
     * }
     * 
     * String fitnessuserEmail = changeC.getFitnessuserEmail();
     * String challengeId = changeC.getChallengeId();
     * Optional<Challenge> challenge =
     * challengeService.competeChallenge(challengeId, fitnessuserEmail);
     * if (challenge.isPresent()) {
     * return new ResponseEntity<>(challenge.get(), HttpStatus.OK);
     * }
     * return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
     * }
     */
