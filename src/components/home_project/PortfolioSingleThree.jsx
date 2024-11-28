import React from 'react';
import './PortfolioSingleThree.css';
import thisCanBeYou from '../../assets/images/thisCanBeYou.png';
import image1 from '../../assets/images/ckHomePage.png';
import image2 from '../../assets/images/PortfolioThirdTwo.png';
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';

function PortfolioSingleThree() {
    const { ref, inView } = useInView({
        threshold: 0.3, // Element is considered in view when 50% of it is visible
        triggerOnce: false, // Trigger the `inView` state only once
      });

      const navigate = useNavigate();

    return (
        <motion.div variants={slideUp} initial="hidden" whileInView="visible"  className="portfolio-single-three">
            <div ref={ref} className={`circle-section ${ inView ? 'inView' : ''}`} onClick={()=>window.open('https://calendly.com/admin-invictuslabs/30min', '_blank')}>
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
        </motion.div>
    );
}

export default PortfolioSingleThree;
