import React, { useEffect, useState } from 'react';
import headerLogo from '../../assets/images/headerLogo.png';
import ScheduleCallButton from './ScheduleCallButton';
import { NavLink } from "react-router-dom";
import HeaderMobile from '../common/HeaderMobile';

function Header() {
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
        <header className="header" style={{position:isFixed?"fixed":"relative", boxShadow: isFixed ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"}}>
            <NavLink to="/" > <img src={headerLogo} alt="Logo" className="logo" height={68} width={32}/></NavLink>
            <nav className="navigation">
                <NavLink to ="/home" 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                    home
                </NavLink>
                <NavLink to ='/about'
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                    about
                </NavLink>
                <NavLink to ='/services'
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                    services
                </NavLink>
                <NavLink to ='/cases'
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                    cases
                </NavLink>
            </nav>
            <ScheduleCallButton/>
        </header>

        <HeaderMobile/>


        <div className='headerBottom'>
            <hr/>
            <div className='headerExtras'>
                <div className='leftDiv'>
                    <span>OMNIPRESENT</span>
                    <span>01</span>
                </div>
                <div className='rightDiv'>
                    <span>WEB3</span>
                    <span>SUPER AGENCY</span>
                    <span className='plus'>+</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
