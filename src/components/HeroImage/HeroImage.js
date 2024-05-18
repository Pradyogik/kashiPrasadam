import React from "react";


function HeroImage(props){





    return(<>
    <div className="container-fluid p-0">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={props.img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img1}  alt="Second slide"/>
      {/*you can change image by passing it as a props */}
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img1}  alt="Third slide"/>
      {/*you can change image by passing it as a props */}

    </div>
  </div>
</div>
    </div>
    </>)
}

export default React.memo(HeroImage);