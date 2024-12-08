import React from 'react';
import './TestimonialSecond.css';
import image1 from '../../assets/images/TestimonialTwoFirst.png';
import image2 from '../../assets/images/TestimonialTwoSecond.jpg';


function TestimonialSecond() {
    return (
        <div className="testimonialSecond">
            <img src={image2} alt="Artwork" className="artworkImage mx-auto" />
            <img src={image1} alt="Laksh Bhalla" className="reviewerImage hidden lg:block" />
            <div className="reviewerContent hidden lg:block">
                <p className="reviewerName">Laksh Bhalla</p>
                <p className="companyName">Director of Bytecode Labs/ RampX Protocol</p>
            </div>
            <div className="quoteContent  text-right lg:text-left">
                <h2 className="testimonialQuote">“Instrumental in the growth of RampX”</h2>
                <p className="testimonialText">
                    “Omnipresent has been instrumental in the growth of RampX, and has been an absolute pleasure to work with.”
                </p>
            </div>
            <div className='lg:hidden flex mt-20 gap-3 '>
            <img src={image1} alt="Laksh Bhalla" className="h-[130px]" />
            <div className="reviewerContent text-right">
                <p className="reviewerName">Laksh Bhalla</p>
                <p className="companyName">Director of Bytecode Labs/ RampX Protocol</p>
            </div>
            </div>
        </div>
    );
}

export default TestimonialSecond;
