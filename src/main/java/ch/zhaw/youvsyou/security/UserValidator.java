package ch.zhaw.youvsyou.security;

import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;

import ch.zhaw.youvsyou.model.Fitnessuser;
import ch.zhaw.youvsyou.repository.FitnessuserRepository;

class UserValidator implements OAuth2TokenValidator<Jwt> {

    FitnessuserRepository fitnessuserRepository;

    public UserValidator(FitnessuserRepository fitnessuserRepository) {
        this.fitnessuserRepository = fitnessuserRepository;
    }

    public OAuth2TokenValidatorResult validate(Jwt jwt) {
        OAuth2Error error = new OAuth2Error("invalid_token", "The required email is missing", null);

        String userEmail = jwt.getClaimAsString("email");
        if (userEmail != null && !userEmail.equals("")) {
            Fitnessuser f = fitnessuserRepository.findFirstByEmail(userEmail);
            if (f == null) {
                String username = jwt.getClaimAsString("nickname");
                fitnessuserRepository.save(new Fitnessuser(userEmail, username));
                System.out.println("Creating new user:");
                System.out.println("  - name:  " + username);
                System.out.println("  - email: " + userEmail);
            }
            return OAuth2TokenValidatorResult.success();
        }
        return OAuth2TokenValidatorResult.failure(error);
    }
}
