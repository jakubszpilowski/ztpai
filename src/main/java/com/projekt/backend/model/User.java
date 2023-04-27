package com.projekt.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "user_recipes")
    private int recipes = 0;

    @Column(name = "user_rating")
    private double userRating = 0;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "is_admin")
    private Boolean isAdmin = false;

    @OneToMany(mappedBy = "author")
    private Set<Comment> comments;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Recipe> createdRecipes;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "Favourites",
        joinColumns = @JoinColumn(name = "id_user"),
        inverseJoinColumns = @JoinColumn(name = "id_recipe"))
    private Set<Recipe> favouriteRecipes = new HashSet<>();
}
