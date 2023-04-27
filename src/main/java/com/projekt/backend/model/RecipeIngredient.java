package com.projekt.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Ingredients_to_recipe")
public class RecipeIngredient {
    @Id
    private long id;

    @ManyToOne
    @JoinColumn(name = "id_recipe", referencedColumnName = "id_recipe")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "id_ingredient", referencedColumnName = "id_ingredient")
    private Ingredient ingredient;

    private String amount;
}
