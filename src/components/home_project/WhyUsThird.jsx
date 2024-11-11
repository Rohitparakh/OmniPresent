import React from 'react';
import './WhyUsThird.css';
import imgFast from '../../assets/images/imgFast.png'
function WhyUsThird() {
    return (
        <div className="why-us-third">
            <div className="why-us-third-content">
                <p className="why-us-third-description">
                    In a world that moves at lightning speed, so do we. We execute swiftly, adapt quickly, and make sure you’re always a step ahead in the market.
                </p>
               
            </div>
<div className='why-us-third-right'>
            <h1 className="why-us-third-title">
                    we work <span className="fast-outlined"></span>
                </h1>
                <img src={imgFast} className='fast'/>
     </div>
        </div>
    );
}

export default WhyUsThird;
