import React from 'react';

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
            <div class="w-screen px-48 flex items-center justify-end gap-4 mt-10 md-d-none">
                    <img src="/src/assets/about/telegram.svg" alt="" class="h-7"/>
                    <img src="/src/assets/about/x.svg" alt="" class="h-7"/>
                    <img src="/src/assets/about/insta.svg" alt="" class="h-7"/>
                </div>
        </div>
    );
}

export default HeroSection;
