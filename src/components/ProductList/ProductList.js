import React from "react";
import Item from "../Item/Item";
import './ProductList.css'


function ProductList(props){


    return(<>
        <div style={{backgroundColor : 'white'}} className="container-fluid ProductListContainer p-0">
            <div className="ProductListChild1 d-flex justify-content-between align-items-center px-5 pb-3">
            <h5>{props.title}</h5>
            </div>
            <div className="ProductListChild2 container-fluid ">
    
    <div id={props.divTitle} className="carousel slide" data-intervall="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row pb-3 pt-1">
<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'}  />

<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'}  />

          </div>
    
        </div>
        <div className="carousel-item">
          <div className="row ">
<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'}  />

<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'} />

<Item size={'col-md-3'} cardName={'bestSellerCard'} ogImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png'} hoverImg={'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg'}  />

          </div>
        </div>
    
      </div>
    </div>
    
    
    </div>
    
            </div>
        </>)
}

export default React.memo(ProductList);