import React from 'react'
import { Button, MarqueeSection } from '../common'
import line from "../../assets/about/line.svg"
import heroImg from "../../assets/services/heroImg.svg"
import marLogo from "../../assets/about/marLogo.svg"
import marArrow from "../../assets/about/marArrow.svg"
const ServicesHero = () => {
    return (
        <div className=' min-h-screen relative w-screen flex flex-col justify-between font-nohemi-ext bg-primary px-4'>
        <div className=' max-w-7xl w-full z- mx-auto flex flex-col items-center justify-center  relative'>
       
            <div className='py-20'>
    
            </div>
            {/* Center text area start */}
          <div className={`flex flex-col z-50 leading-[6rem] w-[565px] items-end justify-end py-1 lg:scale-[1.55] scale-[.6] relative`}>
            <p className='absolute top-[62px] left-[108px]  mix-blend-multiply font-nohemi-ext text-[14rem]'>
                *
            </p>
            
            <h1 className='text-[10rem] z-10 flex items-end font-nohemi-ext text-black relative'>
             <span className='text-[10rem] flex items-end w-min pt-9'></span><span className=''>we</span>
            </h1>
            <h1 className='text-[9rem] lg:w-auto w-full z-50 flex items-center gap-2 font-nohemi-ext text-black pl-5'>
            got you
            </h1>
    
            {/* assets for text */}
            <>

        
            
            <div className='absolute top-[-30px] left-[113px] h-52 border-r-[0.5px] border-black opacity-50 z-50'>
            </div>
    
            <div className='absolute top-[-30px] left-[207px] h-36 border-r-[0.5px] border-black opacity-50 z-50'>
            </div>
    
            {/* <div className='absolute right-[-10px] top-[103px] w-[19rem] border-b-[0.5px] border-black opacity-50 z-50'>
            </div> */}
    
            <div className='absolute left-[240px] bottom-[92px] w-[20rem] border-b-[0.5px] border-black opacity-50 '>
            </div>
    
            <div className='absolute left-[96px] top-[6px] w-[8rem] border-b-[0.5px] border-black opacity-50 '>
            </div>
    
            <div className='absolute left-[96px] bottom-[105px] w-[8rem] border-b-[0.5px] border-black opacity-50'>
            </div>
    
            <div className='absolute left-[240px] bottom-[13px] w-[20rem] border-b-[0.5px] border-black opacity-50'>
            </div>
    
            {/* Face 2 */}
      
           
            </>
    
            
    
          </div>
          {/* Center text area end */}
    
          {/* Bottom area start */}
        <div className='w-full py-5 lg:mt-20 mt-10 relative flex lg:flex-row flex-col items-center justify-around gap-2'>
            <div className='flex items-center gap-2'>
            <p className='  lg:w-[24rem] leading-7 text-xl font-nohemi font-semibold'>
            ■ Promote your brand effortlessly with top-tier Blockchain and Web3 services, backed by our expert team. Secure your free proposal now and watch your brand go viral!
            </p>
            </div>
            <div className='  h-full pb-10 flex items-start lg:w-auto w-full'>
                <Button text="Schedule a call"/>
            </div>
    
            <div className='absolute lg:bottom-[75px] top-[-50px] left-[-65px]'>
                <img src={line} className='h-28' alt="" />
            </div>
        </div>
    
        {/* Bottom area end */}
    
        </div>

        <img src={heroImg} alt="" className='absolute left-0 top-[-30px] h-96 z-0'/>

        {/* marquee start */}
        <div className=' w-full '>
            <div className='max-w-7xl mx-auto border border-black'>
    
            </div>
    
            <div className='py-6  w-full'>
                <MarqueeSection>
                <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 font-semibold select-none">
              <span className="text-black">partner with</span>
              <img src={marLogo} className="h-20" alt="" />
              <span className="text-black">developed for ( web3 ) for the GROWTH/</span>
              <img src={marArrow} className="h-20" alt="" />
    
            </h1>
                  </MarqueeSection>
            </div>
    
        </div>
        {/* marquee end */}
      </div>
      )
}

export default ServicesHero