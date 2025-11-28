import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import HomePage from "./components/Homepage/HomePage";
import Register from "./components/Register/Register";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import HotelDetail from "./components/HotelDetail/HotelDetail";
import Booking from "./components/Booking/Booking";

// Dashboards
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard.jsx";
import UserDashboard from "./components/Dashboard/UserDashboard/UserDashboard.jsx";

// Admin Pages
import ManageHotelsPage from "./components/AdminPages/ManageHotelsPage.jsx";
import ManageUsersPage from "./components/AdminPages/ManageUsersPage.jsx";
import ViewBookingsPage from "./components/AdminPages/ViewBookingsPage.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleLogout = () => {
    setUser(null);
    setPage("home");
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage setPage={setPage} setSelectedHotel={setSelectedHotel} />;
      case "login":
        return <Login setUser={setUser} setPage={setPage} />;
      case "register":
        return <Register setUser={setUser} setPage={setPage} />;
      case "user-dashboard":
        return (
          <UserDashboard
            loggedInUser={user}
            setPage={setPage}
            setSelectedHotel={setSelectedHotel}
          />
        );
      case "profile":
        return <ProfilePage user={user} setPage={setPage} />;
      case "admin-dashboard":
        return <AdminDashboard setPage={setPage} />;
      case "manage-hotels":
        return <ManageHotelsPage setPage={setPage} />;       // ✅ Added setPage
      case "manage-users":
        return <ManageUsersPage setPage={setPage} />;        // ✅ Added setPage
      case "view-bookings":
        return <ViewBookingsPage setPage={setPage} />;       // ✅ Added setPage
      case "hotel-detail":
        return <HotelDetail hotel={selectedHotel} setPage={setPage} />;
      case "booking":
        return <Booking hotel={selectedHotel} setPage={setPage} />;
      default:
        return <HomePage setPage={setPage} setSelectedHotel={setSelectedHotel} />;
    }
  };

  return (
    <div>
      <Header setPage={setPage} user={user} handleLogout={handleLogout} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
