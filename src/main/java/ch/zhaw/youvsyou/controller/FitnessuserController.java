package ch.zhaw.youvsyou.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.model.FitnessuserCreateDTO;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;


@RestController
@RequestMapping("/api")
public class FitnessuserController {
    
    @Autowired
    FitnessuserRepository fitnessuserRepository;

    @PostMapping("/fitnessuser")
    public ResponseEntity<Fitnessuser> createFitnessuser(@RequestBody FitnessuserCreateDTO fDTO) {
        Fitnessuser fDAO = new Fitnessuser(fDTO.getEmail(), fDTO.getName(), fDTO.getBirthDate(), fDTO.getHeight(), fDTO.getWeight());
        Fitnessuser f = fitnessuserRepository.save(fDAO);
        return new ResponseEntity<>(f, HttpStatus.CREATED);
    }

    @GetMapping("/fitnessuser")
    public ResponseEntity<List<Fitnessuser>> getAllFitnessuser() {
        List<Fitnessuser> allFitnessuser = fitnessuserRepository.findAll();
        return new ResponseEntity<>(allFitnessuser, HttpStatus.OK);
    }

    @GetMapping("/fitnessuser/{id}")
    public ResponseEntity<Fitnessuser> getFitnessuserById(@PathVariable String id) {
        Optional<Fitnessuser> optFitnessuser = fitnessuserRepository.findById(id);
        if (optFitnessuser.isPresent()) {
            return new ResponseEntity<>(optFitnessuser.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
