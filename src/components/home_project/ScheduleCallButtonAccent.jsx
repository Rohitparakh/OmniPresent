import React from 'react'
import './ScheduleCallButtonAccent.css'
import { NavLink } from 'react-router-dom';
import arrowBlack from  '../../assets/images/arrowBlack.png';

const ScheduleCallButtonAccent = ({style}) => {
    // console.log(style)
  return (
    <NavLink target="_blank" to="https://calendly.com/admin-omnipresent-/30min">

    <button style={style} className="call-to-action accent">
    schedule a call <span className="arrow"><img src={arrowBlack} height={20} width={20}/></span>
</button> 
</NavLink>
  )
}

export default ScheduleCallButtonAccent