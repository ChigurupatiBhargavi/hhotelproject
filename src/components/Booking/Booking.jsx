import React, { useState } from "react";
import "./Booking.css";

const Booking = ({ hotel, setPage }) => {
  if (!hotel) return <h2>No hotel selected</h2>;

  const today = new Date();
  const formatDate = (date) => date.toISOString().split("T")[0];

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("Standard");
  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));

  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    if (new Date(checkOut) <= new Date(newCheckIn)) {
      const newCheckOut = new Date(newCheckIn);
      newCheckOut.setDate(newCheckOut.getDate() + 1);
      setCheckOut(formatDate(newCheckOut));
    }
  };

  const handleCheckOutChange = (e) => {
    const newCheckOut = e.target.value;
    if (new Date(newCheckOut) > new Date(checkIn)) {
      setCheckOut(newCheckOut);
    } else {
      alert("Check-out date must be after check-in date.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      hotelName: hotel.name,
      roomType,
      guests,
      checkIn,
      checkOut,
      price: hotel.price,
    };

    // Save booking in localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, newBooking]));

    alert("Booking Confirmed!");
    setPage("user-dashboard"); // go to dashboard to see history
  };

  return (
    <div className="booking-container">
      <button className="back-btn" onClick={() => setPage("hotel-detail")}>
        ← Back to Hotel
      </button>
      <h2>Book {hotel.name}</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </label>
        <label>
          Room Type:
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </label>
        <label>
          Check-in Date:
          <input type="date" value={checkIn} min={formatDate(today)} onChange={handleCheckInChange} required />
        </label>
        <label>
          Check-out Date:
          <input type="date" value={checkOut} min={formatDate(tomorrow)} onChange={handleCheckOutChange} required />
        </label>
        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
