import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowPrimary from '../../assets/images/arrowPrimary.png';

function ScheduleCallButton({theme}) {

    let classNames="";
    if(theme === 'transparent'){
        classNames="bg-transparent border-black text-black child-arrow-primary icon-text-transparent"
    }
    return (
    <NavLink target="_blank" to="https://calendly.com/admin-omnipresent/30min">

        <button className={"call-to-action "+classNames}>
        schedule a call <span className="arrow"><img src={arrowPrimary} width={13} height={13}/></span>
    </button>            
    </NavLink>
    );
}

export default ScheduleCallButton;
