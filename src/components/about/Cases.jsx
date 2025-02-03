import React,{useState,useEffect} from 'react'
import Button from './../common/Button';
import share from "../../assets/about/share.svg";
import { useNavigate } from 'react-router-dom';
import gif from '../../assets/gif/SeeMoreCaseStudies.gif';
import { motion } from 'framer-motion';
import { slideRight,slideUp, slideLeft, slideRightDelay1, slideRightDelay2, slideLeftDelay, slideRight30 } from '../../animations';
import SectionHeader from '../home_project/SectionHeader';

const Cases = ({case1, case2, case1URL, case2URL}) => {
  const navigate = useNavigate();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
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
    <div className='min-h-screen w-full bg-primary lg:px-4 px-2 relative'>
      <img src={gif} className='absolute top-0 right-[0%] w-full h-full object-cover object-top z-20 hidden lg:block top-[110px]'/>
        <div className="max-w-[90rem] xl:max-w-[85rem] min-[1900px]:max-w-[83vw] mx-auto py-16 flex flex-col items-center justify-start  min-h-screen">

{/* Top divider */}
<SectionHeader heading="cases" index="03" isPrimary={true}/>
{/* <div className="border-b pb-1 w-full flex items-center justify-between" style={{borderBottom:'1px solid black'}}>
  <p className="text-black font-bold text-[10px] tracking-widest">
    cases
  </p>
  <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
    ( 03 )
  </p>
</div> */}

            <div className='flex flex-col items-center justify-center h-full w-full mt-40 lg:mt-96'>
                <motion.div  variants={slideLeft} initial="hidden" whileInView="visible" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className='see-more-cursor w-full flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-betwen px-2 mb-40 lg:mb-0'
                 onClick={() => navigate(`/cases/${case1URL}`)}
                 >
                    <div className='flex flex-col lg:gap-3 gap-1 w-full lg:mt-[70px] min-[1650px]:mt-[130px]'>
                    <img src={case1.mainBanner} alt="" className=' h-80 w-112 block lg:hidden'/>
                    <div className='hidden lg:flex items-center min-[1900px]:gap-[300px]'>
                      <img src={case1.mainBanner} alt="" className=' h-80 lg:w-[600px]'/>
                      <div className='w-full lg:overflow-hidden lg:w-full h-full flex flex-col items-center justify-center relative'>
                      <div className='lg:mx-auto flex flex-col w-full lg:w-[65%] min-[1900px]:w-[100%] '>
                      {/* <div className='absolute lg:block hidden bottom-1/2 left-[-200px] mix-blend-color-dodge w-[calc(100%_+_200px)] h-1 border-t-2' style={{borderBottom:'1px solid black', borderTop:'none'}}></div> */}
                        <h2 className='mt-10  relatedCase relative text-center w-fit sm-tar lg:w-min px-2 bg-primary font-nohemi-ext text-4xl min-[1900px]:text-6xl z-50 w-fit self-end lg:self-auto relative top-2'>
                        {case1.title}

                        </h2>
                        <p className=' mt-5 lg:mt-2 font-[300] px-2 lg:w-[36rem] text-xl min-[1900px]:text-2xl z-50 font-nohemi'>
                        {case1.description}
                        </p>
                      </div>
                      <div className='absolute lg:block hidden bottom-1/2 right-0 w-full h-1 border-t-2' style={{borderBottom:'1px solid black',borderTop:'none'}}>

                      </div>
                    </div>
                    </div>
                    <div className='lg:w-[600px] border-t pt-5 lg:mt-2 w-full flex lg:gap-2 gap-16 items-baseline justify-around lg:py-6' style={{borderTop:'1px solid black'}}>
                    {case1.stats.map((stat, index)=>{
                        if(index==3) return;
                        return <div className="flex flex-col gap-0">
                        <p className=' font-nohemi-ext lg:text-[48px] leading-[56px] font-700 text-3xl text-center'>+{stat.number}</p>
                        <p className=' font-nohemi text-xs font-medium text-center'>{stat.text}</p>
                     </div>

                      })}
                    
                    </div>
                    </div>

                    <div className='lg:hidden w-full lg:overflow-hidden lg:w-[65%] h-full flex flex-col items-center justify-center relative'>
                      <div className='lg:mx-auto flex flex-col w-full lg:w-[65%] '>
                        <h2 className='mt-10  relatedCase text-center w-fit sm-tar lg:w-max px-2 font-nohemi-ext text-4xl bg-primary z-50 w-fit self-end lg:self-auto relative top-2'>
                        {case1.title}
                        </h2>
                        <p className=' mt-5 lg:mt-2 font-[300] px-2 lg:w-[36rem] text-xl min-[1900px]:text-2xl z-50 font-nohemi'>
                        {case1.description}
                        </p>
                      </div>
                      <div className='absolute lg:block hidden bottom-1/2 right-0 w-full h-1 border-t-2' style={{borderBottom:'1px solid black',borderTop:'none'}}>

                      </div>
                    </div>
                </motion.div>


                <motion.div  variants={slideRight30} initial="hidden" whileInView="visible" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='see-more-cursor mt-10 lg:mt-[28rem] min-[1650px]:mt-[32rem] lg:mb-[45rem] w-full flex lg:flex-row-reverse flex-col lg:gap-0 gap-12 items-center justify-betwen px-2'
                 onClick={() => navigate(`/cases/${case2URL}`)}
                 >
                    <div className='flex flex-col gap-3'>
                    <img src={case2.mainBanner} alt="" className='z-30 h-80 min-[1900px]:h-96 will-change-[opacity,x,y,transform,z-index] lg:border-0 pb-2 lg:pb-0 border-b border-solid border-black'/>
                    <div className='pt-5 w-full lg:mt-10 flex lg:gap-20 gap-16 items-center justify-start lg:p-1 lg:hidden'>
                      {case2.stats.map((stat, index)=>{
                        if(index>=3) return;
                        return <div key={index} className="flex flex-col gap-0">
                        <p className='font-nohemi-extlg:text-[48px] leading-[56px] font-[700] text-3xl text-center'>+{stat.number}</p>
                        <p className=' font-nohemi text-xs font-medium text-center'>{stat.text}</p>
                     </div>
                      })}
                    </div>
                    </div>

                    <div className=' w-full lg:w-[70%] min-[1900px]:w-[70%] h-full flex flex-col items-center justify-center relative lg:overflow-hidden'>
                      <div className='w-full lg:w-[75%] min-[1900px]:w-[75%] lg:ml-[40%] lg:mr-[60%] flex flex-col '>

                        <h3 className='relatedCase text-center w-fit bg-primary lg:w-max lg:px-2 font-nohemi-ext text-4xl min-[1900px]:text-6xl bg-primary z-50 sm-tar self-end lg:self-auto relative'>
                        {case2.title}
                        <div className='absolute lg:block hidden bottom-1/2 left-[-40vw] mix-blend-color-dodge w-screen h-1 border-t-2' style={{borderBottom:'1px solid black', borderTop:'none'}}></div>

                        </h3>
                        <p className='mt-4 lg:mt-0 lg:px-2 font-[300] lg:w-96 text-xl min-[1900px]:text-2xl font-nohemi '>
                        {case2.description}
                        </p>
                        <div className='pt-5 w-full lg:mt-10 lg:flex lg:gap-20 gap-16 items-center justify-start lg:p-1 hidden '>
                      {case2.stats.map((stat, index)=>{
                        if(index>=3) return;
                        return <div key={index} className="flex flex-col gap-0">
                        <p className='font-nohemi-ext lg:text-[48px] leading-[56px] font-700 lg:text-3xl text-3xl text-center'>+{stat.number}</p>
                        <p className=' font-nohemi text-xs font-medium text-center'>{stat.text}</p>
                     </div>
                      })}
                    </div>
                      </div>
                    </div>
                </motion.div>
            </div>

            <div className=' schedule-services-page h-40 w-full flex lg:flex-row flex-col items-center justify-center gap-10 lg:mt-0 mt-20'>

              <div className='border-b-2 px-2 flex items-end cursor-pointer hover:scale-105 transition-all duration-500' style={{borderBottom:'1px solid black'}}>
                      <img src={share} alt="" className='h-8'/> <p className=' font-nohemi text-lg pb-1 '>see more</p>
              </div>
              <Button text="schedule a call" />
            </div>

            
            </div>

 {isCursorVisible && (
        <div
          className="custom-cursor font-[24px] leading-[34px] font-[400] font-nohemi"
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