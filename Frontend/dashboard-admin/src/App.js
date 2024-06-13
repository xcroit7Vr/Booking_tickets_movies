import React from 'react';
import Home from './components/Home'
import Header from './page/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './page/Catalog';
import Users from './page/Users';
import EditUser from './page/pages/EditUser'
import SignIn from './page/pages/SignIn';
import SignUp from './page/pages/SignUp';
import ForgotPassword from './page/pages/ForgotPassword';
import AddNewItem from './page/AddItem';
import Login from './page/Login'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/catalog" element={<Catalog />} />
          <Route  path="/users" element={<Users />} />
          <Route  path="/edit-user" element={<EditUser />} />
          <Route  path="/sign-in" element={<SignIn />} />
          <Route  path="/sign-up" element={<SignUp />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/forgot-password" element={<ForgotPassword />} />
          <Route  path="/add-item" element={<AddNewItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
