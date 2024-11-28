import React from 'react';
import './SingleProjectRight.css';
import { motion } from 'framer-motion';
import { slideRight,slideUp, slideLeft, slideRightDelay1, slideRightDelay2, slideLeftDelay } from '../../animations';

function SingleProjectRight({approachImage, index, heading, subHeading, approachParagraph}) {
    return (
        <div className="singleProjectRight">

            <motion.div  variants={slideUp} initial="hidden" whileInView="visible"  className="contentSection">
                <motion.h3  variants={slideRight} initial="hidden" whileInView="visible"  className="headline">{subHeading}</motion.h3>
                <motion.p  variants={slideRightDelay1} initial="hidden" whileInView="visible" className="description">
                    {approachParagraph}
                </motion.p>
                <img src={approachImage} alt="Meltwater Design" className="designImage" />
            </motion.div>
            <motion.div  variants={slideLeft} initial="hidden" whileInView="visible"  className="bigNumberSection">
                <div className="bigNumber">{index}</div>
                <h2 className="impressionTitle">{heading}</h2>
            </motion.div>
        </div>
    );
}

export default SingleProjectRight;
