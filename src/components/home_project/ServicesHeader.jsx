import React from 'react';
import './ServicesHeader.css';
import servicesFinger from '../../assets/images/servicesFinger.png'
import { motion } from 'framer-motion';
import { growFromLeft, slideUp, slideUpDelay } from '../../animations';

// TextAll component
const TextAll = () => {
    return (
        <div className="textAll-container">
            <span className="textAll-text">all</span>
        </div>
    );
};

// TextWeCover component
function TextWeCover() {
    return (
        <div className="textWeCover-container">
            <span className="textWeCover-text">full scale.</span> <span className="textTheBases-highlight hidden lg:block"> &nbsp;web3</span>

        </div>
    );
}

// TextTheBases component
const TextTheBases = () => {
    return (
        <div className="textTheBases-container">
            <div className="textTheBases-textContainer">
                <span className="textTheBases-baseText"><span className="textTheBases-highlight inline-block mr-5 lg:hidden"> &nbsp;web3&nbsp;</span>marketing for your brand</span>
            </div>
        </div>
    );
};

function ServicesHeader() {
    return (
        <motion.div variants={slideUp} initial="hidden" whileInView="visible" className="servicesHeader mb-16 lg:mb-32">
            <div className="headerRow">
                <motion.img variants={growFromLeft} initial="hidden" whileInView="visible" className="lg:mt-[-60px] xl:mt-[-120px]" src={servicesFinger} />
                <TextWeCover />
            </div>
            <TextTheBases />
        </motion.div>
    );
}

export default ServicesHeader;
