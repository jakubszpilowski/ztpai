package com.projekt.backend.controller;

import com.projekt.backend.dto.RecipeDto;
import com.projekt.backend.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/recipes")
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

//    @PostMapping("/add")
//    public ResponseEntity<?> addNewRecipe(@RequestBody RecipeDto request){
//        long recipeId = recipeService.addRecipe(request);
//        return new ResponseEntity<>("Recipe added successfully: " + recipeId, HttpStatus.CREATED);
//    }

    @GetMapping
    public ResponseEntity<List<RecipeDto>> getAllRecipes(){
        return new ResponseEntity<>(recipeService.getAllRecipes(), HttpStatus.OK);
    }
}
