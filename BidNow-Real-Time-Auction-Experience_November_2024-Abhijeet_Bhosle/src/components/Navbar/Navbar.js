import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false); // State for notifications
  const navigate = useNavigate();

  // Handle Logout: Clear user data and navigate to the login page
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear stored user data
    navigate('/login'); // Redirect to the login page
  };

  // Toggle Notification Message
  const handleNotifications = () => {
    setShowNotification(true); // Show notification message
    setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logob2.png" alt="BidNow Logo" className="logo-image" />
        <h1>BidNow</h1>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Home</Link>
        <button onClick={handleNotifications} className="notifications-btn">Notifications</button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      {showNotification && (
        <div className="notification-message">
          <p>There are no notifications here.</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
