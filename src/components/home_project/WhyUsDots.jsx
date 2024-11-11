import React from 'react';
import './WhyUsDots.css';
import WhyDotsFirst from '../../assets/images/WhyDotsFirst.png';
import WhyDotsSecond from '../../assets/images/WhyDotsSecond.png';
import WhyDotsThird from '../../assets/images/WhyDotsThird.png';
import WhyDotsFourth from '../../assets/images/WhyDotsFourth.png';
import WhyDotsFifth from '../../assets/images/WhyDotsFifth.png';

function WhyDots() {
    return (
        <div className="why-dots">
            <img src={WhyDotsFirst} className="dots-image anim-complete"/>
            <img src={WhyDotsSecond} className="dots-image anim-complete"/>
            <img src={WhyDotsThird} className="dots-image anim-complete"/>
            <img src={WhyDotsFourth} className="dots-image anim-complete"/>
            <img src={WhyDotsFifth} className="dots-image anim-complete"/>
        </div>
    );
}

export default WhyDots;
