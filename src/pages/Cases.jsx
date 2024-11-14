import React from 'react'
import CasesHero from '../components/cases/CasesHero'
import OurWork from '../components/cases/OurWork'
import { LetsConnect } from '../components/about'
import Header from '../components/home_project/Header'

const Cases = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <CasesHero/>
      <OurWork/>
      <LetsConnect/>
    </div>
  )
}

export default Cases