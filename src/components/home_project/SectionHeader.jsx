import React from 'react';
import './SectionHeader.css';

function SectionHeader({heading, index, isPrimary}) {
    return (
        <div className="section-header" style={{zIndex:99, position:'relative',background:isPrimary?'#eefe05':"#000", color:isPrimary?'#000':"#fff", borderBottom:isPrimary? '1px solid #000' : '1px solid #fdfee8'}}>
            <span className="tagline">{heading}</span>
            <span className="tagline index">( {index} )</span>
        </div>
    );
}

export default SectionHeader;
