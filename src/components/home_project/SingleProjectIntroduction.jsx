import React from 'react';
import './SingleProjectIntroduction.css';
import { motion } from 'framer-motion';
import { slideDown, slideRight, slideRightDelay1, slideRightDelay2, slideLeft } from '../../animations';

function SingleProjectIntroduction({industry, deliverables, about}) {
    return (
        <div className="singleProjectIntroduction">
            <div>
            <motion.div variants={slideDown} initial="hidden" whileInView="visible" className="topSection">
                <div className="verticalFrame">
                    <h3 className="sectionTitle">Industry</h3>
                    <p className="sectionContent">{industry}</p>
                </div>
                <div className="verticalFrame">
                    <h3 className="sectionTitle">Deliverables</h3>
                    <p className="sectionContent">{deliverables}</p>
                </div>
            </motion.div>
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" className="middleSection">
                <p className="mainContent">
                    {about}
                </p>
            </motion.div>
            </div>
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" className="bottomSection">
                <div className="bigNumber">01</div>
                <h2 className="sectionTitleLarge">About</h2>
            </motion.div>
        </div>
    );
}

export default SingleProjectIntroduction;
