package com.projekt.backend.dto;

import com.projekt.backend.model.Tag;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
public class RecipeDto {
    private String title;
    private String prepTime;
    private int portion;
    private double rating;
    private String username;
//    private Image image;
    private Set<Tag> tags;
}
