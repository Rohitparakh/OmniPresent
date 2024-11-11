import React from 'react';
import './TestimonialFourth.css';
import image1 from '../../assets/images/TestimonialFourthOne.png';
import image2 from '../../assets/images/TestimonialFourthTwo.png';

function TestimonialFourth() {
    return (
        <div className="testimonialFourth">
            <div className='d-flex' style={{alignItems:'flex-end'}}>
            <img src={image1} alt="Logo" className="artworkImage" />
            <img src={image2} alt="Jen Hioki" className="reviewerImage" />
            <div className="reviewerContent">
                <p className="reviewerName">Jen Hioki</p>
                <p className="companyName">Moonpay</p>
            </div>
            </div>
            
            <div className="quoteContent">
                <h2 className="testimonialQuote">"Seamless collaboration and execution."</h2>
                <p className="testimonialText">
                    "From strategy to launch, they guided us effortlessly, always staying one step ahead.
                    A true partner in growth."
                </p>
            </div>
        </div>
    );
}

export default TestimonialFourth;
