import React from 'react';
import './SingleProjectLeft.css';
import imageApproach from '../../assets/images/imageApproach.png';
import whiteSquare from '../../assets/images/whiteSquare.png';

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
                    return <li ><img style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} src={whiteSquare} height={20} width={20}/>{obj}</li>
                })}
                </ul>
                <img src={objectiveImage} alt="Meltwater Design" className="designImage" />
            </div>
        </div>
    );
}

export default SingleProjectLeft;
