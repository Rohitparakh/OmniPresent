import React, { useEffect, useState } from 'react';
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
import headerContact from '../../assets/images/headerContact.png';

const HeaderMobile = () => {
    const [headerOpen, setHeaderOpen]= useState(false);

        // Use effect to disable scrolling when isHeaderOpen is true
        useEffect(() => {
          if (headerOpen) {
              // Disable body scroll
              document.documentElement.style.overflow = 'hidden';
          } else {
              // Enable html scroll
              document.documentElement.style.overflow = 'auto';
          }
  
          // Cleanup to ensure scroll is re-enabled if component unmounts
          return () => {
              document.documentElement.style.overflow = 'auto';
          };
      }, [headerOpen]);

    // Handle the click event
  const handleClick = () => {
    setHeaderOpen(!headerOpen); // Toggle state on click
  };

  const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          // Check if the horizontal scroll position is greater than 50vw
          if (window.scrollY > window.innerWidth / 2) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup listener on unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);      
  return (
    <>
    <div className="header-mobile group-container"
                    style={{backgroundColor:headerOpen?'#eefe05':isFixed?'#eefe05':'transparent', position:headerOpen || isFixed ?'fixed':'relative',justifyContent:headerOpen?'space-between':'space-between', top:headerOpen?'-20px':'0', paddingTop:headerOpen?'40px':'20px', boxShadow: isFixed && !headerOpen ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none", margin:isFixed?0:"20px 0", padding:isFixed?"40px 20px":"20px"}}
                    >
      <div className="logo-frame">
      <NavLink to="/" >
        <img 
          src={logo}
          alt="globe icon" 
          className="icon-globe"
        />
        </NavLink>
        
      </div>
      <div className="frame-container z-[1000]">
        <div className="icon-frame z-[1000]" 
                    onClick={handleClick} 
                    style={{backgroundColor:headerOpen?'#000':'transparent'}}
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
                      <NavLink target='_blank' to="https://calendly.com/admin-omnipresent-/30min">
                      <img src={headerContact} height={44} width={44}/>
                      </NavLink>
          {/* <div className="inner-frame">
            <span className="schedule-text">schedule</span>
            <img 
              src={arrow}
              alt="arrow icon" 
              className="arrow-icon"
            />
          </div> */}
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
        <p style={{fontSize:'14px', margin:'auto'}}>follow our <br/>socials</p>
        <div className="socialIcons">
          <div className="circleIcon">
            <img src={telegramIcon} alt="Telegram Icon" className="icon" height={56} width={56}/>
          </div>
          <div className="circleIcon">
              <img src={twitterIcon} alt="Close Icon" className="icon" height={56} width={56}/>
          </div>
          <div className="circleIcon">
              <img src={instagramIcon} alt="Instagram Icon" className="icon" height={56} width={56}/>
          </div>
                </div>
    </div>

    </div>
    </>
  );
};

export default HeaderMobile;

