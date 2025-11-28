import React from "react";
import "./HotelDetail.css";

const HotelDetail = ({ hotel, setPage }) => {
  if (!hotel) return <h2>Hotel not found</h2>;

  return (
    <div className="hotel-detail-container">
      <button className="back-btn" onClick={() => setPage("home")}>
        ← Back to Hotels
      </button>
      <h2>{hotel.name}</h2>
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <p className="location">{hotel.location}</p>
      <p className="price">Price per night: ${hotel.price}</p>
      <p className="description">{hotel.description}</p>
      <button className="book-btn" onClick={() => setPage("booking")}>
        Book Now
      </button>
    </div>
  );
};

export default HotelDetail;
