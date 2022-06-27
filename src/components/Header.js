import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-store-info">
        <p>
          {' '}
          My Store <span id="header-store-info-dot">• </span>Closes At 10pm
        </p>
        <p id="store-name">
          Heath <span></span>
        </p>
      </div>
      <div className="header-nav">
        <p>Registry</p>
        <p>Weekly Ad</p>
        <p>RedCard</p>
        <p>Target Circle</p>
        <p>Find Stores</p>
      </div>
    </div>
  );
}

export default Header;
