import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import arrowPrimary from '../../assets/images/arrowPrimary.png'
import arrowBlackImg from '../../assets/images/arrowBlack.png'

const Button = ({text, arrowBlack, className}) => {
  
  let bigArrow=false;

  if(className?.includes("manifestoSchedule")) bigArrow = true;

  return (
    <NavLink target="_blank" to="https://calendly.com/admin-invictuslabs/30min" className={className}>
    <button className=' mt-5 flex items-center justify-center cursor-pointer transition-all duration-300 py-3 bg-primary border border-black rounded-full relative pl-6 pr-7 hover:bg-black text-black hover:text-primary tracking-wide hover:border-primary'>
        {/* inner text */}
        <p className={` font-nohemi font-[500] text-2xl ${arrowBlack||bigArrow?'mr-2':''}`}>{text}</p>
        {/* outer part */}
        {arrowBlack?
        <div className='w-[2.5rem] h-[2.5rem] border-2 border-black rounded-full absolute right-[-12px] bg-black flex items-center justify-center p-2 hover:border hover:border-primary'>
        <p className='text-black font-nohemi font-semibold'>
            <img src={arrowPrimary} height={20}/>
        </p>
    </div>: bigArrow?<div className='w-[2.5rem] h-[2.5rem] border-2 border-black rounded-full absolute right-[-12px] bg-primary flex items-center justify-center p-2 hover:border hover:border-primary'>
        <p className='text-black font-nohemi font-semibold'>
        <img src={arrowBlackImg} height={12} className='max-h-[18px]'/>
        </p>
    </div>

    :
    <div className='w-[2rem] h-[2rem] border-2 border-black rounded-full absolute right-[-12px] bg-primary flex items-center justify-center p-1 hover:border hover:border-primary'>
    <p className='text-black font-nohemi font-semibold'>
        <FaArrowRight/>
    </p>
</div>
        }
        
    </button>
    </NavLink>
  )
}

export default Button