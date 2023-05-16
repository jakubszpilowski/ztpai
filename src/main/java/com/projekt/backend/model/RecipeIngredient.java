package com.projekt.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Ingredients_to_recipe")
public class RecipeIngredient {
    @Id
    private long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_recipe", referencedColumnName = "id_recipe")
    private Recipe recipe;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_ingredient", referencedColumnName = "id_ingredient")
    private Ingredient ingredient;

    private String amount;
}
