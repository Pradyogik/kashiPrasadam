import React from "react";
import Header from "../../components/header/Header";
import Categories from "./Categories";
import OurBestSeller from "./OurBestSeller";
import NewArrivals from "./NewArrivals";
import ImageCollage from "./ImageCollage";
import DealsOfTheDay from "./DealsOfTheDay";




// images
import HeroImage from "../../components/HeroImage/HeroImage";
import hero  from '../../images/Rectangle 2.png';
import commercialBg from '../../images/image 301.png'




function HomePage(){



    return(<>
    <HeroImage img1={hero} />
    <Categories/>
    <OurBestSeller/>
    <NewArrivals  />
    <ImageCollage/>
    <HeroImage img1={commercialBg} />
    <DealsOfTheDay/>
    </>)
}

export default React.memo(HomePage);