import React from "react";

// images
import Bg from '../../images/Group 225.png';
import logo from '../../images/image 1.png';
import button1 from '../../images/Group 4.svg'
import button2 from '../../images/Group 5.svg'
import button3 from '../../images/Group 6.svg'
import searchIcon from '../../images/fi_search.svg';



// files
import '../../components/header/Header.css';
import SubHeader from "./SubHeader";
import { NavLink } from "react-router-dom";




function Header(){
    const myStyle = {
        backgroundImage:`url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",    
    };


    return(<>
  <div style={{boxShadow : '8px 8px 3px 2px rgba(0, 0, 0, .1)'}} className="container-fluid mainHeader p-0 sticky-top">
  <nav style={myStyle} className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#"> <img src={logo}/> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <form className="form-inline my-2  my-lg-auto ml-auto searchDiv">
      <i> <img style={{background: "none"}} src={searchIcon}/> </i>
      <input className="form-control mr-sm-2 px-5 searchInput" type="search" placeholder="Search for names..." aria-label="Search"/>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
    <ul className="navbar-nav  ml-auto">
      <li className="nav-item mr-3">
        <NavLink to={'/cart'} className="btns"> <img src={button1}/> </NavLink>
      </li>
      <li className="nav-item mr-3">
      <NavLink to={''} className="btns"> <img src={button2}/> </NavLink>
        
      </li>
      <li className="nav-item">
      <NavLink to={'/register'} className="btns"> <img src={button3}/> </NavLink>   
      </li>
    </ul>
   
  </div>
</nav>
   <SubHeader/>
  </div>
    </>)
}

export default React.memo(Header);