import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServicesSection from '../components/services/ServicesSection'
import CurrentProjects from '../components/services/CurrentProjects'
import LetsConnect from './../components/about/LetsConnect';
import HowWeWork from '../components/services/HowWeWork';
import Header from '../components/home_project/Header';
import Cases from '../components/home_project/Cases';

const Services = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <ServicesHero/>
      <ServicesSection/>
      <CurrentProjects/>
      <HowWeWork/>
      <Cases/>
      <LetsConnect/>
    </div>
  )
}

export default Services