import React from 'react';
import { Button } from '../common';
import card1 from "../../assets/cases/card1.svg";
import card2 from "../../assets/cases/card2.svg";
import card3 from "../../assets/images/ckBanner.jpeg";
import card4 from "../../assets/cases/card4.svg";
import card5 from "../../assets/cases/card5.svg";
import card6 from "../../assets/images/PortfolioThirdTwo.png";
import { NavLink } from 'react-router-dom';

const Card = ({ img, title, para, url }) => {
    return (
        <NavLink to={url}>
            <div className='w-full min-h-[250px] flex flex-col gap-2 transform hover:scale-105 transition-transform duration-300'>
                <img src={img} alt="" className='h-80 object-contain' />
                <p className='text-white font-semibold text-2xl font-nohemi'>{title}</p>
                <p className='text-[#FFFFFF] font-nohemi text-sm'>{para}</p>
            </div>
        </NavLink>
    );
};

const OurWork = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    const menu = ["GTM", "Growth Strategy & Hacking", "KOL M&M", "Partnerships", "Merchandising", "Collabs & Alpha Calls", "Fundraising", "Branding & Design", "Advisory", "SMC Strategy and Management"];

    const data = [
        { img: card1, title: "Etihad Airways", desc: "A landmark Web3 debut for a global Web2 aviation leader", url: "/cases/ethihad", 
        tags: ["GTM", "Community Growth Marketing", "Discord Management", "Content Strategy", "KOL Management", "Loyalty Program Launch", "Collaboration and Partnerships"] },
        { img: card2, title: "RampX", desc: "A powerful product launch that fetched 10K users in just seven days", url: "/cases/rampx", 
        tags: ["Full Scale Marketing", "Growth Strategy", "Content Strategy", "Community Management", "KOL Management"] },
        { img: card3, title: "CryptoKnights", desc: "Building a global community for the Web3 Shark Tank", url: "/cases/cryptoknights", 
        tags: ["GTM", "Community Growth", "Social Media Strategy", "Discord Management", "Content Strategy"] },
        { img: card4, title: "Deblock", desc: "Go-to-Market success with 100K users and $100M in transactions", url: "/cases/deblock", 
        tags: ["GTM", "Discord Management", "Content Strategy", "KOL Management", "Performance Marketing", "Collaboration and Partnerships"] },
        { img: card5, title: "Elixr Games", desc: "GTM Strategy Driving NFT Sellout in Web3 Gaming", url: "/cases/elixr", 
        tags: ["GTM", "Discord Management", "Content Strategy", "NFT Launch & Token Generation Event", "KOL Management", "Collaboration and Partnerships"] },
        { img: card6, title: "Rayls", desc: "We revived activity on the platform and increased the trading volume by 32%" },
    ];

    const filteredData = activeTab === 0 
    ? data 
    : data.filter((item) => {
        console.log(`Filtering for menu[${activeTab - 1}]:`, menu[activeTab - 1]);
        console.log("Checking item:", item);

        if (!item.tags) {
            console.log("No tags found for item:", item.title);
            return false;
        }

        // Split the menu item into words
        const menuWords = menu[activeTab - 1].toLowerCase().split(" ");

        // Check if any word in any tag matches any word in the menu item
        const matches = item.tags.some((tag) => {
            const tagWords = tag.toLowerCase().split(" ");
            return menuWords.some((menuWord) => tagWords.includes(menuWord));
        });

        console.log(`Result for item "${item.title}":`, matches);
        return matches;
    });


    const handleTabClick = (index) => {
        console.log("Tab clicked:", index);
        setActiveTab(index);
    };

    return (
        <div className="bg-black text-white relative">
            <div className="max-w-7xl mx-auto pt-16 flex px-4 flex-col items-center justify-start min-h-screen">
                {/* Top divider */}
                <div className="border-b border-white pb-1 w-full flex items-center justify-between">
                    <p className="text-white font-semibold text-[10px] tracking-widest">
                        OUR WORK
                    </p>
                    <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
                        ( 01 )
                    </p>
                </div>

                {/* Animated Tab Menu */}
                <div className='w-full h-14 mt-20 flex items-center gap-3 overflow-x-auto whitespace-nowrap'>
                    <p
                        onClick={() => handleTabClick(0)}
                        className={`text-[11px] px-4 py-2 cursor-pointer border border-white rounded-full ${activeTab === 0 ? 'bg-white text-black' : 'text-white'}`}
                    >
                        All
                    </p>

                    {/* Vertical Line */}
                    <div className='w-20 h-0.5 bg-white'></div>

                    {menu.map((item, index) => (
                        <p
                            key={index}
                            onClick={() => handleTabClick(index + 1)}
                            className={`text-[11px] w-auto px-2 py-2 cursor-pointer border border-white rounded-full ${activeTab === index + 1 ? 'bg-white text-black' : 'text-white'}`}
                        >
                            {item}
                        </p>
                    ))}
                </div>

                {/* Cards */}
                <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10 pb-32'>
                    {filteredData.map((i) => (
                        <Card img={i.img} title={i.title} para={i.desc} key={i.title} url={i.url} />
                    ))}
                </div>

                {/* Schedule Call Button */}
                <div className='w-full flex justify-center pb-32'>
                    <Button text={"schedule a call"} />
                </div>
            </div>
        </div>
    );
};

export default OurWork;
