import React from 'react';
import './ResultsDisplay.css';
import closing from '../../assets/images/closing.png';
import opening from '../../assets/images/opening.png';
function ResultsDisplay() {
    return (
        <div className="resultsDisplay">
                        <span className="parenthesis"><img src={opening}/></span>
            <p className="resultsText">Our results speak louder than words. From strategy to execution, we deliver on time and exceed expectations— every time.</p>
            <span className="dash">—</span>
            <span className="parenthesis"><img src={closing}/></span>
        </div>
    );
}

export default ResultsDisplay;
