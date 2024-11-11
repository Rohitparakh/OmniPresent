import React from "react";
import MarqueeSection from './../common/MarqueeSection';
import { Button } from "../common";

const Card = () => {
  return (
    <div className=" w-[700px] bg-black  border border-[#EEFE05] flex items-start p-6">
      <div className="h-auto w-[60%] flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className=" text-xl font-normal font-nohemi">
            Go-to-market Strategy
          </p>
          <p className="text-8xl font-nohemi-ext text-[#EEFE05]">GTM</p>
        </div>

        <p className=" font-nohemi text-xs w-[75%] text-[#FFFFFF]">
          Make a splash on the market with a comprehensive and effective GTM.
          This step-by-step plan can help you successfully introduce your
          product and increase demand. It typically includes identifying a
          target audience, building marketing and sales strategies, and
          developing the right messaging. A good GTM strategy allows you to set
          your product or service apart from the competition and build trust.
          Our team of professionals will define your ideal customer profile,
          research competitors, set goals, and choose the right tactics.
        </p>

        <div className="mt-10">
          <p className="pb-2 w-44 cursor-pointer hover:scale-105 transition-all duration-300  border-b border-[#EEFE05] flex items-center gap-3 text-[#EEFE05] font-nohemi text-lg">
            <img src="/src/assets/services/share.svg" alt="" className="h-4" />
            <span>inquire about</span>
          </p>
        </div>
      </div>
      <div className=" w-[40%]  flex flex-col">
        <img src="/src/assets/services/card.svg" alt="" />
      </div>
    </div>
  );
};

const MobileCard = ({data}) => {

  return(
    <div className=" w-[350px] bg-black  border border-[#EEFE05] flex flex-col items-start gap-2 p-6">
      
      <img src="" alt="" className=" h-52 w-full border border-[#EEFE05]" />

      <p className=" font-nohemi-ext text-3xl w-full text-[#EEFE05]">{data.name}</p>

      <p className="pb-2 w-36 mt-10 cursor-pointer hover:scale-105 transition-all duration-300  border-b border-[#EEFE05] flex items-center gap-3 text-[#EEFE05] font-nohemi text-md">
            <img src="/src/assets/services/share.svg" alt="" className="h-4" />
            <span>show more</span>
          </p>

    </div>

  )
}

const CurrentProjects = () => {
    
  const menuData = [
    "Go-to-market Strategy",
    "SMM",
    "PR",
    "Community Management",
    "Web Panel Marketing",
    "PPC",
    "Branding",
    "Influencer Marketing",
    "Package Proposal",
  ];

  const cardData = [
    {
     name: "Discord Management",   
     image: "/src/assets/services/1.svg"
    },
    {
      name: "Web3 GTM Strategy and Launch",
      image: " /src/assets/services/2.svg"
    },
    {
      name: "Web2 to Web3 Transition",
      image: "/src/assets/services/3.svg"
    },
    {
      name: "Influencer/KOL Strategy and Management",
      image: "/src/assets/services/4.svg"
    },
    {
      name: "Community Growth Marketing",
      image: " /src/assets/services/5.svg"
    },
    {
      name: "Content Strategy and Management",
      image: " /src/assets/services/6.svg"
    },
    {
      name: "X (Twitter) Growth Hacking",
      image: " /src/assets/services/7.svg"
    }
  ];

  return (
    <div className="  bg-black text-white relative  pb-16">
      <div className="max-w-7xl mx-auto px-4 pt-16 flex flex-col items-center justify-start  h-full">
        {/* Top divider */}
        <div className="border-b  border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-xs tracking-widest">
            current projects
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 02 )
          </p>
        </div>

        <div className=" w-full mx-auto mt-16  lg:flex hidden  justify-between gap-2 items-center">
          <div className="h-full  w-[30%]">
            {menuData.map((i, index) => (
              <p className="border-b w-64 flex items-center gap-2 cursor-pointer active:scale-95 transition-all duration-300 border-white pb-2 mb-3 text-xs font-nohemi">
                0{index + 1}/ <span>{i}</span>
              </p>
            ))}
          </div>
          <div className="h-full w-[70%]">
            <Card />
          </div>
        </div>

        <div className="w-full mx-auto mt-16  lg:hidden flex flex-col justify-between gap-10 items-center">

            {
              cardData.map((i, index) => (
                <MobileCard data={i}/>
              ))
            }
            
        </div>

      </div>
      
      <div className="w-full pt-16">
      <MarqueeSection>
           <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                <p className="text-9xl font-[1000] font-nohemi-ext">cases</p>
                <Button text="schedule a call" />
           </div>
              </MarqueeSection>
      <MarqueeSection speed={100}>
      <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                <p className="text-9xl font-bold font-nohemi-ext">cases</p>
                <Button text="schedule a call" />
           </div>
              </MarqueeSection>
      </div>


    </div>
  );
};

export default CurrentProjects;
