import React from 'react'
import './ScheduleCallButtonAccent.css'
import { NavLink } from 'react-router-dom';


const ScheduleCallButtonAccent = ({style}) => {
    console.log(style)
  return (
    <NavLink target="_blank" to="https://calendly.com/admin-invictuslabs/30min">

    <button style={style} className="call-to-action accent">
    schedule a call <span className="arrow">➔</span>
</button> 
</NavLink>
  )
}

export default ScheduleCallButtonAccent