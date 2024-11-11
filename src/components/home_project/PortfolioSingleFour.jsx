import React from 'react';
import './PortfolioSingleFour.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/PortfolioFourth.png';

function PortfolioSingleFour() {
    return (
        <div className="portfolio-single-four">
            <div className="content-left">
                <h1 className="title">Hydro
                <span className='index'>04</span>
                </h1>
            </div>
            <div className='content-center'>
            <div className="description">
                    A new economic engine for the internet
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
