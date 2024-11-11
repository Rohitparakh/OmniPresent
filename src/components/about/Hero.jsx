import { Button, MarqueeSection } from '../common'
import face1 from '../../assets/about/face1.svg';
import face2 from '../../assets/about/face2.svg';
import face3 from '../../assets/about/face3.svg';
import line from '../../assets/about/line.svg';
import marLogo from '../../assets/about/marLogo.svg';
import marArrow from '../../assets/about/marArrow.svg';

const Hero = () => {

  return (
    <div className=' w-screen font-nohemi-ext bg-primary '>
    <div className=' max-w-7xl mx-auto flex flex-col items-center justify-center  relative px-4'>
    <img src={face1} alt=""  className='absolute top-0 lg:left-[100px] left-0 mix-blend-multiply lg:h-52 h-36'/>
        <div className='py-20'>

        </div>
        {/* Center text area start */}
      <div className={`flex flex-col leading-[6rem] w-[560px] items-center justify-center py-1 lg:scale-[1.25] scale-[.6] relative`}>
        <h1 className='text-[10rem] z-10 flex items-center font-nohemi-ext text-black relative'>
         <span className='text-[10rem] flex items-center w-min pt-9'>~</span> k<span className=''>now</span>
        </h1>
        <h1 className='text-[10rem] flexitems-center gap-2 font-nohemi-ext text-black pl-5'>
          invcts
        </h1>

        {/* assets for text */}
        <>
        
        <div className='absolute top-[-30px] left-[113px] h-52 border-r-[0.5px] border-black opacity-50 z-50'>
        </div>

        <div className='absolute top-[-30px] left-[207px] h-52 border-r-[0.5px] border-black opacity-50 z-50'>
        </div>

        <div className='absolute right-[-100px] top-[113px] w-[27rem] border-b-[0.5px] border-black opacity-50 z-50'>
        </div>

        <div className='absolute right-[-100px] top-[26px] w-[13.3rem] border-b-[0.5px] border-black opacity-50 '>
        </div>

        <div className='absolute right-[161px] top-[26px] w-[13rem] border-b-[0.5px] border-black opacity-50 '>
        </div>

        <div className='absolute left-[190px] bottom-[105px] w-[20rem] border-b-[0.5px] border-black opacity-50'>
        </div>

        <div className='absolute left-[170px] bottom-[8px] w-[22rem] border-b-[0.5px] border-black opacity-50'>
        </div>

        {/* Face 2 */}
  
        <img src={face2} alt="" className='mix-blend-multiply h-32 absolute top-[-80px] right-[60px] bg-primary z-50'/>
        </>

        <div className='bg-primary h-10 w-[38px] rotate-[15deg] absolute top-[2px] right-[125px] z-30 rounded-b-xl'>

        </div>

      </div>
      {/* Center text area end */}

      {/* Bottom area start */}
    <div className='w-full lg:py-5 relative flex lg:flex-row flex-col  items-center justify-around gap-2'>
        <div className='flex lg:flex-row flex-col lg:items-center items-start gap-2'>
        <img src={face3} alt="" className='  mix-blend-multiply lg:h-52 h-32'/>
        <p className=' lg:w-[24rem] leading-7 text-xl font-nohemi font-semibold'>
        ■ We’re a no-nonsense team helping Web3 projects scale with speed and precision. Let’s build, grow, and deliver—without the fluff."
        </p>
        </div>
        <div className=' lg:w-auto w-full  h-full lg:py-10 py-5 flex items-start'>
            <Button text="Schedule a call"/>
        </div>

        <div className='absolute top-[-35px] left-52'>
            <img src={line} className='h-28' alt="" />
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
            <h1 className=" text-2xl lg:text-4xl flex tracking-wide font-nohemi items-center gap-4  mx-6 font-semibold select-none">
          <span className="text-black">partner with</span>
          <img src={marLogo} className="h-20" alt="" />
          <span className="text-black">developed for ( web3 ) for the GROWTH/</span>
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