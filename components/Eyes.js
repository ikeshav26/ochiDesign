"use client"
//import { transform } from 'next/dist/build/swc/generated-native'
import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate,setrotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove",(dets)=>{
            let mouseX=dets.clientX;
            let mouseY=dets.clientY;

            let deltaX=mouseX - window.innerWidth/2;
            let deltaY=mouseY - window.innerHeight/2;

            var angle=Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setrotate(angle-180);
        })
    })
   
  return (
    <div className='eyes w-full h-screen overflow-hidden '>
      <div data-scroll data-scroll-speed="-.6" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=' absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[60%]  '>
          <div className='w-44 h-44 bg-zinc-200 rounded-full flex items-center justify-center'>
            <div className=' relative w-20 h-20 bg-zinc-900 rounded-full '>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 '>
              <div className='w-6 h-6 bg-zinc-200 rounded-full'></div>
              </div>
        </div>
      </div>
      <div className='w-44 h-44  bg-zinc-200 rounded-full flex items-center justify-center'>
        <div className='relative w-20 h-20 bg-zinc-900 rounded-full '>
          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg`}} className=' line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
            <div className='w-6 h-6 bg-zinc-200 rounded-full'></div>
          </div>
      </div>
      </div>

     
      </div>
      </div>
    </div>
  )
}

export default Eyes
