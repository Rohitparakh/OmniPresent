import React from 'react'
import {Manifesto, Hero, LetsWork, Cases, KnowUs, LetsConnect} from '../components/about';
import Header from '../components/home_project/Header';

const About = () => {
  return (
    <div className='relative overflow-hidden aboutPage'>
    <Header/>
    <Hero/>
    <Manifesto/>
    <LetsWork/>
    {/* <Cases/> */}
    {/* <KnowUs/> */}
    <LetsConnect index="03"/>
    </div>
  )
}

export default About