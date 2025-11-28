import React from "react";
import "./HomePage.css";

const hotels = [
  {
    id: 1,
    name: "City Central",
    image: "/images/city-central.jpg",
    location: "City Center",
    price: 120,
    description: "A modern hotel in the heart of the city."
  },
  {
    id: 2,
    name: "Grand Palace",
    image: "/images/grand-palace.jpg",
    location: "Downtown",
    price: 200,
    description: "Luxury rooms with palace-like interiors."
  },
  {
    id: 3,
    name: "Heritage Stay",
    image: "/images/heritage-stay.jpg",
    location: "Old Town",
    price: 150,
    description: "Experience traditional heritage style stay."
  },
  {
    id: 4,
    name: "Lakeview Lodge",
    image: "/images/lakeview-lodge.jpg",
    location: "Lakeside",
    price: 180,
    description: "Beautiful view of the lake and mountains."
  },
  {
    id: 5,
    name: "Mountain Retreat",
    image: "/images/mountain-retreat.jpg",
    location: "Highlands",
    price: 160,
    description: "Peaceful retreat in the mountains."
  },
  {
    id: 6,
    name: "Ocean View",
    image: "/images/ocean-view.jpg",
    location: "Beachfront",
    price: 220,
    description: "Relaxing ocean view hotel with private beach."
  },
];

const HomePage = ({ setPage, setSelectedHotel }) => {
  const handleClick = (hotel) => {
    setSelectedHotel(hotel);
    setPage("hotel-detail");
  };

  return (
    <div className="homepage">
      <h1>Find Your Perfect Stay</h1>
      <p>Book hotels, apartments, and more</p>

      <div className="homepage-images">
        {hotels.map((hotel) => (
          <img
            key={hotel.id}
            src={hotel.image}
            alt={hotel.name}
            className="homepage-img"
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(hotel)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
