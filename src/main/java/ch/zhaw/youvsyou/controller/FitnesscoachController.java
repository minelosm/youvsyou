package ch.zhaw.youvsyou.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;


import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.FitnesscoachCreateDTO;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;



@RestController
@RequestMapping("/api")
public class FitnesscoachController {

    @Autowired
    FitnesscoachRepository fitnesscoachRepository;
    
    @PostMapping("/fitnesscoach")
    public ResponseEntity<Fitnesscoach> createFitnesscoach(@RequestBody FitnesscoachCreateDTO fDTO) {
        Fitnesscoach fDAO = new Fitnesscoach(fDTO.getEmail(), fDTO.getName());
        Fitnesscoach f = fitnesscoachRepository.save(fDAO);
        return new ResponseEntity<>(f, HttpStatus.CREATED);
    }

    @GetMapping("/fitnesscoach")
    public ResponseEntity<List<Fitnesscoach>> getAllFitnesscoach() {
        List<Fitnesscoach> allFitnesscoach = fitnesscoachRepository.findAll();
        return new ResponseEntity<>(allFitnesscoach, HttpStatus.OK);
    }

    @GetMapping("/fitnesscoach/{id}")
    public ResponseEntity<Fitnesscoach> getFitnesscoachById(@PathVariable String id) {
        Optional<Fitnesscoach> optFitnesscoach = fitnesscoachRepository.findById(id);
        if (optFitnesscoach.isPresent()) {
            return new ResponseEntity<>(optFitnesscoach.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/me/fitnesscoach")
    public ResponseEntity<Fitnesscoach> getMyFitnesscoachId(
            @AuthenticationPrincipal Jwt jwt) {
        String userEmail = jwt.getClaimAsString("email");
        Optional <Fitnesscoach> optFitnesscoach = fitnesscoachRepository.findByEmail(userEmail);
        return optFitnesscoach.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
