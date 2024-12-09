import React from 'react'
import { Button, MarqueeSection } from '../common'
import pen from "../../assets/cases/pen.svg";
import line from "../../assets/about/line.svg";
import marLogo from "../../assets/about/marLogo.svg";
import marArrow from "../../assets/about/marArrow.svg";
import right from "../../assets/services/right.svg"
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';
import { NavLink } from 'react-router-dom';
import blackSquare from '../../assets/images/blackSquare.png'
const CasesHero = () => {
  return (
    <div className=' w-screen flex flex-col justify-between font-nohemi-ext bg-primary px-4'>
    <div className=' max-w-7xl w-full mx-auto flex flex-col items-center justify-center  relative'>
   
        <div className='py-20'>

        </div>
        {/* Center text area start */}
      <div className={`flex flex-col leading-[6rem] max-w-[560px] w-auto items-end justify-end py-1 lg:scale-[1.55] scale-[.6] relative`}>
        <motion.img variants={slideUpDelay}
         initial="hidden"
         animate="visible" src={pen} alt="" className='absolute top-[-28px] left-[30px] lg:top-[-24px] lg:left-[-40px] mix-blend-multiply h-36'/>
        <motion.h1 
         variants={slideUp}
         initial="hidden"
         animate="visible"
        className='text-[10rem] z-10 flex items-end font-nohemi-ext text-black relative mb-5 lg:mb-0'>
         <span className='text-[10rem] flex items-end w-min pt-9 '></span><span className='font-nohemi-ext'>case</span>
        </motion.h1>
        <motion.h1 
         variants={slideUpDelay}
         initial="hidden"
         animate="visible"
        className='mt-10 text-[10rem] flex items-center gap-2 font-nohemi-ext text-black pl-5'>
        studies
        </motion.h1>

        {/* assets for text */}
        <>
    <div className="absolute top-[-30px] lg:left-[10px] left-[-40px] h-60 border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>

    <div className="absolute top-[-30px] lg:left-[185px] left-[35px] h-40 lg:h-60 border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>
    <div className="absolute top-[-30px] lg:left-[185px] left-[240px] h-40 lg:h-60 border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>


    <div className="lg:hidden absolute lg:right-[-10px] top-[103px] w-[19rem] border-b-[0.5px] border-black opacity-50 z-50 animate-growX"></div>

    <div className="lg:hidden absolute right-[-10px] top-[7px] w-[19.3rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    <div className="absolute lg:right-[10px] lg:top-[40px] left-[-50px] top-[7px] w-[33rem] border-b-[0.5px] border-black opacity-50  animate-growX"></div>
    {/* <div className="absolute lg:right-[10px] lg:top-[40px] left-[-40px] top-[100px] w-[300px] border-b-[0.5px] border-black opacity-50  animate-growX"></div> */}

    <div className="absolute lg:left-[-50px] left-[-55px] bottom-[105px] w-[35rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    <div className="absolute left-[170px] bottom-[8px] w-[22rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>
</>


        

      </div>
      {/* Center text area end */}

      {/* Bottom area start */}
    <div className='max-w-4xl w-full md:py-5 lg:mt-16 md:mt-10 relative flex lg:flex-row flex-col items-center justify-around gap-12 lg:gap-2'>
        <div className='flex items-center gap-2'>
        <p className=' lg:max-w-[34rem] leading-7 text-xl font-nohemi font-normal'>
        <img src={blackSquare} height={20} width={20} style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} /> We’ve fueled growth and built vibrant communities across Web3 for leading brands, including Tier 1 companies and Layer 1 blockchains, and our impact keeps building.
        </p>
        </div>
        <div className='  h-auto lg:pb-20 flex items-start lg:w-auto w-full mb-5'>
            <Button text="schedule a call" arrowBlack={true}/>
        </div>

        <div className='absolute bottom-[-25px] left-[-70px] lg:block hidden'>
            <img src={line} className='h-28' alt="" />
        </div>
    </div>

    {/* Bottom area end */}

    </div>
    <div className='flex items-center gap-4 max-w-7xl w-full mx-auto justify-end pb-4 hidden md:flex'>
            <NavLink target="_blank" to=""> <img src={telegram} alt="" className='h-7' /></NavLink>
            <NavLink target="_blank" to="https://x.com/Omnipresentcc"><img src={x} alt="" className='h-7' /></NavLink>
            <NavLink target="_blank" to=""><img src={insta} alt="" className='h-7' /></NavLink>
          </div>
    {/* marquee start */}
    <div className=' w-full '>
        <div className='max-w-7xl mx-auto border border-black'>

        </div>

        <div className='py-6  w-full'>
        <MarqueeSection>
                <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 select-none">
              <span className="text-black font-nohemi-ext">5M+</span> social followers
              <img src={right} className="h-16" alt="" />
              <span className="text-black font-nohemi-ext">1M+</span>
              <span className="text-black">community members</span>
              <span className="text-black font-nohemi-ext">(</span>
                <span className="text-black font-nohemi-ext">$150M+</span>
                <span className="text-black">in client revenue</span>
              <span className="text-black font-nohemi-ext">)</span>
              <img src={marArrow} className="h-20" alt="" />
    
            </h1>
                  </MarqueeSection>
        </div>

    </div>
    {/* marquee end */}
  </div>
  )
}

export default CasesHero