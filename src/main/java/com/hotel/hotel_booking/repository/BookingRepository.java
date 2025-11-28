package com.hotel.hotel_booking.repository;

import com.hotel.hotel_booking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
