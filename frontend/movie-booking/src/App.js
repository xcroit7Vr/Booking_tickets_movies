import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
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
import axios from 'axios'

const App = () => {
   axios.get('http://localhost:5000/user/')
   .then(res => console.log(res))
   .catch(err => console.log(err));
  useEffect(()=> {
  }, [])


  const [selectedCity, setSelectedCity] = useState("");
  return (
    <Router>
      <div>
        < NavigationBar selectedCity={selectedCity} />
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
