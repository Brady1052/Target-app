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
          <a
            className="nav-category"
            id="categories-btn"
            href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
          >
            Categories
          </a>
          <a
            className="nav-category"
            href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
          >
            Deals
          </a>
          <a
            className="nav-category"
            href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
          >
            What's New
          </a>
          <a
            className="nav-category"
            href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
          >
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
        <div className="guest-cart-container">
          <div className="sign-in-img-container">
            <img
              src="https://target.scene7.com/is/content/Target/GUEST_ad24d0ff-62d6-4c7b-8b24-ae701e51b0f6"
              alt="guest"
              className="guest-image"
            ></img>

            <a
              id="sign-in-btn"
              href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
            >
              Sign in
            </a>
          </div>
          <div className="shopping-cart-container">
            <img
              src={shoppingCart}
              alt="shopping cart"
              className="shopping-cart"
            ></img>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
