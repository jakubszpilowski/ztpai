package com.projekt.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SecurityController {

    @PostMapping("/login")
    public ResponseEntity<String> login(){
        return ResponseEntity.ok("login");
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(){
        return ResponseEntity.ok("register");
    }

}
