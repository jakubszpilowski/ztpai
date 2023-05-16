package com.projekt.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Category")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private long id;

    private String name;
}
