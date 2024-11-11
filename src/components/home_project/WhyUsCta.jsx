import React, { useEffect, useState } from 'react';
import './WhyUsCta.css';
import SectionCta from './SectionCta';
import ScheduleCallButton from './ScheduleCallButton';
import ScheduleCallButtonAccent from './ScheduleCallButtonAccent';

const WhyUsCta = ({text}) => {
  const[textSecondary, setTextSecondary] = useState(text);
  
  return (
    <div className='why-us-cta'>
        <SectionCta text={text} position='none' />
        <ScheduleCallButtonAccent />
    </div>  
  )
}

export default WhyUsCta