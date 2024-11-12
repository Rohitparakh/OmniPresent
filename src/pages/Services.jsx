import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesSection from '../components/services/ServicesSection'
import CurrentProjects from '../components/services/CurrentProjects'
import LetsConnect from './../components/about/LetsConnect';
import HowWeWork from '../components/services/HowWeWork';
import Header from '../components/home_project/Header';
import Cases from '../components/home_project/Cases';
import { Button, MarqueeSection } from '../components/common';

const Services = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <ServicesHero/>
      <ServicesSection/>
      <CurrentProjects/>
      <HowWeWork/>
      <Cases/>
      <div className="w-full py-32 bg-black">
      <MarqueeSection>
           <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                <p className="text-9xl font-[1000] font-nohemi-ext">sound good?</p>
                <Button text="schedule a call" />
           </div>
              </MarqueeSection>
      <MarqueeSection speed={100}>
      <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                <p className="text-9xl font-bold font-nohemi-ext">sound good?</p>
                <Button text="schedule a call" />
           </div>
              </MarqueeSection>
      </div>
            
      <LetsConnect/>
    </div>
  )
}

export default Services