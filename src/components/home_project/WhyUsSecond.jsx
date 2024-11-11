import React from 'react';
import './WhyUsSecond.css';
import Card1 from '../../assets/images/Card1.png';
import ImageGoLeft from '../../assets/images/ImageGoLeft.png';
import ImageGoRight from '../../assets/images/ImageGoRight.png';
function WhyUsSecond() {
    return (
        <div className="why-us-second">
            <div className="content">
            <div className="card-image lg-d-none">
                <img src={Card1} alt="Playing Card" className='pos-r'/>
                <img src={ImageGoLeft} alt="Playing Card" className='pos-a go-left' />
                <img src={ImageGoRight} alt="Playing Card" className='pos-a go-right' />
            </div>
                <h1 className="title">we deliver</h1>
                <p className="description">
                    Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations—every time.
                </p>
            </div>
            <div className="card-image md-d-none">
                <img src={Card1} alt="Playing Card" className='pos-r'/>
                <img src={ImageGoLeft} alt="Playing Card" className='pos-a go-left' />
                <img src={ImageGoRight} alt="Playing Card" className='pos-a go-right' />
            </div>
        </div>
    );
}

export default WhyUsSecond;
