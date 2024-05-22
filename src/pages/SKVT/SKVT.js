import React from "react";




import './SKVT.css';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeroImage from "../../components/HeroImage/HeroImage";
import img from '../../images/Rectangle 2.png';
import img2 from '../../images/image 301.png';
import Filter from "../../components/Filter/Filter";
import Item from "../../components/Item/Item";
import DPSeo from "../../components/DetailedProduct/DPSeo";




function SKVT(){



    return(<>
    <HeroImage img1={img}/>
    <BreadCrumbs/>
    <div className="container-fluid mt-5 SKVTSection">
      <div>
        <Filter/>
      </div>
        <div className="Items">
        <div className="row">
 <Item size={'col-md-4'} cardName={'newArrivalsCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'}  />

<Item size={'col-md-4'} cardName={'newArrivalsCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-4'} cardName={'newArrivalsCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-4'} cardName={'newArrivalsCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'}  />

<Item size={'col-md-4'} cardName={'newArrivalsCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-4'} cardName={'newArrivalsCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />




        </div>
        </div>
    </div>
    <HeroImage img1={img2}/>
    <DPSeo/>
    </>)
}



export default React.memo(SKVT);