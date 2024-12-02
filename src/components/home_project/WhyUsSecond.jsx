import React from 'react';
import './WhyUsSecond.css';
import Card1 from '../../assets/images/Card1.png';
import ImageGoLeft from '../../assets/images/ImageGoLeft.png';
import ImageGoRight from '../../assets/images/ImageGoRight.png';
import { motion } from "framer-motion";
import { growFromLeftDelay, growFromRight, growFromTop, growFromTopDelay, slideUp, slideUpDelay } from "../../animations";
function WhyUsSecond() {
    return (
        <div className="why-us-second">
            <div className="content">
            <div className="card-image lg-d-none mb-40">
                <img src={Card1} alt="Playing Card" className='pos-r'/>
                <motion.p
            initial={{ x: -80, y: -50, rotate: 20 }}
            whileInView={{ x: -200, y: -200, rotate: 0 }}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="pos-a go-left z-[-1]"

          >
            <img src={ImageGoLeft} alt="" className="h-[140px] !w-auto"/>
          </motion.p>
          <motion.p
           initial={{ x: -100, y: -125, rotate: 0 }}
           whileInView={{ x: 0, y: 0, rotate: 20 }}
            viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           className="pos-a go-right z-[-1]"
          >
            <img src={ImageGoRight} alt="" className="h-[140px] !w-auto"/>
          </motion.p>
            </div>
                <h1 className="title">we breathe web3</h1>
                <p className="description">
                Web3 is our oxygen. We know its potential and how to share it with the masses.
                </p>
            </div>
            <div className="card-image md-d-none">
                <img src={Card1} alt="Playing Card" className='pos-r'/>
                <motion.p
            initial={{ x: -80, y: -50, rotate: 20 }}
            whileInView={{ x: -250, y: -250, rotate: 0 }}
             viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="pos-a go-left z-[-1]"

          >
            <img src={ImageGoLeft} alt="" className=" "/>
          </motion.p>
          <motion.p
           initial={{ x: -100, y: -125, rotate: 0 }}
           whileInView={{ x: 100, y: 100, rotate: 20 }}
            viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 2, ease: "easeInOut" }}
           className="pos-a go-right z-[-1]"
          >
            <img src={ImageGoRight} alt="" className=" "/>
          </motion.p>
                {/* <img src={ImageGoLeft} alt="Playing Card" className='pos-a go-left' /> */}
                {/* <img src={ImageGoRight} alt="Playing Card" className='pos-a go-right' /> */}
            </div>
        </div>
    );
}

export default WhyUsSecond;
