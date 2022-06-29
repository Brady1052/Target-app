import React from 'react';
import './ProductPhotos.css';
import Photo1 from '../images-product/target-product-1.png';
import Photo2 from '../images-product/target-product-2.jpeg';
import Photo3 from '../images-product/target-product-3.jpeg';
import Photo4 from '../images-product/target-product-4.jpeg';
import Photo5 from '../images-product/target-product-5.png';
import InfoButton from '../images-product/target-info-button.png';
export default function ProductPhotos() {
  return (
    <div className="product-photos-container">
      <div className="product-photo-sidebar">
        <div className="main-product-img-container">
          <img className="main-product-img" src={Photo1} alt="product"></img>
        </div>
        <img className="second-product-img" src={Photo2} alt="product"></img>
        <img className="third-product-img" src={Photo3} alt="product"></img>
        <img className="fourth-product-img" src={Photo4} alt="product"></img>
        <img className="fifth-product-img" src={Photo5} alt="product"></img>
      </div>
      <div className="hero-product-img-price-container">
        {' '}
        <img className="hero-product-img" src={Photo1} alt="main product"></img>
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
        </div>
      </div>
    </div>
  );
}
