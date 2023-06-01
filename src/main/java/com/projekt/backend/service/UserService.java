package com.projekt.backend.service;

import com.projekt.backend.config.JwtService;
import com.projekt.backend.dto.UserDto;
import com.projekt.backend.exception.UserNotFoundException;
import com.projekt.backend.repository.UserRepository;
import com.projekt.backend.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final JwtService service;
    private final UserRepository userRepository;

    public long getUserId(String token) {
        String jwt = token.substring(7);
        String username = service.extractUsername(jwt);
        User user = userRepository.findByUsername(username).orElseThrow();
        return user.getId();
    }

    public UserDto getUserThumbnail(String token) {
       long id = getUserId(token);
       User user = userRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User not found")
        );

        return UserDto
                .builder()
                .id(user.getId())
                .username(user.getUsername())
                .rating(user.getUserRating())
                .recipes(user.getRecipes())
    //            .avatar(user.getAvatar())
                .build();
    }

    public void updateUserStats(User user) {
        int newUserRecipes = user.getRecipes() + 1;
        double newUserRating = user.getUserRating() / newUserRecipes;
        changeStats(user, newUserRecipes, newUserRating);
        userRepository.save(user);
    }

    public void updateUserStatsAfterDelete(User user) {
        int newUserRecipes = user.getRecipes() - 1;
        double newUserRating = user.getUserRating() / newUserRecipes;
        changeStats(user, newUserRecipes, newUserRating);
        userRepository.save(user);

    }

    private void changeStats(User user, int recipes, double rating) {
        user.setRecipes(recipes);
        user.setUserRating(rating);
    }
}
