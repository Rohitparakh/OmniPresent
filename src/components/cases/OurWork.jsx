import React from 'react'
import { Button } from '../common'
import p2p from "../../assets/about/p2p.svg"
import rayls from "../../assets/cases/rayls.svg"
import seatlab from "../../assets/about/seatlab.svg"
import p2p from "../../assets/about/p2p.svg"
import p2p from "../../assets/about/p2p.svg"
import p2p from "../../assets/about/p2p.svg"
const OurWork = () => {
    const [activeTab, setActiveTab] = React.useState(0)

    const menu = ["GTM", "Growth Strategy & Hacking", "KOL M&M", "Partnerships", "Merchandising", "Collabs & Alpha Calls", "Fundraising", "Branding & Design", "Advisory", "SMC Strategy and Management"]

  return (
    <div className="bg-black text-white relative ">
      <div className="max-w-7xl mx-auto pt-16 flex px-4 flex-col items-center justify-start  min-h-screen">

        {/* Top divider */}
        <div className="border-b border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-[10px] tracking-widest">
            OUR WORK
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 01 )
          </p>
        </div>

        {/* Our work content */}
       
    <div className='w-full h-14 mt-20 flex items-center gap-3 overflow-x-auto  whitespace-nowrap'>
        <p className='text-[11px] px-4 py-2 cursor-pointer border border-white rounded-full'>
            All
        </p>
        
        <div className='w-20 h-0.5 bg-white'></div>

        {menu.map((item, index) => (
            <p
                key={index}
                className='text-[11px] w-auto px-2 py-2 cursor-pointer border border-white rounded-full'
            >
                {item}
            </p>
        ))}
    </div>


        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 pb-32'>
            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={p2p} alt="" />
                <p className='text-white font-semibold text-2xl font-nohemi'>Oh - Uncensored AI, unlimited potential</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>We revived activity on the platform and increased the trading volume by 32%</p>
            </div>

            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={rayls} alt="" />
                <p className='text-white font-semibold text-2xl font-nohemi'>Rayls - Unifying the best of traditional 
                & decentralized finance</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>We revived activity on the platform and increased the trading volume by 32%</p>
            </div>

            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={seatlab} alt="" />
                <p className='text-white font-semibold text-2xl font-nohemi'>Oh - Uncensored AI, unlimited potential</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>We revived activity on the platform and increased the trading volume by 32%</p>
            </div>
            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={p2p} alt="" />
                <p className='text-white font-semibold text-2xl font-nohemi'>Oh - Uncensored AI, unlimited potential</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>We revived activity on the platform and increased the trading volume by 32%</p>
            </div>

            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={rayls} alt="" />
                <p className='text-white font-semibold text-2xl font-nohemi'>Rayls - Unifying the best of traditional 
                & decentralized finance</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>We revived activity on the platform and increased the trading volume by 32%</p>
            </div>

            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={seatlab} alt="" />
                <p className='text-white font-semibold text-2xl font-nohemi'>Oh - Uncensored AI, unlimited potential</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>We revived activity on the platform and increased the trading volume by 32%</p>
            </div>
            
        </div>

        <div className='w-full flex justify-center pb-32'>
            <Button text={"schedule a call"}/>
        </div>
    
    </div>
    </div>
  )
}

export default OurWork