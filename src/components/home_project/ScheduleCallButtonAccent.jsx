import React from 'react'
import './ScheduleCallButtonAccent.css'
const ScheduleCallButtonAccent = ({style}) => {
    console.log(style)
  return (
    <button style={style} className="call-to-action accent">
    schedule a call <span className="arrow">➔</span>
</button> 
  )
}

export default ScheduleCallButtonAccent