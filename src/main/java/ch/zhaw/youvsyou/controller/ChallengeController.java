package ch.zhaw.youvsyou.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
import ch.zhaw.youvsyou.model.ChallengeType;
import ch.zhaw.youvsyou.model.chatGPT.MessageResponse;
import ch.zhaw.youvsyou.repository.ChallengeRepository;
import ch.zhaw.youvsyou.service.AuthService;
import ch.zhaw.youvsyou.service.ChatGPTService;

@RestController
@RequestMapping("/api")
public class ChallengeController {

    @Autowired
    ChallengeRepository challengeRepository;

    @Autowired
    AuthService authService;

    @Autowired
    ChatGPTService chatGptService;

    /*
     * @PostMapping("/challenge")
     * public ResponseEntity<Challenge> createChallenge(@RequestBody
     * ChallengeCreateDTO cDTO, @AuthenticationPrincipal Jwt jwt) {
     * if (!authService.isFitnesscoach()) {
     * return new ResponseEntity<>(HttpStatus.FORBIDDEN);
     * }
     * Challenge cDAO = new Challenge(cDTO.getName(), cDTO.getDescription(),
     * cDTO.getStartDate(), cDTO.getEndDate(), cDTO.getWager(),
     * cDTO.getChallengeType(), cDTO.getFitnesscoachId());
     * Challenge c = challengeRepository.save(cDAO);
     * return new ResponseEntity<>(c, HttpStatus.CREATED);
     * }
     */

    @PostMapping("/challenge")
    public ResponseEntity<Challenge> createChallenge(@RequestBody ChallengeCreateDTO cDTO,
            @AuthenticationPrincipal Jwt jwt) {
        if (!authService.isFitnesscoach()) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        // ChatGPT Service zum Generieren der Beschreibung aufrufen
        MessageResponse chatGptResponse = chatGptService.chatWithChatGpt(
                "Erstelle mir eine ganz kurze Beschreibung mit folgenden überbegriff" +cDTO.getName() + "und ChallengeType:" + cDTO.getChallengeType() + ". Und mache mir kleine 3 Zeile, welche gemessen werden können");
        if (chatGptResponse.getChoices().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        String descriptionFromGPT = chatGptResponse.getChoices().get(0).getMessage().getContent();
        cDTO.setDescription(descriptionFromGPT); // Setzen der von ChatGPT generierten Beschreibung

        // Job mit der ChatGPT Beschreibung erstellen
        Challenge challenge = new Challenge(cDTO.getName(), descriptionFromGPT,
                cDTO.getStartDate(),
                cDTO.getEndDate(), cDTO.getWager(), cDTO.getChallengeType(), cDTO.getFitnesscoachId());
        Challenge savedChallenge = challengeRepository.save(challenge);
        return new ResponseEntity<>(savedChallenge, HttpStatus.CREATED);
    }

    @GetMapping("/challenge")
    public ResponseEntity<Page<Challenge>> getAllChallenges(
            @RequestParam(required = false) Double min,
            @RequestParam(required = false) ChallengeType type,
            @RequestParam(required = false, defaultValue = "1") Integer pageNumber,
            @RequestParam(required = false, defaultValue = "2") Integer pageSize) {
        Page<Challenge> allChallenges;
        if (min == null && type == null) {
            allChallenges = challengeRepository.findAll(PageRequest.of(pageNumber - 1, pageSize));
        } else {
            if (min != null && type != null) {
                allChallenges = challengeRepository.findByChallengeTypeAndWagerGreaterThan(type, min,
                        PageRequest.of(pageNumber - 1, pageSize));
            } else if (min != null) {
                allChallenges = challengeRepository.findByWagerGreaterThan(min,
                        PageRequest.of(pageNumber - 1, pageSize));
            } else {
                allChallenges = challengeRepository.findByChallengeType(type, PageRequest.of(pageNumber - 1,
                        pageSize));
            }
        }
        return new ResponseEntity<>(allChallenges, HttpStatus.OK);
    }

    /*
     * @GetMapping("/challenge")
     * public ResponseEntity<List<Challenge>>
     * getAllChallenges(@RequestParam(required = false) Double min,
     * 
     * @RequestParam(required = false) ChallengeType type) {
     * if (min != null && type != null) {
     * return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
     * } else if (min != null) {
     * return new ResponseEntity<>(challengeRepository.findByWagerGreaterThan(min),
     * HttpStatus.OK);
     * } else if (type != null) {
     * return new ResponseEntity<>(challengeRepository.findByChallengeType(type),
     * HttpStatus.OK);
     * }
     * return new ResponseEntity<>(challengeRepository.findAll(), HttpStatus.OK);
     * }
     */

    /*
     * @GetMapping("/challenge/aggregation/state")
     * public List<ChallengeStateAggregation> getChallengeStateAggregation() {
     * return challengeRepository.getChallengeStateAggregation();
     * }
     */

    @GetMapping("/challenge/{id}")
    public ResponseEntity<Challenge> getChallengeById(@PathVariable String id) {
        Optional<Challenge> optChallenge = challengeRepository.findById(id);
        if (optChallenge.isPresent()) {
            return new ResponseEntity<>(optChallenge.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/challenge/fitness/{id}")
    public ResponseEntity<List<Challenge>> getChallengeByUserId(@PathVariable String id) {
        List<Challenge> optChallengesCoach = challengeRepository.findByFitnesscoachId(id);
        List<Challenge> optChallengesUser1 = challengeRepository.findByFitnessuserId1(id);
        List<Challenge> optChallengesUser2 = challengeRepository.findByFitnessuserId2(id);
        if (!optChallengesCoach.isEmpty() && optChallengesCoach != null) {
            return new ResponseEntity<>(optChallengesCoach, HttpStatus.OK);
        } else if (!optChallengesUser1.isEmpty() && optChallengesUser1 != null) {
            return new ResponseEntity<>(optChallengesUser1, HttpStatus.OK);
        } else if (!optChallengesUser2.isEmpty() && optChallengesUser2 != null) {
            return new ResponseEntity<>(optChallengesUser2, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}