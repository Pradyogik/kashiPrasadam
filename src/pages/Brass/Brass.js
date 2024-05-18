import React from "react";




import './Brass.css';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeroImage from "../../components/HeroImage/HeroImage";
import img from '../../images/Rectangle 2.png';
import img2 from '../../images/image 301.png';
import Filter from "../../components/Filter/Filter";
import Item from "../../components/Item/Item";




function Brass(){



    return(<>
    <HeroImage img1={img}/>
    <BreadCrumbs/>
    <div className="container-fluid mt-5 BrassSection">
      <div>
        <Filter/>
      </div>
        <div className="Items">
        <div className="row">
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />
        <Item size={'col-md-4'} cardName={'newArrivalsCard'}  />



        </div>
        </div>
    </div>
    <HeroImage img1={img2}/>
    </>)
}



export default React.memo(Brass);