import './Nav.css';
import targetLogo from '../images/target-logo.png';
import magnifyingGlass from '../images/target-magnifying-glass.png';
import shoppingCart from '../images/target-shopping-cart.png';
function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="https://www.target.com/">
          <img src={targetLogo} alt="logo" className="logo"></img>
        </a>
        <button id="categories-btn">Categories</button>
        <button>Deals</button>
        <button>What's New</button>
        <button>Pickup {'&'} Delivery</button>
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
        <p id="sign-in-btn">Sign In</p>
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
