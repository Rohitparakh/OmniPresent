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
            <span className="textWeCover-text">we cover</span>
        </div>
    );
}

// TextTheBases component
const TextTheBases = () => {
    return (
        <div className="textTheBases-container">
            <div className="textTheBases-textContainer">
                <span className="textTheBases-highlight">all</span>
                <span className="textTheBases-baseText">the bases</span>
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
