import React from 'react';
import './PortfolioSingleLeft.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/RampX.png';
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';

function PortfolioSingleLeft() {
    return (
        <motion.div variants={slideUpDelay} initial="hidden" whileInView="visible" className="portfolio-single-left">
            <div className="content-left z-50 relative">
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
            <div className="description relative mt-10 mb-20 lg:mb-10 lg:mt-0">
            10K users gained in just seven days with a powerful product launch.

</div>
            </div>
            <div className="content-right z-50 relative bg-black">                
                <div className="details">
                    <h1 className="title">RampX
                    <span className="index rampx">02</span>
                    </h1>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioSingleLeft;
