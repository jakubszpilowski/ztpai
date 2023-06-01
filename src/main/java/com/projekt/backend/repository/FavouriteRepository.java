package com.projekt.backend.repository;

import com.projekt.backend.model.Favourites;
import com.projekt.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavouriteRepository extends JpaRepository<Favourites, Long> {
    List<Favourites> getFavouritesByUser(User user);
}
