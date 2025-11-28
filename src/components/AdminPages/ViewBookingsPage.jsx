import React from "react";

const bookings = [
  { id: 101, user: "Bhargavi", hotel: "City Central", checkIn: "2025-10-15", checkOut: "2025-10-18", status: "Confirmed" },
  { id: 102, user: "Aadhya Sharma", hotel: "Grand Palace", checkIn: "2025-10-20", checkOut: "2025-10-22", status: "Cancelled" },
  { id: 103, user: "Lalitha Benerji", hotel: "Ocean View", checkIn: "2025-11-01", checkOut: "2025-11-05", status: "Completed" },
  { id: 104, user: "Sneha Patel", hotel: "Lakeview Lodge", checkIn: "2025-10-25", checkOut: "2025-10-28", status: "Confirmed" },
  { id: 105, user: "Karan Singh", hotel: "Mountain Retreat", checkIn: "2025-11-02", checkOut: "2025-11-06", status: "Pending" },
  { id: 106, user: "Divya Rao", hotel: "Heritage Stay", checkIn: "2025-10-30", checkOut: "2025-11-03", status: "Confirmed" },
];

const ViewBookingsPage = ({ setPage }) => {
  const handleEdit = (booking) => {
    alert(`Edit booking: ${booking.id}`);
  };

  const handleDelete = (booking) => {
    if (window.confirm(`Are you sure you want to delete booking ${booking.id}?`)) {
      alert(`Booking ${booking.id} deleted (simulation)`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>View Bookings</h2>
      <button
        onClick={() => setPage("admin-dashboard")}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back to Dashboard
      </button>

      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Hotel</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user}</td>
              <td>{booking.hotel}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => handleEdit(booking)} style={{ marginRight: "8px" }}>Edit</button>
                <button onClick={() => handleDelete(booking)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookingsPage;
