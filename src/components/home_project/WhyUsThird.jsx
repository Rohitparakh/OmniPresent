import React from 'react';
import './WhyUsThird.css';
import imgFast from '../../assets/images/imgFast.png'
function WhyUsThird() {
    return (
        <div className="why-us-third">
            <div className="why-us-third-content">
                <p className="why-us-third-description">
                We’re everywhere your audience is. Our communities amplify your message, making sure you’re seen far and wide.
                </p>
               
            </div>
<div className='why-us-third-right'>
            <h1 className="why-us-third-title">
                    we are<br/> omnipresent <span className="fast-outlined"></span>
                </h1>
                {/* <img src={imgFast} className='fast'/> */}
     </div>
        </div>
    );
}

export default WhyUsThird;
