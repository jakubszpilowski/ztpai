package com.projekt.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Recipes")
public class Recipe {
    @Id
    @Column(name = "id_recipe")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String prepTime;

    private int portion;

    private double rating;

    @Column(name = "number_of_rating")
    private double ratingsNumber;

    private int favAdded;

    @Column(name = "instruction", columnDefinition = "TEXT")
    private String instruction;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private User user;

    @JsonIgnore
    @ManyToMany(mappedBy = "favouriteRecipes", fetch = FetchType.LAZY)
    private List<User> addedToFav;

    @OneToMany(mappedBy = "commentedRecipe")
    private Set<Comment> comments;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "Recipe_to_tags",
            joinColumns = @JoinColumn(name = "id_recipe"),
            inverseJoinColumns = @JoinColumn(name = "id_tag"))
    private List<Tag> tags;

    @OneToOne
    private Category category;

    @OneToMany(mappedBy = "recipe",fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images;
}
