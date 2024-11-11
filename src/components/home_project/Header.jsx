import React from 'react';
import headerLogo from '../../assets/images/headerLogo.png';
import ScheduleCallButton from './ScheduleCallButton';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
        <header className="header">
            <img src={headerLogo} alt="Logo" className="logo" height={68} width={32}/>
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

        <div className='headerBottom'>
            <hr/>
            <div className='headerExtras'>
                <div className='leftDiv'>
                    <span>INVCTS</span>
                    <span>01</span>
                </div>
                <div className='rightDiv'>
                    <span>GRAPHIC DESIGN</span>
                    <span>WEB 3 AGENCY</span>
                    <span className='plus'>+</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
