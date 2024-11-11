import React from 'react';
import { NavLink } from 'react-router-dom';

function ScheduleCallButton({theme}) {

    let classNames="";
    if(theme === 'transparent'){
        classNames="bg-transparent border-black text-black child-arrow-primary icon-text-transparent"
    }
    return (
    <NavLink target="_blank" to="https://calendly.com/admin-invictuslabs/30min">

        <button className={"call-to-action "+classNames}>
        schedule a call <span className="arrow">➔</span>
    </button>            
    </NavLink>
    );
}

export default ScheduleCallButton;
