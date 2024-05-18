import React, { useState } from "react";
import CartImg from '../../images/Group 276.png';
import HeroImage from "../../components/HeroImage/HeroImage";
import heroImg from '../../images/image 301.png'
import './AddToCart.css';
import Cart from "./Cart";



function AddToCart(){


const [cart , updateCart] = useState([1])

    if(cart.length == 0){

        return(<>
       <div className="container-fluid my-5 cartContainer">
       <img className="mb-5" src={CartImg}/>
       <HeroImage img1={heroImg} />
       </div>
            </>)

    }

    else{
        return(<>
<Cart/>
<HeroImage img1={heroImg} />

            </>) 
    }
   
}


export default React.memo(AddToCart);