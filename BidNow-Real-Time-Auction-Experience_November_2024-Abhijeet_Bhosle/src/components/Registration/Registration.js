import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (username.length < 3 || password.length < 6 || !email.includes('@')) {
      setError('Please check your input fields');
      setLoading(false);
      return;
    }

    const newUser = { username, email, password, role };

    // Simulate registration (store data in localStorage and update parent state)
    if (role === 'admin') {
      localStorage.setItem('registeredAdmin', JSON.stringify(newUser)); // Store admin separately
    } else {
      localStorage.setItem('registeredUser', JSON.stringify(newUser)); // Store user normally
    }

    onRegister(newUser);
    setLoading(false);
    setError('');
    navigate('/login'); // Redirect to login after successful registration
  };

  return (
    <div className='registration-page'>
      <div className="form-container">
        <div className="register-banner">
          <img src="/logob.png" alt="BidNow Logo" className="logo" />
          <h2>Register to BidNow</h2>
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* Role selection dropdown */}
          <div className="role-selection">
            <label>Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit">{loading ? 'Registering...' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
