import React from 'react';
import './TestimonialFirst.css';
import image from '../../assets/images/TestimonialOne.png';

function TestimonialFirst() {
    return (
        <div className="testimonial-first">
            <div>            
                <img src={image} alt="Andy Morris" className="testimonial-image" />
                <p className="testimonial-author">Andy Morris</p>
                <p className="testimonial-company">Skyscanner</p>
            </div>
            <div className="testimonial-content">
                <h2 className="testimonial-quote">"Their Web3 expertise is unmatched."</h2>
                <p className="testimonial-text">
                    "Working with this team was a game-changer. They understand the crypto landscape
                    inside and out and positioned our project perfectly. Highly recommend."
                </p>
            </div>
        </div>
    );
}

export default TestimonialFirst;
