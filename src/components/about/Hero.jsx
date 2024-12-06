import { Button, MarqueeSection } from '../common'
import face1 from '../../assets/about/face1.svg';
import face1Mobile from '../../assets/about/face1Mobile.png';
// import face2 from '../../assets/about/face2.svg';
import face2 from '../../assets/about/face2.png';
import face4 from '../../assets/about/face4.svg'
import top from '../../assets/about/1.svg';
import line from '../../assets/about/line.svg';
import marLogo from '../../assets/about/marLogo.svg';
import marArrow from '../../assets/about/marArrow.svg';
import right from "../../assets/services/right.svg"
import { motion } from 'framer-motion';
import { slideUp, slideUpDelay } from '../../animations';
import blackSquare from '../../assets/images/blackSquare.png';

const Hero = () => {

  return (
    <div className=' w-screen font-nohemi-ext bg-primary '>
    <img src={top} alt=""  className='absolute lg:top-[0px] top-[0px] lg:left-[10vw] left-0 mix-blend-multiply lg:h-72 h-36 hidden lg:block' style={{zIndex:1001}}/>
    <div className=' max-w-7xl mx-auto flex flex-col items-center justify-center  relative px-4'>
    <img src={top} alt=""  className='absolute top-[-90px] left-[20px] z-50 mix-blend-multiply h-48 block lg:hidden'/>
        <div className='py-20'>

        </div>
        {/* Center text area start */}
      <div className={`flex flex-col leading-[6rem] w-[560px] items-center justify-center py-1 lg:scale-[1.6] scale-[.8] relative`}>
        <motion.h1 
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className='text-[10rem] flex items-center font-nohemi-ext text-black relative lg:ml-[50px]'>
         <span className='text-[10rem] font-[900] flex items-center w-min pt-9 swiggly lg:mr-10'>~</span> o<span className='font-[900] z-10'>u</span><span className='font-[900] z-30'>r</span><span className=''></span>
        </motion.h1>
        <motion.h1 variants={slideUpDelay}
         initial="hidden"
         animate="visible" className='text-[10rem] font-[900] flexitems-center gap-2 font-nohemi-ext text-black pl-5 relative'>
          story
    <img src={face1Mobile} alt="" className=" h-40 absolute top-[40%] left-[-6%] z-20 animate-fadeIn mix-blend-multiply lg:hidden" />

        </motion.h1>

        {/* assets for text */}
        <>
    <div className="absolute top-[-30px] left-[113px] lg:left-[77px]  h-52 border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>

    <div className="absolute top-[-30px] left-[195px] h-52 border-r-[0.5px] border-black opacity-50 z-50 animate-growY"></div>

    <div className="absolute right-[-5px] lg:right-[30px] top-[113px] w-[30rem] border-b-[0.5px] border-black opacity-50 z-50 animate-growX"></div>

    <div className="absolute right-[-5px] lg:right-[30px] top-[26px] w-[30rem] border-b-[0.5px] border-black opacity-50 z-50 animate-growX"></div>

  

    <div className="absolute left-[190px] bottom-[105px] w-[20rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    <div className="absolute left-[170px] bottom-[8px] w-[22rem] border-b-[0.5px] border-black opacity-50 animate-growX"></div>

    {/* Face 2 */}
    <img src={face2} alt="" className=" h-32 absolute top-[-80px] right-[60px] z-20 animate-fadeIn" />
</>


        {/* <div className='bg-primary h-10 w-[38px] rotate-[15deg] absolute top-[2px] right-[125px] z-30 rounded-b-xl'>

        </div> */}

      </div>
      {/* Center text area end */}

      {/* Bottom area start */}
    <div className='w-full lg:py-10 relative flex lg:flex-row flex-col pt-16 items-baseline justify-center gap-2'>
        <div className='flex lg:flex-row flex-col lg:items-center items-start gap-2'>
        {/* <img src={face1} alt="" className='mix-blend-multiply lg:h-52 h-32 absolute top-[0px] left-[0px]'/> */}
        <p className=' lg:w-[28rem] leading-7 text-xl font-nohemi font-normal'>
        <img src={blackSquare} height={20} width={20} style={{display: 'inline-block', marginRight:'5px', marginTop:'-3px'}} />  We live and breathe Web3 marketing with deep expertise and a human touch. From bringing brands to market to building connected communities, we help projects reach the audiences that matter.
        </p>
        </div>
        <div className=' lg:w-auto w-full  h-full lg:py-10 py-5 flex items-start'>
            <Button text="Schedule a call" arrowBlack={true}/>
        </div>

        <div className='absolute top-[0] left-[7rem] lg:block hidden'>
            <img src={line} className='h-28' alt="" />
    <img src={face1} alt="" className=" h-32 absolute top-[-100%] left-[50%] z-20 animate-fadeIn mix-blend-multiply" />

        </div>
        <div className='absolute top-[-155px] right-12 lg:block hidden'>
            <img src={face4} className=' h-64 mix-blend-multiply' alt="" />
        </div>
    </div>

    {/* Bottom area end */}

    </div>
    {/* marquee start */}
    <div className=' w-full '>
        <div className='max-w-7xl mx-auto border border-black'>

        </div>

        <div className='lg:py-6 py-3  w-full'>
        <MarqueeSection>
                <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 select-none">
              <span className="text-black font-nohemi-ext">5M+</span> social followers
              <img src={right} className="h-16" alt="" />
              <span className="text-black font-nohemi-ext">1M+</span>
              <span className="text-black">community members</span>
              <span className="text-black font-nohemi-ext">(</span>
                <span className="text-black font-nohemi-ext">$150M+</span>
                <span className="text-black">in client venue</span>
              <span className="text-black font-nohemi-ext">)</span>
              <img src={marArrow} className="h-20" alt="" />
    
            </h1>
                  </MarqueeSection>
        </div>

    </div>
    {/* marquee end */}
  </div>
  )
}

export default Hero