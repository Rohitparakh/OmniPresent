import React from "react";
import { Button, MarqueeSection } from "../common";
import line from "../../assets/about/line.svg";
import OurServices_Services_PNG from "../../assets/videos/OurServices_Services_PNG.mov";
import heroImg from "../../assets/services/heroImg.svg";
import right from "../../assets/services/right.svg";
import HeroStar from "../../assets/services/heroStar.svg";
import marLogo from "../../assets/about/marLogo.svg";
import marArrow from "../../assets/about/marArrow.svg";
import { motion } from "framer-motion";
import { growFromLeftDelay, growFromRight, growFromTop, growFromTopDelay, slideUp, slideUpDelay } from "../../animations";
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';
import { NavLink } from "react-router-dom";

const ServicesHero = () => {
  return (
    <div className="relative w-screen flex flex-col justify-between font-nohemi-ext bg-primary px-4">
      <div className=" max-w-7xl w-full z- mx-auto flex flex-col items-center justify-center  relative">
        <div className="py-20"></div>
        {/* Center text area start */}
        <div
          className={`flex flex-col z-50 leading-[6rem] w-[565px] items-end justify-end py-1 lg:scale-[1.55] scale-[.6] relative`}
        >
          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="absolute top-[6px] left-[115px]  mix-blend-multiply font-nohemi-ext text-[14rem]"
          >
            <img src={HeroStar} alt="" className=" h-[90px] "/>
          </motion.p>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-[10rem] z-10 flex items-end font-nohemi-ext text-black relative"
          >
            <span className="text-[10rem] flex items-end w-min pt-9"></span>
            <span className="font-nohemi-ext">our</span>
          </motion.h1>
          <motion.h1
            className="text-[9rem] lg:w-auto w-full z-50 flex items-center gap-2 font-nohemi-ext text-black pl-5 relative left-[-40px] md:left-0"
            variants={slideUpDelay}
            initial="hidden"
            animate="visible"
          >
            services
          </motion.h1>

          {/* assets for text */}
          <>
    <div className="absolute h-36 top-[-30px] left-[113px] border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>

    <div className="absolute top-[-30px] left-[207px] h-36 border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>

    {/* <div className='absolute right-[-10px] top-[6px] w-[19rem] border-b-[0.5px] border-black opacity-50 z-50'></div> */}

    <div className="absolute left-[240px] bottom-[92px] w-[20rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    <div className="absolute left-[96px] top-[6px] w-[8rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    <div className="absolute left-[96px] bottom-[105px] w-[8rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    <div className="absolute left-[240px] bottom-[13px] w-[20rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>
</>

        </div>
        {/* Center text area end */}

        {/* Bottom area start */}
        <div className="w-full py-5 lg:mt-20 mt-10 relative flex lg:flex-row flex-col items-center justify-around gap-2">
          <div className="flex items-center gap-2">
            <p className="  lg:w-[27rem] leading-7 text-xl font-nohemi font-normal">
              ■ We cover everything you need to make an impact in Web3—from
              community building to full-scale marketing with your very own CMO.
            </p>
          </div>
          <div className="  h-full pb-10 flex items-start lg:w-auto w-full">
            <Button text="Schedule a call" />
          </div>

          {/* <div className="absolute lg:bottom-[75px] top-[-50px] left-[-65px]">
            <img src={line} className="h-28" alt="" />
          </div> */}
        </div>

        {/* Bottom area end */}
      </div>

      <img
        src={heroImg}
        alt=""
        className="absolute left-0 top-[-30px] h-96 z-0"
      />

      {/* video */}
      {/* <video src={OurServices_Services_PNG} autoPlay loop muted className="'absolute left-0 top-[-30px] h-96 z-0"/> */}
      <div className='items-center gap-4 max-w-7xl w-full mx-auto justify-end pb-4 hidden md:flex'>
            <NavLink target="_blank" to=""> <img src={telegram} alt="" className='h-7' /></NavLink>
            <NavLink target="_blank" to="https://x.com/Omnipresentcc"><img src={x} alt="" className='h-7' /></NavLink>
            <NavLink target="_blank" to=""><img src={insta} alt="" className='h-7' /></NavLink>
          </div>

      {/* marquee start */}
      <div className=" w-full ">
        <div className="max-w-7xl mx-auto border border-black"></div>

        <div className="py-6  w-full">
          <MarqueeSection>
            <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 font-semibold select-none">
              <span className="text-black font-nohemi-ext">5M+</span> social
              followers
              <img src={right} className="h-16" alt="" />
              <span className="text-black font-nohemi-ext">1M+</span>
              <span className="text-black">community members</span>
              <span className="text-black font-nohemi-ext">(</span>
              <span className="text-black font-nohemi-ext">$150M+</span>
              <span className="text-black">in client venue</span>
              <span className="text-black font-nohemi-ext">)</span>
              <img src={marArrow} className="h-20" alt="" />
            </h1>
          </MarqueeSection>
        </div>
      </div>
      {/* marquee end */}
    </div>
  );
};

export default ServicesHero;
