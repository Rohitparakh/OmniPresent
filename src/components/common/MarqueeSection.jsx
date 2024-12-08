import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = ({children, speed = 150, direction}) => {
  return (
    <div className="overflow-hidden h-auto flex flex-col gap-0.5 ">
      <Marquee direction={direction? direction: 'right'} autoFill speed={speed} className="">
        {children}
        
      </Marquee>
    </div>
  )
}

export default MarqueeSection