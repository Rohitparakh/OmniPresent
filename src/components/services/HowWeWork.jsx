import React from 'react'
import card1 from "../../assets/services/cardImg1.svg"
import downImg from "../../assets/services/downImg.svg"
import cardImg2 from "../../assets/services/cardImg2.svg"
import circle from "../../assets/services/circle.svg"

const HowWeWork = () => {
  return (
    <div className=" min-h-screen w-full bg-primary px-4 relative">
      <div className="max-w-7xl mx-auto pt-16 flex flex-col items-center justify-start ">
        <div className="border-b pb-1 w-full flex items-center justify-between" style={{borderBottom:'1px solid black'}}>
          <p className="text-black font-bold text-[10px] tracking-widest ">
          how we work
          </p>
          <p className="text-black font-bold text-xs tracking-widest w-44 lg:text-center text-end">
            ( 03 )
          </p>
        </div>

        <div className='flex flex-col w-full justify-end mt-16 items-end lg:gap-3 gap-16'>
            <p className='text-6xl font-nohemi-ext lg:w-[70%] text-right'>
            Here is our formula of crypto marketing services that will change your project’s future
            strategies.
            </p>

            <div className='grid lg:grid-cols-3 lg:gap-3 gap-16 w-full mt-10'>
                <div className='w-full  h-full flex flex-col gap-1'>
                        <img src={card1} alt="" />
                        <p className='text-lg font-nohemi-ext'>Get data. Research. Report.</p>
                        <p className='text-sm font-nohemi'>We use marketing analysis and accurate data to develop a project. Based on the information recieved, we will create an interaction strategy to steal the hart of your audience.</p>
                </div>
                <div className='w-full  mt-16 h-full flex flex-col gap-1'>
                        <img src={downImg} alt="" />
                        <p className='text-lg font-nohemi-ext'>Be creative. Test wisely.</p>
                        <p className='text-sm font-nohemi'>Speak the same language as your clients. We will help you stand out from competitors with creative ideas and solutions. This way, you will definitely be noticed.</p>
                </div>
                <div className='w-full  h-full flex flex-col gap-1'>
                        <img src={cardImg2} className='h-52 object-cover' alt="" />
                        <p className='text-lg font-nohemi-ext'>Build strategy. Refine.</p>
                        <p className='text-sm font-nohemi'>Create a well-thought-out strategy for your product. We will guide you through the steps to achieving more than your competitors. </p>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 '>
            <div className='w-full  h-full flex flex-col gap-3'>
                <div className='flex items-center gap-9'>
                        <img src={circle} alt="" className='h-10' />
                        <img src={circle} alt="" className='h-20' />
                        <img src={circle} alt="" className='h-40' />

                </div>
                        <p className='text-lg font-nohemi-ext'>Get data. Research. Report.</p>
                        <p className='text-sm font-nohemi'>We use marketing analysis and accurate data to develop a project. Based on the information recieved, we will create an interaction strategy to steal the hart of your audience.</p>
            </div>

            </div>
        </div>
        </div>

        <img src="../../assets/services/hand.svg" alt="" className=' absolute right-0 bottom-[00px] lg:block hidden' />
        </div>
  )
}

export default HowWeWork