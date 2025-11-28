import React from "react";
import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotel/${hotel.id}`); // Navigate to hotel detail page
  };

  return (
    <div className="hotel-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={hotel.image} alt={hotel.name} />
      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>
        <p>Price per night: ${hotel.price}</p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;
