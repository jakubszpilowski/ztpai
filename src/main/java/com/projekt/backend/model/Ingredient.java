package com.projekt.backend.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "Ingredients")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ingredient")
    private long id;

    private String name;
}
