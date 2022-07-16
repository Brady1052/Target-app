import React from 'react';
import InfoButton from '../images-product/target-info-button.png';
import Stars from '../images-product-sidebar/target-stars.png';
import GreyArrow from '../images-product-sidebar/grey-bottom-arrow.png';
import './Sidebar.css';
import ColorPallete from './ColorPallete.js';
import ShippingInformation from './ShippingInformation.js';
import Checkout from './Checkout.js';
import ToDoorDelivery from './ToDoorDelivery';
import FurnitureProtectionPlan from './FurnitureProtectionPlan';
import SidebarFinalCompnent from './SidebarFinalCompnent';
export default function SidebarHeader() {
  return (
    <div className="product-sidebar-container">
      <div className="product-sidebar-header-container">
        <h1 className="product-price">
          $1,448.99<span className="sale"> Sale</span>{' '}
          <span className="reg-product-price">
            Reg $2069.99 Save $621.00 {'('}30% off{')'}
          </span>
        </h1>
        <p className="purchased-online">
          When purchased online
          <span>
            <a href="//www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab">
              <img id="info-btn" src={InfoButton} alt="info button"></img>
            </a>
          </span>
        </p>
        <div className="ratings">
          <a
            className="ratings-container"
            href="//www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
          >
            <span className="grey-arrow">
              <img id="grey-arrow" src={GreyArrow} alt="Grey Arrow"></img>
            </span>
            <span className="number-of-ratings">1</span>
            <img className="stars" src={Stars} alt="5 star rating"></img>
          </a>
          <div className="questions-container">
            <a
              href="//www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
              className="questions"
            >
              3 Questions
            </a>
          </div>
        </div>
      </div>
      <ColorPallete />
      <ShippingInformation />
      <Checkout />
      <ToDoorDelivery />
      <FurnitureProtectionPlan />
      <SidebarFinalCompnent />
    </div>
  );
}
