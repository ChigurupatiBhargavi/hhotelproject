package com.hotel.hotel_booking.service;

import com.hotel.hotel_booking.model.Hotel;
import java.util.List;

public interface HotelService {
    Hotel saveHotel(Hotel hotel);
    Hotel getHotelById(Long id);
    List<Hotel> getAllHotels();
    void deleteHotel(Long id);
}
