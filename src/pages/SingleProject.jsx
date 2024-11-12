import React from 'react'
import SingleProjectBanner from '../components/home_project/SingleProjectBanner'
import SingleProjectStats from '../components/home_project/SingleProjectStats'
import SectionHeader from '../components/home_project/SectionHeader';
import SingleProjectIntroduction from '../components/home_project/SingleProjectIntroduction';
import SingleProjectLeft from '../components/home_project/SingleProjectLeft';
import SingleProjectRight from '../components/home_project/SingleProjectRight';
import '../components/home_project/SingleProject.css';
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
const SingleProject = () => {
  return (
    <div>
      <Header/>
        {/* banner */}
        <SingleProjectBanner/>
        {/* stats */}
        <SingleProjectStats/>
    <div className='containerOld'>

        {/* OVERVIEW */}
        <SectionHeader heading='overview' index='02' />
            {/* introductions section */}
            <SingleProjectIntroduction/>
            {/* approach */}
            <SingleProjectLeft img={Project2} heading={'Custom Web Design for Cutting-Edge Global Leaders'} index={'02'} subHeading={'Our Approach'} para="We wanted to create a striking first impression that features the Meltwater suite of products within the first seconds of arriving at their homepage. A lively video of their newly redesigned products creates a modern and engaging experience above the fold, and scales throughout the graphics incorporated throughout the custom website. The value and benefits of Meltwater's solutions are listed along side a creative composition of mixed media, and each of their suite pages were crafted to educate and differentiate their offerings to a unique audience."/>
            <SingleProjectRight img={Project3} heading={'The First Impression'} index={'03'} subHeading={'An Introduction to a Suite of Sophisticated SAAS Products'} para="We created a video that embraces the world of data that Meltwater’s clients are immersed in. The engaging bar graph animation transforms to present their redesigned product suite in a fast-paced and modern way. The introduction allows the user to notice and appreciate each product on its own, and pairs its presentation with dynamic messaging related to that product’s value and purpose."/>
            <SingleProjectLeft img={Project4} heading={'Inside Meltwater AI'} index={'04'} subHeading={'Visualizing What Meltwater Does'} para="The “Our Technology” page begins with a clean and simplified introduction of how Meltwater’s technology take billions of data point across media and social and help marketers gain meaningful insight to drive a greater impact for their customers. The infographic dives deeper explaining how data collection is structured, analyzed, and insight is distributed into the Meltwater AI engine. Benefits of the technology are outlined with differentiators, case studies, integrations, and data security. The Meltwater suite is presented with clarity, culminating in an engaging animation showcasing a product dashboard, accompanied by a clear 'Request a Demo' call-to-action."/>
            <SingleProjectRight img={Project5} heading={'Intuitive Animation'} index={'05'} subHeading={'Bringing Information to Life With Motion'} para="The experience for the Meltwater website was designed to be immersive from start to finish as well as engaging while analyzing each component on its own. Throughout each page, site-wide, our audience can appreciate a unique combination of simplicity, fluidity, and vibrancy with animated graphics that guide users through a well-crafted journey."/>
            <SingleProjectLeft img={Project6} heading={'Responsive Design'} index={'06'} subHeading={'Empowering Insights Anywhere'} para="Catering to our audience's mobile preferences, we enable them to stay connected and informed, empowering them with accessible data-driven solutions anytime, anywhere."/>
            <SingleProjectTestimonial/>
            <SingleProjectScheduleCall/>
            <Cases/>
            {/* first impression */}
            <LetsConnect/>
            </div>
    </div>
  )
}

export default SingleProject