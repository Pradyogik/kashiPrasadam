import React ,{useState} from "react";
// import DealsOfTheDayNav from "../../components/DealsOfTheDayNav";
import { NavLink, Route, Routes } from "react-router-dom";

//
import Idols from '../../pages/Home/Idols';
import Malas from '../../pages/Home/Malas';
import HandiCrafts from '../../pages/Home/HandiCrafts';
import Others from '../../pages/Home/Others';


import '../../pages/Home/HomePage.css';


function DealsOfTheDay(){


  const [activeTab, setActiveTab] = useState("idols");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

    return(<>
    


<div className="container text-center"> 
<div>
    <h3 className="pt-5 pb-3 ">Deals of <span style={{color: "#F26414"}}>the Day</span></h3>
    <p className="m-0">Discover unbeatable savings every day with our Deals of the Day! From exclusive discounts to limited-time offers, seize the opportunity to enjoy top-notch products and services at incredible prices. </p>
    <p className="">Hurry, these deals won't last long!</p>
</div>

 <div>
      <ul className="nav d-flex justify-content-center mb-3 DODNav" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "idols" ? "active" : ""}`}
            id="pills-idols-tab"
            data-toggle="pill"
            href="#pills-idols"
            role="tab"
            aria-controls="pills-idols"
            aria-selected={activeTab === "idols"}
            onClick={() => handleTabClick("idols")}
          >
            Idols
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "malas" ? "active" : ""}`}
            id="pills-malas-tab"
            data-toggle="pill"
            href="#pills-malas"
            role="tab"
            aria-controls="pills-malas"
            aria-selected={activeTab === "malas"}
            onClick={() => handleTabClick("malas")}
          >
            Malas
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "handicrafts" ? "active" : ""}`}
            id="pills-handicrafts-tab"
            data-toggle="pill"
            href="#pills-handicrafts"
            role="tab"
            aria-controls="pills-handicrafts"
            aria-selected={activeTab === "handicrafts"}
            onClick={() => handleTabClick("handicrafts")}
          >
            Handicrafts
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "others" ? "active" : ""}`}
            id="pills-others-tab"
            data-toggle="pill"
            href="#pills-others"
            role="tab"
            aria-controls="pills-contact"
            aria-selected={activeTab === "others"}
            onClick={() => handleTabClick("others")}
          >
            Others
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade show ${activeTab === "idols" ? "active" : ""}`}
          id="pills-idols"
          role="tabpanel"
          aria-labelledby="pills-idols-tab"
        >
           <Idols/> 
        </div>
        <div
          className={`tab-pane fade show ${activeTab === "malas" ? "active" : ""}`}
          id="pills-malas"
          role="tabpanel"
          aria-labelledby="pills-malas-tab"
        >
          <Malas/>
        </div>
        <div
          className={`tab-pane fade show ${activeTab === "handicrafts" ? "active" : ""}`}
          id="pills-handicrafts"
          role="tabpanel"
          aria-labelledby="pills-handicrafts-tab"
        >
               <HandiCrafts/>
        </div>
        <div
          className={`tab-pane fade show ${activeTab === "others" ? "active" : ""}`}
          id="pills-others"
          role="tabpanel"
          aria-labelledby="pills-others-tab"
        >
                 <Others/>
        </div>
      </div>
    </div>
 
</div>



    </>)
}

export default React.memo(DealsOfTheDay);