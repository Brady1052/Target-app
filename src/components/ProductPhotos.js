import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './ProductPhotos.css';
import Photo1 from '../images-product/target-product-1.png';
import Photo2 from '../images-product/target-product-2.jpeg';
import Photo3 from '../images-product/target-product-3.jpeg';
import Photo4 from '../images-product/target-product-4.jpeg';
import Photo5 from '../images-product/target-product-5.png';
import LikeBtn from '../images-product/target-like-btn.png';
export default function ProductPhotos() {
  const [heroImage, setHeroImage] = useState(Photo1);
  function changeHeroImage1() {
    setHeroImage(Photo1);
  }
  function changeHeroImage2() {
    setHeroImage(Photo2);
  }
  function changeHeroImage3() {
    setHeroImage(Photo3);
  }
  function changeHeroImage4() {
    setHeroImage(Photo4);
  }
  function changeHeroImage5() {
    setHeroImage(Photo5);
  }
  return (
    <div className="product-photos-container">
      <div className="product-photo-sidebar">
        <div className="main-product-img-container">
          <img
            className="main-product-img"
            src={Photo1}
            alt="product"
            onClick={changeHeroImage1}
          ></img>
        </div>
        <img
          className="second-product-img"
          src={Photo2}
          alt="product"
          onClick={changeHeroImage2}
        ></img>

        <img
          className="third-product-img"
          src={Photo3}
          alt="product"
          onClick={changeHeroImage3}
        ></img>

        <img
          className="fourth-product-img"
          src={Photo4}
          alt="product"
          onClick={changeHeroImage4}
        ></img>
        <img
          className="fifth-product-img"
          src={Photo5}
          alt="product"
          onClick={changeHeroImage5}
        ></img>
      </div>
      <div className="hero-product-img-price-container">
        <div className="hero-product-img-container">
          {' '}
          <img
            className="hero-product-img"
            src={heroImage}
            alt="main product"
          ></img>
          <img className="like-btn" src={LikeBtn} alt="like button"></img>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
