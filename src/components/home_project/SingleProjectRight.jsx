import React from 'react';
import './SingleProjectRight.css';
import imageRight from '../../assets/images/imageApproach.png';

function SingleProjectRight({img, index, heading, subHeading, para}) {
    return (
        <div className="singleProjectRight">
            <div className="contentSection">
                <h3 className="headline">{subHeading}</h3>
                <p className="description">
                    {para}
                </p>
                <img src={img} alt="Meltwater Design" className="designImage" />
            </div>
            <div className="bigNumberSection">
                <div className="bigNumber">{index}</div>
                <h2 className="impressionTitle">{heading}</h2>
            </div>
        </div>
    );
}

export default SingleProjectRight;
