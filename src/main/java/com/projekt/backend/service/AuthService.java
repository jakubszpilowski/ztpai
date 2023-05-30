package com.projekt.backend.service;

import com.projekt.backend.auth.AuthenticationRequest;
import com.projekt.backend.auth.AuthenticationResponse;
import com.projekt.backend.auth.RegisterRequest;
import com.projekt.backend.config.JwtService;
import com.projekt.backend.model.User;
import com.projekt.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public ResponseEntity<AuthenticationResponse> register(RegisterRequest request) {
        String username = request.getUsername();
        String email = request.getEmail();
        AuthenticationResponse authenticationResponse;

        if(userRepository.findByUsername(username).isPresent()) {
            authenticationResponse = AuthenticationResponse.builder()
                    .token("")
                    .message("Username taken!")
                    .build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(authenticationResponse);
        }

        if(userRepository.findByEmail(email).isPresent()) {
            authenticationResponse = AuthenticationResponse.builder()
                    .token("")
                    .message("Email taken!")
                    .build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(authenticationResponse);
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .isAdmin(false)
                .recipes(0)
                .userRating(0)
                .avatar(null)
                .build();

        userRepository.save(user);
        String jwtToken = jwtService.generateToken(user);
        authenticationResponse = AuthenticationResponse.builder()
                .token(jwtToken)
                .message("User registered successfully")
                .build();

        return ResponseEntity.status(HttpStatus.OK).body(authenticationResponse);
    }

    public ResponseEntity<AuthenticationResponse> login(AuthenticationRequest request) {
        AuthenticationResponse authenticationResponse;

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            authenticationResponse = AuthenticationResponse.builder()
                    .token("")
                    .message("Invalid username or password!")
                    .build();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponse);
        }

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User does not exist"));
        String jwtToken = jwtService.generateToken(user);
        authenticationResponse = AuthenticationResponse.builder()
                .token(jwtToken)
                .message("User signed in successfully")
                .build();

        return ResponseEntity.status(HttpStatus.OK).body(authenticationResponse);
    }
}
