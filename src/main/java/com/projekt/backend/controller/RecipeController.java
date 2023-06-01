package com.projekt.backend.controller;

import com.projekt.backend.dto.RecipeDto;
import com.projekt.backend.dto.RecipePostDto;
import com.projekt.backend.exception.RecipeNotFoundException;
import com.projekt.backend.exception.UserNotFoundException;
import com.projekt.backend.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @PostMapping("/recipes/add")
    public ResponseEntity<?> addNewRecipe(
            @RequestHeader("Authorization") String token,
            @RequestBody RecipePostDto request
    ) {
        long recipeId;
        try {
            recipeId = recipeService.addRecipe(token, request);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Recipe added successfully: " + recipeId, HttpStatus.CREATED);
    }

    @GetMapping("/recipes/latest")
    public ResponseEntity<List<RecipeDto>> getLatestRecipes(){
        return new ResponseEntity<>(recipeService.getLatestRecipes(), HttpStatus.OK);
    }

    @GetMapping("/recipes/all")
    public ResponseEntity<List<RecipeDto>> getAllRecipes() {
        return new ResponseEntity<>(recipeService.getAllRecipes(), HttpStatus.OK);
    }

    @GetMapping("/favourites")
    public ResponseEntity<?> getFavouritesRecipes(@RequestHeader("Authorization") String token) {
        List<RecipeDto> recipeDtos;
        try {
            recipeDtos = recipeService.getFavourites(token);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(recipeDtos, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getAllUserRecipes(@RequestHeader("Authorization") String token) {
        List<RecipeDto> userRecipes;

        try {
            userRecipes = recipeService.getUserRecipes(token);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(userRecipes, HttpStatus.OK);
    }

    @DeleteMapping("/recipes/delete/{id}")
    public ResponseEntity<?> deleteRecipe(@PathVariable long id) {
        try {
            recipeService.deleteRecipe(id);
        } catch (RecipeNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Recipe deleted successfully " + id, HttpStatus.OK);
    }
}
