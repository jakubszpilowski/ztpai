package com.projekt.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RecipeController {

    @GetMapping("/home-page")
    public ResponseEntity<String> getAllRecipes(){
        return ResponseEntity.ok("home-page");
    }

}
