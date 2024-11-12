import React from 'react';
import './LetsTalk.css';
import SectionHeader from './SectionHeader';
import LetsTalkContent from './LetsTalkContent';
import LetsTalkFooter from './LetsTalkFooter';

const LetsTalk = () => {
  return (
    <div className='lets-talk'>
        <SectionHeader heading="let's connect" index='99'/>
        <LetsTalkContent/>
        <LetsTalkFooter/>
    </div>
  )
}

export default LetsTalk