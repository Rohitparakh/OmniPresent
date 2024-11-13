import React from 'react';
import './TestimonialSecond.css';
import image1 from '../../assets/images/TestimonialTwoFirst.png';
import image2 from '../../assets/images/TestimonialTwoSecond.jpg';


function TestimonialSecond() {
    return (
        <div className="testimonialSecond">
            <img src={image2} alt="Artwork" className="artworkImage" />
            <img src={image1} alt="Laksh Bhalla" className="reviewerImage" />
            <div className="reviewerContent">
                <p className="reviewerName">Laksh Bhalla</p>
                <p className="companyName">Director of Bytecode Labs/RampX Protocol</p>
            </div>
            <div className="quoteContent">
                <h2 className="testimonialQuote">"Fast, efficient, and reliable."</h2>
                <p className="testimonialText">
                    "They delivered faster than we expected without sacrificing quality. Their speed and agility set them apart in a crowded market."
                </p>
            </div>
        </div>
    );
}

export default TestimonialSecond;
