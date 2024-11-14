import React from 'react';
import './SingleProjectRight.css';

function SingleProjectRight({approachImage, index, heading, subHeading, approachParagraph}) {
    return (
        <div className="singleProjectRight">

            <div className="contentSection">
                <h3 className="headline">{subHeading}</h3>
                <p className="description">
                    {approachParagraph}
                </p>
                <img src={approachImage} alt="Meltwater Design" className="designImage" />
            </div>
            <div className="bigNumberSection">
                <div className="bigNumber">{index}</div>
                <h2 className="impressionTitle">{heading}</h2>
            </div>
        </div>
    );
}

export default SingleProjectRight;
