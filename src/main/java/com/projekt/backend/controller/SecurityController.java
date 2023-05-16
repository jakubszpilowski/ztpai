package com.projekt.backend.controller;

import com.projekt.backend.auth.AuthenticationRequest;
import com.projekt.backend.auth.AuthenticationResponse;
import com.projekt.backend.auth.RegisterRequest;
import com.projekt.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/auth")
public class SecurityController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
       return ResponseEntity.ok(authService.register(request));
    }
}
