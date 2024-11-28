import React from 'react';
import './PortfolioSingleFour.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/PortfolioFourth.png';
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';

function PortfolioSingleFour() {
    return (
        <motion.div variants={slideUp} initial="hidden" whileInView="visible"  className="portfolio-single-four lg-d-none">
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
        </motion.div>
    );
}

export default PortfolioSingleFour;
