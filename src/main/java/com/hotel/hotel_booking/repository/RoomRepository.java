package com.hotel.hotel_booking.repository;

import com.hotel.hotel_booking.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
