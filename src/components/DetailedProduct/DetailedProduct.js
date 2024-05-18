import React, { useState } from 'react';
import img from '../../images/Rectangle 2.png'
import './DetailedProduct.css';
import ShareBtn from './ShareBtn';
import shareIcon from '../../images/export.png';
import minusImg from '../../images/minus-cirlce.png';
import plusImg from '../../images/add-circle.png';
import addToCartImg from '../../images/shopping-cart.png'
import addToWishlistImg from '../../images/Icon.png'
import cardImg from '../../images/image 305.png'
import flagImg from '../../images/flag-crop.png'
import flowerImg from '../../images/image 307.png'
import Accordian from './Accordian';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import OurBestSeller from '../../pages/Home/OurBestSeller';
import ProductList from '../ProductList/ProductList';
import HeroImage from '../HeroImage/HeroImage';
import IMGProduct from '../../images/image 301.png'

const DetailedProduct = () => {
  // Initialize the state with the initial image URL
  const [mainImage, setMainImage] = useState('https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png');

  const [share , setShare] = useState(false);

  const toggleShare = ()=>{
    setShare(!share)
    }

    const [count , setCount] = useState(0);

   

   const addCount = ()=>{
    setCount(
      count + 1
     )
   }
   const subCount = ()=>{
    if(count === 0){
        setCount(count)
    }
     else{
        setCount (
            count - 1
        )
     }
   }

  // Array of thumbnail images
  const thumbnails = [
    'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/img-Photoroom.jpg',
    'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/handcrft.jpeg',
    'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/fbctgva_2024-04-16T04_09_41.002Z_output_2.jpeg',
    'https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg'
  ];

  return (<> <div className='container-fluid detailedProduct'>
    <BreadCrumbs/>
    <div className='container-fluid productDiv'>
      <div className='productImagesDiv'>
      {/* <p className="course-title">IMAGE GALLERY</p> */}
      <div className="image-gallery">
        <img src={mainImage} alt="Main" />
      </div>
      <ul className="thumbnails p-0" style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {thumbnails.map((thumbnail, index) => (
          <li key={index} style={{ margin: '1px 1px 1px 1px' }}>
            <img
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(thumbnail)}
              style={{ width: '86px', height: '86px', objectFit: 'cover' , cursor: 'pointer', padding : '5px' , border: mainImage === thumbnail ? '2px solid orange' : 'none' }}
            />
          </li>
        ))}
      </ul>
      </div>
      {/* content box */}
      <div className='productContentDiv pl-5'>
        <div className='title_ShareDiv' >
            <h4 > sandalwood mala 8 MM</h4> 
            <button  onClick={toggleShare}>Share <img src={shareIcon} /> </button>
           { share ?(<div>  <ShareBtn/> </div>  ): ''}
        </div>
        <div className='d-flex'>
        <h3> &#8377; 800 </h3>
        <h3 className='text-muted  pl-5 mb-0'>  <del>&#8377; 1200</del></h3>
        </div>
        <div>
            <p className=' font600 d-inline-block mb-0'>Brands : <p className='text-muted d-inline-block font400 mb-0'> SVKT</p></p>

            <p className=' font600 mb-0'>Product Code : <p className='text-muted d-inline-block font400 mb-0'> SDFRB_24</p></p>

            <p className=' font600 mb-0'>Availability : <p className=' d-inline-block font500 mb-0 text-success'> In-Stock</p></p>

            <p className=' font600 mb-0'>Short Discription: <p className='text-muted d-inline-block font400 mb-0'>
The ruling god is Lord Kalagni Rudra and the ruling planet is Jupiter. Removes negative effects of planet Jupiter (Brihaspati) from bearer’s life.</p></p>
        </div>
        <div className='d-flex necessityContainer'>
        <div className='necessityDiv'>
        <form class="form-inline">
    <label htmlFor='pincode' className='font700 mr-1'>Delivery:</label>
    <input style={{outline : '1px solid #F26414 ' , backgroundColor : '#FDF7EB'}} class="form-control mr-sm-2 ml-auto " id='pincode' type="search" placeholder="Enter Your Pincode" aria-label="Search"/>
    <button style={{backgroundColor: '#F26414' , color : 'white' }} class="btn my-2  my-sm-0 font500" type="submit">Check</button>
    {/* <small> add pincode exist here</small> */}
  </form>
    <p className='text-muted font500 my-1'>Usually delivered in 8-10 days</p>

<div className='d-flex justify-content-between align-items-center QuantityDiv'>
<p className='font700 d-inline-block mr-5'>Quantity :<button className='' style={{border : 'none' , background : 'none' , outline: 'none'}} onClick={subCount}> <img src={minusImg} /> </button> {count}  <button style={{border : 'none' , background : 'none' , outline: 'none'}} onClick={addCount}> <img src={plusImg} /> </button>  </p>

<button style={{backgroundColor : '#FB0B0B'}} className='btn rounded text-light d-inline-block'>Buy Now</button>
</div>
 <div className='d-flex justify-content-between addBtnDiv'>
 <button style={{backgroundColor : '#FB0B0B' , width: '45%'}} className='btn rounded text-light d-inline-block '> <img src={addToWishlistImg}/> Add to Wishlist</button>
 
 <button style={{backgroundColor : '#13B23F' ,  width: '45%'}} className='btn rounded text-light d-inline-block '> <img src={addToCartImg}/> Add to Cart</button>
    </div>  
        </div>
        <div className='assuranceDiv ml-auto mr-auto'>
            <p className='mb-0'> <img src={cardImg}/> Secure Payments </p>
            <p className='mb-0'> <img src={flagImg}/> Proudly Made in India </p>
            <p className='mb-0 ml-2'> <img src={flowerImg}/> Holistic Well-being</p>
        </div>
        </div>
      </div>
    </div> 
    <Accordian/>
   <div  style={{ outline : 'rgb(128 128 128 / 20%) solid 1px', backgroundColor : "white", padding : '1rem' , borderRadius : '5px' }} className='container-fluid m-0 mt-3'>
   <ProductList title={'Similar Products'} divTitle={'divCD'}/>
   </div>

   <div  style={{ outline : 'rgb(128 128 128 / 20%) solid 1px', backgroundColor : "white", padding : '1rem' , borderRadius : '5px' }} className='container-fluid m-0 mt-3'>
   <ProductList title={'Most Viewed Product'} divTitle={'divAB'}/>
   </div>

   <div  style={{ outline : 'rgb(128 128 128 / 20%) solid 1px', backgroundColor : "white", padding : '1rem' , borderRadius : '5px' }} className='container-fluid m-0 mt-3'>
   <ProductList title={'Most Viewed Product of this Category'} divTitle={'divEx'}/>
   </div>
   <HeroImage img1={IMGProduct} /> 
    </div> </>);
};

export default React.memo(DetailedProduct);
