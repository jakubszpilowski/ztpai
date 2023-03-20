package com.projekt.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class TestController {

    @GetMapping("/api")
    public static String hello(){
        return "Hello User " + new Date() + "\n";
    }

}
