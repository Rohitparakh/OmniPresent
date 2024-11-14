import React from 'react';
import './SingleProjectLeft.css';
import imageApproach from '../../assets/images/imageApproach.png';

function SingleProjectLeft({index, heading, subHeading, objectives, objectiveImage}) {
    return (
        <div className="singleProjectLeft">
            <div className="bigNumberSection">
                <div className="bigNumber">{index}</div>
                <h2 className="approachTitle">{heading}</h2>
            </div>
            <div className="contentSection">
                <h3 className="headline">{subHeading}</h3>
                <ul className="description">
                {objectives?.map(obj=>{
                    return <li>{obj}</li>
                })}
                </ul>
                <img src={objectiveImage} alt="Meltwater Design" className="designImage" />
            </div>
        </div>
    );
}

export default SingleProjectLeft;
