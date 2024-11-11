import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import x from '../../assets/about/x.svg';
import linkedin from '../../assets/about/linkedin.svg';
import share from '../../assets/about/share.svg';
import teamCardDiff from '../../assets/about/teamCardDiff.svg';
import face1 from '../../assets/about/face1.svg';
const TeamCard = ({ img, name, title }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 min-w-[320px] min-h-[350px] ">
      <div className="flex lg:flex-col items-center justify-center gap-4">
      <img
        src={img}
        alt=""
        className="w-32 h-32 rounded-full mix-blend-multiply"
      />
      <div>
        <p className="text-2xl font-nohemi-ext">{name}</p>
        <p className="text-sm lg:text-center font-nohemi">{title}</p>
      </div>

      </div>

      <div className="flex items-center justify-center gap-3">
        <img src={x} alt="" className="h-6" />
        <img src={linkedin} alt="" className="h-6" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="border-b-2 px-1 flex items-end cursor-pointer hover:scale-105 transition-all duration-500 w-20" style={{borderBottom:'1px solid black'}}>
          <img src={share} alt="" className="h-4" />{" "}
          <p className=" font-nohemi text-xs">see more</p>
        </div>

        <div className="w-full flex items-center justify-center mt-2">
          <img
            src={teamCardDiff}
            alt=""
            className="h-12"
          />
        </div>
      </div>
    </div>
  );
};

const KnowUs = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen w-full bg-primary px-4 pb-10">
      <div className="max-w-7xl mx-auto py-16 flex flex-col items-center justify-start min-h-screen">
        <div className="border-b pb-1 w-full flex items-center justify-between" style={{borderBottom:'1px solid black'}}>
          <p className="text-black font-bold text-[10px] tracking-widest ">
            know us
          </p>
          <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 04 )
          </p>
        </div>

        <div className="flex flex-col items-center justify-center h-full w-full mt-20 ">
          <p className="lg:text-7xl text-4xl font-nohemi-ext font-bold text-start px-1">
            Our team is a collective of Web3 natives, community experts, and marketing specialists. We keep our fingers firmly on the pulse of this fast-moving space.

          </p>
        </div>

        <div className="flex lg:items-center lg:gap-6 gap-3 w-full mt-8">
          <p className="text-[9rem] font-nohemi-ext ">{"{"}</p>
          <div>
            <p className="text-xl font-nohemi lg:w-[60%] text-[#131313]">
             
              Our team has been on the same wavelength with crypto marketing for
              4 years, and during this time we have implemented more than 20
              blockchain projects. Real and Web3 economies are in our DNA. We
              turn knowledge into effective collaborations for our clients.
            </p>
            <p className="text-xl font-nohemi lg:w-[60%] text-[#131313]">
              And we will do it for you, too.
            </p>
          </div>
        </div>

        <div className="w-full lg:flex hidden flex-col gap-6 px-2 ">
          {/* handle left and right button */}
          <div className="w-full flex justify-end items-center">
            <div className="flex items-center gap-4">
              <p
                onClick={handleScrollLeft}
                className="h-8 w-8 flex items-center justify-center border-black border-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <FaArrowLeft className="h-5" />
              </p>
              <p
                onClick={handleScrollRight}
                className="h-8 w-8 flex items-center justify-center border-black border-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <FaArrowRight className="h-5" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* horizontal scroll */}
      <div
        ref={scrollContainerRef}
        className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-10 lg:overflow-x-auto space-x-4 scrollbarHidden"
      >
        <div className="min-w-[500px] min-h-[350px] lg:block hidden"></div>

        <TeamCard
          img={face1}
          name="Team Member"
          title="Creative Director"
        />
        <TeamCard
          img={face1}
          name="Team Member"
          title="Creative Director"
        />
        <TeamCard
          img={face1}
          name="Team Member"
          title="Creative Director"
        />
        <TeamCard
          img={face1}
          name="Team Member"
          title="Creative Director"
        />

       
      </div>
    </div>
  );
};

export default KnowUs;
