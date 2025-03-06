import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="wave-background"></div> {/* Optional: Add any wave effect here */}
        <div className="hero-content">
          <h1>Welcome to BidNow</h1>
          <p>Experience the thrill of online auctions with ease and security.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn secondary-btn">Register</Link>
            <Link to="/login" className="btn primary-btn">Login</Link>
          </div>
        </div>
      </header>

      {/* Info Section */}
      <section className="info-section">
        <h2>Why Choose BidNow ?</h2>
        <div className="info-content">
          <div className="info-card">
            <h3>Secure Auctions</h3>
            <img src="/secure.jpg" alt="Secure Auctions" className="info-card-image" />
            <p>Bid with confidence knowing your transactions are secure.</p>
          </div>
          <div className="info-card">
            <h3>Real-Time Bidding</h3>
            <img src="/se.jpg" alt="Real-Time Bidding" className="info-card-image" />
            <p>Engage in live auctions with intuitive real-time features.</p>
          </div>
          <div className="info-card">
            <h3>Wide Variety</h3>
            <img src="/re.jpg" alt="Wide Variety" className="info-card-image" />
            <p>Discover auctions across multiple categories and interests.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} AuctionBazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
