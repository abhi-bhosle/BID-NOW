import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Define the end times for ongoing auctions
  const [auctionTimers, setAuctionTimers] = useState([
    { id: 1, name: 'Sports Bicycle', bid: '$250', endTime: new Date().getTime() + 3600000, image: '/cycle.jpg' },
    { id: 2, name: 'Formal Shirt', bid: '$400', endTime: new Date().getTime() + 7200000, image: '/shirt.jpg' },
    { id: 3, name: 'Backpack', bid: '$150', endTime: new Date().getTime() + 10800000, image: '/bag.jpg' },
    { id: 4, name: 'Badminton Racket', bid: '$600', endTime: new Date().getTime() + 14400000, image: '/racket.jpg' },
    { id: 5, name: 'Gaming Console', bid: '$300', endTime: new Date().getTime() + 18000000, image: '/game.jpg' },
    { id: 6, name: 'Mechanical Keyboard', bid: '$70', endTime: new Date().getTime() + 21600000, image: '/key.jpg' },
    { id: 7, name: 'Bluetooth Speakers', bid: '$120', endTime: new Date().getTime() + 25200000, image: '/speaker.jpg' },
    { id: 8, name: 'Apple iPad', bid: '$350', endTime: new Date().getTime() + 32400000, image: '/ipad.jpg' },
  ]);

  const calculateRemainingTime = (endTime) => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) return 'Auction Ended';

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  // Update timers every second
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setAuctionTimers((prevTimers) =>
        prevTimers.map((timer) => ({
          ...timer,
          remainingTime: calculateRemainingTime(timer.endTime),
        }))
      );
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        
        <div className="dashboard-header">
          <h1>Welcome!</h1>
          <br />
          <p>Discover exciting live auctions and find your next great deal today!</p>
          <div className="dashboard-buttons">
            <button onClick={() => navigate('/create-auction')}>Create Auction</button>
            <button onClick={() => navigate('/manage-auctions')}>Manage Auctions</button>
          </div>
        </div>

        <div className="dashboard-content">
          {/* Recent Auctions */}
          <div className="recent-auctions">
            <h2>Recent Auctions</h2>
            <div className="recent-auction-list">
              <div className="auction-item">
                <img src="/watch.jpg" alt="Auction item" />
                <b><p>Sparx 250 Watch</p></b>
                <p>Current Bid: $100</p>
              </div>
              <div className="auction-item">
                <img src="/laptop.jpg" alt="Auction item" />
                <b><p>MacBook Pro A1548</p></b>
                <p>Current Bid: $200</p>
              </div>
              <div className="auction-item">
                <img src="/camera.jpg" alt="Auction item" />
                <b><p>Canon DSLR Camera</p></b>
                <p>Current Bid: $500</p>
              </div>
              <div className="auction-item">
                <img src="/sofa.jpg" alt="Auction item" />
                <b><p>Luxury Sofa</p></b>
                <p>Current Bid: $1200</p>
              </div>
            </div>
          </div>

          {/* My Activity */}
          <div className="my-activity">
            <h2>My Activity</h2>
            <ul>
              <li>Bid placed on "Vintage Watch" - $100</li>
              <li>Watched "Sports Car" - Current Bid: $1500</li>
              <li>Bid placed on "Gaming Console" - $300</li>
              <li>Watched "Bluetooth Speakers" - Current Bid: $120</li>
              <li>Watched "Apple iPad" - Current Bid: $350</li>
              <li>Bid placed on "Luxury Sofa" - $1200</li>
            </ul>
          </div>

          {/* Upcoming Auctions */}
          <div className="upcoming-auctions">
            <h2>Upcoming Auctions</h2>
            <div className="upcoming-auction-list">
              <div className="auction-item">
                <img src="/shoes.jpg" alt="Auction item" />
                <b><p>Nike Shoes</p></b>
                <p>Starting Bid: $50</p>
              </div>
              <div className="auction-item">
                <img src="/car.jpg" alt="Auction item" />
                <b><p>Classic Car</p></b>
                <p>Starting Bid: $5000</p>
              </div>
              <div className="auction-item">
                <img src="/mona.jpg" alt="Auction item" />
                <b><p>Monalisa Painting</p></b>
                <p>Starting Bid: $2000</p>
              </div>
              <div className="auction-item">
                <img src="/guiter.jpg" alt="Auction item" />
                <b><p>Old Guitar</p></b>
                <p>Starting Bid: $300</p>
              </div>
              <div className="auction-item">
                <img src="/headphones.jpg" alt="Auction item" />
                <b><p>Wireless Headphones</p></b>
                <p>Starting Bid: $100</p>
              </div>
              <div className="auction-item">
                <img src="/camera.jpg" alt="Auction item" />
                <b><p>DSLR Camera</p></b>
                <p>Starting Bid: $800</p>
              </div>
              <div className="auction-item">
                <img src="/smartwatch.jpg" alt="Auction item" />
                <b><p>Smart Watch</p></b>
                <p>Starting Bid: $150</p>
              </div>
              <div className="auction-item">
                <img src="/sofa.jpg" alt="Auction item" />
                <b><p>Luxury Sofa</p></b>
                <p>Starting Bid: $1200</p>
              </div>
            </div>
          </div>

          {/* Ongoing Auctions */}
          <div className="active-auctions">
            <h2>Ongoing Auctions</h2>
            <div className="upcoming-auction-list">
              {auctionTimers.map((item) => (
                <div className="auction-item" key={item.id}>
                  <img src={item.image} alt={`Auction item ${item.name}`} />
                  <b><p>{item.name}</p></b>
                  <p>Current Bid: {item.bid}</p>
                  <p className="countdown-timer">
                    Time Left: {item.remainingTime || 'Calculating...'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="dashboard-footer">
        <div className="footer-row">
          <div className="footer-section contact-section">
            <h3>Contact Us</h3>
            <p><strong>Name:</strong> BidNow Support Team</p>
            <p><strong>Address:</strong> 123 Auction Street, Online City, World 456789</p>
          </div>
          <div className="footer-section email-section">
            <h3>Email</h3>
            <p><strong>General Inquiries:</strong> support@bidnow.com</p>
            <p><strong>Technical Support:</strong> tech@bidnow.com</p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <p>Follow us on:</p>
          <p>
            <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
