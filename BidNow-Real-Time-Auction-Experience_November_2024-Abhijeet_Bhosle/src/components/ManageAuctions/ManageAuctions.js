import React from 'react';
import './ManageAuctions.css';

const ManageAuctions = ({ auctions, onDelete }) => {
  return (
    <div className="manage-auctions">
      <h2>Manage Auctions</h2>
      {auctions.length > 0 ? (
        <div className="auction-list1">
          {auctions.map((auction, index) => (
            <div key={index} className="auction-item1">
              {auction.image && (
                <img src={auction.image} alt={auction.title} style={{ width: '100px', height: '100px' }} />
              )}
              <div className="auction-details">
                <h3>{auction.title}</h3>
                <p>{auction.description}</p>
              </div>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No auctions available.</p>
      )}
    </div>
  );
};

export default ManageAuctions;
