import React from 'react';
import './WhyUsFirst.css';
import whyUsFirstImage from '../../assets/images/WhyUsFirstImage.png';
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay,slideRight } from '../../animations';

function WhyUsFirst() {
    return (
        <div className="why-us-first">
            <motion.div variants={slideUp} initial="hidden" whileInView="visible" className='content-left'>
                <img 
                    src={whyUsFirstImage}
                    alt="Graphic Element" 
                    className="graphic-element" 
                />
            <h1 className="title-mobile lg-d-none">we are relationship driven</h1>                
                <p className="description">
                We’re here for the long haul, building relationships that go beyond transactions and make a big impact.
                </p>
            </motion.div>
            <motion.div variants={slideUpDelay} initial="hidden" whileInView="visible" className="content-right">
            <h1 className="title">we are
relationship
driven</h1>
            </motion.div>
        </div>
    );
}

export default WhyUsFirst;
