import React, { useState } from 'react';
import Header from '../Header';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk menangani sign-up
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
    <Header />
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
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
        <button type="submit" className="sign-up-button">Sign Up</button>
      </form>
      <div className="sign-in-link">
        Already have an account? <a href="/sign-in">Sign In!</a>
      </div>
    </div>
    </>
  );
};

export default SignUp;
