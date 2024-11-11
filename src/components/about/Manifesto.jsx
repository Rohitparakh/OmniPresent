import React from "react";
import { Button } from "../common";
import divider from '../../assets/about/divider.svg';

const Manifesto = () => {
  return (
    <div className="  bg-black text-white relative ">
      <div className="max-w-7xl mx-auto px-4 pt-16 flex flex-col items-center justify-start  h-full">
        {/* Top divider */}
        <div className="border-b  border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-xs tracking-widest">
            our manifesto
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 01 )
          </p>
        </div>

        {/* Manifesto content */}
        <div className="w-full flex items-center justify-end pt-16">
          <p className="text-5xl font-nohemi font-bold lg:w-[70%] text-right leading-[3.2rem]">
            To empower Web3 projects with strategic insights and execution
            excellence, driving <span className="text-primary">innovation</span>{" "}
            and <span className="text-primary">growth</span> in the{" "}
            <span className="text-primary">evolving digital landscape.</span>
          </p>
        </div>

        <div className="flex lg:flex-row flex-col items-start justify-start pt-20 gap-6 w-full">
          <p className=" lg:w-60">
            We aim to drive innovation and growth in the ever-evolving digital
            landscape, ensuring our clients not only navigate challenges but
            also seize opportunities that arise in the crypto space. Our
            commitment to excellence fuels our desire to transform ideas into
            actionable strategies that lead to measurable success.
          </p>
          <p className="lg:w-60">
            To be the premier partner for ambitious crypto ventures, recognized
            for our ability to transform bold ideas into impactful realities. We
            envision a future where decentralized technology thrives, and our
            clients are at the forefront of this transformation. By fostering
            collaboration and pushing the boundaries of what’s possible, we aim
            to shape the future of Web3, creating lasting value for our partners
            and the community.
          </p>
        </div>
      </div>
      <div className=" relative w-full  flex items-center justify-center">
        <img src={divider} alt="" className=" " />
        <div className="top-0 left-0 bottom-0 right-0 absolute flex items-center justify-center">
          <Button text={"schedule a call"} />
        </div>
      </div>

      <div className="min-h-40 w-full flex px-4 flex-col gap-1 items-center justify-center  mx-auto mt-16 relative">
        <div className=" lg:w-[48rem] tracking-wide flex flex-col items-start justify-center gap-1">
          <p className="lg:text-6xl text-5xl font-nohemi font-bold text-start lg:leading-[3.2rem]">
            At the heart of our agency
          </p>
          <p className="lg:text-6xl text-5xl relative font-nohemi font-bold text-start lg:leading-[3.2rem] w-full">
            lies a steadfast{" "}
            <span className=" lg:absolute bottom-[-8px] text-primary lg:pl-2">
              {" "}
              commitment
            </span>
          </p>
          <p className="lg:text-6xl text-5xl font-nohemi font-bold text-start lg:leading-[3.2rem]">
            to every project we
          </p>
          <p className="lg:text-6xl text-5xl font-nohemi font-bold text-start lg:leading-[3.2rem]">
            undertake.
          </p>
        </div>
        
        <div className="lg:w-[55rem] flex lg:justify-end relative">
          <p className=" lg:text-md text-sm lg:mt-0 mt-24 font-nohemi lg:w-1/2">
            We believe in building lasting partnerships with our clients,
            dedicating ourselves to understanding your vision and goals. Our
            team goes above and beyond to ensure your project receives the
            attention it deserves, combining expertise with a tailored approach
            that drives real results. We don’t just work for you; we work with
            you—because your success is our success.
          </p>
      <p className=" lg:bottom-0 bottom-[7rem] lg:right-[-120px] right-0 z-50 lg:text-[20rem] text-[10rem] absolute text-primary font-nohemi">
              {"}"}
            </p>
        </div>


    <div className="lg:w-[55rem] h-96  flex items-center mx-auto justify-end">
        <Button text={"schedule a call"}/>
    </div>
            

      </div>

    </div>
  );
};

export default Manifesto;
