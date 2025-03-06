import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard'; // Import AdminDashboard
import CreateAuction from './components/CreateAuction/CreateAuction';
import ManageAuctions from './components/ManageAuctions/ManageAuctions';
import HomePage from './components/HomePage/HomePage'; // Add this import
import './App.css';

const App = () => {
  const [registeredUser, setRegisteredUser] = useState(null); // Stores registered user data
  const [auctions, setAuctions] = useState([]); // Stores the list of auctions

  // Function to handle creating a new auction
  const handleCreateAuction = (newAuction) => {
    setAuctions([...auctions, newAuction]);
  };

  // Function to handle deleting an auction
  const handleDeleteAuction = (index) => {
    setAuctions(auctions.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Corrected path */}
          <Route
            path="/register"
            element={<Registration onRegister={setRegisteredUser} />}
          />
          <Route
            path="/login"
            element={<Login registeredUser={registeredUser} />}
          />
          <Route
            path="/password-recovery"
            element={<PasswordRecovery />}
          />
          {/* Conditional Rendering Based on Role */}
          <Route
            path="/dashboard"
            element={
              registeredUser?.role === 'admin' ? (
                <Navigate to="/admin-dashboard" /> // Redirect to admin dashboard
              ) : (
                <Dashboard />
              )
            }
          />
          {/* Admin Dashboard Route */}
          <Route
            path="/admin-dashboard"
            element={registeredUser?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/create-auction"
            element={<CreateAuction onAuctionCreated={handleCreateAuction} />}
          />
          <Route
            path="/manage-auctions"
            element={<ManageAuctions auctions={auctions} onDelete={handleDeleteAuction} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
