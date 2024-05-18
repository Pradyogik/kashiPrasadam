import React from "react";
import CartItem from "./CartItem";


function Cart(){


    return(<>
    <div className="cartParent mb-5 container-fluid">
       <div className="cartItemContainer">
       <h2 className="">Shopping Cart</h2>
       <CartItem cartTitle={'mala of 108 beads'} />
        <CartItem cartTitle={'mala of 108 beads'} />
        <CartItem cartTitle={'mala of 108 beads'} />
        <CartItem cartTitle={'mala of 108 beads'} />
       </div>
        <div className=" mt-5 cartTotalSection">
    <h2>Cards Subtotal</h2>
    <div className="totalDiv d-flex justify-content-between">
        <p>total</p>
        <h5>&#8377; 800 <br/>&#8377; 800</h5>
    </div>
        <hr style={{width : '95%' , backgroundColor : '#f26414'}} className="d-inline-block "></hr>
    <div className="shippingDiv d-flex justify-content-between">
        <p>shipping Charges</p>  <h5>&#8377; 1750</h5>
    </div>
        <hr style={{width : '95%' , backgroundColor : '#f26414'}} className="d-inline-block "></hr>
    <div className="grandTotalDiv d-flex justify-content-between">
       <p> Grand Total</p> <h5>&#8377; 1750</h5>
    </div>
    <div className="paynowBtnDiv">

        <button className="">Pay Now</button>
    </div>
    </div>
    </div> 
    </>)
}


export default React.memo(Cart);