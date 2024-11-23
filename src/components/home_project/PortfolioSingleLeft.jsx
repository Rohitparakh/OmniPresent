import React from 'react';
import './PortfolioSingleLeft.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/RampX.png';

function PortfolioSingleLeft() {
    return (
        <div className="portfolio-single-left">
            <div className="content-left">
                <div className='image'>
                {/* <div className="status-tag">
                    <img src={statusProgress} alt="status icon" />
                    <span>in progress</span>
                </div> */}
                <img
                    src={image}
                    alt="graphic"
                    className="graphic"
                />
                </div>
            </div>
            <div className='content-center'>
            <div className="description mt-10 mb-20 lg:mb-10 lg:mt-0">
            10K users gained in just seven days with a powerful product launch.

</div>
            </div>
            <div className="content-right">                
                <div className="details">
                    <h1 className="title">RampX
                    <span className="index rampx">02</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default PortfolioSingleLeft;
