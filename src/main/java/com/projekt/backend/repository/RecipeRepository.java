package com.projekt.backend.repository;

import com.projekt.backend.model.Recipe;
import com.projekt.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    List<Recipe> findAllByUser(User user);
}