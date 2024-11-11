import React from 'react';
import './WhyUsFirst.css';
import whyUsFirstImage from '../../assets/images/WhyUsFirstImage.png';

function WhyUsFirst() {
    return (
        <div className="why-us-first">
            <div className='content-left'>
                <img 
                    src={whyUsFirstImage}
                    alt="Graphic Element" 
                    className="graphic-element" 
                />
            <h1 className="title-mobile lg-d-none">we are relationship driven</h1>                
                <p className="description">
                    With deep industry knowledge, we navigate the crypto space 
                    like no other, ensuring you stay ahead of the curve.
                </p>
            </div>
            <div className="content-right">
            <h1 className="title">we are
relationship
driven</h1>
            </div>
        </div>
    );
}

export default WhyUsFirst;
