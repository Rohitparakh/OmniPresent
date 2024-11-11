import React from 'react';
import './PortfolioSingleLeft.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/PortfolioSecond.png';

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
            <div className="description">
            10K users gained in just seven days with a powerful product launch.

</div>
            </div>
            <div className="content-right">                
                <div className="details">
                    <h1 className="title">RampX</h1>
                    <span className="index">02</span>
                </div>
            </div>
        </div>
    );
}

export default PortfolioSingleLeft;
