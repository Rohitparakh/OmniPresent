import React from "react";
import { Button, MarqueeSection } from "../common";
import line from "../../assets/about/line.svg";
import OurServices_Services_PNG from "../../assets/videos/OurServices_Services_PNG.mov";
// import heroImg from "../../assets/services/heroImg.svg";
import heroImg from "../../assets/gif/web3SuperAgency.gif";
import right from "../../assets/services/right.svg";
// import HeroStar from "../../assets/services/heroStar.svg";
import HeroStar from "../../assets/services/heroStar.png";
import marLogo from "../../assets/about/marLogo.svg";
import marArrow from "../../assets/about/marArrow.svg";
import { motion } from "framer-motion";
import { growFromLeftDelay, growFromRight, growFromTop, growFromTopDelay, slideUp, slideUpDelay } from "../../animations";
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';
import { NavLink } from "react-router-dom";
import blackSquare from '../../assets/images/blackSquare.png';

const ServicesHero = () => {
  return (
    <div className="relative w-screen flex flex-col justify-between font-nohemi-ext bg-primary px-4">
      <div className=" max-w-7xl w-full z- mx-auto flex flex-col items-center justify-center  relative mt-[-80px] lg:mt-16">
        <div className="py-20"></div>
        {/* Center text area start */}
        <div
          className={`flex flex-col z-50 leading-[7rem] lg:gap-10 w-[600px] xl:w-[60vw] 2xl:w-[50vw] items-end justify-end py-1 min-[1800px]:scale-[1.65] xl:scale-[1.55] lg:scale-[1.35] scale-[.6] relative`}
        >
          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="absolute top-[6px] left-[115px] xl:left-[150px] mix-blend-multiply font-nohemi-ext text-[14rem]"
          >
            <img src={HeroStar} alt="" className=" h-[90px] xl:h-[110px]"/>
          </motion.p>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            className="text-[9rem] lg:text-[13rem] min-[1800px]:text-[14rem] z-10 flex items-end font-nohemi-ext text-black relative"
          >
            <span className="text-[9rem] flex items-end w-min pt-9"></span>
            <span className="font-nohemi-ext">our</span>
          </motion.h1>
          <motion.h1
            className="text-[9rem] lg:text-[13rem] min-[1800px]:text-[14rem] lg:w-auto w-full z-50 flex items-center gap-2 font-nohemi-ext text-black pl-5 relative left-[-40px] md:left-0"
            variants={slideUpDelay}
            initial="hidden"
            animate="visible"
          >
            services
          </motion.h1>

          {/* assets for text */}
          <>
    <div className="absolute h-[8rem] lg:h-36 top-[-10px] lg:top-[-30px] xl:top-[-10px] left-[113px] xl:left-[142px] border-r-[1px] border-black opacity-50 z-50 animate-growY"></div>
    <div className="absolute h-[8rem] lg:h-36 top-[-10px] lg:top-[-30px] xl:top-[-10px] left-[207px] xl:left-[270px] border-r-[1px] border-black opacity-50 z-50 animate-growY"></div>


    <div className="absolute lg:hidden h-[8rem] lg:h-36 top-[110px] lg:top-[-30px] xl:top-[-10px] left-[233px] xl:left-[142px] border-r-[1px] border-black opacity-50 z-50 animate-growY"></div>
    <div className="absolute lg:hidden h-[8rem] lg:h-36 top-[110px] lg:top-[-30px] xl:top-[-10px] left-[333px] xl:left-[142px] border-r-[1px] border-black opacity-50 z-50 animate-growY"></div>

    {/* <div className="absolute top-[-30px] left-[207px] h-36 border-r-[1px] border-black opacity-50 z-50 animate-growY"></div> */}

    {/* <div className='absolute right-[-10px] top-[6px] w-[19rem] border-b-[1px] border-black opacity-50 z-50'></div> */}

    {/* <div className="absolute left-[240px] bottom-[92px] w-[20rem] border-b-[1px] border-black opacity-50 animate-growX"></div> */}
    <div className="absolute right-[1rem] lg:right-[240px] xl:right-[1rem] xl:w-[35rem] xl:bottom-[133px] bottom-[101px] lg:bottom-[92px] w-[37rem] lg:w-[20rem] border-b-[1px] border-black opacity-50 animate-growX"></div>
    <div className="absolute right-[1rem] lg:right-[240px] xl:right-[1rem] xl:w-[35rem] xl:bottom-[133px] bottom-[0rem] lg:bottom-[92px] w-[30rem] lg:w-[20rem] border-b-[1px] border-black opacity-50 animate-growX"></div>

    <div className="absolute left-[96px] xl:left-[125px] top-[6px] w-[8rem] lg:w-[10rem] border-b-[1px] border-black opacity-50 animate-growX"></div>

    <div className="absolute lg:hidden left-[350px] xl:left-[125px] top-[6px] w-[16rem] lg:w-[10rem] border-b-[1px] border-black opacity-50 animate-growX"></div>
    <div className="absolute lg:hidden left-[350px] xl:left-[125px] top-[104px] w-[16rem] lg:w-[10rem] border-b-[1px] border-black opacity-50 animate-growX"></div>


    <div className="absolute left-[96px] xl:left-[125px] xl:bottom-[156px] xl:w-[10rem] bottom-[125px] w-[8rem] border-b-[1px] border-black opacity-50 animate-growX"></div>

    <div className="absolute lg:block hidden right-[240px] xl:right-[1rem] xl:w-[35rem] xl:bottom-[0px] bottom-[92px] w-[20rem] border-b-[1px] border-black opacity-50 animate-growX"></div>
    {/* <div className="absolute left-[240px] bottom-[13px] w-[20rem] border-b-[1px] border-black opacity-50 animate-growX"></div> */}
</>

        </div>
        {/* Center text area end */}

        {/* Bottom area start */}
        <div className="w-full py-5 lg:mt-20 mt-10 relative flex lg:flex-row flex-col items-center justify-center gap-14">
          <div className="flex items-center gap-2">
            <p className="  lg:w-[30rem] leading-7 text-xl font-nohemi font-normal">
            <img src={blackSquare} height={20} width={20} style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} /> We cover everything you need to make an impact in Web3—from
              community building to full-scale marketing with your very own CMO.
            </p>
          </div>
          <div className="  h-full pb-10 flex items-start lg:w-auto w-full">
            <Button text="Schedule a call" arrowBlack={true}/>
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
        className="absolute left-[-10%] lg:left-[-5%] top-[-75px] lg:top-[-43px] h-[250px] -rotate-45 lg:rotate-0 lg:h-[40%] xl:h-[45%] min-[1800px]:h-[45%] lg:z-0 z-[999]"
      />

      {/* video */}
      {/* <video src={OurServices_Services_PNG} autoPlay loop muted className="'absolute left-0 top-[-30px] h-96 z-0"/> */}
      <div className='items-center gap-8 mb-10 max-w-7xl w-full mx-auto justify-end pb-4 hidden md:flex'>
            <NavLink target="_blank" to=""> <img src={telegram} alt="" className='h-12' /></NavLink>
            <NavLink target="_blank" to="https://x.com/Omnipresentcc"><img src={x} alt="" className='h-12' /></NavLink>
            <NavLink target="_blank" to=""><img src={insta} alt="" className='h-12' /></NavLink>
          </div>

      {/* marquee start */}
      <div className=" w-full ">
        <div className="max-w-[calc(100vw_-_40px)] lg:max-w-[calc(100vw_-_140px)] mx-auto border border-black"></div>

        <div className="py-6  w-full">
          <MarqueeSection direction="left">
            <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 select-none">
              <span className="text-black font-nohemi-ext">5M+</span> social
              followers
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
  );
};

export default ServicesHero;
