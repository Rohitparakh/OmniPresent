import React from 'react';
import './SingleProjectTestimonial.css';
import authorImage from '../../assets/images/image 521.png';
import quotesImage from '../../assets/images/❝.png';

function SingleProjectTestimonial(){

    return(
        <div className='testimonial containerOld'>
            <div className='leftSection'>
                <h2>INVCTS team knows <br/>how to <span className='text-yellow'>deliver.</span></h2>
                <p>Since engaging the team as our primary web developer and digital marketing partner we have solidified our Brand marketing and benefitted from continued growth in overall site traffic and lead generation. Our dedicated account rep takes the time to understand our unique business needs and continues to meet even the tightest of deadlines - and always on budget. Glad to have them as our digital partner!</p>
                <div className='authorDetails'>
                    <img src={authorImage} />
                    <div className='authorDetailsRight'>
                        <p className='fw-900'>Ahmed AI-Balaghi</p>
                        <p>Biconomy</p>
                    </div>
                </div>
            </div>
            <div className='rightSection'>
                <img src={quotesImage} />
                <p>What our clients are saying</p>
            </div>
        </div>
    )
}

export default SingleProjectTestimonial

