import React from 'react'
import SectionHeader from './SectionHeader'
import SectionCta from './SectionCta'
import WhyUsFirst from './WhyUsFirst'
import WhyUsSecond from './WhyUsSecond'
import WhyUsDots from './WhyUsDots'
import WhyUsThird from './WhyUsThird'
import WhyUsCta from './WhyUsCta'

const WhyUs = () => {
  return (
    <div className='containerOld'>
    <SectionHeader heading='why us' index='01'/>
    <WhyUsFirst/>
    <WhyUsSecond />
    <WhyUsDots/>
    <WhyUsThird/>
    <WhyUsCta text='read our manifesto' url="/about" />
    {/* <SectionCta text='read our manifesto'/> */}
    </div>
  )
}

export default WhyUs