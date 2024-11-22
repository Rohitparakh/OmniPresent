import React from 'react';
import './SectionCta.css';
import ctaArrow from '../../assets/images/ctaArrow.png';
import { NavLink } from 'react-router-dom';

function SectionCta({text, position, url}) {
    return (
        <div className={`section-cta-container ${position==='none'?'float-none':''}`}>
        <div className="section-cta">
            <img 
                src={ctaArrow}
                alt="Arrow Icon" 
                className="mr-2" 
            />
            <div className="cta-text-container">
            {url &&(<NavLink to={url} 
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                <span className="cta-text">{text}</span>
                </NavLink>
                )}
            {!url &&(
                <span className="cta-text">{text}</span>
                )}
            </div>
        </div>
        </div>
    );
}

export default SectionCta;
