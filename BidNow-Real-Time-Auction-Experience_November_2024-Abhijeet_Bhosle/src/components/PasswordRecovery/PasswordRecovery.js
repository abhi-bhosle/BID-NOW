// src/components/PasswordRecovery/PasswordRecovery.js
import React, { useState } from 'react';
import './PasswordRecovery.css';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFeedback('Invalid email format.');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback('Password recovery link has been sent to your email!');
    }, 2000);
  };

  return (
    <div className='password-recovery-page'>
    <div className="form-container">
      <h2>Password Recovery</h2>
      {feedback && <p>{feedback}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Recovery Link'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default PasswordRecovery;
