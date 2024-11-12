import React from 'react'
import { Button } from '../common'
import p2p from "../../assets/about/p2p.svg"
import rayls from "../../assets/cases/rayls.svg"
import card1 from "../../assets/cases/card1.svg"
import card2 from "../../assets/cases/card2.svg"
import card3 from "../../assets/cases/card3.svg"
import card4 from "../../assets/cases/card4.svg"
import card5 from "../../assets/cases/card5.svg"
import card6 from "../../assets/cases/card6.svg"
import seatlab from "../../assets/about/seatlab.svg"
import { NavLink } from 'react-router-dom'

const Card = ({img, title, para, url}) => {
    
    return (
        <NavLink to={url}>
            <div className='w-full min-h-[250px] flex flex-col gap-2'>
                <img src={img} alt="" className=' h-80'/>
                <p className='text-white font-semibold text-2xl font-nohemi'>{title}</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>{para}</p>
            </div>
            </NavLink>
    )
}

const OurWork = () => {
    const [activeTab, setActiveTab] = React.useState(0)

    const menu = ["GTM", "Growth Strategy & Hacking", "KOL M&M", "Partnerships", "Merchandising", "Collabs & Alpha Calls", "Fundraising", "Branding & Design", "Advisory", "SMC Strategy and Management"]
    const data =[
        {
            img: card1,
            title: "Etihad Airways",
            desc: "A landmark Web3 debut for a global Web2 aviation leader",
            url: "/cases/ethihad"
        },
        {
            img: card2,
            title: "RampX",
            desc: "A powerful product launch that fetched 10K users in just seven days",
            url: "/cases/rampx"
        },
        {
            img: card3,
            title: "CryptoKnights",
            desc: "Building a global community for the Web3 Shark Tank",
            url: "/cases/cryptoknights"
        },
        {
            img: card4,
            title: "Deblock",
            desc: " Go-to-Market success with 100K users and $100M in transactions",
            url: "/cases/deblock"
        },
        {
            img: card5,
            title: "Elixr Games",
            desc: "GTM Strategy Driving NFT Sellout in Web3 Gaming",
            url: "/cases/elixir"
        },
        {
            img: card6,
            title: "Rayls - Unifying the best of traditional & decentralized finance",
            desc: "We revived activity on the platform and increased the trading volume by 32%",
            url: "/cases/rayls"
        },
    ]
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
            {
              data.map((i) => (
                <Card img={i.img} title={i.title} para={i.desc} key={i.title} url={i.url}/>
              ))
            }
            
            
            
        </div>

        <div className='w-full flex justify-center pb-32'>
            <Button text={"schedule a call"}/>
        </div>
    
    </div>
    </div>
  )
}

export default OurWork