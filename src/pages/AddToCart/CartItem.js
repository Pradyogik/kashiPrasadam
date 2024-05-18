import React ,{useState} from "react";
import './AddToCart.css';
import minusImg from '../../images/minus-cirlce.png';
import plusImg from '../../images/add-circle.png';
import cartImg1 from '../../images/Handicraft.png';
import removeBtnImg from '../../images/Group 228.svg'


function CartItem(props){

    const [count , setCount] = useState(0);

   

    const addCount = ()=>{
     setCount(
       count + 1
      )
    }
    const subCount = ()=>{
     if(count === 0){
         setCount(count)
     }
      else{
         setCount (
             count - 1
         )
      }
    }
 

    return(<>

    <div className="cartContainer">
        <div className="cartCard">
            <div className="cartCardImg">
                <img src={cartImg1} />
            </div>
            <div className="cartCardContent">
                <h2 className=""> {props.cartTitle}</h2>
                <div className="cartBtns">
                <p className='font700 d-inline-block '>Quantity :<button className='' style={{border : 'none' , background : 'none' , outline: 'none'}} onClick={subCount}> <img src={minusImg} /> </button> {count}  <button style={{border : 'none' , background : 'none' , outline: 'none'}} onClick={addCount}> <img src={plusImg} /> </button>  </p>

                <button className="btn ">Remove Item <img className="removeImg" src={removeBtnImg} /> </button>
                </div>
                <div className='d-flex priceContainer'>
                        <h4 className="text-muted"> Price - &nbsp;  </h4>
                        <h3> &#8377; 800 </h3>
                        <h4 className='text-muted  pl-5 mb-0'>  <del>&#8377; 1200</del></h4>
                </div>
            </div>
        </div>

    </div>

    </>)
}



export default React.memo(CartItem);