import React, { useState } from 'react';
import './CreateAuction.css';

const CreateAuction = ({ onAuctionCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuctionCreated(formData); // Pass the created auction to parent
    setFormData({
      title: '',
      description: '',
      image: null,
      category: '',
    }); // Reset the form
  };

  return (
    <div className="create-auction">
      <h2>Create Auction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Auction Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Auction Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageUpload} required />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="art">Art</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="antiques">Antiques</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
