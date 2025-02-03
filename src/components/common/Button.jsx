import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import arrowPrimary from '../../assets/images/arrowPrimary.png'
import arrowBlackImg from '../../assets/images/arrowBlack.png'

const Button = ({text, arrowBlack, className, fontSize, isFooter,buttonBig}) => {
  
  let bigArrow=false;

  if(className?.includes("manifestoSchedule")) bigArrow = true;

  return (
    <NavLink target="_blank" to="https://calendly.com/admin-omnipresent-/30min" className={className}>
    <button className={`mt-10 flex items-center justify-center cursor-pointer transition-all duration-300 ${fontSize && buttonBig?"py-4 !pl-6 !pr-8":fontSize?"py-7 !pl-11 !pr-16": "py-3"} bg-primary border border-black rounded-full relative pl-6 pr-7 hover:bg-black text-black hover:text-primary tracking-wide hover:border-primary`}>
        {/* inner text */}
        {isFooter?<p className={` font-nohemi font-[400] py-1 px-3 ${fontSize?`text-[${fontSize}px] leading-[${fontSize}px]`:'text-[32px] lg:text-[42px]'} ${arrowBlack||bigArrow?'mr-2':''}`}>{text}</p>:
         <p className={` font-nohemi font-[500] ${fontSize==="39"?'text-[39px] leading-[39px]':fontSize?` text-[${fontSize}px] leading-[${fontSize}px]`:'text-2xl'} ${arrowBlack||bigArrow?'mr-2':''} ${buttonBig?"text-[24px] lg:text-4xl":""}`}>{text}</p> 
        }
       
        {/* outer part */}
        {isFooter && bigArrow?
            <div className='w-[3rem] h-[3rem] border-2 border-black rounded-full absolute right-[-12px] bg-black flex items-center justify-center p-2 hover:border hover:border-primary'>
        <p className='text-black font-nohemi font-semibold'>
            <img src={arrowPrimary} height={20}/>
        </p>
    </div>
        : 
        arrowBlack && !isFooter?
            <div className='w-[2.5rem] h-[2.5rem] border-2 border-black rounded-full absolute right-[-12px] bg-black flex items-center justify-center p-2 hover:border hover:border-primary'>
        <p className='text-black font-nohemi font-semibold'>
            <img src={arrowPrimary} height={20}/>
        </p>
    </div>
        : bigArrow && !isFooter?<div className={`${buttonBig?"min-[1900px]:w-[3.5rem] min-[1900px]:h-[3.5rem]":"w-[2.5rem] h-[2.5rem]"} border-2 border-black rounded-full absolute right-[-12px] bg-primary flex items-center justify-center p-2 hover:border hover:border-primary`}>
        <p className='text-black font-nohemi font-semibold'>
        <img src={arrowBlackImg} height={buttonBig?24:12} className={`${buttonBig?"max-h-[18px] min-[1900px]:max-h-[25px]":"max-h-[18px]"}`}/>
        </p>
    </div>

    :
    <div className={`${fontSize?"w-16 h-16 right-[-20px]":"w-[2rem] h-[2rem] right-[-12px] "} border-2 border-black rounded-full absolute bg-primary flex items-center justify-center p-1 hover:border hover:border-primary`}>
    <p className='text-black font-nohemi font-semibold'>
        {fontSize?<FaArrowRight size={26}/>:<FaArrowRight />}
        
    </p>
</div>
        }
        
    </button>
    </NavLink>
  )
}

export default Button