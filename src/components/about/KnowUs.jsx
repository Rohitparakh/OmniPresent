import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import twitter from "../../assets/about/x.svg";
import linkedin from "../../assets/about/linkedin.svg";
import share from "../../assets/about/share.svg";
import teamCardDiff from "../../assets/about/teamCardDiff.svg";
import face1 from "../../assets/about/face1.svg";
import face2 from "../../assets/about/face2.svg";
import face3 from "../../assets/about/face3.svg";
import face4 from "../../assets/about/face4.svg";
import face5 from "../../assets/about/face5.svg";
import close from "../../assets/about/close.svg";
import { NavLink } from "react-router-dom";
import { motion, useInView } from "framer-motion";
const TeamCard = ({ img, name, title, desc, x }) => {
  const [isSeeMore, setIsSeeMore] = React.useState(false);

  return (
    <div className="flex items-center justify-center flex-col gap-4 min-w-[320px] ">
      {!isSeeMore && (
        <>
          <div className="flex lg:flex-col items-center justify-center gap-4">
            <img
              src={img}
              alt=""
              className="w-32 h-32 rounded-full mix-blend-multiply"
            />
            <div>
              <p className="text-2xl font-nohemi-ext lg:text-center">{name}</p>
              <p className="text-sm lg:text-center font-nohemi">{title}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <NavLink
              target="_blank"
              to={`https://x.com/${x}`}
              className="flex items-center gap-2 text-xs"
            >
              <img src={twitter} alt="" className="h-6" />@{x}
            </NavLink>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div
              onClick={() => setIsSeeMore(true)}
              className="border-b-2 px-1 flex items-end cursor-pointer hover:scale-105 transition-all duration-500 w-20"
              style={{ borderBottom: "1px solid black" }}
            >
              <img src={share} alt="" className="h-4" />{" "}
              <p className=" font-nohemi text-xs">see more</p>
            </div>

            <div className="w-full flex items-center justify-center mt-2">
              <img src={teamCardDiff} alt="" className="h-12" />
            </div>
          </div>
        </>
      )}

      {isSeeMore && (
        <div className="w-full h-[450px] border border-black p-10 relative flex flex-col items-center justify-center">
          <img
            src={close}
            alt=""
            className="h-7 absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsSeeMore(false)}
          />

          <p className="font-nohemi-ext">Team Member</p>

          <p className="font-nohemi-ext text-2xl mt-10">{name}</p>

          <p className="font-nohemi text-center text-sm">{title}</p>

          <p className="font-nohemi text-sm mt-8">{desc}</p>
        </div>
      )}
    </div>
  );
};

const KnowUs = () => {
  const scrollContainerRef = useRef(null);
  const containerRef = React.useRef(null);
  const isContainerInView = useInView(containerRef, { once: true });

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

  const teamData = [
    {
      img: face1,
      name: "Liz",
      title: "Founder, CEO",
      desc: "Liz is the Founder and CEO of Omnipresent. She creates opportunities for the agency, bringing talent together to manage emerging crypto projects. Liz thrives on the challenge of maximizing team and client potential, while promoting mass adoption of crypto in a meaningful way. Some of Liz’s projects include Enjinstarter, Xai Games, Warner Music, Polygon, Altcoin Buzz, World of Women, Sandbox, and Animoca.",
      x: "Crypt0Priestess",
    },
    {
      img: face2,
      name: "Piyushi",
      title: "Partnerships/Collaborations Lead",
      desc: "Piyush manages collaborations and partnerships that drive growth and boost brand visibility within the Web3 and crypto space. He loves building connections and creating impactful partnerships that drive innovation and growth. Projects include Deblockapp, CryptoKnights, RampX, Eden Online, CoinEx, and Ithaca Protocol.",
      x: "piyushkalra_",
    },
    {
      img: face3,
      name: "Chery",
      title: "Project Manager/Admin Assistant",
      desc: "Chery is the Project Manager at Omnipresent, providing crucial administrative support across finance, project coordination, and more. With a knack for keeping teams organized and efficient, she takes pride in helping others stay on track. Her expertise has been instrumental to all Omnipresent projects.",
      x: "yrehc_deleon",
    },
    {
      img: face4,
      name: "Mani",
      title: "Senior Copywriter",
      desc: "Mani is passionate about creating content that empowers and educates audiences, helping people gain valuable knowledge. Mani’s projects include Persona Journey, Yama, Station Shibuya, and Vanta World.",
      x: "Mani_NFTz",
    },
    {
      img: face5,
      name: "Debayo",
      title: "Brand storyteller, Copywriter",
      desc: "Debayo is a copywriter and brand storyteller for Omnipresent, where he also documents marketing strategies for clients. His work allows him to work closely with clients, creating impactful stories and building meaningful connections. Some of Debayo’s projects include Seedify and Seedworld.",
      x: "debayo_xx",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-primary px-4 pb-10">
      <div className="max-w-7xl mx-auto py-16 flex flex-col items-center justify-between">
        <div
          className="border-b pb-1 w-full flex items-center justify-between"
          style={{ borderBottom: "1px solid black" }}
        >
          <p className="text-black font-bold text-[10px] tracking-widest ">
            know us
          </p>
          <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 04 )
          </p>
        </div>

        <div className="flex flex-col items-center justify-center h-full w-full mt-20 ">
          <motion.p
            ref={containerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:text-7xl text-5xl leading-[64px] lg:leading-[72px] font-nohemi-ext font-bold text-start px-1"
          >
            Our team is a collective of Web3 natives, community experts, and
            marketing specialists. We keep our fingers firmly on the pulse of
            this fast-moving space.
          </motion.p>
        </div>

        <div className="w-full lg:flex hidden flex-col gap-6 px-2 ">
          {/* handle left and right button */}
          <div className="w-full flex justify-end items-center">
            <div className="flex items-center gap-4">
              <p
                onClick={handleScrollLeft}
                className="h-16 w-16 flex items-center justify-center border-black border-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <FaArrowLeft size={30} className="h-10" />
              </p>
              <p
                onClick={handleScrollRight}
                className="h-16 w-16 flex items-center justify-center border-black border-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <FaArrowRight size={30} className="h-10" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* horizontal scroll */}
      <div
        ref={scrollContainerRef}
        className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-24 lg:overflow-x-auto space-x-4 scrollbarHidden"
      >
        <div className="min-w-[300px] min-h-[350px] lg:block hidden"></div>

        {teamData.map((item, index) => (
          <TeamCard
            key={index}
            img={item.img}
            name={item.name}
            title={item.title}
            desc={item.desc}
            x={item.x}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowUs;
