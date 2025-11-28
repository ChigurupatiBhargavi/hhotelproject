package com.hotel.hotel_booking.service;

import com.hotel.hotel_booking.model.Room;
import com.hotel.hotel_booking.repository.RoomRepository;
import com.hotel.hotel_booking.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room getRoomById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Room not found with id " + id));
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public void deleteRoom(Long id) {
        Room room = getRoomById(id);
        roomRepository.delete(room);
    }

    @Override
    public Room updateRoom(Long id, Room roomDetails) {
        Room existingRoom = getRoomById(id);

        existingRoom.setRoomType(roomDetails.getRoomType());
        existingRoom.setPrice(roomDetails.getPrice());
        existingRoom.setAvailable(roomDetails.isAvailable());
        existingRoom.setHotel(roomDetails.getHotel());

        return roomRepository.save(existingRoom);
    }
}
