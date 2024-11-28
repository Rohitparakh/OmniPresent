import React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "../common";
import divider from '../../assets/about/divider.svg';
import gif from '../../assets/gif/OurManifesto.gif';

const Card = ({ title, desc }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className=" flex flex-col justify-between gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-white font-semibold text-2xl font-nohemi">
        <span className="text-[#EEFE05] text-4xl">■ </span>
        {title}
      </p>
      <p className="text-[#FFFFFF] font-nohemi text-base leading-6">
        {desc}
      </p>
    </motion.div>
  );
};

const Manifesto = () => {
  const contentRef = React.useRef(null);
  const contentInView = useInView(contentRef, { once: true });

  const data = [
    {
      title: "Natively Web3",
      desc: "Web3 is embedded in our DNA; we understand its potential, its pace, and its people. This lived knowledge empowers us to lead, showing others how to harness its potential to prosper and make the world a better place."
    },
    {
      title: "Web3 that Respects Humanity",
      desc: "In our pursuit of innovation, we never lose sight of being human. We swear by a Web3 that enriches lives, fosters connections, and builds bridges for everyone. Above all, it’s an internet that respects humanity and serves as a conduit for an interconnected world."
    },
    {
      title: "Lasting Partnerships = Lasting Success",
      desc: "In our pursuit of innovation, we never lose sight of being human. We swear by a Web3 that enriches lives, fosters connections, and builds bridges for everyone. Above all, it’s an internet that respects humanity and serves as a conduit for an interconnected world."
    },
    {
      title: "Community is Everything",
      desc: "Community is the beating heart of everything we do. Without it, there is no Web3—and without Web3, there is no us. It’s people that make ideas come to life, spread messages and add flavor to life."
    },
    {
      title: "Relentlessly Pursuing Excellence",
      desc: "Good is never enough. We’re relentlessly pursuing excellence, greeting challenges with vigor—each one, after all, is an invitation to break molds. We’ll never stop growing, and challenging what’s expected to light up hidden paths."
    },
  ];

  return (
    <div className="bg-black text-white relative">
      <motion.div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 pt-16 flex flex-col items-center justify-start h-full lg:relative"
        initial={{ opacity: 0 }}
        animate={contentInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Top divider */}
        <div
          className="border-b border-white pb-1 w-full flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-white font-semibold text-xs tracking-widest">
            our manifesto
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 01 )
          </p>
        </div>

        {/* Manifesto content */}
        <motion.div
          className="w-full flex items-center justify-end pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <p className="text-5xl font-nohemi-ext font-bold lg:w-[80%] text-right leading-[3.2rem]">
            At the crux of our mission lies the conviction that our approach to how we <span className="text-primary">work</span>, <span className="text-primary">connect</span> and{" "}
            <span className="text-primary">innovate</span> shapes our <span className="text-primary">identity</span>.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="w-full grid lg:grid-cols-3 gap-4 mt-20 lg:mb-0 mb-20 lg:gap-x-12 lg:gap-y-24 max-w-[80vw]">
          {data.map((item, index) => (
            <Card title={item.title} desc={item.desc} key={index} />
          ))}
          
        </div>
        <Button text={"schedule a call"} className="lg:absolute lg:left-[50%] lg:bottom-[-250px] lg:-translate-x-1/2 z-20 manifestoSchedule"/>

      </motion.div>

      {/* Video background */}
      <motion.div
        className="relative w-[250%] lg:w-full flex items-center justify-center"
        initial={{ scale: 1.05 }}
        animate={contentInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img 
  src={gif} 
  className="object-cover ml-[-85%] lg:ml-0 "
/>


        <motion.div
          className="lg:top-0 top-[-400px] left-0 bottom-0 right-0 absolute flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Manifesto;
