package com.projekt.backend.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RecipePostDto {
    private String title;
    private long userId;
    private String category;
    private int portion;
    private String prepTime;
    private String instruction;
    private List<IngredientDto> ingredients;
    private List<String> tags;
}
