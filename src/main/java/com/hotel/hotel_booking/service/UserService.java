package com.hotel.hotel_booking.service;

import com.hotel.hotel_booking.model.User;
import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getAllUsers();
    User getUserById(Long id);
    User getUserByEmail(String email);
    User updateUser(Long id, User userDetails);
    void deleteUser(Long id);

    // Login support
    User getUserByEmailAndPassword(String email, String password);
}
