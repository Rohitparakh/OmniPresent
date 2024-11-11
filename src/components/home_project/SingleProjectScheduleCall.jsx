import React from 'react';
import './SingleProjectScheduleCall.css';
import thisCanBeYou from '../../assets/images/thisCanBeYou.png';
import ArrowBigRight from '../../assets/images/ArrowBigRight.png';
import './ScheduleButton.css';

function ScheduleButton() {
    return (
        <div className="scheduleButton" style={{color:'#000', backgroundColor:'#eefe05'}}>
            <span className="buttonText" style={{color:'#000', backgroundColor:'#eefe05'}}>schedule a call</span>
            <span className="arrowIcon" style={{color:'#000', backgroundColor:'#eefe05', border:'2px solid black'}}>➔</span>
        </div>
    );
}

const SingleProjectScheduleCall = () => {
  return (
    <div className='scheduleCall'>
        <div className='leftSection'>
            <div class="circle-section">
                <img src={thisCanBeYou} alt="Circle" className="circle" height={250}/>
            </div>
            <img className='mx-auto' src={ArrowBigRight} width={350}/>

            {/* arrow image  */}
        </div>

        <div className='rightSection'>
            <h2>we can<br/><span className='secondLine'><span className='mt--50'>be</span> <span className='text-yellow'>great</span></span><br/>together</h2>
            {/* schedule call button  */}
            <ScheduleButton/>
        </div>
    </div>
  )
}

export default SingleProjectScheduleCall