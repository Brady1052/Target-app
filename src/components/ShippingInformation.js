import React from 'react';
import './ShippingInformation.css';

export default function ShippingInformation() {
  return (
    <div className="shipping-information-container">
      <h1 className="zip-code">Ship to 43055</h1>
      <a className="edit-location">Edit location</a>
      <p className="arrival-time">Get it from Wed, Jul 13 - Fri, Jul 15 </p>
      <p className="arrival-time-child">
        This delivery date includes extra time for the weekend.
      </p>
      <p className="item-not-sold-store">This item isn't sold in stores</p>
    </div>
  );
}
