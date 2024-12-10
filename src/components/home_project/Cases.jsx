import React, { useState , useEffect } from 'react'
import SectionHeader from './SectionHeader'
import PortfolioSingle from './PortfolioSingle'
import PortfolioSingleLeft from './PortfolioSingleLeft'
import PortfolioSingleThree from './PortfolioSingleThree'
import PortfolioSingleFour from './PortfolioSingleFour'
import PortfolioSingleFive from './PortfolioSingleFive'
import SectionCta from './SectionCta'

const Cases = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    console.log(cursorPosition)
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
    console.log(isCursorVisible)
  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
  };

  useEffect(() => {
    // Attach mousemove listener to update cursor position
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='containerOld relative !pt-[100px] casesContainer'>
    <SectionHeader heading='case studies' index='02'/>
    <PortfolioSingle  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    <PortfolioSingleLeft  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    <PortfolioSingleThree  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    <PortfolioSingleFour onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    {/* <PortfolioSingleFive /> */}
    <SectionCta text='see more cases' url="/cases"/>
    {isCursorVisible && (
        <div
          className="custom-cursor font-nohemi"
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            zIndex:9999
          }}
        >
          VIEW MORE
        </div>
      )}
    </div>
  )
}

export default Cases