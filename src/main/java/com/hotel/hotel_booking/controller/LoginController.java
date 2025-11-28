package com.hotel.hotel_booking.controller;

import com.hotel.hotel_booking.model.User;
import com.hotel.hotel_booking.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:5173") // allow your frontend
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String password = payload.get("password");

        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
