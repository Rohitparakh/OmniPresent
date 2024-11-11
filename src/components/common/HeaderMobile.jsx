import React from 'react';
import './HeaderMobile.css';
import logo from '../../assets/images/headerLogo.png'
import arrow from '../../assets/images/arrowMobile.png'
import hamburger from '../../assets/images/Hamburger.png'
const HeaderMobile = () => {
  return (
    <div className="header-mobile group-container">
      <div className="logo-frame">
        <img 
          src={logo}
          alt="globe icon" 
          className="icon-globe"
        />
      </div>
      <div className="frame-container">
        <div className="icon-frame">
          <img 
            src={hamburger}
            alt="menu icon" 
            className="icon-menu"
          />
        </div>
        <div className="schedule-frame">
          <div className="inner-frame">
            <span className="schedule-text">schedule</span>
            <img 
              src={arrow}
              alt="arrow icon" 
              className="arrow-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;

