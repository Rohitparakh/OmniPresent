import React from 'react';
import './AbstractText.css';
import linesBg from '../../assets/images/So do we bg lines.png';
// import line42 from './assets/line-42.svg';
// import line43 from './assets/line-43.svg';
// import line44 from './assets/line-44.svg';
// import vector2 from './assets/linked-vector-2.svg';

function AbstractText() {
    return (
        <div className="abstractText">
            <p className="futureMoves">the future <br />moves fast</p>
            <div className="soDoWe">
                <img src={linesBg} className='linesBg'/>    
                so do <br /> we
            </div>
        </div>
    );
}

export default AbstractText;
