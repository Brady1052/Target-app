import React from 'react';
import './ColorPallete.css';
import ColorPalleteImg from '../images-product-sidebar/target-color-pallete.png';
export default function ColorPallete() {
  return (
    <div className="color-pallete-container">
      <div className="pallete-header-container">
        <h1 className="pallete-header">Color</h1>
        <p id="item-color">Gray</p>
      </div>
      <div className="color-pallete-img-container">
        <img
          className="color-pallete-img"
          src={ColorPalleteImg}
          alt="color pallete"
        ></img>
      </div>
    </div>
  );
}
