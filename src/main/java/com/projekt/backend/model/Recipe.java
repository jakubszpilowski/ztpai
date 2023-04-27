package com.projekt.backend.model;

import jakarta.persistence.*;

import java.sql.Time;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Recipes")
public class Recipe {
    @Id
    @Column(name = "id_recipe")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private Time prepTime;

    private int portion;

    private double rating = 0;

    private int favAdded = 0;

    @Column(name = "instruction", columnDefinition = "TEXT")
    private String instruction;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private User user;

    @ManyToMany(mappedBy = "favouriteRecipes", fetch = FetchType.LAZY)
    private Set<User> addedToFav = new HashSet<>();

    @OneToMany(mappedBy = "commentedRecipe")
    private Set<Comment> comments = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "Recipe_to_tags",
            joinColumns = @JoinColumn(name = "id_recipe"),
            inverseJoinColumns = @JoinColumn(name = "id_tag"))
    private Set<Tag> tags = new HashSet<>();

    @OneToOne
    private Category category;

    @OneToMany(mappedBy = "recipe",fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images;
}
