import React from 'react';
import './SingleProjectLeft.css';
import imageApproach from '../../assets/images/imageApproach.png';
import whiteSquare from '../../assets/images/whiteSquare.png';

function SingleProjectLeft({index, heading, subHeading, objectives, objectiveImage}) {
    return (
        <div className="singleProjectLeft">
            <div className={`bigNumberSection mt-[200px] lg:mt-0 !mb-[50px] lg:mb-0  ${heading==='Results'?"items-start lg:items-center":"item-center"}`}>
                <div className="bigNumber">{index}</div>
                <h2 className="approachTitle text-center">{heading}</h2>
            </div>
            <div className="contentSection relative">
                <h3 className="headline">{subHeading}</h3>
                <ul className="description">
                {objectives?.map(obj=>{
                    return <li ><img style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} src={whiteSquare} height={20} width={20}/>{obj}</li>
                })}
                </ul>
                <img src={objectiveImage} alt="Meltwater Design" className="designImage" />
    <div className="absolute left-0 top-[105%] w-[100%] border-b-[2px] border-white opacity-50 animate-growX"></div>

            </div>
        </div>
    );
}

export default SingleProjectLeft;
