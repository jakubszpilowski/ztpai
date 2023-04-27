package com.projekt.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Comments")
public class Comment {
    @Id
    @Column(name = "id_comment")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User author;

    @ManyToOne
    @JoinColumn(name = "id_recipe")
    private Recipe commentedRecipe;

    @ManyToOne
    @JoinColumn(name = "id_parent")
    private Comment parentComment = null;

    private String comment;
}
