import React from "react";
import "./Header.css";

const Header = ({ setPage, user, handleLogout }) => {
  return (
    <header>
      <h1>Hotel Booking</h1>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        {!user && <button onClick={() => setPage("login")}>Login</button>}
        {!user && <button onClick={() => setPage("register")}>Register</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Header;
