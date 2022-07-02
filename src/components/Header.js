import React, { useState } from 'react';
import ArrowBtn from '../images-header/target-down-arrow.png';
import './Header.css';

function Header(props) {
  const [storeName, setStoreName] = useState(props.storeName);
  const clickHandler = () => {
    setStoreName('Updated');
  };
  return (
    <div className="header-container">
      <div className="header-store-info">
        <a
          className="header-left-container"
          href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
        >
          <span className="header-my-store"> My Store </span>
          <span id="header-store-info-dot"> • </span>
          <span className="store-closing-time"> Closes At 10pm</span>
          <p id="store-name">
            <span id="store-name-text">
              {storeName}{' '}
              <img className="arrow-btn" src={ArrowBtn} alt="down arrow"></img>
            </span>
          </p>
        </a>
      </div>
      <div className="header-nav">
        {/* <button onClick={clickHandler}>Change Store</button> */}
        <a
          className="header-category"
          href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
        >
          Registry
        </a>
        <a
          className="header-category"
          href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
        >
          Weekly Ad
        </a>
        <a
          className="header-category"
          href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
        >
          RedCard
        </a>
        <a
          className="header-category"
          href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
        >
          Target Circle
        </a>
        <a
          className="header-category"
          href="https://www.target.com/p/florence-7pc-outdoor-sectional-seating-group-with-cushions-tk-classics/-/A-82072287?preselect=81870489#lnk=sametab"
        >
          Find Stores
        </a>
      </div>
    </div>
  );
}

export default Header;
