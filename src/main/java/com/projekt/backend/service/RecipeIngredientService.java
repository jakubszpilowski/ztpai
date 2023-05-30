package com.projekt.backend.service;

import com.projekt.backend.dto.IngredientDto;
import com.projekt.backend.model.Ingredient;
import com.projekt.backend.model.Recipe;
import com.projekt.backend.model.RecipeIngredient;
import com.projekt.backend.repository.IngredientRepository;
import com.projekt.backend.repository.IngredientToRecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class RecipeIngredientService {
    private final IngredientRepository ingredientRepository;
    private final IngredientToRecipeRepository ingredientToRecipeRepository;

    public void saveRecipe(Recipe recipe, List<IngredientDto> ingredientsDto) {
        Map<Ingredient, String> ingredients = createIngredients(ingredientsDto);

        for(Map.Entry<Ingredient, String> ingredient: ingredients.entrySet()) {
            RecipeIngredient recipeIngredient = new RecipeIngredient();
            recipeIngredient.setRecipe(recipe);
            recipeIngredient.setIngredient(ingredient.getKey());
            recipeIngredient.setAmount(ingredient.getValue());
            ingredientToRecipeRepository.save(recipeIngredient);
        }
    }

    public void deleteIngredients(Recipe recipe) {
        List<RecipeIngredient> recipeIngredients = ingredientToRecipeRepository.findAllByRecipe(recipe);
        for(RecipeIngredient recipeIngredient: recipeIngredients) {
            ingredientToRecipeRepository.deleteById(recipeIngredient.getId());
        }
    }

    private Map<Ingredient, String> createIngredients(List<IngredientDto> ingredientsDto) {
        Map<Ingredient, String> ingredients = new HashMap<>();

        for(IngredientDto ingredientDto: ingredientsDto) {
            Ingredient ingredient = ingredientRepository.findByName(ingredientDto.getIngredient());
            if(ingredient == null) {
                ingredient = new Ingredient();
                ingredient.setName(ingredientDto.getIngredient());
                ingredient = ingredientRepository.save(ingredient);
            }

            ingredients.put(ingredient, ingredientDto.getAmount());
        }

        return ingredients;
    }
}
