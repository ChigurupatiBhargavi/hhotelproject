package com.hotel.hotel_booking.service;

import com.hotel.hotel_booking.model.Room;
import java.util.List;

public interface RoomService {
    Room saveRoom(Room room);
    Room getRoomById(Long id);
    List<Room> getAllRooms();
    void deleteRoom(Long id);
    
    // Add this method
    Room updateRoom(Long id, Room roomDetails);
}
