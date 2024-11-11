import React from 'react'
import { Button } from '../common'
import arrow from '../../assets/images/letsConnectArrow.png';

const LetsConnect = () => {
  return (
    <div className=" w-full bg-primary px-4 ">
      <div className="max-w-7xl mx-auto pt-16 flex flex-col items-center justify-start ">
        <div className="border-b pb-1 w-full flex items-center justify-between" style={{borderBottom:'1px solid #000'}}>
          <p className="text-black font-bold text-[10px] tracking-widest ">
          let’s connect
          </p>
          <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 05 )
          </p>
        </div>

        <div className='flex lg:flex-row flex-col lg:items-center justify-center gap-12 pt-20'>
          <p className='lg:w-80 font-nohemi'>
          Ready to take your project to the next level? Schedule a call with us and let’s build something extraordinary, fast. We’ll craft a strategy that works, and you’ll see results that speak for themselves    
          </p>

          <p className='text-9xl font-nohemi-ext'>
            let's
          </p>
        </div>
        
        <div className='flex flex-col items-center justify-center lg:w-[90%] lg:ml-auto mr-auto'>
          <div className='flex sm:gap-0 lg:gap-20'>
            <img src={arrow} className='h-28 sm:hidden lg:block'/>
            <p className='text-9xl font-nohemi-ext'>talk</p>
          </div>
        {/* <div className='w-full lg:hidden block'>
          <img src="/src/assets/about/forward.svg" alt="" className=' h-32 mb-10'/>
        </div> */}
        <Button text={"schedule a call"}/>
        </div>

        <div className=' h-48 py-5 border-t w-full mt-16 flex flex-col items-center justify-between' style={{borderTop:'1px solid #000'}}>
            <img src="/src/assets/about/lightning.svg" alt="" className='h-20'/>

            <div className='flex items-center gap-4'>
                <img src="/src/assets/about/telegram.svg" alt="" className='h-7'/>
                <img src="/src/assets/about/x.svg" alt="" className='h-7'/>
                <img src="/src/assets/about/insta.svg" alt="" className='h-7'/>
            </div>
        </div>
        </div>
        </div>

  )
}

export default LetsConnect