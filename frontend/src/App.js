import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login.jsx';
import Register from './pages/Register';
import MovieInfo from './pages/MoviesInfo'; 
import Faqs from './pages/Faqs';
import NavigationBar from './pages/NavigationBar';
import Schedule from './pages/Schedule';
import Footer from './pages/Footer';
import Seats from './pages/Seats';
import Payments from './pages/Payments/Payments';
import City from './pages/City';
import PaymentConfirmation from './pages/Payments/ConfirmPayments';
import Fnb from './pages/Fnb';
import PurchaseHistory from './pages/PurchaseHistory'
import HomeAdmin from './components/HomeAdmin';
import Catalog from './pages/Catalog';
import LoginAdmin from './pages/Login.js'

import Header from './pages/Header.js'

import Users from './pages/Users';
import EditUser from './pages/pages/EditUser'
import SignIn from './pages/pages/SignIn';
import SignUp from './pages/pages/SignUp';
import ForgotPassword from './pages/pages/ForgotPassword';
import AddNewItem from './pages/AddItem';
import { AuthContext } from './context/authContext.js';
import Logout from './pages/pages/Logout.js';

// dotenv.config();

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthAdmin, setIsAuthAdmin] = useState(false);

  return (
    <Router>
      <div>
        
          <AuthContext.Provider value={{isAuth, setIsAuth, isAuthAdmin, setIsAuthAdmin}}>
        <Routes>
          
            <Route path="/" element={<Home selectedCity={selectedCity} />} />
            <Route path="/loginForm" element={<Login />} />
            <Route path="/registerForm" element={<Register />} />
            <Route path="/moviesInfo" element={<MovieInfo />} />
            <Route path="/schedule-studio" element={<Schedule />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/seats" element={<Seats />} />
            <Route path="/fnb" element={<Fnb />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/purchase-history" element={<PurchaseHistory />} />
            <Route path="/cityMenu" element={<City setSelectedCity={setSelectedCity} />} />
            <Route path="/paymentConfirmation" element={<PaymentConfirmation />} />
            <Route path="/logout" element={<Logout />} />


          <Route  path="admin/" element={<HomeAdmin />} />
          <Route  path="admin/catalog" element={<Catalog />} />
          <Route  path="admin/users" element={<Users />} />
          <Route  path="admin/edit-user" element={<EditUser />} />
          <Route  path="admin/sign-in" element={<SignIn />} />
          <Route  path="admin/sign-up" element={<SignUp />} />
          <Route  path="admin/login" element={<LoginAdmin />} />
          <Route  path="admin/forgot-password" element={<ForgotPassword />} />
          <Route  path="admin/add-item" element={<AddNewItem />} />
        </Routes>
          </AuthContext.Provider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
