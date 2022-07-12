import React from 'react';
import GreyArrow from '../images-product-sidebar/grey-bottom-arrow.png';
export default function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-btns">
        <button id="quantity-dropdown">
          Qty 1{' '}
          <img id="greyArrow" src={GreyArrow} alt="downfacing-arrow"></img>
        </button>
      </div>
    </div>
  );
}
