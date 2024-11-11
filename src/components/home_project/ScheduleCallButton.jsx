import React from 'react';

function ScheduleCallButton({theme}) {

    let classNames="";
    if(theme === 'transparent'){
        classNames="bg-transparent border-black text-black child-arrow-primary icon-text-transparent"
    }
    return (
        <button className={"call-to-action "+classNames}>
        schedule a call <span className="arrow">➔</span>
    </button>            
    );
}

export default ScheduleCallButton;
