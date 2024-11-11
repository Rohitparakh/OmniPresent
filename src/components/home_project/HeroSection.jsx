import React from 'react';
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className='zero'><span className='swiggly'>~</span> zero</h1><br/>
                <h1><span className='to'>to</span> <span className='one'>one</span></h1>
                <div className='d-flex'>
                    <div className='subHeading'>
                <p>Design, strategy & ideas for the new internet</p>
                <button className="cta-button">schedule a call <span className='arrow'>➔</span></button>
                </div>
                </div>                
            </div>
            {/* <div class="w-screen px-48 flex items-center justify-end gap-4 mt-10 md-d-none"> */}
            <div className='justify-end w-screen px-48 mt-10 flex items-center gap-4 sm-justify-center'>
                <img src={telegram} alt="" className='h-10'/>
                <img src={x} alt="" className='h-10'/>
                <img src={insta} alt="" className='h-10'/>
            </div>
        </div>
    );
}

export default HeroSection;
