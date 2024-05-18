import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import HomePage from './pages/Home/HomePage.js';

import { Route , Routes  } from 'react-router';
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





function App() {
  
  return (
    <div className="App">
       <Header/>
 <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/mala" element={<Rudraksha/>}></Route>
    <Route path="/brass" element={<Brass/>}></Route>
    <Route path="/more" element={<More/>}></Route>
    <Route path="/puja-item" element={<PujaItems/>}></Route>
    <Route path="/skvt-special" element={<SKVT/>}></Route>  
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/resetPassword" element={<ResetPassword/>}></Route>
    <Route path="/updatePassword" element={<UpdatePassword/>}></Route>
    <Route path="/detailedProduct" element={<DetailedProduct/>}></Route>
    {/* you can customize detailed products link to take id and display product */}
    <Route path="/cart" element={<AddToCart/>}></Route>

</Routes>

      <Footer/>



      
    </div>
  );
}

export default App;
