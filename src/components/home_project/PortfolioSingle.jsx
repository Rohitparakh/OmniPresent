import React from 'react';
import './PortfolioSingle.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/PortfolioSingle.png';

function PortfolioSingle() {
    return (
        <div className="portfolio-single">
            <div className="content-left">
                <h1 className="title">Rayls
                <span className='index'>01</span>
                </h1>
            </div>
            <div className='content-center'>
            <div className="description">
                    Unifying the best of traditional & decentralized finance
                </div>
            </div>
            <div className="content-right">
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
                <div className="highlight-text">
                    {/* <span>(</span> */}
                    Unifying the best of traditional & decentralized finance
                    {/* <span>)</span> */}
                </div>
            </div>
        </div>
    );
}

export default PortfolioSingle;
