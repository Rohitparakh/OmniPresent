import React from 'react';
import './WhyUsDots.css';
import WhyDotsFirst from '../../assets/images/WhyDotsFirst.png';
import WhyDotsSecond from '../../assets/images/WhyDotsSecond.png';
import WhyDotsThird from '../../assets/images/WhyDotsThird.png';
import WhyDotsFourth from '../../assets/images/WhyDotsFourth.png';
import WhyDotsFifth from '../../assets/images/WhyDotsFifth.png';
import { useInView } from "react-intersection-observer";

function WhyDots() {
    const { ref, inView } = useInView({
        threshold: 1, // Element is considered in view when 50% of it is visible
        triggerOnce: false, // Trigger the `inView` state only once
      });
    return (
        
        <div ref={ref} className={`why-dots ${inView ? "self-center" : "self-center"}`}>
            <img src={WhyDotsFirst} className={`dots-image ${ inView ? "anim-complete":""}`}/>
            <img src={WhyDotsSecond} className={`dots-image ${ inView ? "anim-complete":""}`}/>
            <img src={WhyDotsThird} className={`dots-image ${ inView ? "anim-complete":""}`}/>
            <img src={WhyDotsFourth} className={`dots-image ${ inView ? "anim-complete":""}`}/>
            <img src={WhyDotsFifth} className={`dots-image ${ inView ? "anim-complete":""}`}/>
        </div>
    );
}

export default WhyDots;
