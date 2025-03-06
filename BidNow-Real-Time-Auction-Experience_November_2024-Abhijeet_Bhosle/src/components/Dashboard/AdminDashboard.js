import React, { useState } from "react";
import "./AdminDashboard.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const AdminDashboard = () => {
  const [auctionItems, setAuctionItems] = useState([
    {
      id: 1,
      name: "Antique Vase",
      price: "$500",
      status: "pending",
      image: "/assets/vase.jpg", // Placeholder image URL
    },
    {
      id: 2,
      name: "Vintage Watch",
      price: "$1500",
      status: "pending",
      image: "/assets/vintage.jpg",
    },
    {
      id: 3,
      name: "Painting",
      price: "$2000",
      status: "pending",
      image: "/assets/paint.jpg",
    },
    {
      id: 4,
      name: "Gold Necklace",
      price: "$2500",
      status: "pending",
      image: "/assets/neckk.jpg",
    },
    {
      id: 5,
      name: "Diamond Ring",
      price: "$3500",
      status: "pending",
      image: "/assets/ringg.jpg",
    },
  ]);

  const [approvedItems, setApprovedItems] = useState([]);
  const [rejectedItems, setRejectedItems] = useState([]);

  const handleApprove = (item) => {
    setApprovedItems([...approvedItems, item]);
    setAuctionItems(auctionItems.filter((i) => i.id !== item.id));
  };

  const handleReject = (item) => {
    setRejectedItems([...rejectedItems, item]);
    setAuctionItems(auctionItems.filter((i) => i.id !== item.id));
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header1">
        <h1>Admin Dashboard</h1>
      </header>

      {/* Analytics Section */}
      <section className="analytics-section">
        <h2>Analytics</h2>
        <div className="analytics-graphs">
          <div className="graph">
            <LineChart
              width={500}
              height={300}
              data={[
                { name: "Jan", auctions: 10 },
                { name: "Feb", auctions: 20 },
                { name: "Mar", auctions: 18 },
                { name: "Apr", auctions: 25 },
                { name: "May", auctions: 30 },
              ]}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <Line type="monotone" dataKey="auctions" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
          <div className="graph">
            <BarChart
              width={500}
              height={300}
              data={[
                { name: "Jan", activeUsers: 100, newSignups: 25 },
                { name: "Feb", activeUsers: 120, newSignups: 30 },
                { name: "Mar", activeUsers: 150, newSignups: 40 },
                { name: "Apr", activeUsers: 200, newSignups: 50 },
                { name: "May", activeUsers: 250, newSignups: 70 },
              ]}
            >
              <Bar dataKey="activeUsers" fill="#82ca9d" />
              <Bar dataKey="newSignups" fill="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </div>
        </div>
      </section>

      {/* Review Auction Listings Section */}
      <section className="review-section">
        <h2>Review Auction Listings</h2>
        <div className="auction-table">
          <table>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Approve</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {auctionItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price || "N/A"}</td>
                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => handleApprove(item)}
                    >
                      Approve
                    </button>
                  </td>
                  <td>
                    <button
                      className="reject-btn"
                      onClick={() => handleReject(item)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Management Section */}
      <section className="management-section">
        <h2>Manage Auctions</h2>
        <div className="management-boxes">
          <div className="approved-box">
            <h3>Approved</h3>
            <ul>
              {approvedItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rejected-box">
            <h3>Rejected</h3>
            <ul>
              {rejectedItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
    <footer className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            BidNow is a platform to streamline online auctions for everyone. Join us to explore a world of exciting auctions and valuable items.
          </p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>My Bids</li>
            <li>Active Auctions</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>Email: support@bidnow.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Auction Lane, BidCity, BC</p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 BidNow. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default AdminDashboard;
