package com.hotel.hotel_booking.controller;

import com.hotel.hotel_booking.model.Hotel;
import com.hotel.hotel_booking.model.Room;
import com.hotel.hotel_booking.service.RoomService;
import com.hotel.hotel_booking.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private HotelRepository hotelRepository;  // 🔹 to fetch default hotel

    // Create Room (assign default hotel if null)
    @PostMapping
    public Room createRoom(@RequestBody Room room) {
        if (room.getHotel() == null) {
            Hotel defaultHotel = hotelRepository.findById(1L)
                    .orElseThrow(() -> new RuntimeException("Default hotel not found"));
            room.setHotel(defaultHotel);
        }
        return roomService.saveRoom(room);
    }

    // Update Room
    @PutMapping("/{id}")
    public Room updateRoom(@PathVariable Long id, @RequestBody Room room) {
        return roomService.updateRoom(id, room);
    }

    // Get Room by ID
    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable Long id) {
        return roomService.getRoomById(id);
    }

    // Get All Rooms (with hotel info)
    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    // Delete Room
    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable Long id) {
        roomService.deleteRoom(id);
    }
}
