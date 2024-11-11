import React from 'react'
import ResultsDisplay from './ResultsDisplay';
import './Results.css';
import './ScheduleButton.css';
import AbstractText from './AbstractText';

function ScheduleButton() {
    return (
        <div className="scheduleButton">
            <span className="buttonText">schedule a call</span>
            <span className="arrowIcon">➔</span>
        </div>
    );
}

const Results = () => {
  return (
    <div className='containerOld results'>
        <ResultsDisplay />
        <ScheduleButton />
        <div className='d-flex gap-150 mt-50'>
        <AbstractText />
        <p className='abstractRight'>
        In Web3, speed isn’t just an advantage—it’s essential. Partner with a team that understands the urgency and delivers with precision. Ready to disrupt?
        </p>
        </div>
    </div>
  )
}

export default Results