import React from "react";
import arrivalsBG from '../../images/Group 270.png';
import Item from '../../components/Item/Item.js'

function OurArrivals(){
   


   return(<>
<div className="container-fluid newArrivalsContainer px-0">
        <div className="newArrivalsChild1 d-flex justify-content-between align-items-center pb-3 px-5 ">
        <h5>New Arrivals</h5>
        <button >See All</button>
        </div>
        <div className="newArrivalsChild2 container-fluid  px-5">

<div id="carouselExampleControl" className="carousel slide" data-intervall="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />

       
      
      </div>

    </div>
    <div className="carousel-item">
      <div className="row">
      <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
      <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
      <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
      <Item size={'col-md-3'} cardName={'newArrivalsCard'}  />
       
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControl" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControl" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


</div>

        </div>
  </>)

}

export default React.memo(OurArrivals);



 {/* <div className="col-md-3 ">

          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg" alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>


        </div> */}
        {/* <div className="col-md-3">

          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/55_Diamond_Cut_Sphatik_Mala_27072019160633.jpeg" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>


        </div> */}
        {/* <div className="col-md-3">


          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/55_Diamond_Cut_Sphatik_Mala_27072019160633.jpeg" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>


        </div> */}
        {/* <div className="col-md-3">


          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom%20(5).jpg" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>

        </div> */}

        // carousel item 2nd slide
         {/* <div className="col-md-3">


          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>


        </div>
        <div className="col-md-3">

          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>

        </div>
        <div className="col-md-3">

          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>

        </div>
        <div className="col-md-3">

          <div className="card newArrivalsCard">
            <img className="card-img-top" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">9 Rakhi Mudra</p>
              <h6>Rs. 500</h6>
              <p>Rs. 500</p>
            </div>
          </div>

        </div> */} 
