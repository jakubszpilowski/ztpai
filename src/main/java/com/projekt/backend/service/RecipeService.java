package com.projekt.backend.service;

import com.projekt.backend.dto.RecipeDto;
import com.projekt.backend.exception.UserNotFoundException;
import com.projekt.backend.model.Recipe;
import com.projekt.backend.model.User;
import com.projekt.backend.repository.RecipeRepository;
import com.projekt.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;

    public List<RecipeDto> getAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAll();

        return mapRecipesToDtos(recipes);
    }

    public List<RecipeDto> getUserRecipes(long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        List<Recipe> recipes = recipeRepository.findAllByUser(user);

        return mapRecipesToDtos(recipes);
    }

//    public long addRecipe(RecipeDto request) {
//        Recipe recipe =  Recipe.builder()
//                .favAdded(request.getFavAdded())
//                .title(request.getTitle())
//                .user(request.getUser())
//                .instruction(request.getInstruction())
//                .portion(request.getPortion())
//                .category(request.getCategory())
//                .rating(request.getRating())
//                .build();
//
//        recipeRepository.save(recipe);
//        return recipe.getId();
//    }

    private List<RecipeDto> mapRecipesToDtos(List<Recipe> recipes) {
        List<RecipeDto> recipeDtos = new ArrayList<>();

        for(Recipe r: recipes) {
            RecipeDto recipeDto = RecipeDto.builder()
                    .id(r.getId())
                    .title(r.getTitle())
                    .portion(r.getPortion())
                    .prepTime(r.getPrepTime())
                    .rating(r.getRating())
                    .username(r.getUser().getUsername())
//                    .image(r.getImages().get(0))
                    .tags(r.getTags())
                    .build();
            recipeDtos.add(recipeDto);
        }

        return recipeDtos;
    }
}
