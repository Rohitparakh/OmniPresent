import React from 'react';
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';
import { NavLink } from 'react-router-dom';
import gif from '../../assets/gif/Home.gif';
import video from '../../assets/videos/homeHero.mov';
import videoMP4 from '../../assets/videos/homeHero.mp4';
import arrowPrimary from '../../assets/images/arrowPrimary.png';
import blackSquare from '../../assets/images/blackSquare.png';
import { Button } from '../common';

function HeroSection() {
    return (
        <div className="hero-section">            
{/* <img className="object-cover absolute bg-transparent z-40 w-100 h-100 top-[128px] left-[3%]" src={gif}/> */}

            <div className="hero-content z-10">
                <h1 className='zero'><span className='swiggly'>~</span> <span className='vast'><span className='z-50'>v</span>as<span className='z-50'>t</span></span></h1>
                <h1><span className='to present'>prese<span  className='z-50'>nt</span></span> <span className='one'></span></h1>
                <h1><div class="absolute top-[50%] left-[-200px] lg:block hidden"><img src="/src/assets/about/line.svg" class="h-28" alt=""/></div><span className='to ampersand'>&</span> <span className='one'>future</span></h1>
                <div className='d-flex justify-center'>
                    <div className='subHeading'>
                <p className='font-[400] text-[36px] leading-[52px]'>
                <img style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} src={blackSquare} height={20} width={20}/> The community-driven web3 super agency for the new internet.</p>
                {/* <NavLink to="https://calendly.com/admin-invictuslabs/30min" target="_blank"><button className="cta-button">schedule a call <span className='arrow'><img src={arrowPrimary} width={20} height={20}/></span></button></NavLink> */}
                <NavLink to="https://calendly.com/admin-invictuslabs/30min" target="_blank">
                    <button class="cta-button">
                        schedule a call <span class="arrow">
                            <img src="/src/assets/images/arrowPrimary.png" width="26" height="26"/>

                            </span>
                        </button>
                </NavLink>
                
                </div>
                </div>                
            </div>
            {/* <div class="w-screen px-48 flex items-center justify-end gap-4 mt-10 md-d-none"> */}
            <div className='justify-end w-screen px-32 mt-10 items-center gap-4 sm-justify-center hidden md:flex'>
                <img src={telegram} alt="" className='h-10'/>
                <NavLink to="https://x.com/Omnipresentcc" target="_blank"><img src={x} alt="" className='h-10'/></NavLink>
                <img src={insta} alt="" className='h-10'/>
            </div>
        </div>
    );
}

export default HeroSection;
