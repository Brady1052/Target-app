import React from 'react';
import InfoButton from '../images-product/target-info-button.png';
import Stars from '../images-product-sidebar/target-stars.png';
import GreyArrow from '../images-product-sidebar/grey-bottom-arrow.png';
import './Sidebar.css';

export default function SidebarHeader() {
  return (
    <div className="product-sidebar-price-container">
      <div className="product-sidebar-price-container-child">
        <h1 className="product-price">
          $1,448.99<span className="sale"> Sale</span>{' '}
          <span className="reg-product-price">
            Reg $2069.99 Save $621.00 {'('}30% off{')'}
          </span>
        </h1>
      </div>
      <p className="purchased-online">
        When purchased online
        <span>
          <a>
            <img id="info-btn" src={InfoButton} alt="info button"></img>
          </a>
        </span>
      </p>
      <div className="ratings">
        <a className="ratings-container" href="#">
          <span className="grey-arrow">
            <img id="grey-arrow" src={GreyArrow} alt="Grey Arrow"></img>
          </span>
          <span className="number-of-ratings">1</span>
          <img className="stars" src={Stars} alt="5 star rating"></img>
        </a>
        <div>
          <a href="#" className="questions">
            3 Questions
          </a>
        </div>
      </div>
    </div>
  );
}
