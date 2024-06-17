// src/SignIn.js
import React, { useContext, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import Localhost from '../variable';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthAdmin} = useContext(AuthContext)
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk menangani sign-in
    const data = await axios.post(`${Localhost}/admin/login`, {
      email ,
      password,
    });
    
    if(data.data.token){
      setIsAuthAdmin(true)
    }

  };

  return (
    <>
      <Header />
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
        <p>Don't have an account? <a href="/dashboard">Sign Up</a></p>
        <p className='forgot-password'><a href="/forgot-password">Forgot Password</a></p>
      </div>
    </div>
    </>
  );
};

export default Login;
