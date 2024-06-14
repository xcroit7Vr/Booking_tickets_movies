// src/SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk menangani sign-in
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
      <div className="sign-up-forgot-password">
        <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>
        <p className='forgot-password'><a href="/forgot-password">Forgot Password</a></p>
      </div>
    </div>
  );
};

export default SignIn;
