import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-store-info">
        <a className="header-left-anchor">
          <span className="header-my-store"> My Store</span>
          <span id="header-store-info-dot"> • </span> Closes At 8pm
          <p id="store-name">Heath</p>
        </a>
      </div>
      <div className="header-nav">
        <a>Registry</a>
        <a>Weekly Ad</a>
        <a>RedCard</a>
        <a>Target Circle</a>
        <a>Find Stores</a>
      </div>
    </div>
  );
}

export default Header;
