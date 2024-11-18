import React from 'react';
import './PortfolioSingleThree.css';
import thisCanBeYou from '../../assets/images/thisCanBeYou.png';
import image1 from '../../assets/images/ckHomePage.png';
import image2 from '../../assets/images/PortfolioThirdTwo.png';
function PortfolioSingleThree() {
    return (
        <div className="portfolio-single-three">
            <div className="circle-section">
                <img src={thisCanBeYou} alt="Circle" className="circle" />
            </div>
            <div className="content-section">
                <div className='content-left'>
                <img src={image1} alt="Status" />
                <p className="description">
                Web3 entertainment <br/>that fetched <br/>15 million viewers.
                </p>
                </div>
                <div className='image'>
                {/* <div className="status">
                    <img src="https://placeholder.pics/svg/8.61x8.61" alt="Status" />
                    <span>in progress</span>
                </div> */}
                {/* <img src={image2} alt="Project screenshot" className="project-image" /> */}
                </div>                
            </div>
            <div className="index-section">
            <h1 className="title">CryptoKnights
                <span className="index">03</span>
            </h1>
           
            </div>
        </div>
    );
}

export default PortfolioSingleThree;
