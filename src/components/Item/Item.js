import React, { useState } from "react";


// css
import './Item.css';
import { Link } from "react-router-dom";


// change the static text to dynamic using props or whatever you desire. i kept it static to check UI

function Item(props){
  const [isHover , setHover] = useState(true)
  const handleMouseLeave = ()=>{
    setHover(false)
  }
  const handleMouseEnter = ()=>{
    setHover(true)
  }
  
  console.log(props , 'hry');

// console.log(props);
    return (<>
     <div className={`${props.size} mouse_Style`} >
     <Link className="divertToProduct"  to={'/detailedProduct'}>
<div  className={`card ${props.cardName} mb-3`}>
  <img  className="card-img-top" src={props.ogImg} onMouseEnter={e => (e.currentTarget.src = props.hoverImg)} onMouseLeave={e => (e.currentTarget.src = props.ogImg)} alt="Card image cap"/>
  <div className="card-body">
  <p className="card-text">9 Rakhi Mudra</p> 
    <h6>Rs. 500</h6>
    <p>Rs. 500</p>
  </div>
</div>
</Link>
</div>

    </>)
}


export default React.memo(Item);