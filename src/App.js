import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import HomePage from './pages/Home/HomePage.js';

import { Route , Routes , useLocation  } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Rudraksha from './pages/Rudraksha/Rudraksha.js';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs.js';
import Register from './pages/Register/Register.js';
import Login from './pages/Login/Login.js';
import ResetPassword from './pages/ForgotPassword/ResetPassword.js';
import UpdatePassword from './pages/ForgotPassword/updatePassword.js';
import DetailedProduct from './components/DetailedProduct/DetailedProduct.js';
import AddToCart from './pages/AddToCart/AddToCart.js';
import Brass from './pages/Brass/Brass.js';
import More from './pages/More/More.js';
import PujaItems from './pages/PujaItems/PujaItems.js';
import SKVT from './pages/SKVT/SKVT.js';
import { useState } from 'react';





function App() {
  const location = useLocation();
  const noHeaderFooterPaths = ['/login', '/register'];

  return (
    <div className="App">
      {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mala" element={<Rudraksha />} />
        <Route path="/brass" element={<Brass />} />
        <Route path="/more" element={<More />} />
        <Route path="/puja-item" element={<PujaItems />} />
        <Route path="/skvt-special" element={<SKVT />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
        <Route path="/detailedProduct" element={<DetailedProduct />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
      {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}


export default App;
