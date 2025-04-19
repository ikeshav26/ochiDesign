"use client"
import React from 'react'
import { motion } from "motion/react"

const Marque = () => {
  return (
    <div className='w-full rounded-3xl  bg-[#004D43] py-20'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap tracking-tighter gap-7'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}
         className='text-[17vw] leading-none font-semibold font-["Founders Grotesk"] mb-7 pt-2'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}} 
        className='text-[17vw] font-semibold font-["Founders Grotesk"] leading-none mb-7 pt-2'>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:5}}
         className='text-[17vw] font-semibold font-["Founders Grotesk"] leading-none mb-7 pt-2'>WE ARE OCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marque 
