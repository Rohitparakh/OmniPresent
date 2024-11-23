import React from 'react'
import SingleProjectBanner from '../components/home_project/SingleProjectBanner'
import SingleProjectStats from '../components/home_project/SingleProjectStats'
import SectionHeader from '../components/home_project/SectionHeader';
import SingleProjectIntroduction from '../components/home_project/SingleProjectIntroduction';
import SingleProjectLeft from '../components/home_project/SingleProjectLeft';
import SingleProjectRight from '../components/home_project/SingleProjectRight';
import '../components/home_project/SingleProject.css';
import '../components/home_project/Cases.css';
import SingleProjectTestimonial from '../components/home_project/SingleProjectTestimonial';
import '../components/home_project/PortfolioSingleThree.css';
import SingleProjectScheduleCall from '../components/home_project/SingleProjectScheduleCall';
import Header from '../components/home_project/Header';
import { Cases, LetsConnect } from '../components/about';
import Project2 from '../assets/images/imageApproach.png';
import Project3 from '../assets/images/Project3.png';
import Project4 from '../assets/images/Project4.png';
import Project5 from '../assets/images/Project5.png';
import Project6 from '../assets/images/Project6.png';
import { Navigate, useParams } from 'react-router-dom';

import ethihadBanner from '../assets/images/EthihadBanner.png';
import ethihadObjective from '../assets/images/ethihadObjective.png'
import ethihadApproach from '../assets/images/ethihadApproach.png'
import ethihadResults from '../assets/images/ethihadResults.png'

import ckBanner from '../assets/images/ckBanner.jpeg';
import ckObjective from '../assets/images/ckObjective.jpeg';
import ckApproach from '../assets/images/ckApproach.jpeg';
import ckResults from '../assets/images/ckResults.png';

import deblockBanner from '../assets/images/deblockBanner.png';
import deblockObjective from '../assets/images/deblockObjective.png'
import deblockApproach from '../assets/images/deblockApproach.png'
import deblockResults from '../assets/images/deblockResults.png'

import rampxBanner from '../assets/images/rampxBanner.jpeg';
import rampxObjective from '../assets/images/RampX.png'
import rampxApproach from '../assets/images/RampX.png'
import rampxResults from '../assets/images/rampxResults.png'

import elixrBanner from '../assets/images/elixrBanner.png';
import elixrObjective from '../assets/images/elixrObjective.png'
import elixrApproach from '../assets/images/elixrApproach.png'
import elixrResults from '../assets/images/elixrResults.png'

const caseStudiesData = {
  "ethihad": { 
    title: "Ethihad Airways", 
    description: "A landmark Web3 debut for a global Web2 leader", 
    mainBanner: ethihadBanner,
    tags:["GTM Strategy", "Community Growth Marketing","Discord Management","Content Strategy", "KOL Management", "Loyalty Program Launch", "Collaboration and Partnerships"],
    stats:[
      {
        number:'53K',
        text:'X Followers'
      },
      {
        number:'7K',
        text:'Discord Members'
      },
      {
        number:'10m',
        text:'Impressions'
      },
      {
        number:'$1m',
        text:'NFT Revenue'
      }
    ],
    industry:"Airlines",
    deliverables:"Go-To-Market Strategy, NFT Sellout, Community Building",
    about: "Etihad Airways is the national airline of the UAE, servicing flights to 120+ destinations. Etihad sought to engage loyal customers with a new digital experience in Web3. This included a Go-To-Market Strategy and NFT launch with exclusive benefits such as F1 access, flight upgrades, and Manchester City FC merchandise.",
    objectivesHeading:"Etihad partnered with us to:",
    objectives:[
      "Have a seamless entry into Web3 with a new digital experience for fans.",
      "Deliver an impactful Go-To-Market strategy that would sell out their NFT collection “EY-ZERO1”, and establish the brand in the space..",
      "Spotlight their key partners such as Manchester City and Formula 1.",
      "Build and manage an active community across Discord and X."
    ],
    objectiveImage: ethihadObjective,
    approachHeading: "To bring Etihad’s Web3 vision to life, we rolled out a strategy designed to generate buzz and build an engaged community.",
    approachParagraph: "This included partnerships with prominent communities such as CyberKongz, BAYC, Karafuru, and Bape to boost visibility and reach. We launched a KOL program that spread Etihad’s message through influential Web3 voices and introduced a loyalty program offering exclusive Web3 perks. Additionally, we hosted Twitter Spaces with industry figures like Mario Nawfal to prompt discussions around Etihad’s debut into Web3.",
    approachImage: ethihadApproach,
    resultsHeading:'Our efforts led to impressive outcomes:',
    results:[
      "Generated over $1 million in revenue with two sold-out NFT collections.",
      "Established one of the first successful Web3 loyalty programs by a Web2 brand.",
      "Hosted an exclusive NFT holders’ event at Yas Marina Circuit, reinforcing Etihad’s position as a Web3 pioneer.",
      "Gained over 10 million impressions, resulting in a community of over 60,000 members across platforms."
    ],
    resultsImage: ethihadResults,
    relatedProject:["cryptoknights", "rampx"]
  },
  "cryptoknights": { 
    title: "CryptoKnights", 
    description: "Building a global community for the Web3 Shark Tank", 
    mainBanner: ckBanner,
    tags:["GTM Strategy", "Community Growth","Social Media Strategy","Discord Management","Content Strategy"],
    stats:[
      {
        number:'50K',
        text:'X Followers'
      },
      {
        number:'15M',
        text:'Views'
      },
      {
        number:'3k',
        text:'Discord Members(day one)'
      }
    ],
    industry:"Web3 Entertainment",
    deliverables:"Community Growth | Viewership",
    about: "CryptoKnights is a globally acclaimed Web3 TV show that lets viewers invest in top Web3 projects as entrepreneurs pitch to a live audience. Produced by an Emmy-nominated team and inspired by Shark Tank, the show reaches over 300 million viewers worldwide. They approached us to expand their presence in the Web3 space.",
    objectivesHeading:"CryptoKnights goals were to build visibility before launch, aiming to:",
    objectives:[
      "Establish a global audience on X.",
      "Build an engaged crypto-native community.",
    ],
    objectiveImage: ckObjective,
    approachHeading: "With CryptoKnights’ goal of reaching a large global audience, we delivered a GTM strategy focused on maximizing brand visibility and community engagement.",
    approachParagraph: "Our approach included partnerships with established Web3 communities, targeted KOL interactions, and strategic giveaways to drive awareness. On X, we crafted high-quality content featuring top Web3 influencers and crypto projects, while our Discord management maintained an active and engaged community with daily activities and exclusive content.",
    approachImage: ckApproach,
    resultsHeading:'Within less than two months, our strategy resulted in the following outcomes:',
    results:[
      "50,000 X followers with sustained high engagement levels.",
      "3,000 new Discord members within one day of launch.",
      "Organic growth in token price.",
      "15 million+ views for the project and judges' introduction videos, significantly expanding global awareness."
    ],
    resultsImage: ckResults,
    relatedProject:["ethihad", "rampx"]
  },
  "deblock": { 
    title: "Deblock", 
    description: "Go-to-Market success with 100K users and $100M in transactions.", 
    mainBanner: deblockBanner,
    tags:["GTM Strategy","Discord Management","Content Strategy", "KOL Management", "Performance Marketing", "Collaboration and Partnerships"],
    stats:[
      {
        number:'2x',
        text:'Sold Out NFT Collections'
      },
      {
        number:'76K',
        text:'X Followers'
      },
      {
        number:'9K',
        text:'Discord Members'
      },
      {
        number:'40m',
        text:'Impressions'
      },
      {
        number:'100K',
        text:'Users'
      },
      {
        number:'$100m+',
        text:'Transaction Volume'
      }
    ],
    industry:"DEFI",
    deliverables:"Go-To-Market Strategy, NFT Sellout, Community Building",
    about: "Deblock is a secure financial platform offering multi-currency accounts and a crypto wallet. Licensed in France, Deblock is a trusted name in Web3. Recently, it raised $12 million from investors like 20VC, Headline, The Chainsmokers and Kraken, and formed partnerships with major companies, including Ledger, Visa, and Blockdaemon.",
    objectivesHeading:"Deblock partnered with us to:",
    objectives:[
      "Establish a strong Web3 presence.",
      "Drive user acquisition and community engagement within the French market.",
      "Showcase product utility and increase brand awareness across Web2 and Web3 audiences.",
      "Successfully go to market and launch their NFT initiatives."
    ],
    objectiveImage: deblockObjective,
    approachHeading: "We launched a free NFT collection packed with valuable utilities to attract and engage users.",
    approachParagraph: "To foster a French-focused community, we established a robust presence on Discord and ran targeted ad campaigns to draw in new users. KOL campaigns were executed across Web2 and Web3 platforms, connecting Deblock with influential figures who resonated with their audience. We organized Twitter Spaces featuring high-profile guests like The Chainsmokers. Strategic collaborations and partnerships were also forged to strengthen Deblock’s community presence and credibility.",
    approachImage: deblockApproach,
    resultsHeading:'Our efforts led to successful results:',
    results:[
      "Grew Deblock’s X following from 0 to 76,000.",
      "Built a 9,000-member, French-centered Discord community.",
      "Achieved 40 million+ impressions over two years.",
      "Launched two sold-out free NFT mints, with floor prices reaching 0.65 ETH and 0.25 ETH.",
      "Verified users surged to over 100,000, and transaction volume exceeded $100 million."
    ],
    resultsImage: deblockResults,
    relatedProject:["cryptoknights", "ethihad"]
  },
  "rampx": { 
    title: "RampX", 
    description: "A powerful product launch that fetched 10K users in just seven days ", 
    mainBanner: rampxBanner,
    tags:["Full Scale Marketing", "Growth Strategy","Content Strategy","Community Management", "KOL Management",],
    stats:[
      {
        number:'10K',
        text:'Users (7 days)'
      },
      {
        number:'50K',
        text:'X Followers'
      },
    ],
    industry:"DEFI",
    deliverables:"Go-To-Market Strategy, Content Strategy",
    about: "RampX is a one-stop platform designed to make crypto trading and onboarding easy for everyone. RampX aimed to attract and engage new users with a targeted Go-To Market strategy that offered a user-friendly experience for those entering the crypto space.",
    objectivesHeading:"RampX partnered with us to:",
    objectives:[
      "Drive a high number of platform sign-ups with a targeted Go-To-Market strategy within three months.",
      "Develop and execute a content strategy, appealing to cryptocurrency enthusiasts and traders.",
      "Build a strong social media and community that strengthened the brand’s image and fostered engagement.",
    ],
    objectiveImage: rampxObjective,
    approachHeading: "To set RampX up for an impactful launch, we crafted a GTM strategy that would build a trusting and supportive community.",
    approachParagraph: "We developed a sign-up funnel that leveraged KOL investors and their communities, driving thousands of early platform sign-ups. Our content focused on visually engaging and accessible educational materials that showcased RampX’s unique offering. To build a loyal community, we provided exclusive content, ensuring users remained invested in RampX’s journey.",
    approachImage: rampxApproach,
    resultsHeading:'Our efforts produced outstanding results:',
    results:[
      "Generated 10,000+ platform sign-ups within just one week of the website launch.",
      "Achieved over 50,000 X followers in just three months.",
      "Gained thousands of impressions, strengthening brand visibility and ongoing organic sign-ups.",
    ],
    resultsImage: rampxResults,
    relatedProject:["cryptoknights", "ethihad"]
  },
  "elixr": { 
    title: "Elixr Games", 
    description: "GTM Strategy Driving NFT Sellout in Web3 Gaming.", 
    mainBanner: elixrBanner,
    tags:["GTM Strategy","Discord Management","Content Strategy", "NFT Launch & Token Generation Event", "KOL Management", "Collaboration and Partnerships"],
    stats:[
      {
        number:'+200k',
        text:'X Followers'
      },
      {
        number:'24k',
        text:'Discord Members'
      },
      {
        number:'NFT',
        text:'Sell Out'
      }
    ],
    industry:"Web3 Gaming",
    deliverables:"Go-To-Market Strategy, NFT Launch, Community Building",
    about: "Elixir Games is the largest Web3 gaming platform, offering distribution and fintech solutions. Backed by investors like Square Enix and Shima Capital, and partnered with GameStop, Elixir has generated over $6.9 million in revenue. It supports 130+ games across Windows, Mac OS, and mobile, operating on multiple blockchains, including Solana and AVAX.",
    objectivesHeading:"Elixir partnered with us to:",
    objectives:[
      "Generate hype for their NFT launch, IDO, and Token Generation Event (TGE).",
      "Expand their community of Web3 gamers.",
      "Drive user acquisition and grow their brand presence.",
      "Strengthen social proof and credibility in the gaming and Web3 spaces."
    ],
    objectiveImage: elixrObjective,
    approachHeading: "We launched a free NFT collection packed with utilities to attract interest and drive engagement.",
    approachParagraph: "To build a strong gaming community, we focused on Web3 audiences and ran targeted KOL campaigns to amplify Elixir's brand reach. We hosted mega Twitter Spaces, drawing in prominent influencers and gaming enthusiasts, and established strategic collaborations and community partnerships to enhance visibility and engagement across platforms.",
    approachImage: elixrApproach,
    resultsHeading:'Our efforts led to significant growth and impact:',
    results:[
      "Increased X following from 40,000 to 243,800.",
      "Built a thriving Discord community with 24,000 engaged gamers.",
      "Successfully launched two sold-out free NFT mints, reaching floor prices of $800.",
    ],
    resultsImage: elixrResults,
    relatedProject:["cryptoknights", "deblock"]
  }  
};

const SingleProject = () => {
  const { id } = useParams();
  const caseStudy = caseStudiesData[id];

  if (!caseStudy) {
    // Redirect to /cases if the case study ID doesn't match
    return <Navigate to="/cases" replace />;
  }
  return (
    <div className='projectPage'>
      <Header/>
        {/* banner */}
        <SingleProjectBanner banner={caseStudy.mainBanner}/>
        {/* stats */}
        <SingleProjectStats tagList={caseStudy.tags} title={caseStudy.title} description={caseStudy.description} stats={caseStudy.stats}/>
    <div className='containerOld'>

        {/* OVERVIEW */}
        <SectionHeader heading='overview' index='02' />
            {/* introductions section */}
            <SingleProjectIntroduction industry={caseStudy.industry} deliverables={caseStudy.deliverables} about={caseStudy.about} />
            {/* approach */}
            <SingleProjectLeft heading={'Objectives'} index={'02'} subHeading={caseStudy.objectivesHeading} objectives={caseStudy.objectives} objectiveImage={caseStudy.objectiveImage}/>
            <SingleProjectRight approachImage={caseStudy.approachImage} heading={'Approach'} index={'03'} subHeading={caseStudy.approachHeading} approachParagraph={caseStudy.approachParagraph} />
            <SingleProjectLeft heading={'Results'} index={'04'} subHeading={caseStudy.resultsHeading} objectives={caseStudy.results} objectiveImage={caseStudy.resultsImage}/>
            {/* <SingleProjectRight img={Project5} heading={'Intuitive Animation'} index={'05'} subHeading={'Bringing Information to Life With Motion'} para="The experience for the Meltwater website was designed to be immersive from start to finish as well as engaging while analyzing each component on its own. Throughout each page, site-wide, our audience can appreciate a unique combination of simplicity, fluidity, and vibrancy with animated graphics that guide users through a well-crafted journey."/>
            <SingleProjectLeft img={Project6} heading={'Responsive Design'} index={'06'} subHeading={'Empowering Insights Anywhere'} para="Catering to our audience's mobile preferences, we enable them to stay connected and informed, empowering them with accessible data-driven solutions anytime, anywhere."/> */}
            {/* <SingleProjectTestimonial/> */}
            <SingleProjectScheduleCall/>
            <Cases case1={caseStudiesData[caseStudy.relatedProject[0]]} case2={caseStudiesData[caseStudy.relatedProject[1]]}
              case1URL={caseStudy.relatedProject[0]} case2URL={caseStudy.relatedProject[1]} />
            {/* first impression */}
            <LetsConnect/>
            </div>
    </div>
  )
}

export default SingleProject