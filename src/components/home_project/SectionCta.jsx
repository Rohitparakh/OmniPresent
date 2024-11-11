import React from 'react';
import './SectionCta.css';
import ctaArrow from '../../assets/images/ctaArrow.png';

function SectionCta({text, position}) {
    return (
        <div className={`section-cta-container ${position==='none'?'float-none':''}`}>
        <div className="section-cta">
            <img 
                src={ctaArrow}
                alt="Arrow Icon" 
                className="arrow-icon" 
            />
            <div className="cta-text-container">
                <span className="cta-text">{text}</span>
            </div>
        </div>
        </div>
    );
}

export default SectionCta;
