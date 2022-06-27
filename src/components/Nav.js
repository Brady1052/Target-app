import './Nav.css';
import targetLogo from '../images/target-logo.png';

function Nav() {
  return (
    <div className="nav-container">
      .
      <div className="nav-left">
        <a href="https://www.target.com/">
          <img src={targetLogo} alt="logo" className="logo"></img>
        </a>
        <button>Categories</button>
        <button>Deals</button>
        <button>What's New</button>
        <button>Pickup {'&'} Delivery</button>
      </div>
    </div>
  );
}

export default Nav;
