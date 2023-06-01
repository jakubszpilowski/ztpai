package com.projekt.backend.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {
    private long id;
    private String username;
    private int recipes;
    private double rating;
//    byte[] avatar;
}
