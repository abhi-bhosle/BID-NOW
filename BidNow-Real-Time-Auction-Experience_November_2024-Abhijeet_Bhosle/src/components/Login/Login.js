import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user or admin data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
    const storedAdmin = JSON.parse(localStorage.getItem('registeredAdmin'));

    // Check if credentials match the selected role
    if (role === 'user' && storedUser && email === storedUser.email && password === storedUser.password) {
      navigate('/dashboard'); // Redirect to User Dashboard
    } else if (role === 'admin' && storedAdmin && email === storedAdmin.email && password === storedAdmin.password) {
      navigate('/admin-dashboard'); // Redirect to Admin Dashboard
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
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
            <label>Login as:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit">Login</button>
        </form>
        <Link to="/password-recovery" className="link">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
