package ch.zhaw.youvsyou.security;

import java.time.Instant;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;

@TestConfiguration
public class SecurityConfigTest {
    static final String AUTH0_TOKEN = "token";
    static final String SUB = "sub";
    static final String AUTH0ID = "sms|12345678";

    @Bean
    public JwtDecoder jwtDecoder() {
        return new JwtDecoder() {
            @Override
            public Jwt decode(String token) {
                if (token.equals("token")) {
                    return jwt();
                } else if (token.equals("token_two")) {
                    return jwtUserTwo();
                }
                else if (token.equals("token_three")) {
                    return jwtUserThree();
                }
                throw new IllegalArgumentException("Unexpected token: " + token);
            }
        };
    }

    public Jwt jwt() {
        Map<String, Object> claims = new HashMap<>();
        claims.put(SUB, "test");
        claims.put("user_roles", Arrays.asList("fitnessuser"));
        claims.put("email", "user@test.ch");
        return new Jwt(
                AUTH0_TOKEN,
                Instant.now(),
                Instant.now().plusSeconds(30),
                Map.of("alg", "none"),
                claims);
    }

    public Jwt jwtUserTwo() {
        Map<String, Object> claims = new HashMap<>();
        claims.put(SUB, "test");
        claims.put("user_roles", Arrays.asList("fitnessuser"));
        claims.put("email", "user2@test.ch");
        return new Jwt(
                "token_two",
                Instant.now(),
                Instant.now().plusSeconds(30),
                Map.of("alg", "none"),
                claims);
    }

    public Jwt jwtUserThree() {
        Map<String, Object> claims = new HashMap<>();
        claims.put(SUB, "test");
        claims.put("user_roles", Arrays.asList("fitnesscoach"));
        claims.put("email", "coach@test.ch");
        return new Jwt(
                "token_three",
                Instant.now(),
                Instant.now().plusSeconds(30),
                Map.of("alg", "none"),
                claims);
    }
}
