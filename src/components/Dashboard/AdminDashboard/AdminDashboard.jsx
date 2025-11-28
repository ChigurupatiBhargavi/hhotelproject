import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = ({ setPage }) => {
  return (
    <div className="dashboard admin">
      <h2>Admin Dashboard</h2>
      <div className="cards">
        <div className="card" onClick={() => setPage("manage-hotels")}>
          Manage Hotels
        </div>
        <div className="card" onClick={() => setPage("manage-users")}>
          Manage Users
        </div>
        <div className="card" onClick={() => setPage("view-bookings")}>
          View Bookings
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
