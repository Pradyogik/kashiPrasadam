import React from "react";
// images
import div1Img from '../../images/Group 266.png';
import div2Img from '../../images/Rectangle 4.png';
import div3Img from '../../images/Rectangle 5.png';
import div4Img from '../../images/Rectangle 5 (1).png';
import divFooterImg from '../../images/Group 268.png';

 

//files
import './HomePage.css';
import { Link, NavLink } from "react-router-dom";


function Categories(){
   



    return(<>
    

    <div  className="container-fluid categoriesContainer">
        <div className="categoriesSubContainer">

                
   <div className="card bg-dark text-white"> 
  <img className="card-img" src={div1Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
  <NavLink to={'/brass'}>  <h5 className="card-title font-weight-bold text-light">Brass Items</h5> </NavLink>
    {/* to link these texts to a page */}
    
  </div>
  </div>
  

  <div className="card bg-dark text-white">
  <img className="card-img" src={div2Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
  <NavLink to={'/brass'}><h5 className="card-title  text-light">Rudraksha</h5> </NavLink>
    {/* to link these texts to a page */}
  </div>
  </div>


  <div className="card bg-dark text-white">
  <img className="card-img " src={div3Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
  <NavLink to={'/brass'}><h5 className="card-title  text-light">Handicrafts</h5> </NavLink>
    {/* to link these texts to a page */}

  </div>
  </div>


  <div className="card bg-dark text-white">
  <img className="card-img" src={div4Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
  <NavLink to={'/brass'}><h5 className="card-title  text-light">Paintings</h5></NavLink>
    {/* to link these texts to a page */}

  </div>
  </div>
                

               

            
             
</div>
<img className="catogoryFooterImg img img-fluid" src={divFooterImg}></img>
</div>
    
    </>)
}

export default React.memo(Categories);