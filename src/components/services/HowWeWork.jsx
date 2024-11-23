import React from 'react';
import { motion } from 'framer-motion';
import card1 from "../../assets/services/cardImg1.svg";
import downImg from "../../assets/services/downImg.svg";
import cardImg2 from "../../assets/services/cardImg2.svg";
import circle from "../../assets/services/circle.svg";
import star from "../../assets/services/start.svg";
import { slideUp, slideUpDelay } from '../../animations';

// const slideUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

const HowWeWork = () => {
  return (
    <div className="min-h-screen w-full bg-primary px-4 relative pb-20">
      <div className="max-w-7xl mx-auto pt-16 flex flex-col items-center justify-start">
        <motion.div
          className="border-b pb-1 w-full flex items-center justify-between"
          style={{ borderBottom: '1px solid black' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <p className="text-black font-bold text-[10px] tracking-widest">how we work</p>
          <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">( 03 )</p>
        </motion.div>

        <motion.div
          className="flex flex-col w-full justify-end mt-16 items-end lg:gap-3 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <p className="text-6xl font-nohemi-ext lg:w-[70%] text-right">
            We treat every project as if it’s our own. Knowing that one size doesn't fit all, we take vital steps to identify what works best for you.
          </p>

          <div className="grid lg:grid-cols-3 lg:gap-3 gap-16 w-full mt-10">
            <motion.div className="w-full h-full flex flex-col gap-1" variants={slideUpDelay}>
              <img src={card1} alt="" />
              <p className="text-[32px] font-[600]">Get to Know You</p>
              <p className="text-xl font-normal">
                We start by getting to know you and your brand. Understanding your unique challenges, goals, vision and nuances is key to an exceptional plan that echoes.
              </p>
            </motion.div>
            <motion.div className="w-full mt-16 h-full flex flex-col gap-1" variants={slideUp}>
              <img src={downImg} alt="" />
              <p className="text-[32px] font-[600]">Dig Into the Data</p>
              <p className="text-xl font-normal">
                We dig into the data alongside our unique insights. Our analysis includes your position, strengths, and competitors, with your formula to succeed.
              </p>
            </motion.div>
            <motion.div className="w-full h-full flex flex-col gap-1" variants={slideUpDelay}>
              <img src={cardImg2} className="h-52 object-cover" alt="" />
              <p className="text-[32px] font-[600]">Craft a Strategy Around Your Vision</p>
              <p className="text-xl font-normal">Armed with the knowledge, we craft a strategy made for you and the market.</p>
            </motion.div>
          </div>

          <motion.div className="grid lg:grid-cols-3 " variants={slideUpDelay}>
            <div className="w-full h-full flex flex-col gap-3">
              <div className="flex items-center gap-9">
                <img src={circle} alt="" className="h-10" />
                <img src={circle} alt="" className="h-20" />
                <img src={circle} alt="" className="h-40" />
              </div>
              <p className="text-[32px] font-[600]">Execute</p>
              <p className="text-xl font-normal">
                We put your plan into action. Our execution will be agile, swift, and accurate. You’ll be with us along the way to make sure it resonates and stays ahead of moving parts.
              </p>
            </div>
          </motion.div>

          <motion.div className="grid lg:grid-cols-3 " variants={slideUp}>
            <div></div>
            <div className="w-full h-full flex flex-col gap-3">
              <div className="flex items-center gap-9">
                <img src={star} alt="" className="h-40" />
              </div>
              <p className="text-[32px] font-[600]">Measure Impact, Optimize Results</p>
              <p className="text-xl font-normal">
                Our job doesn’t end with execution. We keep our fingers on the pulse, keeping you up to date. We continuously evaluate, adapt and refine to make sure your plan succeeds with flying colors.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.img
        src="../../assets/services/hand.svg"
        alt=""
        className="absolute right-0 bottom-[100px] lg:block hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
};

export default HowWeWork;
