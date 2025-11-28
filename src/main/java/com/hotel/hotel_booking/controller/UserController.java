package com.hotel.hotel_booking.controller;

import com.hotel.hotel_booking.model.User;
import com.hotel.hotel_booking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    // 1️⃣ Registration
    // POST http://localhost:8089/users/register
    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        if (user.getName() == null || user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Name, email, and password must not be empty.");
        }
        try {
            User createdUser = userService.saveUser(user);
            return ResponseEntity.ok(createdUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body(e.getMessage());
        }
    }

    // 2️⃣ Login
    // POST http://localhost:8089/users/login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        if (email == null || password == null) {
            return ResponseEntity.badRequest().body("Email and password are required.");
        }

        User user = userService.getUserByEmailAndPassword(email, password);
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        return ResponseEntity.ok(user);
    }

    // 3️⃣ Get all users
    // GET http://localhost:8089/users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // 4️⃣ Get user by ID
    // GET http://localhost:8089/users/{id}
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user == null) return ResponseEntity.status(404).body(null);
        return ResponseEntity.ok(user);
    }

    // 5️⃣ Update user
    // PUT http://localhost:8089/users/{id}
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser == null) return ResponseEntity.status(404).body(null);
        return ResponseEntity.ok(updatedUser);
    }

    // 6️⃣ Delete user
    // DELETE http://localhost:8089/users/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
