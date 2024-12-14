import React from 'react';
import './SingleProjectLeft.css';
import imageApproach from '../../assets/images/imageApproach.png';
import whiteSquare from '../../assets/images/whiteSquare.png';
import { motion } from 'framer-motion';
import { slideRight,slideUp, slideLeft, slideRightDelay1, slideRightDelay2, slideLeftDelay } from '../../animations';

function SingleProjectLeft({index, heading, subHeading, objectives, objectiveImage}) {
    return (
        <div className="singleProjectLeft">
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" className={`bigNumberSection mt-[200px] lg:mt-0 !mb-[50px] lg:mb-0  ${heading==='Results'?"items-start lg:items-center":"item-center"}`}>
                <div className="bigNumber">{index}</div>
                <h2 className="approachTitle text-center">{heading}</h2>
            </motion.div>
            <motion.div  variants={slideUp} initial="hidden" whileInView="visible" className="contentSection relative max-w-full px-10">
                <h3 variants={slideLeft} initial="hidden" whileInView="visible" className="headline">{subHeading}</h3>
                <ul variants={slideLeft} initial="hidden" whileInView="visible" className="description">
                {objectives?.map(obj=>{
                    return <li ><img style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} src={whiteSquare} height={20} width={20}/>{obj}</li>
                })}
                </ul>
                <img src={objectiveImage} alt="Meltwater Design" className="designImage" />
    <div className="absolute left-0 top-[105%] w-[100%] border-b-[2px] border-white opacity-50 animate-growX md:hidden"></div>

            </motion.div>
        </div>
    );
}

export default SingleProjectLeft;
