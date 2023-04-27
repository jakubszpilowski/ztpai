package com.projekt.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private long id;

    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_parent")
    private Category parentCategory;

    @OneToMany(
                fetch = FetchType.EAGER,
                mappedBy = "parentCategory",
                cascade = CascadeType.ALL,
                orphanRemoval = true
    )
    private List<Category> subcategories;
}
