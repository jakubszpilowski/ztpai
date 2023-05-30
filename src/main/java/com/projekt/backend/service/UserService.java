package com.projekt.backend.service;

import com.projekt.backend.config.JwtService;
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

    public void updateUserStats(User user) {
        int newUserRecipes = user.getRecipes() + 1;
        double newUserRating = user.getUserRating() / newUserRecipes;
        user.setRecipes(newUserRecipes);
        user.setUserRating(newUserRating);
        userRepository.save(user);
    }
}
