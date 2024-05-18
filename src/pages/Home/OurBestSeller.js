import React from "react";
import Item from "../../components/Item/Item";


// instructions: there are two carousel-item section.
// each carousel-item consists 4 images. and if u are making it dynamic make sure u add 2 carousel-item
// 1. with active class and one without class


function OurBestSeller(){



    return(<>
    <div className="container-fluid OurBestSellerContainer ">
        <div className="OurBestSellerChild1 d-flex justify-content-between align-items-center px-5 pb-3">
        <h5>Our Bestseller</h5>
        <button >See All</button>
        </div>
        <div className="OurBestSellerChild2 container-fluid px-5">

<div id="carouselExampleControls" className="carousel slide" data-intervall="false">
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
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


</div>

        </div>
    </>)
}


export default React.memo(OurBestSeller);