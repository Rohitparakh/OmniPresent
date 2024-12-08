import React from 'react';
import './TestimonialFirst.css';
import image from '../../assets/images/TestimonialOne.png';

function TestimonialFirst() {
    return (
        <div className="testimonial-first">
            <div style={{flex:2}}>            
                <img src={image} alt="Andy Morris" className="testimonial-image" />
                <p className="testimonial-author">Mohammed Salha</p>
                <p className="testimonial-company">AXS Agency</p>
            </div>
            <div className="testimonial-content">
                <h2 className="testimonial-quote">Diesel’s first Web3 activation</h2>
                <p className="testimonial-text">
                “Their team was instrumental in navigating the complexities of Web3, with a deep understanding of market dynamics and effective audience engagement.” 
                </p>
            </div>
        </div>
    );
}

export default TestimonialFirst;
