import React from 'react';
import headerLogo from '../../assets/images/headerLogo.png';
import ScheduleCallButton from './ScheduleCallButton';
import { NavLink } from "react-router-dom";
import HeaderMobile from '../common/HeaderMobile';

function Header() {
    return (
        <>
        <header className="header">
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
