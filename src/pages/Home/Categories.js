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

                
   <div className="card bg-dark text-white style_prevu_kit">
   <NavLink to={'/brass'}> 
  <img className="card-img" src={div1Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
    <h2 className="card-title  text-light">Brass Items</h2> 
    {/* to link these texts to a page */} 
  </div>
  </NavLink>
  </div>
  

  <div className="card bg-dark text-white style_prevu_kit">
  <NavLink to={'/mala'}>
  <img className="card-img" src={div2Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
  <h2 className="card-title  text-light">Rudraksha</h2>
    {/* to link these texts to a page */}
  </div>
  </NavLink>
  </div>


  <div className="card bg-dark text-white style_prevu_kit">
  <NavLink to={'/more'}>
  <img className="card-img " src={div3Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
  <h2 className="card-title  text-light">Handicrafts</h2> 
    {/* to link these texts to a page */}
  </div>
  </NavLink>
  </div>


  <div className="card bg-dark text-white style_prevu_kit">
  <NavLink to={'/brass'}>
  <img className="card-img" src={div4Img} alt="Card image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
 <h2 className="card-title  text-light">Paintings</h2>
    {/* to link these texts to a page */}

  </div>
  </NavLink>
  </div>
                          
             
</div>
<img className="catogoryFooterImg img img-fluid" src={divFooterImg}></img>
</div>
    
    </>)
}

export default React.memo(Categories);