import React from 'react';
import './ShippingInformation.css';
import OrangeTriangle from '../images-product-sidebar/target-orange-triangle.png';
export default function ShippingInformation() {
  return (
    <div className="shipping-information-container">
      <h1 className="zip-code">Ship to 43055</h1>
      <a href="google.com" className="edit-location">
        Edit location
      </a>
      <p className="arrival-time">Get it from Wed, Jul 13 - Fri, Jul 15 </p>
      <p className="arrival-time-child">
        This delivery date includes extra time for the weekend.
      </p>
      <p className="item-not-sold-store">This item isn't sold in stores</p>
      <div className="packaging-info">
        {' '}
        <img
          id="orange-triangle"
          src={OrangeTriangle}
          alt="warning triangle"
        ></img>
        <p className="original-packaging-p">
          This item may ship in it's original packaging -{' '}
          <a
            href="//www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
            id="packaging-details-btn"
          >
            Details
          </a>
        </p>
      </div>
    </div>
  );
}
