import React from "react";




import './PujaItems.css';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeroImage from "../../components/HeroImage/HeroImage";
import img from '../../images/Rectangle 2.png';
import img2 from '../../images/image 301.png';
import Filter from "../../components/Filter/Filter";
import Item from "../../components/Item/Item";




function More(){



    return(<>
    <HeroImage img1={img}/>
    <BreadCrumbs/>
    <div className="container-fluid mt-5 PujaItemsSection">
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

        </div>
        </div>
    </div>
    <HeroImage img1={img2}/>
    </>)
}



export default React.memo(More);