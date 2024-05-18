import React from "react";
import Item from "../Item/Item";



function ProductList(props){


    return(<>
        <div className="container-fluid OurBestSellerContainer ">
            <div className="OurBestSellerChild1 d-flex justify-content-between align-items-center px-5 pb-3">
            <h5>{props.title}</h5>
            <button >{props.buttonText}</button>
            </div>
            <div className="OurBestSellerChild2 container-fluid px-5">
    
    <div id={props.divTitle} className="carousel slide" data-intervall="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
          <Item size={"col-md-3"} cardName={'bestSellerCard'} />
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
    
          </div>
    
        </div>
        <div className="carousel-item">
          <div className="row">
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
          <Item size={"col-md-3"} cardName={'bestSellerCard'}/>
          </div>
        </div>
    
      </div>
      <a className="carousel-control-prev" href={`#${props.divTitle}` } role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={`#${props.divTitle}` } role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    
    
    </div>
    
            </div>
        </>)
}

export default React.memo(ProductList);