import React from 'react';
import SidebarHeader from './SidebarHeader';
import './ProductPhotos.css';
import Photo1 from '../images-product/target-product-1.png';
import Photo2 from '../images-product/target-product-2.jpeg';
import Photo3 from '../images-product/target-product-3.jpeg';
import Photo4 from '../images-product/target-product-4.jpeg';
import Photo5 from '../images-product/target-product-5.png';
import LikeBtn from '../images-product/target-like-btn.png';
import ShippingInformation from './ShippingInformation.js';
import Checkout from './Checkout.js';
import ToDoorDelivery from './ToDoorDelivery';
import FurnitureProtectionPlan from './FurnitureProtectionPlan';
import SidebarFinalCompnent from './SidebarFinalCompnent';
export default function ProductPhotos() {
  return (
    <div className="product-photos-container">
      <div className="product-photo-sidebar">
        <div className="main-product-img-container">
          <img className="main-product-img" src={Photo1} alt="product"></img>
        </div>
        <img className="second-product-img" src={Photo2} alt="product"></img>
        <a href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab">
          <img className="third-product-img" src={Photo3} alt="product"></img>
        </a>
        <img className="fourth-product-img" src={Photo4} alt="product"></img>
        <img className="fifth-product-img" src={Photo5} alt="product"></img>
      </div>
      <div className="hero-product-img-price-container">
        {' '}
        <img className="hero-product-img" src={Photo1} alt="main product"></img>
        <img className="like-btn" src={LikeBtn} alt="like button"></img>
        <SidebarHeader />
        <ShippingInformation />
        <Checkout />
        <ToDoorDelivery />
        <FurnitureProtectionPlan />
        <SidebarFinalCompnent />
      </div>
    </div>
  );
}
