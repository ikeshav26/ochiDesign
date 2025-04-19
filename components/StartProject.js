"use client"
import React, { useEffect, useState } from 'react'
import { MdTranslate } from 'react-icons/md'



const StartProject = () => {
  const [rotate, setrotate] = useState(0)

useEffect(()=>{
  window.addEventListener("mousemove",(dets)=>{
    let mouseX=dets.clientX;
    let mouseY=dets.clientY;

    let deltaX=mouseX-window.innerWidth/2;
    let delltaY=mouseY-window.innerHeight/2;

    let angle=Math.atan2(delltaY , deltaX) * 180/Math.PI;
    
    setrotate(angle-180);
  })
})

  return (
    <div className='h-screen w-full flex-col items-center gap-5 bg-[#CDEA68]'>
      <div className='w-full h-1/3  px-20 py-14 flex items-center justify-center'> 
        <h1 className='text-zinc-900 text-7xl mt-20 text-bold '><p>READY</p>
        <p>TO START</p>
        <p>THE NEW PROJECT ?</p></h1>
        </div>
      <div className='h-[40vh]  w-full flex items-center justify-center'>
      <div className='h-1/2 w-1/3  flex justify-center items-center gap-5'>
        <div className='h-44 w-44 rounded-full flex items-center justify-center bg-zinc-300'>
        <div className='h-20 w-20 rounded-full flex items-center justify-center bg-zinc-900'>
        <div style={{transform:` rotate(${rotate}deg)`}} className=  'line h-7 w-full'  >
        <div className='h-7 w-7 rounded-full bg-zinc-300'>
            
            </div>
            </div>
            </div>
        </div>
        <div className='h-44 w-44 rounded-full flex items-center justify-center bg-zinc-300'>
        <div className='h-20 w-20 rounded-full flex items-center justify-center bg-zinc-900'>
        <div style={{transform:`rotate(${rotate}deg)`}} className=' line h-7 w-full '>
        <div className='h-7 w-7 rounded-full bg-zinc-300'>
            
            </div>
            </div>
            </div>
        </div>
      </div>
      </div>
      <div className='w-full h-[25vh]  '>
        <div className='w-full h-full ml-[44%] '>
        <button className='flex items-center justify-center bg-zinc-900 px-4 py-2 gap-5 rounded-[20px]'>
          <p className=''>START THE PROJECT</p>
          <p className='h-3 w-3 rounded-full bg-zinc-300'></p>
        </button>
        <h2 className='text-zinc-900 text-xl font-semibold m-5 ml-20'>OR</h2>
        <button className='flex items-center justify-center border-2 border-zinc-900 px-4 py-2 gap-5 rounded-[20px]'>
          <p className='text-zinc-900'>HELLO@OCHI.DESIGN</p>
          <p className='h-3 w-3 rounded-full bg-zinc-900'></p>
        </button>
        </div>
      </div>
    </div>
  )
}

export default StartProject