import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Button = ({text}) => {
  return (
    <button className=' flex items-center justify-center cursor-pointer transition-all duration-300 py-2 bg-primary border border-black rounded-full relative pl-6 pr-7 hover:bg-black text-black hover:text-primary tracking-wide hover:border-primary'>
        {/* inner text */}
        <p className=' font-nohemi font-[600]'>{text}</p>
        {/* outer part */}
        <div className='w-[2rem] h-[2rem] border-2 border-black rounded-full absolute right-[-12px] bg-black flex items-center justify-center p-1 hover:border hover:border-primary'>
            <p className='text-primary font-nohemi font-semibold'>
                <FaArrowRight/>
            </p>
        </div>
    </button>
  )
}

export default Button