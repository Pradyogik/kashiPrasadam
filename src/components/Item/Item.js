import React from "react";


// css
import './Item.css';
import { Link } from "react-router-dom";


// change the static text to dynamic using props or whatever you desire. i kept it static to check UI

function Item(props){


console.log(props);
    return (<>
     <div className={`${props.size}`} >

<div className={`card ${props.cardName} mb-3`}>
  <img className="card-img-top" src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg" alt="Card image cap"/>
  <div className="card-body">
  <p className="card-text"><Link className="divertToProduct"  to={'/login'}>9 Rakhi Mudra</Link></p> 
    <h6>Rs. 500</h6>
    <p>Rs. 500</p>
  </div>
</div>


</div>

    </>)
}


export default React.memo(Item);