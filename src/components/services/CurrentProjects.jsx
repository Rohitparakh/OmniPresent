import React, { useState } from "react";
import MarqueeSection from "./../common/MarqueeSection";
import { Button } from "../common";
import share from "../../assets/services/share.svg";
import card from "../../assets/services/card.svg";
import one from "../../assets/services/1.png";
import two from "../../assets/services/2.png";
import three from "../../assets/services/3.png";
import four from "../../assets/services/4.png";
import five from "../../assets/services/5.png";
import six from "../../assets/services/6.png";
import seven from "../../assets/services/7.png";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import primaryBg from "../../assets/images/primaryBg.png";
import gif from '../../assets/gif/OurServices.gif';
import SectionHeader from "../home_project/SectionHeader";
import MoreCTAFirst from "../home_project/MoreCtaFirst";

const Card = ({ data, index }) => {
  return (
    <motion.div
      className="w-full h-max bg-black border border-[#EEFE05] flex items-center p-6 xl:grid grid-rows-1 grid-cols-[60%_40%] z-30 relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-[100%] flex flex-col justify-between gap-4 grow-0">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-xl font-normal font-nohemi text-[#EEFE05]">0{index+1}/</p>
            <p className="text-6xl font-nohemi-ext text-[#EEFE05]">{data.name}</p>
          </div>
          <p className="font-nohemi text-[24px] leading-9 w-[85%] text-[#FFFFFF] font-[400]">{data.desc}</p>
          <div className="flex flex-col">
            {data.points.map((point, index) => (
              <p key={index} className={`font-nohemi text-[20px] leading-7 w-[85%] ${index==0?'':'mt-[32px]'} text-[#FFFFFF] font-[400]`}>
                <span className="text-[#EEFE05]">■</span> {point}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <NavLink to="https://calendly.com/admin-omnipresent/30min" target="_blank">
            <motion.p
              className="pb-2 w-72 cursor-pointer hover:scale-105 transition-all duration-300 border-b border-[#EEFE05] flex items-center gap-3 text-[#EEFE05] font-nohemi text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={share} alt="" className="h-4" />
              <span>schedule a call to learn more</span>
            </motion.p>
          </NavLink>
        </div>
      </div>
      <div className="w-[100%] h-full flex flex-col grow justify-center bg-primary">
        <motion.img src={data.image} alt="" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="object-contain p-8"/>
      </div>
    </motion.div>
  );
};

const MobileCard = ({ data }) => {
  return (
    <div className=" w-[350px] bg-black  border border-[#EEFE05] flex flex-col items-start gap-2 p-6">
      <img
        src={data.image}
        alt=""
        className=" h-52 w-full border border-[#EEFE05] bg-primary object-contain p-8"
      />

      <p className=" font-nohemi-ext text-3xl w-full text-[#EEFE05]">
        {data.name}
      </p>

      <NavLink to="https://calendly.com/admin-omnipresent/30min
" target="_blank">
        <p className="pb-2 w-full mt-10 cursor-pointer hover:scale-105 transition-all duration-300  border-b border-[#EEFE05] flex items-center gap-3 text-[#EEFE05] font-nohemi text-md">
          <img src={share} alt="" className="h-4" />
          <span>schedule a call to learn more</span>
        </p>
      </NavLink>

    </div>
  );
};

const CurrentProjects = () => {
  const [selectedCard, setSelectedCard] = useState(0);


  const menuData = [
    "Discord Management",
    "Web3 GTM Strategy and Launch",
    "Web2 to Web3 Transition",
    "Influencer/KOL Strategy and Management",
    "Community Growth Marketing",
    "Content Strategy and Management",
    "X (Twitter) Growth Hacking",
    "Early Stage Funding",
  ];

  const cardData = [
    {
      name: "Discord Management",
      desc: "Our Discord Management turns lurkers into chatters, followers into fans, and visitors into community members.",
      points: [
        "Boost Engagement: Turn visitors and lurkers into active members who are excited to champion your brand.",
        "Grow Authentically: Build a tribe that connects with your vision through curated discussions, AMA’s and more.",
        "Expand Reach: Increase your reach and Web3 clout via collaborations with compatible communities.",
      ],
      image: one,
    },
    {
      name: "Web3 GTM Strategy and Launch",
      desc: "We design Web3 Go-To-Market Strategies that command attention and set you up to succeed.",
      points: [
        "Launch Strategically: Launch with laser focus using a GTM strategy that makes noise in Web3, while aligning with your brand and goals.",
        "Reach the Right People: Reach your ideal customers with messaging that truly speaks to them and differentiates you.",
        "Optimize for Longevity: Stay on top of the data, as we calibrate your strategy for winning results, regardless of market conditions.",
      ],
      image: two,
    },
    {
      name: "Web2 to Web3 Transition",
      desc: "Transitioning to Web3 can be complex, but it’s what we do best. We’ll help you break in with confidence so you can spend more time on your product.",
      points: [
        "Enter Confidently: Do the right things, in the right places, at the right time. We’ll strategize a plan that’s made for your circumstances and the current Web3 climate.",
        "Build Community: Community is key in Web3. We’ll help you build an active community of supporters using our experience with 400+ Web3 communities.",
        "Future-Proof: Stay informed with your data and the latest Web3 trends. We’ll adapt your strategy as things evolve, making sure you stay relevant.",
      ],
      image: three,
    },
    {
      name: "Influencer/KOL Strategy and Management",
      desc: "Grow and connect with your ideal customers via top voices in Web3. We’ll work with you to launch a strategy that’s a match made in heaven.",
      points: [
        "Build Real Connections: Resonate with your audience by delivering the right message through the right voices.",
        "Get Seen Where It Matters: Spread your message in the places it matters most—across platforms from X, Instagram, Tiktok, YouTube and XX.",
        "Optimize and Adapt: Track your campaign with real-time analytics, adjusting on the go to kick your goals.",
      ],
      image: four,
    },
    {
      name: "Community Growth Marketing",
      desc: "Grow your brand’s reach and interactions by tapping into our network of 400+ Web3 communities, including Alpha Groups, DAOs, and Whale Groups.",
      points: [
        "Get Real Interactions: Get real interactions through coordinated engagement raids, using the right partner communities to spread your message.",
        "Collaborate with Purpose: Strategically align with like minded communities through AMA’s, X Spaces, giveaways, cross-ecosystem integrations and more.",
        "Build Lasting Connections: Take away lasting connections that keep your brand resonant in the Web3 space.",
      ],
      image: five,
    },
    {
      name: "Content Strategy and Management",
      desc: "Get seen in Web3 with an attention-grabbing content strategy that kicks your goals and connects with the right people. ",
      points: ["Get Competitive Insights: Stay ahead of the curve with awareness of the market, your competitors and the content gaps to leverage.", "Publish Engaging Content: Publish the content you need to grow and build an engaged audience—from blog posts and social content to whitepapers and beyond.", "Maximize Impact: Be armed with performance metrics like engagement, lead generation and growth to stay on top of your goals."],
      image: six,
    },
    {
      name: "X (Twitter) Growth Hacking",
      desc: "You’ll master the art of visibility on X with our growth tactics. Our data-backed hacks are a proven recipe for shares, follows and real engagement.",
      points: ["Grow Your Brand Clout: Get noticed and build credibility across Web3 with the help of our partner communities. ", "Multiply Engagement: Get more likes, comments, shares and follows using targeted content, perfect timing, and strategic engagement.", "Maximize for Virality: By tapping into trends and algorithm insights, your posts will have the best chance of going viral."],
      image: seven,
    },
    {
      name: "Early Stage Fundraising",
      desc: "Tap into our extensive network to jumpstart your project’s fundraising with the right connections.",
      points: ["Gain Investor Access: Leverage our relationships with KOLs, VCs, and investors who are ready to support innovative projects with liquidity.", "Build Strategic Partnerships: Connect with investors who align with your goals, helping you establish a solid foundation for long-term success."],
      image: seven,
    },
  ];

   // Calculate visible cards based on the selected card
   const visibleCards = cardData.map((_, index) => {
    const offset = (index - selectedCard + cardData.length) % cardData.length;
    if (offset === 0) return "active"; // The current card
    if (offset === 1 ) return "below"; // Below the active card
    if (offset === cardData.length - 1 ) return "above"; // Above the active card
    // if (offset === 1 || offset === 2) return "below"; // Below the active card
    // if (offset === cardData.length - 1 || offset === cardData.length - 2) return "above"; // Above the active card
    return null; // Not visible
  });

  return (
    <div className="bg-black text-white relative pb-16">
      <div className="max-w-[90vw] mx-auto px-4 pt-16 flex flex-col items-center justify-start h-full">
        {/* Top divider */}
        {/* <div className="border-b border-white pb-1 w-full flex items-center justify-between">
          <p className="text-white font-semibold text-xs tracking-widest">
            current projects
          </p>
          <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 02 )
          </p>
        </div> */}
        <SectionHeader heading="current projects" index="02" />

        <div className="w-full mx-auto mt-96 mb-96 xl:flex hidden justify-stretch gap-16 items-center">
          <img src={gif} className="absolute left-0 top-[30%] min-[1800px]:top-[25%] z-10 hidden lg:block w-screen"/>
          <div className="h-full w-max bg-black z-30">
            {menuData.map((item, index) => (
              <p
                key={index}
                onClick={() => setSelectedCard(index)} 
                className={`min-[1800px]:text-[18px] border-b w-64 flex items-center gap-2 pb-2 cursor-pointer active:scale-95 transition-all duration-300 border-white  text-xs font-nohemi ${
                  selectedCard === index ? "text-[#EEFE05]" : "text-white"
                } ${
                  menuData.length === index+1 ? '' : 'mb-3'
                }`}
              >
                0{index + 1}/ <span>{item}</span>
              </p>
            ))}
          </div>
         
          <motion.div
            className="h-full w-max min-h-[500px] min-w-[500px] "
          >
             {cardData.map((card, index) => {
       
        const visibility = visibleCards[index];
        if (!visibility) return null;

        return (
          <motion.div
            key={card.id}
            className={`absolute xl:w-[60vw] min-[1400px]:w-[70vw] transition-transform ${
              visibility === "active"
                ? "z-50 scale-100"
                : visibility === "above"
                ? "z-40 scale-90 -translate-y-[150px] opacity-50 blur-[2px]"
                : "z-40 scale-90 translate-y-[150px] opacity-50 blur-[2px]"
            }`}
            animate={{ opacity: visibility === "active" ? 1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card data={card} index={index} />
          </motion.div>
        );
      })}
          </motion.div>
        </div>

        <div className="w-full mx-auto mt-16 xl:hidden flex flex-col justify-between gap-10 items-center">
          {cardData.map((data, index) => (
            <MobileCard key={index} data={data} />
          ))}
        </div>
      </div>

      <div className="w-full py-16 mt-52 lg:mt-10 xl:mt-80 2xl:mt-[34rem] z-30 relative">
     <MoreCTAFirst/>
      </div>
    </div>
  );
};

export default CurrentProjects;
