import React from 'react'
import Button from './../common/Button';
import p2p from "../../assets/about/p2p.svg";
import seatlab from "../../assets/about/seatlab.svg";
import share from "../../assets/about/share.svg";
import { useNavigate } from 'react-router-dom';

const Cases = ({case1, case2, case1URL, case2URL}) => {
  const navigate = useNavigate();

  console.log(case1)
  console.log(case2)
  return (
    <div className='min-h-screen w-full bg-primary lg:px-4 px-2'>
        <div className="max-w-7xl mx-auto py-16 flex flex-col items-center justify-start  min-h-screen">

{/* Top divider */}
<div className="border-b pb-1 w-full flex items-center justify-between" style={{borderBottom:'1px solid black'}}>
  <p className="text-black font-bold text-[10px] tracking-widest">
    cases
  </p>
  <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
    ( 03 )
  </p>
</div>

            <div className='flex flex-col items-center justify-center h-full w-full  mt-40'>
                <div className=' w-full flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-betwen px-2 mb-40 lg:mb-0'
                 onClick={() => navigate(`/cases/${case1URL}`)}
                 style={{ cursor: 'pointer' }}>
                    <div className='flex flex-col lg:gap-3 gap-1'>
                    <img src={case1.mainBanner} alt="" className=' h-80 w-112'/>
                    <div className='border-t pt-5 lg:mt-2 w-full flex lg:gap-2 gap-16 items-baseline justify-around lg:py-6' style={{borderTop:'1px solid black'}}>
                    {case1.stats.map((stat, index)=>{
                        if(index==3) return;
                        return <div className="flex flex-col gap-0 max-w-[80px]">
                        <p className=' font-nohemi-ext lg:text-3xl text-3xl text-center'>+{stat.number}</p>
                        <p className=' font-nohemi text-xs font-medium text-center'>{stat.text}</p>
                     </div>

                      })}
                    
                    </div>
                    </div>

                    <div className='w-full lg:overflow-hidden lg:w-[65%] h-full flex flex-col items-center justify-center relative'>
                      <div className='lg:mx-auto flex flex-col w-full lg:w-[65%] '>
                        <h2 className='mt-10  relatedCase text-center w-fit sm-tar lg:w-min px-2 font-nohemi-ext text-4xl bg-primary z-50 w-fit self-end lg:self-auto relative top-2'>
                        {case1.title}
                        </h2>
                        <p className=' mt-5 lg:mt-2 font-[300] px-2 lg:w-[36rem] text-xl z-50 font-nohemi'>
                        {case1.description}
                        </p>
                      </div>
                      <div className='absolute lg:block hidden bottom-1/2 right-0 w-full h-1 border-t-2' style={{borderBottom:'1px solid black',borderTop:'none'}}>

                      </div>
                    </div>
                </div>


                <div className=' mt-32 w-full flex lg:flex-row-reverse flex-col lg:gap-0 gap-12 items-center justify-betwen px-2'
                 onClick={() => navigate(`/cases/${case2URL}`)}
                 style={{ cursor: 'pointer' }}>
                    <div className='flex flex-col gap-3'>
                    <img src={case2.mainBanner} alt="" className=' h-80'/>
                    <div className='pt-5 w-full lg:mt-10 flex lg:gap-20 gap-16 items-center justify-start lg:p-1 lg:hidden'>
                      {case2.stats.map((stat, index)=>{
                        if(index==3) return;
                        return <div key={index} className="flex flex-col gap-0">
                        <p className='font-nohemi-ext lg:text-3xl text-3xl text-center'>+{stat.number}</p>
                        <p className=' font-nohemi text-xs font-medium text-center'>{stat.text}</p>
                     </div>
                      })}
                    </div>
                    </div>

                    <div className=' w-full lg:w-[65%] h-full flex flex-col items-center justify-center relative lg:overflow-hidden'>
                      <div className='w-full lg:w-[65%] lg:mx-auto flex flex-col '>

                        <h3 className='relatedCase text-center w-fit bg-primary lg:w-min lg:px-2 font-nohemi-ext text-4xl bg-primary z-50 sm-tar self-end lg:self-auto relative'>
                        {case2.title}
                        <div className='absolute lg:block hidden bottom-1/2 left-[-40vw] mix-blend-color w-screen h-1 border-t-2' style={{borderBottom:'1px solid black', borderTop:'none'}}></div>

                        </h3>
                        <p className='mt-4 lg:mt-0 lg:px-2 font-[300] lg:w-96 text-xl font-nohemi '>
                        {case2.description}
                        </p>
                        <div className='pt-5 w-full lg:mt-10 lg:flex lg:gap-20 gap-16 items-center justify-start lg:p-1 hidden '>
                      {case2.stats.map((stat, index)=>{
                        if(index==3) return;
                        return <div key={index} className="flex flex-col gap-0">
                        <p className='font-nohemi-ext lg:text-3xl text-3xl text-center'>+{stat.number}</p>
                        <p className=' font-nohemi text-xs font-medium text-center'>{stat.text}</p>
                     </div>
                      })}
                    </div>
                      </div>
                    </div>
                </div>
            </div>

            <div className=' schedule-services-page h-40 w-full flex lg:flex-row flex-col items-center justify-center gap-10 lg:mt-0 mt-20'>

              <div className='border-b-2 px-2 flex items-end cursor-pointer hover:scale-105 transition-all duration-500' style={{borderBottom:'1px solid black'}}>
                      <img src={share} alt="" className='h-8'/> <p className=' font-nohemi text-lg pb-1 '>see more</p>
              </div>
              <Button text="schedule a call" />
            </div>

            
            </div>


    </div>
  )
}

export default Cases