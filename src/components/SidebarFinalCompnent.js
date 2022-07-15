import React from 'react';
import './SidebarFinalComponent.css';
import RedCard from '../images-sidebar-bottom-right/target-card.png';
import Affirm from '../images-sidebar-bottom-right/target-affirm.png';
import GiftBox from '../images-sidebar-bottom-right/target-gift-box.png';
import RightArrow from '../images-sidebar-bottom-right/target-right-arrow.png';
import InfoLogo from '../images-sidebar-bottom-right/target-info-logo.png';

export default function SidebarFinalCompnent() {
  return (
    <div className="sidebar-final-component-container">
      <div className="registry-container">
        <img src={GiftBox} alt="target gift box" className="gift-box"></img>
        <p className="registry-p">Create or manage registry</p>
        <a href="target.com" className="sign-in">
          Sign in
        </a>
      </div>
      <div className="red-card-container">
        <img src={RedCard} alt="red card" className="red-card"></img>
        <p className="savings-p">
          Save 5% every day<p className="redcard-p">With RedCard</p>
        </p>
        <a href="target.com" className="right-arrow-anchor">
          <img src={RightArrow} alt="right arrow" className="right-arrow"></img>
        </a>
      </div>
      <div className="affirm-container">
        <img src={Affirm} alt="affirm logo" className="affirm-logo"></img>
        <p className="savings-p">
          Pay as low as $135/mo.<p className="redcard-p">With Affirm</p>
        </p>
        <a href="target.com" className="info-logo-anchor">
          <img src={InfoLogo} alt="info logo" className="info-logo"></img>
        </a>
      </div>
      <div className="tk-classics">
        <a href="target.com" className="tk-btn">
          Learn more from TK Classics
        </a>
      </div>
    </div>
  );
}
