import React from 'react'
import { Button, MarqueeSection } from '../common'
import pen from "../../assets/cases/pen.svg";
import line from "../../assets/about/line.svg";
import marLogo from "../../assets/about/marLogo.svg";
import marArrow from "../../assets/about/marArrow.svg";
import right from "../../assets/services/right.svg"

const CasesHero = () => {
  return (
    <div className=' w-screen flex flex-col justify-between font-nohemi-ext bg-primary px-4'>
    <div className=' max-w-7xl w-full mx-auto flex flex-col items-center justify-center  relative'>
   
        <div className='py-20'>

        </div>
        {/* Center text area start */}
      <div className={`flex flex-col leading-[6rem] max-w-[560px] w-auto items-end justify-end py-1 lg:scale-[1.35] scale-[.6] relative`}>
        <img src={pen} alt="" className='absolute top-[-28px] left-[-50px] lg:left-[68px] mix-blend-multiply h-36'/>
        <h1 className='text-[10rem] z-10 flex items-end font-nohemi-ext text-black relative'>
         <span className='text-[10rem] flex items-end w-min pt-9 '></span><span className='font-nohemi-ext'>case</span>
        </h1>
        <h1 className='mt-10 text-[10rem] flex items-center gap-2 font-nohemi-ext text-black pl-5'>
        studies
        </h1>

        {/* assets for text */}
        <>
        
        <div className='absolute top-[-30px] lg:left-[113px] left-[-40px] h-52 border-r-[0.5px] border-black opacity-50 z-50'>
        </div>

        <div className='absolute top-[-30px] lg:left-[207px] left-[70px] h-52 border-r-[0.5px] border-black opacity-50 z-50'>
        </div>

        <div className='absolute lg:right-[-10px] top-[103px] w-[19rem] border-b-[0.5px] border-black opacity-50 z-50'>
        </div>

        <div className='absolute right-[-10px] top-[7px] w-[19.3rem] border-b-[0.5px] border-black opacity-50 '>
        </div>

        <div className='absolute lg:right-[10px] left-[-50px] top-[7px] w-[33rem] border-b-[0.5px] border-black opacity-50 lg:block hidden'>
        </div>

        <div className='absolute lg:left-[18px] left-[-55px] bottom-[105px] w-[29rem] border-b-[0.5px] border-black opacity-50'>
        </div>

        <div className='absolute left-[170px] bottom-[8px] w-[22rem] border-b-[0.5px] border-black opacity-50'>
        </div>

        {/* Face 2 */}
  
       
        </>

        

      </div>
      {/* Center text area end */}

      {/* Bottom area start */}
    <div className='w-full py-5 lg:mt-16 mt-10 relative flex lg:flex-row flex-col items-center justify-around gap-2'>
        <div className='flex items-center gap-2'>
        <p className=' lg:max-w-[34rem] leading-7 text-xl font-nohemi font-semibold'>
        ■ We’ve fueled growth and built vibrant communities across Web3 for leading brands, including Tier 1 companies and Layer 1 blockchains, and our impact keeps building.
        </p>
        </div>
        <div className='  h-full pb-10 flex items-start lg:w-auto w-full'>
            <Button text="Schedule a call"/>
        </div>

        <div className='absolute bottom-[-45px] left-[-100px]'>
            <img src={line} className='h-28' alt="" />
        </div>
    </div>

    {/* Bottom area end */}

    </div>
    {/* marquee start */}
    <div className=' w-full '>
        <div className='max-w-7xl mx-auto border border-black'>

        </div>

        <div className='py-6  w-full'>
        <MarqueeSection>
                <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 font-semibold select-none">
              <span className="text-black font-nohemi-ext">5M+</span> social followers
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
  )
}

export default CasesHero