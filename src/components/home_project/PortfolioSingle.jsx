import React from 'react';
import './PortfolioSingle.css';
import statusProgress from '../../assets/images/statusProgress.png';
import image from '../../assets/images/Ethihad.png';
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';
import { useNavigate } from 'react-router-dom';

function PortfolioSingle({onMouseEnter, onMouseLeave}) {
    const navigate = useNavigate();
    return (
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" className="portfolio-single"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={()=>navigate('/cases/ethihad')}>
            <div className="content-left">
                <h1 className="title">Etihad Airways
                <span className='index'>01</span>
                </h1>
            </div>
            <div className='content-center'>
            <div className="description">
            A landmark Web3 debut for a global Web2 aviation leader
                </div>
            </div>
            <div className="content-right">
            <div className='image mt-10'>
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
                {/* <div className="highlight-text">
                    
                    Unifying the best of traditional & decentralized finance
                    
                </div> */}
            </div>
        </motion.div>
    );
}

export default PortfolioSingle;
