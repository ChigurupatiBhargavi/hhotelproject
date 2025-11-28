import React, { useEffect, useState } from "react";
import "./UserDashboard.css";

/* Full hotels data */
const hotels = [
  { id: 1, name: "City Central", image: "/images/city-central.jpg", location: "City Center", price: 120, description: "A modern hotel in the heart of the city." },
  { id: 2, name: "Grand Palace", image: "/images/grand-palace.jpg", location: "Downtown", price: 200, description: "Luxury rooms with palace-like interiors." },
  { id: 3, name: "Heritage Stay", image: "/images/heritage-stay.jpg", location: "Old Town", price: 150, description: "Experience traditional heritage style stay." },
  { id: 4, name: "Lakeview Lodge", image: "/images/lakeview-lodge.jpg", location: "Lakeside", price: 180, description: "Beautiful view of the lake and mountains." },
  { id: 5, name: "Mountain Retreat", image: "/images/mountain-retreat.jpg", location: "Highlands", price: 160, description: "Peaceful retreat in the mountains." },
  { id: 6, name: "Ocean View", image: "/images/ocean-view.jpg", location: "Beachfront", price: 220, description: "Relaxing ocean view hotel with private beach." },
];

const UserDashboard = ({ setPage = () => {}, setSelectedHotel = () => {}, loggedInUser }) => {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [user, setUser] = useState(loggedInUser || null);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);

    const savedUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(loggedInUser || savedUser);
  }, [loggedInUser]);

  const openHotel = (hotel) => {
    setSelectedHotel(hotel);
    setPage("hotel-detail");
  };

  const handleBookNow = (hotel) => {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const newBooking = {
      id: Date.now(), // unique id for each booking
      hotelName: hotel.name,
      roomType: "Standard",
      guests: 2,
      checkIn: today.toISOString().slice(0, 10),
      checkOut: tomorrow.toISOString().slice(0, 10),
      price: hotel.price,
    };

    const updated = [...bookings, newBooking];
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
    alert(`Booked ${hotel.name} — saved to your booking history`);
  };

  const handleDeleteBooking = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmed) return;

    const updated = bookings.filter((b) => b.id !== id); // delete only the one clicked
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="dashboard user">
      <h2>User Dashboard</h2>

      {/* Tabs */}
      <div className="cards">
        <div className="card" onClick={() => setActiveTab("search")}>Search Hotels</div>
        <div className="card" onClick={() => setPage("profile")}>Profile</div>
      </div>

      {/* Booking History */}
      <div className="my-bookings">
        <h3>My Booking History</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Hotel</th>
                <th>Room</th>
                <th>Guests</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Price</th>
                <th>Action</th> {/* Delete button column */}
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>{b.hotelName}</td>
                  <td>{b.roomType}</td>
                  <td>{b.guests}</td>
                  <td>{b.checkIn}</td>
                  <td>{b.checkOut}</td>
                  <td>${b.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteBooking(b.id)}
                      style={{
                        padding: "5px 12px",
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#b52a37")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Search Hotels */}
      {activeTab === "search" && (
        <div className="search-hotels">
          <h3>Explore & Book Hotels</h3>
          <div className="homepage-images">
            {hotels.map((hotel) => (
              <div className="homepage-card" key={hotel.id}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="homepage-img"
                  onClick={() => openHotel(hotel)}
                />
                <div className="homepage-card-body">
                  <h4>{hotel.name}</h4>
                  <p className="hp-location">{hotel.location}</p>
                  <p className="hp-desc">{hotel.description}</p>
                  <p className="hp-price">${hotel.price} / night</p>
                  <div className="hp-actions">
                    <button onClick={() => openHotel(hotel)}>View</button>
                    <button onClick={() => handleBookNow(hotel)}>Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
