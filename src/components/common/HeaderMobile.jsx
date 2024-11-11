import React, { useState } from 'react';
import './HeaderMobile.css';
import logo from '../../assets/images/headerLogo.png'
import arrow from '../../assets/images/arrowMobile.png'
import hamburger from '../../assets/images/Hamburger.png'
import closeIcons from '../../assets/images/close.png'
import ScheduleCallButton from '../home_project/ScheduleCallButton';
import telegramIcon from '../../assets/images/hugeicons_telegram.png';
import twitterIcon from '../../assets/images/hugeicons_twitter.png';
import instagramIcon from '../../assets/images/hugeicons_instagram.png';
import { NavLink } from 'react-router-dom';

const HeaderMobile = () => {
    const [headerOpen, setHeaderOpen]= useState(false);

    // Handle the click event
  const handleClick = () => {
    setHeaderOpen(!headerOpen); // Toggle state on click
  };

  return (
    <>
    <div className="header-mobile group-container"
                    style={{position:headerOpen?'fixed':'relative',justifyContent:headerOpen?'space-evenly':'left', top:headerOpen?'-20px':'0', paddingTop:headerOpen?'40px':'20px'}}
                    >
      <div className="logo-frame">
        <img 
          src={logo}
          alt="globe icon" 
          className="icon-globe"
        />
      </div>
      <div className="frame-container">
        <div className="icon-frame" 
                    onClick={handleClick} 
                    style={{backgroundColor:headerOpen?'#000':'#fff'}}
            >
          <img 
            src={headerOpen?closeIcons:hamburger}
            alt="menu icon" 
            className="icon-menu"
          />
        </div>
        <div className="schedule-frame" 
                    style={{display:headerOpen?'none':'flex'}}
                    >
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
    <div className='mobile-menu'
                    style={{display:headerOpen?'block':'none'}}
    >
    <ul>
        <li>
        <NavLink to ="/" 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
            <p>01</p>
            <h2>home</h2>
            </NavLink>
        </li>
        <li>
        <NavLink to ="/about" 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
            <p>02</p>
            <h2>about</h2>
            </NavLink>
        </li>
        <li>
        <NavLink to ="/services" 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
            <p>03</p>
            <h2>services</h2>
            </NavLink>
        </li>
        <li>
        <NavLink to ="/cases" 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
            <p>04</p>
            <h2>cases</h2>
            </NavLink>
        </li>
    </ul>
    <hr/>
    <div className='mt-10 mb-10 pl-5'>
    <ScheduleCallButton/>
    </div>
    <hr/>
    <div className='headerSocials'>
        <p>Follow our <br/>socials</p>
        <div className="socialIcons">
                    <img src={telegramIcon} alt="Telegram Icon" className="socialIcon" />
                    <div className="circleIcon">
                        <img src={twitterIcon} alt="Close Icon" className="icon" />
                    </div>
                    <div className="circleIcon">
                        <img src={instagramIcon} alt="Instagram Icon" className="icon" />
                    </div>
                </div>
    </div>

    </div>
    </>
  );
};

export default HeaderMobile;

