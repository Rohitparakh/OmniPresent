import React from "react";
import { motion, useInView } from "framer-motion";
import { Button, MarqueeSection } from "../common";
import letsWork from '../../assets/about/letsWork.svg';
import letsWork1 from '../../assets/about/letsWork1.svg';
import letsWork2 from '../../assets/about/letsWork2.svg';
import letsWork3 from '../../assets/about/letsWork3.svg';
import letsWork4 from '../../assets/about/letsWork4.svg';
import letsWork5 from '../../assets/about/letsWork5.svg';
import arrowRight from '../../assets/about/arrowRight.svg';
import bracketOpen from '../../assets/about/bracketOpen.png';

const LetsWork = () => {
  const containerRef = React.useRef(null);
  const isContainerInView = useInView(containerRef, { once: true });

  return (
    <div className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto pt-16 flex px-4 flex-col items-center justify-start min-h-screen">

        {/* Top divider */}
        <div className="border-b border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-[10px] tracking-widest">
            our blueprint
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 02 )
          </p>
        </div>

        {/* Main image */}
        <motion.div
          className="w-full flex items-center justify-end"
          initial={{ opacity: 0, y: 50 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src={letsWork} alt="" className="w-[50%]" />
        </motion.div>

        {/* Content cards */}
        <div className='flex items-center gap-20'>
        <img src={bracketOpen} className="h-full hidden lg:block"/>
        <div ref={containerRef} className="flex items-center flex-col justify-start pt-20 max-w-3xl gap-4 w-full h-full">
          <div className="flex lg:flex-row flex-col gap-3 lg:gap-5">
            
            {/* Card 1 */}
            <motion.div
              className="flex flex-col justify-center items-center gap-1 lg:w-48 w-60 h-min ml-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img src={letsWork1} alt="" />
              <p className="lg:text-lg text-2xl font-nohemi font-">Tailored Solutions</p>
              <p className="text-xs font-nohemi text-right text-[#AEAEAE]">
                We design solutions to meet your unique needs, making sure every move we make is meaningful and impactful.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col-reverse justify-center items-start gap-1 lg:w-40 w-60 h-min lg:mt-[11rem] mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <img src={letsWork2} alt="" className="lg:h-[120px] h-[150px]" />
              <p className="text-xs font-nohemi text-left text-[#AEAEAE] lg:mb-2">
              Our diverse team brings a wealth of experience in the web3 space, giving you access to top-tier expertise and insights.
              </p>
              <p className="lg:text-lg text-2xl font-nohemi text-left w-full">Expert Knowledge</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex lg:flex-row  flex-col justify-center lg:items-center items-end lg:w-80 w-full h-min lg:mt-[300px] mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <img src={letsWork3} alt="" className="lg:h-[120px] h-[200px]" />
              <div className="flex flex-col justify-around pl-2 h-[120px] w-full">
                <p className="lg:text-lg text-2xl font-nohemi leading-5 text-left lg:w-full w-40">Collaborative Partnership</p>
                <p className="text-xs font-nohemi text-left text-[#AEAEAE] lg:pr-0 pr-20">
                  We prioritize open communication and collaboration, working closely with you to align our efforts with your vision and goals.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex lg:flex-row-reverse flex-col-reverse gap-10 relative w-full lg:mt-0 mt-10 justify-end lg:ml-[-200px]">
            
            {/* Card 4 */}
            <motion.div
              className="flex lg:flex-row flex-col lg:gap-0 gap-2 justify-center lg:items-end items-start lg:w-96"
              initial={{ opacity: 0, y: 50 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <img src={letsWork5} alt="" className="h-[180px]" />
              <div className="flex flex-col gap-2 justify-end lg:pl-2 items-end h-full">
                <p className="lg:text-lg text-2xl font-nohemi leading-5 text-left w-full">Agile Execution</p>
                <p className="text-xs font-nohemi text-left w-full text-[#AEAEAE]">
                  Our fast-paced approach allows us to adapt quickly, making sure your project remains on the cutting edge of the ever-evolving Web3 landscape.
                </p>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="flex flex-col justify-center items-end w-40 lg:ml-0 ml-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <img src={letsWork4} alt="" className="lg:w-20 w-72" />
              <p className="lg:text-lg text-2xl font-nohemi lg:text-start text-end w-64 lg:w-auto lg:py-2">Results-Driven</p>
              <p className="text-xs font-nohemi text-right text-[#AEAEAE]">
                We focus on delivering measurable outcomes, ensuring that every action we take drives your success forward.
              </p>
            </motion.div>
          </div>
        </div>
        </div>

        {/* Arrow */}
        <motion.div
          className="w-full lg:flex hidden items-start justify-end mx-auto pr-44"
          initial={{ opacity: 0, x: -50 }}
          animate={isContainerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <img src={arrowRight} alt="" className="h-44" />
        </motion.div>
      </div>

      {/* Marquee sections */}
      <div className="w-full py-48">
        <MarqueeSection speed={200}>
          <div className="flex items-center gap-8 px-7 font-nohemi text-white">
            <p className="text-9xl font-[1000] font-nohemi-ext">sound good?</p>
            <Button text="schedule a call" />
          </div>
        </MarqueeSection>
        <MarqueeSection speed={200} direction="left">
          <div className="flex items-center gap-8 px-7 font-nohemi text-white">
            <p className="text-9xl font-bold font-nohemi-ext">sound good?</p>
            <Button text="schedule a call" />
          </div>
        </MarqueeSection>
      </div>
    </div>
  );
};

export default LetsWork;
