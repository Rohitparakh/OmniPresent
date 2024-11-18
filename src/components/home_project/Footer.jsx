import React from 'react';
import { MarqueeSection } from '../common'
import right from "../../assets/services/right.svg"
import marArrow from '../../assets/about/marArrow.svg';

import Marquee from "react-fast-marquee";
import longArrow from '../../assets/images/longArrow.png';
import finger from '../../assets/images/fingerHorizontal.png';
import logo from '../../assets/images/heroFooterLogo.png';
function Footer() {
    return (
        <div className=' w-full '>
        <div className='max-w-7xl mx-auto'>

        </div>

        <div className='lg:py-6 py-3  w-full'>
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
    );
}

export default Footer;
