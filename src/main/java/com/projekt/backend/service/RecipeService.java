package com.projekt.backend.service;

import com.projekt.backend.dto.RecipeDto;
import com.projekt.backend.dto.RecipePostDto;
import com.projekt.backend.exception.RecipeNotFoundException;
import com.projekt.backend.exception.UserNotFoundException;
import com.projekt.backend.model.*;
import com.projekt.backend.repository.CategoryRepository;
import com.projekt.backend.repository.FavouriteRepository;
import com.projekt.backend.repository.RecipeRepository;
import com.projekt.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final UserService userService;
    private final TagService tagService;
    private final RecipeIngredientService recipeIngredientService;
    private final FavouriteRepository favouriteRepository;

    public List<RecipeDto> getAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAllByOrderByIdDesc();
        return mapRecipesToDtos(recipes);
    }

    public List<RecipeDto> getLatestRecipes() {
        List<Recipe> recipes = recipeRepository.findFirst3ByOrderByIdDesc();
        return mapRecipesToDtos(recipes);
    }

    public List<RecipeDto> getUserRecipes(String token) {
        long id = userService.getUserId(token);
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found!"));

        List<Recipe> recipes = recipeRepository.findAllByUser(user);
        return mapRecipesToDtos(recipes);
    }

    public long addRecipe(String token, RecipePostDto request) {
        long userId = userService.getUserId(token);
        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("User not found!")
        );
        Category category = categoryRepository.findByName(request.getCategory());
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
                .ratingsNumber(0)
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
        userService.updateUserStatsAfterDelete(recipe.getUser());
        recipeIngredientService.deleteIngredients(recipe);
        recipeRepository.deleteById(id);
    }

    public List<RecipeDto> getFavourites(String token){
        long id = userService.getUserId(token);
        User user = userRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User not found")
        );
        List<Favourites> favourites = favouriteRepository.getFavouritesByUser(user);
        List<Recipe> recipes = favourites.stream().map(Favourites::getRecipe).collect(Collectors.toList());
        return mapRecipesToDtos(recipes);
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
