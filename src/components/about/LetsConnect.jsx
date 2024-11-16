import React from 'react'
import { Button } from '../common'
import letsConnectArrow from '../../assets/videos/letsConnectArrow.mp4';
import x from '../../assets/about/x.svg';
import telegram from '../../assets/about/telegram.svg';
import insta from '../../assets/about/insta.svg';
import logo from '../../assets/images/logoFooter.png';
import { NavLink } from 'react-router-dom';

const LetsConnect = () => {
  return (
    <div className="w-full bg-primary px-4">
      <div className="max-w-7xl mx-auto pt-16 flex flex-col items-center justify-start">
        <div className="border-b pb-1 w-full flex items-center justify-between" style={{ borderBottom: '1px solid #000' }}>
          <p className="text-black font-bold text-[10px] tracking-widest">
            let’s connect
          </p>
          <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 05 )
          </p>
        </div>

        <div className='flex lg:flex-row flex-col lg:items-center justify-center gap-12 pt-20'>
          <p className='lg:w-80 font-nohemi'>
            Whether you’ve been building in Web3 for a while — or are just launching your brand into the space — let’s chat about how we can help you make an impact in Web3.
          </p>

          <p className='lg:text-9xl text-8xl font-nohemi-ext'>
            sound
          </p>
        </div>

        <div className='flex flex-col items-center justify-center lg:w-[90%] lg:ml-auto mr-auto'>
          <div className='flex items-center sm:gap-0 lg:gap-20'>
            <video 
              src={letsConnectArrow} 
              autoPlay 
              loop 
              muted 
              playsInline
              controls={false}
              className='lg:h-24 h-10 w-auto max-w-full max-h-24 sm:hidden lg:block'
            />
            <p className='lg:text-9xl text-8xl font-nohemi-ext'>good?</p>
          </div>
      
          <Button text={"schedule a call"} />
        </div>

        <div className='h-48 py-5 border-t w-full mt-16 flex flex-col items-center justify-between' style={{ borderTop: '1px solid #000' }}>
          <NavLink to="/">
            <img src={logo} alt="" className='h-20' />
          </NavLink>

          <div className='flex items-center gap-4'>
            <NavLink target="_blank" to=""> <img src={telegram} alt="" className='h-7' /></NavLink>
            <NavLink target="_blank" to="https://x.com/Omnipresentcc"><img src={x} alt="" className='h-7' /></NavLink>
            <NavLink target="_blank" to=""><img src={insta} alt="" className='h-7' /></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetsConnect;
