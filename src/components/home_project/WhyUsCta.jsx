import React, { useEffect, useState } from 'react';
import './WhyUsCta.css';
import SectionCta from './SectionCta';
import ScheduleCallButton from './ScheduleCallButton';
import ScheduleCallButtonAccent from './ScheduleCallButtonAccent';

const WhyUsCta = ({text, url, desktopOnly}) => {
  const[textSecondary, setTextSecondary] = useState(text);
  
  return (
    <div className={`${desktopOnly?"hidden lg:flex":"block lg:flex "}`}>
        <SectionCta text={text} position='none' url={url}/>
        <ScheduleCallButtonAccent />
    </div>  
  )
}

export default WhyUsCta