import React from 'react';
import SectionHeader from './SectionHeader';
import testimonialsBG from '../../assets/gif/TestimonialsBG.png';
import './Testimonials.css';
import TestimonialFirst from './TestimonialFirst';
import TestimonialSecond from './TestimonialSecond';
import TestimonialThird from './TestimonialThird';
import TestimonialFourth from './TestimonialFourth';
import WhyUsCta from './WhyUsCta';

const Testimonials = () => {

  const style = {
    display: 'block',
    backgroundImage: `url(${testimonialsBG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    width:'100vw',
    
  };

  return (
    <div className='containerOld testimonials' style={style}>
        <SectionHeader heading='testimonials' index='04'/>
        <div className='testi'>
          <div className='firstRow'>
            <TestimonialFirst/>
            <TestimonialSecond/>
          </div>
          <TestimonialThird/>
          <div className='thirdRow'>
            <TestimonialFourth/>
          </div>
        </div>
<div className='ctaDiv'>
        <WhyUsCta text='see more' />
        </div>
    </div>
  )
}

export default Testimonials