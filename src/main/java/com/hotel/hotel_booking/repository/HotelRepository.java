package com.hotel.hotel_booking.repository;

import com.hotel.hotel_booking.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
}
