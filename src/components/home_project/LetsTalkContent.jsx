import React from 'react';
import './LetsTalkContent.css';
import letsTalkArrow from '../../assets/images/letsTalkArrow.png';
import { NavLink } from 'react-router-dom';

function ScheduleButton() {
    return (
    <NavLink target="_blank" to="https://calendly.com/admin-invictuslabs/30min">
        <div className="scheduleButton" style={{width:'max-content',padding:'25px 50px'}}>
            <span className="buttonText">schedule a call</span>
            <span className="arrowIcon">➔</span>
        </div>
        </NavLink>
    );
}


function LetsTalkContent() {
    return (
        <div className="letsTalkContent">
<div className='d-flex aic' style={{gap:'30px'}}>            <p className="description">
                Ready to take your project to the next level? Schedule a call with us and let’s build something extraordinary, fast. We’ll craft a strategy that works, and you’ll see results that speak for themselves.
            </p>
            <div className="lets">let’s</div>
            </div>
            <div className="ctaContent">
                <img src={letsTalkArrow} className='arrow' />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'start'}}>
                    <div className="talk">talk</div>
                    <ScheduleButton />
                </div>
            </div>
        </div>
    );
}

export default LetsTalkContent;
