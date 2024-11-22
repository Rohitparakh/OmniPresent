import React from 'react'
import ResultsDisplay from './ResultsDisplay';
import './Results.css';
import './ScheduleButton.css';
import AbstractText from './AbstractText';
import { NavLink } from 'react-router-dom';
import arrowPrimary from  '../../assets/images/arrowPrimary.png';

function ScheduleButton() {
    return (
      <NavLink className="scheduleButtonAnchor" target="_blank" to="https://calendly.com/admin-invictuslabs/30min">

        <div className="scheduleButton">
            <span className="buttonText">schedule a call</span>
            <span className="arrowIcon"><img src={arrowPrimary} /></span>
        </div>
        </NavLink>
    );
}

const Results = () => {
  return (
    <div className='containerOld results'>
        <ResultsDisplay />
        <ScheduleButton />
        <div className='d-flex gap-150 mt-50 sm-f-column'>
        <AbstractText />
        <p className='abstractRight'>
        In Web3, speed isn’t just an advantage—it’s essential. Partner with a team that understands the urgency and delivers with precision. Ready to disrupt?
        </p>
        </div>
    </div>
  )
}

export default Results