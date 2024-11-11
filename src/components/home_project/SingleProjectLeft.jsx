import React from 'react';
import './SingleProjectLeft.css';
import imageApproach from '../../assets/images/imageApproach.png';

function SingleProjectLeft({img, index, heading, subHeading, para}) {
    return (
        <div className="singleProjectLeft">
            <div className="bigNumberSection">
                <div className="bigNumber">{index}</div>
                <h2 className="approachTitle">{heading}</h2>
            </div>
            <div className="contentSection">
                <h3 className="headline">{subHeading}</h3>
                <p className="description">{para}
                </p>
                <img src={img} alt="Meltwater Design" className="designImage" />
            </div>
        </div>
    );
}

export default SingleProjectLeft;
