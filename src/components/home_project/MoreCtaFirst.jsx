import React from 'react';
import './MoreCTAFirst.css';
import ScheduleCallButtonAccent from './ScheduleCallButtonAccent';
import { Button } from "../common";

import MarqueeSection from './../common/MarqueeSection';

function MoreCTAFirst() {
    return (
        <div className="w-full pt-60 bg-black">
        <MarqueeSection speed={200}>
             <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                  <p className=" text-[150px] lg:text-[230px] font-[1000] font-nohemi-ext">sound good?</p>
                  <Button text="schedule a call" fontSize="39"/>
             </div>
                </MarqueeSection>
        <MarqueeSection speed={200} direction="left">
        <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                  <p className=" text-[150px] lg:text-[230px] font-bold font-nohemi-ext">sound good?</p>
                  <Button text="schedule a call" fontSize="39"/>
             </div>
                </MarqueeSection>
        </div>
    );
}

export default MoreCTAFirst;
