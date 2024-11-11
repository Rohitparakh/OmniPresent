import React from 'react'
import SectionHeader from './SectionHeader'
import PortfolioSingle from './PortfolioSingle'
import PortfolioSingleLeft from './PortfolioSingleLeft'
import PortfolioSingleThree from './PortfolioSingleThree'
import PortfolioSingleFour from './PortfolioSingleFour'
import PortfolioSingleFive from './PortfolioSingleFive'
import SectionCta from './SectionCta'

const Cases = () => {
  return (
    <div className='containerOld'>
    <SectionHeader heading='Current Projects' index='02'/>
    <PortfolioSingle/>
    <PortfolioSingleLeft  />
    <PortfolioSingleThree  />
    <PortfolioSingleFour />
    {/* <PortfolioSingleFive /> */}
    <SectionCta text='see more cases'/>
    </div>
  )
}

export default Cases