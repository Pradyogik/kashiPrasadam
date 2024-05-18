import React , {useState} from "react";
import Description from "./Description";
import Specification from "./Specification";



function Accordian(){

    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return(<>
     <div className="accordian p-3 mt-3 container-fluid ">
      <ul className="nav d-flex justify-content-flex-start productNav " id="pills-tab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "description" ? "active" : ""}`}
            id="pills-description-tab"
            data-toggle="pill"
            href="#pills-description"
            role="tab"
            aria-controls="pills-description"
            aria-selected={activeTab === "description"}
            onClick={() => handleTabClick("description")}
          >
           Description 
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "specification" ? "active" : ""}`}
            id="pills-specification-tab"
            data-toggle="pill"
            href="#pills-specification"
            role="tab"
            aria-controls="pills-specification"
            aria-selected={activeTab === "specification"}
            onClick={() => handleTabClick("specification")}
          >
           Specification
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Ratings" ? "active" : ""}`}
            id="pills-Ratings-tab"
            data-toggle="pill"
            href="#pills-Ratings"
            role="tab"
            aria-controls="pills-Ratings"
            aria-selected={activeTab === "Ratings"}
            onClick={() => handleTabClick("Ratings")}
          >
           Ratings & Reviews
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade show ${activeTab === "description" ? "active" : ""}`}
          id="pills-description"
          role="tabpanel"
          aria-labelledby="pills-description-tab"
        >
           <Description/> 
        </div>
        <div
          className={`tab-pane fade show ${activeTab === "specification" ? "active" : ""}`}
          id="pills-specification"
          role="tabpanel"
          aria-labelledby="pills-specification-tab"
        >
          <Specification/>
        </div>
        <div
          className={`tab-pane fade show ${activeTab === "Ratings" ? "active" : ""}`}
          id="pills-Ratings"
          role="tabpanel"
          aria-labelledby="pills-Ratings-tab"
        >
               {/* <HandiCrafts/> */}
        </div>
      </div>
    </div>
    </>)
}


export default React.memo(Accordian);