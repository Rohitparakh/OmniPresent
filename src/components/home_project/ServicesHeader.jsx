import React from 'react';
import './ServicesHeader.css';
import servicesFinger from '../../assets/images/servicesFinger.png'

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
            <span className="textWeCover-text">full scale.</span> <span className="textTheBases-highlight"> &nbsp;web3</span>

        </div>
    );
}

// TextTheBases component
const TextTheBases = () => {
    return (
        <div className="textTheBases-container">
            <div className="textTheBases-textContainer">
                <span className="textTheBases-baseText">marketing for your brand</span>
            </div>
        </div>
    );
};

function ServicesHeader() {
    return (
        <div className="servicesHeader">
            <div className="headerRow">
                <img src={servicesFinger} />
                <TextWeCover />
            </div>
            <TextTheBases />
        </div>
    );
}

export default ServicesHeader;
