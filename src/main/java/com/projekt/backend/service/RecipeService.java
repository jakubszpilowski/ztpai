package com.projekt.backend.service;

import com.projekt.backend.dto.RecipeDto;
import com.projekt.backend.dto.RecipePostDto;
import com.projekt.backend.exception.RecipeNotFoundException;
import com.projekt.backend.exception.UserNotFoundException;
import com.projekt.backend.model.Category;
import com.projekt.backend.model.Recipe;
import com.projekt.backend.model.Tag;
import com.projekt.backend.model.User;
import com.projekt.backend.repository.CategoryRepository;
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
    private final CategoryRepository categoryRepository;
    private final UserService userService;
    private final TagService tagService;
    private final RecipeIngredientService recipeIngredientService;

    public List<RecipeDto> getAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAllByOrderByIdDesc();
        return mapRecipesToDtos(recipes);
    }

    public List<RecipeDto> getLatestRecipes() {
        List<Recipe> recipes = recipeRepository.findFirst3ByOrderByIdDesc();
        return mapRecipesToDtos(recipes);
    }

    public List<RecipeDto> getUserRecipes(long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        List<Recipe> recipes = recipeRepository.findAllByUser(user);
        return mapRecipesToDtos(recipes);
    }

    public long addRecipe(RecipePostDto request) {
        User user = userRepository.findById(request.getUserId()).orElseThrow(
                () -> new UserNotFoundException("User not found!")
        );
        Category category = categoryRepository.findByName(request.getCategoryName());
        List<Tag> tags = tagService.createTags(request.getTags());

        Recipe recipe =  Recipe.builder()
                .title(request.getTitle())
                .category(category)
                .user(user)
                .instruction(request.getInstruction())
                .portion(request.getPortion())
                .prepTime(request.getPrepTime())
                .tags(tags)
                .rating(0)
                .favAdded(0)
                .build();

        recipeRepository.save(recipe);
        userService.updateUserStats(user);
        recipeIngredientService.saveRecipe(recipe, request.getIngredients());
        return recipe.getId();
    }

    public void deleteRecipe(long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(
            () -> new RecipeNotFoundException("Recipe not found")
        );
        recipeIngredientService.deleteIngredients(recipe);
        recipeRepository.deleteById(id);
    }

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
