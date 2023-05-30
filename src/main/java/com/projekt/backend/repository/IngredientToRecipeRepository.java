package com.projekt.backend.repository;

import com.projekt.backend.model.Recipe;
import com.projekt.backend.model.RecipeIngredient;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientToRecipeRepository extends JpaRepository<RecipeIngredient, Long> {
    List<RecipeIngredient> findAllByRecipe(Recipe recipe);
}
