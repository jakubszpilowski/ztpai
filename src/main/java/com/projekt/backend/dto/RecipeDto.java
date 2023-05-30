package com.projekt.backend.dto;

import com.projekt.backend.model.Tag;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RecipeDto {
    private long id;
    private String title;
    private String prepTime;
    private int portion;
    private double rating;
    private String username;
//    private Image image;
    private List<Tag> tags;
}
