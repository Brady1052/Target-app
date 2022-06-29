import React from 'react';
import './Nav.css';
import targetLogo from '../images-header/target-logo.png';
import magnifyingGlass from '../images-header/target-magnifying-glass.png';
import shoppingCart from '../images-header/target-shopping-cart.jpeg';
function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="https://www.target.com/">
          <img src={targetLogo} alt="logo" className="logo"></img>
        </a>
        <div className="nav-categories-container">
          <a className="nav-category" id="categories-btn">
            Categories
          </a>
          <a className="nav-category" href="#">
            Deals
          </a>
          <a className="nav-category" href="#">
            What's New
          </a>
          <a className="nav-category" href="#">
            Pickup {'&'} Delivery
          </a>
        </div>
        <div className="search-box-container">
          <form className="search-form">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
            ></input>
            <img
              src={magnifyingGlass}
              alt="search button"
              className="searchBtn"
            ></img>
          </form>
        </div>
        <img
          src="https://target.scene7.com/is/content/Target/GUEST_ad24d0ff-62d6-4c7b-8b24-ae701e51b0f6"
          alt="guest"
          className="guest-image"
        ></img>
        <a id="sign-in-btn">Sign in</a>
        <img
          src={shoppingCart}
          alt="shopping cart"
          className="shopping-cart"
        ></img>
      </nav>
    </div>
  );
}

export default Nav;
