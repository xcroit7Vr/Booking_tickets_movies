// src/SignIn.js
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Logout = () => {
    
    const {setIsAuth, isAuth} = useContext(AuthContext);

    useEffect(() => {
        setIsAuth(false)
        
    }, [])


  return (
    <Navigate to={'/'} />
  );
};

export default Logout;
