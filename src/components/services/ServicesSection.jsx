import React, { useRef } from 'react';
import seatlab from "../../assets/services/seatlab.svg";
import diff from "../../assets/services/diff.svg";
import face from "../../assets/services/face.svg";
import diffRev from "../../assets/services/diffRev.svg";
import { motion, useInView } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';

const ServicesSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { triggerOnce: true, threshold: 0.1 });
  const isInView2 = useInView(ref2, { triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-black text-white relative min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 pt-16 flex flex-col items-center justify-start h-full">
        {/* Top divider */}
        <div className="border-b border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-xs tracking-widest">
            our manifesto
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 01 )
          </p>
        </div>
      </div>

      {/* Services */}
      <div className='w-full min-h-64 mt-24 max-w-7xl mx-auto lg:px-8 px-2'>
        <motion.p 
          ref={ref1}
          variants={slideUp}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          className='text-6xl font-nohemi-ext font-bold lg:w-[75%] leading-[3.2rem] lg:ml-0 ml-auto lg:text-start text-end'
        >
          Our work is driven by Web3’s greatest strength—its people and communities.
        </motion.p>
      
        <motion.p 
          ref={ref2}
          variants={slideUpDelay}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          className='lg:w-[35%] mt-5 font-nohemi text-[#FFFFFF]'
        >
          Communities are our superpower. Working alongside innovators, we co-create value that drives Web3 adoption that opens doors to new opportunities for everyone.
        </motion.p>

        <div className='w-full mt-10 flex lg:flex-row flex-col gap-4 justify-between'>
          {/* Animate each image */}
          <motion.img 
            src={seatlab} 
            alt="seatlab" 
            className='w-[470px] lg:mx-0 mx-auto'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.div 
            className='lg:w-[55%] flex flex-col justify-between items-start h-auto gap-8'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img 
              src={diff} 
              alt="diff" 
              className='h-20'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.div 
              className='flex flex-col gap-4 items-end w-full'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img 
                src={face} 
                alt="face" 
                className=' h-64 mr-14'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <div className='w-full flex  justify-between gap-10'>
                <div className='flex flex-col text-sm font-nohemi'>
                  <p>Liz</p>
                  <p className='text-gray-400'>Omnipresent Founder/CEO</p>
                </div>

                <div className='flex flex-col gap-4  lg:w-96 lg:pr-12'>
                  <p>
                    “We envision a world where web3 technology creates equanimity, abundance and consensus, and the powerful thing we can contribute to this is amplify that message and mobilize communities towards this future. That is what Omnipresent does.”
                  </p>
                </div>
              </div>

              <motion.img 
                src={diffRev} 
                alt="diffRev" 
                className='h-12'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
