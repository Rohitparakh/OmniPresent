import React from 'react';
import './MoreCTAFirst.css';
import ScheduleCallButtonAccent from './ScheduleCallButtonAccent';
import { Button } from "../common";

import MarqueeSection from './../common/MarqueeSection';

function MoreCTAFirst() {
    return (
        <div className="w-full pt-16 bg-black">
        <MarqueeSection>
             <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                  <p className="text-9xl font-[1000] font-nohemi-ext">more?</p>
                  <Button text="schedule a call" />
             </div>
                </MarqueeSection>
        <MarqueeSection speed={100}>
        <div className="flex items-center gap-8  px-7 font-nohemi text-white">
                  <p className="text-9xl font-bold font-nohemi-ext">more?</p>
                  <Button text="schedule a call" />
             </div>
                </MarqueeSection>
        </div>
    );
}

export default MoreCTAFirst;
