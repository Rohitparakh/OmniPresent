import React from 'react';
import './PortfolioSingleFive.css';
import image from '../../assets/images/PortfolioFifth.png';

function PortfolioSingleFive() {
    return (
        <div className="portfolio-single-five">
            <div className="content">
                <h1 className="title">Fluus
                    <span className="index">05</span>
                </h1>
                <p className="description">
                    Connecting the dots between <br /> crypto services
                </p>
                <div className="line"></div>
            </div>
            <img
                src={image}
                alt="Fluus project"
                className="project-image"
            />
        </div>
    );
}

export default PortfolioSingleFive;
