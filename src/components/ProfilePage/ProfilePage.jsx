import React from "react";
import "./ProfilePage.css";

const ProfilePage = ({ user, setPage }) => {
  if (!user) {
    return (
      <div className="profile-page">
        <h2>Profile</h2>
        <p>No user logged in.</p>
        <button onClick={() => setPage("user-dashboard")}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name || "User"}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <button onClick={() => setPage("user-dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default ProfilePage;
