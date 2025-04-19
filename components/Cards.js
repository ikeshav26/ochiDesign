"use client"
import React from 'react'
import { MdCopyright } from "react-icons/md";

const Cards = () => {
  return (
    <div className='w-full h-[80vh]   flex items-center justify-center'>
    <div className='container   w-full h-[60vh] py-12 px-20  flex items-center gap-7'>
      <div className='card-1 relative w-1/2 h-full flex items-center justify-center rounded-2xl bg-[#004d41]'>
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg">
      </img>
      <button className='absolute text-[13px] top-[36vh] border-2 border-[#CDAE68] rounded-[20px] px-3 py-2 left-10'>
        &copy; 2019-2022</button>
      </div>
      <div className='card-2 relative w-1/4 h-full rounded-2xl flex items-center justify-center bg-[#112422]'>
       <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
       <button className='absolute text-[13px] top-64 left-10 border-2 border-zinc-300 rounded-[25px] px-4 py-3'>RATING 5.0 ON CLUTCH</button>
      </div>
      <div className='card-3 relative w-1/4 h-full rounded-2xl bg-[#112422] flex items-center justify-center'>
      <img className="w-1/3 h-1/3" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
      <button className='absolute text-[13px] tracking-tighter top-64 left-10 px-4 py-3 border-2 border-zinc-300 rounded-[25px]'>BUSINESS BOOTCAMP ALUMINI</button>
      </div>
    </div>
    </div>
  )
}

export default Cards
