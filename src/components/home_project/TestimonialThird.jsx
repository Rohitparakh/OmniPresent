import React from 'react';
import './TestimonialThird.css';
import image from '../../assets/images/TestimonialThird.png';;

function TestimonialThird() {
    return (
        <> 
               <div className="testimonialThird">
        <img src={image} alt="Ahmed AI-Balaghi" className="reviewerImage" />
<div className=' sm-f-column' style={{alignItems:'flex-start'}}>
            <div className="reviewerContent">
                <p className="reviewerName">Ahmed AI-Balaghi</p>
                <p className="companyName">Biconomy</p>
            </div>
            <div className="quoteContent">
                <h2 className="testimonialQuote">"Results-driven and dependable."</h2>
                <p className="testimonialText">
                    "They don’t just talk; they deliver. Every promise was met with precision and impact."
                </p>
            </div>
        </div>
        </div>
        </>
    );
}

export default TestimonialThird;
