import React from 'react';
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
        <a className="header-category">Registry</a>
        <a className="header-category">Weekly Ad</a>
        <a className="header-category">RedCard</a>
        <a className="header-category">Target Circle</a>
        <a className="header-category">Find Stores</a>
      </div>
    </div>
  );
}

export default Header;
