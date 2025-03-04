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
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay,slideRight, slideUp40, slideUp50, growFromLeft } from '../../animations';
import line from '../../assets/about/line.svg';

function HeroSection() {
    return (
        <div className="hero-section">            
<img className="lg:z-40 object-cover absolute bg-transparent z-1 w-screen lg:w-[calc(100vw_-_10%)] top-[250px] scale-[2.2] lg:scale-100 lg:top-[130px] left-[-34%] lg:left-[6%]" src={gif}/>

            <div className="hero-content">
               <h1 className='zero overflow-hidden'>
                    <motion.div 
                         initial={{ clipPath: 'inset(-11% 111% 0 11%)' }} 
                         animate={{ clipPath: 'inset(-11% -11% 0 -11%)' }} 
                         transition={{ duration: 1 }} 
                        ><span className='swiggly'>~</span>
                    </motion.div> 
                    <span className='vast'>
                        <motion.span
                            variants={slideUp50}
                            initial="hidden"
                            whileInView="visible"
                         className='will-change-[opacity,x,y,transform] z-50 relative'>
                            v
                        </motion.span>
                        <motion.span
                            variants={slideUp40}
                            initial="hidden"
                            whileInView="visible"
                        >
                            as
                        </motion.span>
                        <motion.span
                            variants={slideUp50}
                            initial="hidden"
                            whileInView="visible"
                         className='z-50 relative'>
                            t
                        </motion.span>
                    </span>
                </h1>
                <h1  >
            <motion.span 
            variants={slideUp50}
            initial="hidden"
            whileInView="visible"
            className='to present will-change-[opacity,x,y,transform]'>prese<span  className='z-50 relative'>nt</span></motion.span> <span className='one'></span></h1>
                <motion.h1  variants={slideUpDelay}
        initial="hidden"
        whileInView="visible"><div class="absolute top-[50%] left-[-130px] lg:block hidden"><img src={line} class="h-28 heroPlusImage" alt=""/></div><span className='to ampersand'>&</span> <span className='one'>future</span></motion.h1>
                <div className='d-flex justify-center w-[90vw]'>
                    <div className='subHeading'>
                <p className='font-[400] text-[36px] leading-[35px]'>
                <img style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} src={blackSquare} height={20} width={20}/> The community-driven web3 super agency for the new internet.</p>
                {/* <NavLink to="https://calendly.com/admin-omnipresent-/30min
" target="_blank"><button className="cta-button">schedule a call <span className='arrow'><img src={arrowPrimary} width={20} height={20}/></span></button></NavLink> */}
                <NavLink to="https://calendly.com/admin-omnipresent-/30min" target="_blank">
                    <button class="cta-button">
                        schedule a call <span class="arrow">
                            <img src={arrowPrimary} width="26" height="26"/>

                            </span>
                        </button>
                </NavLink>
                
                </div>
                </div>                
            </div>
            {/* <div class="w-screen px-48 flex items-center justify-end gap-4 mt-10 md-d-none"> */}
            <div className='justify-end w-screen px-32 mt-10 items-center gap-4 sm-justify-center hidden md:flex'>
                <img src={telegram} alt="" className='h-14'/>
                <NavLink to="https://x.com/Omnipresentcc" target="_blank"><img src={x} alt="" className='h-14'/></NavLink>
                <img src={insta} alt="" className='h-14'/>
            </div>
        </div>
    );
}

export default HeroSection;
