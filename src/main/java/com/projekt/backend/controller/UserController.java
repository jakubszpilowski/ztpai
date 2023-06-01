package com.projekt.backend.controller;

import com.projekt.backend.dto.UserDto;
import com.projekt.backend.exception.UserNotFoundException;
import com.projekt.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<String> getUserId(@RequestHeader("Authorization") String token) {
        try {
            String userId = String.valueOf(userService.getUserId(token));
            return ResponseEntity.ok(userId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserThumbnail(@PathVariable long id) {
        UserDto userDto;
        try {
            userDto = userService.getUserThumbnail(id);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
