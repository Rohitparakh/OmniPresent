import React from 'react'
import seatlab from "../../assets/services/seatlab.svg"
import diff from "../../assets/services/diff.svg"
import face from "../../assets/services/face.svg"
import diffRev from "../../assets/services/diffRev.svg"
const ServicesSection = () => {
  return (
    <div className="  bg-black text-white relative min-h-screen pb-16">
    <div className="max-w-7xl mx-auto px-4 pt-16 flex flex-col items-center justify-start  h-full">
      {/* Top divider */}
      <div className="border-b  border-white pb-1 w-full flex items-center justify-between">
        <p className="text-white font-semibold text-xs tracking-widest">
          our manifesto
        </p>
        <p className="text-white font-semibold text-xs tracking-widest w-44 lg:text-center text-end">
          ( 01 )
        </p>
      </div>
      </div>

      {/* Services */}
      <div className='w-full min-h-64 mt-16 max-w-7xl mx-auto lg:px-8 px-2'>
        <p className='text-5xl font-nohemi-ext font-bold lg:w-[70%]  leading-[3.2rem] lg:ml-0 ml-auto lg:text-start text-end'>We build new and existing</p>
        <p className='flex lg:flex-row flex-col lg:items-center items-end gap-1 relative text-5xl font-nohemi-ext font-bold lg:w-[50%]  leading-[3.2rem] lg:ml-0 ml-auto lg:text-start text-end'>brands through <span className='absolute lg:bottom-[-20px] bottom-[-48px] right-0 text-[#EEFE05] '>tailored</span></p>
        <p className='text-5xl font-nohemi-ext font-bold lg:w-[70%] lg:mt-0 mt-9 leading-[3.2rem] lg:text-start text-end text-[#EEFE05]'>strategies</p>
        <p className='lg:w-[35%] mt-5 font-nohemi text-[#FFFFFF]'>
        The tricky part of getting into Web3 is its analytics. Most projects simply cannot analyze data using the usual Web2 services. This is impossible.
        </p>

        <div className=' w-full mt-10 flex lg:flex-row flex-col gap-4 justify-between '>
            <img src={seatlab} alt="" className=' w-[470px] lg:mx-0 mx-auto'/>

            <div className='lg:w-[55%] flex flex-col justify-between items-start h-auto gap-8'>
              <img src={diff} alt="" className='h-20'/>

              <div className='flex flex-col gap-4 items-end w-full'>
                <img src={face} alt="" className='h-40 mr-10'/>
                <div className='w-full flex flex-1  justify-between gap-10'>
                  <div className='flex flex-col text-sm font-nohemi'>
                    <p>Team Member</p>
                    <p className='text-gray-400'>Company, position</p>

                  </div>

                  <div className='flex flex-col gap-4 flex-1'>
                    <p>
                    We go further and use the best solutions from 
                    
                    the decentralization world. We work with the community and their data, not just Internet users.
                    </p>
<p>This allows us to achieve Data-Driven results and build marketing based on an accurate portrait of your audience,not just on their interests, as was the case with Web2.</p>

                  </div>

                </div>
              <img src={diffRev} alt="" className='h-12'/>
              </div>
            </div>
        </div>


      </div>

      </div>
  )
}

export default ServicesSection