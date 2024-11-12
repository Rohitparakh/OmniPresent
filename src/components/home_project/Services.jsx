import React from 'react';
import './Services.css';
import SectionHeader from './SectionHeader';
import ServicesHeader from './ServicesHeader';
import ServiceCards from './ServiceCards';
import WhyUsCta from './WhyUsCta';
import swiggly from '../../assets/images/Our Services Contact Swiggly.png';

const Services = () => {
  return (
    <div className='containerOld services'>
        <SectionHeader heading='our services' index='03'/>
        <ServicesHeader/>
        <ServiceCards/>
        <div className='ctaDiv'>
            <img src={swiggly} className='swiggly'/>
            <WhyUsCta text='see more' />
        </div>

    </div>
  )
}

export default Services