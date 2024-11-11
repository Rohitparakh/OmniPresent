import React from "react";
import { Button, MarqueeSection } from "../common";

const LetsWork = () => {
  return (
    <div className="bg-black text-white relative ">
      <div className="max-w-7xl mx-auto pt-16 flex px-4 flex-col items-center justify-start  min-h-screen">

        {/* Top divider */}
        <div className="border-b border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-[10px] tracking-widest">
            WHY WE ARE RIGHT FOR YOU
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 02 )
          </p>
        </div>

        {/* Top divider end */}
        <div className="w-full flex items-center justify-end">
          <img
            src="/src/assets/about/letsWork.svg"
            alt=""
            className="w-[50%]"
          />
        </div>

        {/* content */}
        <div className="flex items-center flex-col justify-start pt-20 max-w-3xl gap-4 w-full h-full">

            <div className=" flex lg:flex-row flex-col gap-3 ">

            {/* Card 1 */}
            <div className="flex flex-col justify-center items-center gap-1 lg:w-40 w-60  h-min ml-auto">
                <img src="/src/assets/about/letsWork1.svg" alt="" />
                <p className="lg:text-lg text-2xl font-nohemi font-">Tailored Solutions</p>
                <p className="text-xs font-nohemi text-right text-[#AEAEAE]">
                We customize our strategies to meet your specific needs, ensuring you get the most relevant and effective support.
                </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col-reverse justify-center items-start gap-1 lg:w-40 w-60 h-min lg:mt-40 mt-10">
                <img src="/src/assets/about/letsWork2.svg" alt="" className="lg:h-[120px] h-[150px]"/>
                <p className="text-xs font-nohemi text-left text-[#AEAEAE]">
                Our diverse team brings a wealth of experience in the crypto space, giving you access to top-tier expertise and insights.
                </p>
                <p className="lg:text-lg text-2xl font-nohemi text-left w-full">Expert Team</p>
            </div>

            {/* Card 3 */}
            <div className="flex lg:flex-row flex-col justify-center lg:items-center items-end lg:w-80 w-full h-min lg:mt-[276px] mt-10">
                <img src="/src/assets/about/letsWork3.svg" alt="" className="h-[120px]"/>
                <div className="flex flex-col justify-around pl-2 h-[120px] w-full">
                <p className="lg:text-lg text-2xl font-nohemi leading-5 text-left lg:w-full w-40 ">Collaborative Partnership</p>
                <p className="text-xs font-nohemi text-left text-[#AEAEAE] lg:pr-0 pr-20">
                We prioritize open communication and collaboration, working closely with you to align our efforts with your vision and goals.
                </p>
                </div>
            </div>

            </div>

           
            <div className="flex lg:flex-row flex-col-reverse gap-10 relative w-full">
            {/* Card 5 */}
            <div className="flex flex-col  justify-center items-end w-40 lg:ml-0 ml-auto">
                <img src="/src/assets/about/letsWork4.svg" alt="" className="lg:w-20 w-72"/>
                <p className="lg:text-lg text-2xl font-nohemi lg:text-start text-end w-64 lg:w-auto ">Tailored Solutions</p>
                <p className="text-xs font-nohemi text-right">
                We customize our strategies to meet your specific needs, ensuring you get the most relevant and effective support.
                </p>
            </div>

            {/* Card 4 */}
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 justify-center lg:items-end items-start lg:w-96 ">
                <img src="/src/assets/about/letsWork5.svg" alt="" className="h-[180px]"/>
                <div className="flex flex-col gap-2 justify-end lg:pl-2 items-end h-full">
                <p className="lg:text-lg text-2xl font-nohemi leading-5 text-left w-full ">Agile Execution</p>
                <p className="text-xs font-nohemi text-left w-full">
                Our fast-paced approach allows us to adapt quickly, making sure your project remains on the cutting edge of the ever-evolving Web3 landscape.
                </p>
                </div>
            </div>
            </div>


        </div>

        <div className="w-full  lg:flex hidden items-start justify-end mx-auto pr-44 ">
                <img src="/src/assets/about/arrowRight.svg" alt="" className=" h-44 " />
        </div>


      </div>

      <div className="w-full py-16">
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

export default LetsWork;
