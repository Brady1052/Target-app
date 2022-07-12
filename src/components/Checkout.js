import React from 'react';
import './Checkout.css';
import GreyArrow from '../images-product-sidebar/grey-bottom-arrow.png';

export default function Checkout() {
  return (
    <div className="checkout-container">
      <div className="order-quantity-container">
        <button className="quantity-dropdown">
          Qty <span id="order-quantity">1</span>{' '}
          <img id="grey-arrow" src={GreyArrow} alt="downfacing-arrow"></img>
        </button>
      </div>
      <div className="add-to-cart-container">
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
}
