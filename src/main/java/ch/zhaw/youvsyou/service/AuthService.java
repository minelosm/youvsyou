package ch.zhaw.youvsyou.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AuthService {

    public boolean isFitnesscoach() {
        Jwt jwt = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<String> userRoles = jwt.getClaimAsStringList("user_roles");
        return userRoles.contains("fitnesscoach");
    }
}
