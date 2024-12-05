import React from 'react';
import './SectionHeader.css';

function SectionHeader({heading, index}) {
    return (
        <div className="section-header" style={{zIndex:99, position:'relative'}}>
            <span className="tagline">{heading}</span>
            <span className="tagline">( {index} )</span>
        </div>
    );
}

export default SectionHeader;
