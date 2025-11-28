import React from "react";

const hotels = [
  { id: 1, name: "City Central", location: "City Center", price: "$120", status: "Active" },
  { id: 2, name: "Grand Palace", location: "Downtown", price: "$200", status: "Active" },
  { id: 3, name: "Heritage Stay", location: "Old Town", price: "$150", status: "Active" },
  { id: 4, name: "Lakeview Lodge", location: "Lakeside", price: "$180", status: "Active" },
  { id: 5, name: "Mountain Retreat", location: "Highlands", price: "$160", status: "Active" },
  { id: 6, name: "Ocean View", location: "Beachfront", price: "$220", status: "Active" },
];

const ManageHotelsPage = ({ setPage }) => {
  const handleEdit = (hotel) => {
    alert(`Edit hotel: ${hotel.name}`);
  };

  const handleDelete = (hotel) => {
    if (window.confirm(`Are you sure you want to delete ${hotel.name}?`)) {
      alert(`${hotel.name} deleted (simulation)`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Hotels</h2>
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
            <th>Hotel Name</th>
            <th>Location</th>
            <th>Price/Night</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>{hotel.price}</td>
              <td>{hotel.status}</td>
              <td>
                <button onClick={() => handleEdit(hotel)} style={{ marginRight: "8px" }}>Edit</button>
                <button onClick={() => handleDelete(hotel)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageHotelsPage;
