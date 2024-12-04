import React from 'react';
import './SingleProjectScheduleCall.css';
import thisCanBeYou from '../../assets/images/thisCanBeYou.png';
import ArrowBigRight from '../../assets/images/ArrowBigRight.png';
import './ScheduleButton.css';
import { NavLink } from 'react-router-dom';
import arrowBlack from '../../assets/images/arrowBlack.png';
import arrowDown from '../../assets/images/arrowDown.png';
import { useInView } from "react-intersection-observer";
import gif from '../../assets/gif/Cases.gif';

function ScheduleButton() {
    return (
        <NavLink target="_blank" to="https://calendly.com/admin-omnipresent/30min">

        <div className="scheduleButton" style={{color:'#000', backgroundColor:'#eefe05', padding:'16px 44px 16px 16px', width:'max-content'}}>
            <span className="buttonText" style={{color:'#000', backgroundColor:'#eefe05'}}>schedule a call</span>
            <span className="arrowIcon" style={{color:'#000', backgroundColor:'#eefe05', border:'2px solid black', padding:'10px', right:'-44px'}}><img src={arrowBlack} /></span>
        </div>
        </NavLink>
    );
}

const SingleProjectScheduleCall = () => {
    const { ref, inView } = useInView({
        threshold: 0.3, // Element is considered in view when 50% of it is visible
        triggerOnce: false, // Trigger the `inView` state only once
      });
  return (
    <div className='scheduleCall mb-20 w-full'>
        <img src={gif} className='absolute top-[-15%] right-0 hidden lg:block' />
        <div className='leftSection'>
            <div ref={ref} class={`circle-section ${ inView ? 'inView': ''}`} onClick={()=>window.open('https://calendly.com/admin-omnipresent/30min', '_blank')}>
                <img src={thisCanBeYou} alt="Circle" className="circle" height={250}/>
            </div>
            <img className='mx-auto lg:mt-20 hidden lg:block' src={ArrowBigRight} width={350}/>

            {/* arrow image  */}
        </div>

        <div className='rightSection'>
            <h2>we can<br/><span className='secondLine'><span className='mt--50'>be</span> <span className='text-yellow'>great</span></span><br/>together</h2>
            <img className='mx-auto lg:mt-20 block lg:hidden h-[120px]' src={arrowDown} height={120}/>

            {/* schedule call button  */}
            <ScheduleButton/>
        </div>
    </div>
  )
}

export default SingleProjectScheduleCall