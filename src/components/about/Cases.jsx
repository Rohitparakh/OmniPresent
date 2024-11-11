import React from 'react'
import Button from './../common/Button';
import p2p from "../../assets/about/p2p.svg";
import seatlab from "../../assets/about/seatlab.svg";
import share from "../../assets/about/share.svg";
const Cases = () => {
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

            <div className='flex flex-col items-center justify-center h-full w-full  mt-8'>
                <div className=' w-full h-96  flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-betwen px-2'>
                    <div className='flex flex-col lg:gap-3 gap-1'>
                    <img src={p2p} alt="" className=' h-64 w-96'/>
                    <div className='border-t mt-2 w-full flex lg:gap-2 gap-4 items-center justify-between lg:p-1' style={{borderTop:'1px solid black'}}>
                        <div className="flex flex-col gap-0">
                           <p className=' font-nohemi-ext lg:text-3xl text-xl lg:text-left text-center'>+44%</p>
                           <p className=' font-nohemi text-xs font-medium'>Active Users</p>
                        </div>
                        <div className="flex flex-col gap-0 lg:text-left text-center">
                           <p className=' font-nohemi-ext lg:text-3xl text-xl'>+32%</p>
                           <p className=' font-nohemi text-xs font-medium'>Trading Volume</p>
                        </div>
                        <div className="flex flex-col gap-0 lg:text-left text-center">
                           <p className=' font-nohemi-ext lg:text-3xl text-xl'>+31%</p>
                           <p className=' font-nohemi text-xs font-medium'>Number of mentios</p>
                        </div>
                    </div>
                    </div>

                    <div className=' lg:w-[65%] h-full flex flex-col items-center justify-center relative'>
                      <div className='mx-auto flex flex-col'>
                        <h3 className=' font-nohemi-ext px-2 text-2xl'>
                        P2P platform for  
                        </h3>
                        <h3 className=' pl-2 font-nohemi-ext text-2xl bg-primary z-50  w-[292px]'>
                        cryptocurrency trading
                        </h3>
                        <p className=' px-2 lg:w-96 text-xs font-nohemi'>
                        We revived activity on the platform and increased the trading volume by 32%
                        </p>
                      </div>
                      <div className='absolute lg:block hidden bottom-1/2 right-0 w-full h-1 border-t-2' style={{borderBottom:'1px solid black',borderTop:'none'}}>

                      </div>
                    </div>
                </div>


                <div className='  w-full h-96  flex lg:flex-row-reverse flex-col lg:gap-0 gap-4 items-center justify-betwen px-2 mt-16'>
                    <div className='flex flex-col gap-3'>
                    <img src={seatlab} alt="" className=' h-64 w-96'/>
                    <div className='border-t  w-full flex lg:gap-2 gap-4 items-center justify-between lg:p-1' style={{borderBottom:'1px solid black'}}>
                        <div className="flex flex-col gap-0">
                           <p className='font-nohemi-ext lg:text-3xl text-xl'>x3</p>
                           <p className=' font-nohemi text-xs font-medium'>Number of users</p>
                        </div>
                        <div className="flex flex-col gap-0">
                           <p className='font-nohemi-ext lg:text-3xl text-xl'>x4</p>
                           <p className=' font-nohemi text-xs font-medium'>Trading Volume</p>
                        </div>
                        <div className="flex flex-col gap-0">
                           <p className=' font-nohemi-ext lg:text-3xl text-xl'>+32</p>
                           <p className=' font-nohemi text-xs font-medium'>Platform’s revenue</p>
                        </div>
                    </div>
                    </div>

                    <div className=' lg:w-[65%] h-full flex flex-col items-center justify-center relative'>
                      <div className='mx-auto flex flex-col'>
                        <h3 className=' font-nohemi-ext lg:px-2 text-2xl'>
                        Virtual in-game 
                        </h3>
                        <h3 className=' w-min lg:px-2 font-nohemi-ext text-2xl bg-primary z-50'>
                        marketplace
                        </h3>
                        <p className=' lg:px-2 lg:w-96 text-xs font-nohemi'>
                        We worked on branding, reputation and influencer marketing with key industry players, We have also launched a lead generstion campaing to increase trades.
                        </p>
                      </div>
                      <div className='absolute lg:block hidden bottom-1/2 right-0 w-full h-1 border-t-2' style={{borderBottom:'1px solid black', borderTop:'none'}}>

                      </div>
                    </div>
                </div>
            </div>

            <div className='h-40 w-full flex lg:flex-row flex-col items-center justify-center gap-10 lg:mt-0 mt-20'>

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