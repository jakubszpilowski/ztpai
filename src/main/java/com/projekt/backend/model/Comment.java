package com.projekt.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Comments")
public class Comment {
    @Id
    @Column(name = "id_comment")
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_user")
    private User author;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_recipe")
    private Recipe commentedRecipe;

    private String comment;
}
