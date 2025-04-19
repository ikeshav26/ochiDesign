"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div  className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["WE CREATE ", "EYE-OPENING" , "PRESENTATIONS"].map((item,index)=>{
           return <div key={index} className='masker flex justify-start items-center'>
            {index===1 && <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}}className='w-[9vw] h-[5.8vw]  mt-[8px] '>
              <img  className='w-full h-full bg-cover' src="https://cdn3.f-cdn.com//files/download/230224432/ochi3.png?width=780&height=324&fit=crop"></img>
                
                </motion.div>}
            <h1 className='uppercase text-9xl leading-[7vw] tracking-tighter  font-["Founders Grotesk"]'>{item}</h1>
        </div>
        }
        )}
        
      </div>
      <div  className='border-t-2 z-[3] border-zinc-800 mt-20 flex justify-between '>
        {["For public and private companies" , "From the first pitch to IPO"].map((item,index)=>{
            return <p key={index} className='text-md font-light tracking-tighter leading-none py-10 px-20'>{item}</p>
        })}
        <div className='start pr-20 py-8  text-md flex items-center justify-center gap-2'>
            <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full'>Start the project
            </div>
            <div className='w-10 h-10 rounded-[50%] flex items-center justify-center border-2 border-zinc-500'> 
                < FaArrowUpLong className='rotate-[45deg]'/>
                </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
