import React from 'react';
import './PortfolioSingleFour.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/PortfolioFourth.png';

function PortfolioSingleFour() {
    return (
        <div className="portfolio-single-four lg-d-none">
            <div className="content-left">
                <h1 className="title">CryptoKnights
                <span className='index'>03</span>
                </h1>
            </div>
            <div className='content-center'>
            <div className="description">
            Web3 entertainment that fetched 15 million viewers.
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
            </div>
        </div>
    );
}

export default PortfolioSingleFour;
