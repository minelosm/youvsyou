package ch.zhaw.youvsyou.security;

import java.util.List;

import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;

import ch.zhaw.youvsyou.model.Fitnesscoach;
import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.FitnesscoachRepository;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;

class UserValidator implements OAuth2TokenValidator<Jwt> {

    FitnessuserRepository fitnessuserRepository;

    FitnesscoachRepository fitnesscoachRepository;

    public UserValidator(FitnessuserRepository fitnessuserRepository, FitnesscoachRepository fitnesscoachRepository) {
        this.fitnessuserRepository = fitnessuserRepository;
        this.fitnesscoachRepository = fitnesscoachRepository;
    }

    public OAuth2TokenValidatorResult validate(Jwt jwt) {
        OAuth2Error error = new OAuth2Error("invalid_token", "The required email is missing", null);

        String userEmail = jwt.getClaimAsString("email");
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        if (userEmail != null && !userEmail.equals("")) {
            Fitnessuser f = fitnessuserRepository.findFirstByEmail(userEmail);
            if (f == null) {
                String username = jwt.getClaimAsString("nickname");
                fitnessuserRepository.save(new Fitnessuser(userEmail, username));
                System.out.println("Creating new fitnessuser:");
                System.out.println("  - name:  " + username);
                System.out.println("  - email: " + userEmail);
            }
            Fitnesscoach c = fitnesscoachRepository.findFirstByEmail(userEmail);
            if (c == null && userRoles.contains("fitnesscoach")) {
                String username = jwt.getClaimAsString("nickname");
                fitnesscoachRepository.save(new Fitnesscoach(userEmail, username));
                System.out.println("Creating new fitnesscoach:");
                System.out.println("  - name:  " + username);
                System.out.println("  - email: " + userEmail);
            }
            return OAuth2TokenValidatorResult.success();
        }
        return OAuth2TokenValidatorResult.failure(error);
    }
}
