import React from 'react';
import './ToDoorDelivery.css';
import TargetBox from '../images-product-sidebar/target-box.png';
import InfoCirlce from '../images-product-sidebar/target-info-circle.png';

export default function ToDoorDelivery() {
  return (
    <div className="to-door-delivery">
      <img className="target-box" src={TargetBox} alt="target box"></img>
      <p className="to-door-delivery-p">
        Free To The Door <span id="delivery-span">Delivery</span>
      </p>
      <img className="info-circle" src={InfoCirlce} alt="info circle"></img>
    </div>
  );
}
