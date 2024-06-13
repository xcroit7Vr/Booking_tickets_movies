import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim permintaan reset password ke server, misalnya dengan menggunakan fetch API
    fetch('/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
      setMessage(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Forgot Password</h2>
      {message && <p className="forgot-password-message">{message}</p>}
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <label className="forgot-password-label">
          Email:
          <input className="forgot-password-input" type="email" value={email} onChange={handleChange} />
        </label>
        <button className="forgot-password-button" type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
