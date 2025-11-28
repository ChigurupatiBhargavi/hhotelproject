package com.hotel.hotel_booking.service;

import com.hotel.hotel_booking.model.Booking;
import java.util.List;

public interface BookingService {
    Booking saveBooking(Booking booking);
    Booking getBookingById(Long id);
    List<Booking> getAllBookings();
    void deleteBooking(Long id);
}
