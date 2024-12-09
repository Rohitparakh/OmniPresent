import React, { useRef, useEffect, useState } from "react";
import { Button } from '../common'
import letsConnectArrow from '../../assets/videos/letsConnectArrow.mp4';
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';
import logo from '../../assets/images/logoFooter.png';
import { NavLink } from 'react-router-dom';

const LetsConnect = ({index}) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);
  return (
    <div className="w-full bg-primary px-4">
      <div className="max-w-[calc(100vw_-_40px)] lg:max-w-[calc(100vw_-_140px)] mx-auto pt-16 flex flex-col items-center justify-start">
        <div className="border-b pb-1 w-full flex items-center justify-between" style={{ borderBottom: '1px solid #000' }}>
          <p className="text-black font-bold text-[10px] tracking-widest">
            let’s connect
          </p>
          <p className="text-black font-bold text-xs tracking-widest w-44 md:mr-[250px] lg:text-center text-end">
            ( {index?index:'05'} )
          </p>
        </div>

        <div className='max-w-[calc(100vw_-_40px)] lg:max-w-[calc(100vw_-_140px)] flex lg:flex-row flex-col lg:items-center justify-center gap-12 pt-20'>
          <p className='lg:w-1/3 font-nohemi font-[400] text-xl lg:text-2xl leading-8 lg:leading-10 lg:text-3xl'>
            Whether you’ve been building in Web3 for a while — or are just launching your brand into the space — let’s chat about how we can help you make an impact in Web3.
          </p>

          <p className='lg:text-[13rem] min-[1800px]:text-[18rem] xl:text-[16rem] text-8xl font-nohemi-ext sm-text-center'>
            sound
          </p>
        </div>

        <div className='flex flex-col items-center justify-center lg:w-[90%] lg:ml-auto md:mr-auto'>
          <div className='flex items-center sm:gap-0 lg:gap-20'>
            <video 
             ref={videoRef}
              src={letsConnectArrow} 
              autoPlay 
              loop 
              muted 
              playsInline
              controls={false}
              className='lg:h-80 h-10 w-auto max-w-full max-h-96 sm-hidden lg:block min-[1800px]:max-h-64 min-[1800px]:h-64'
            />
            <p className='lg:text-[13rem] min-[1800px]:text-[18rem]  xl:text-[16rem] text-8xl font-nohemi-ext'>good?</p>
            
          </div>
          <video 
              ref={videoRef}
              src={letsConnectArrow} 
              autoPlay 
              loop 
              muted 
              playsInline
              controls={false}
              className='h-48 self-start mt-16 lg:mt-0 lg:self-auto lg:h-24 w-auto max-w-full lg:max-h-48 lg-d-none block'
            />
          <Button text={"schedule a call"} isFooter={true} arrowBlack={true} className={"manifestoSchedule"}/>
        </div>

        <div className='py-5 border-t w-full mt-40 lg:mt-16 flex flex-col items-center justify-between' style={{ borderTop: '1px solid #000' }}>
          <NavLink to="/">
            <img src={logo} alt="" className='h-28 mb-12 mt-7' />
          </NavLink>

          <div className='flex items-center gap-4 mb-10'>
            <NavLink target="_blank" to=""> <img src={telegram} alt="" className='h-10' /></NavLink>
            <NavLink target="_blank" to="https://x.com/Omnipresentcc"><img src={x} alt="" className='h-10' /></NavLink>
            <NavLink target="_blank" to=""><img src={insta} alt="" className='h-10' /></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsConnect;
