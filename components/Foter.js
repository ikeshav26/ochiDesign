import Link from 'next/link'
import React from 'react'

const Foter = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex overflow-hidden '>
      <div className='w-1/3 h-full p-10 font-bold tracking-tighter text-8xl text-zinc-300 '>
      <h1> EYE-</h1>
      <h1>OPENING</h1>
        </div>
      <div className='w-2/3 h-full text-zinc-300 font-bold py-10 px-20 text-8xl '>
      <h1>PRESENTATIONS</h1>
      <div className='text-xl mt-10'>
        <p>S:</p>
        {["Instagram" , "behance" , "facebook" , "linkedin"].map((items,index)=>(
          <Link href="" key={index} className='block capitalize'>{items}</Link>
))}

      </div>
      <div className=' mt-10 flex gap-72'>
      <div className='text-xl'>
        <p>L:</p>
        {["202-1965 W 4th Ave","vancouver , canada","30 chukarina st","lviv ukraine"].map((items,index)=>(
          <Link key={index} href="" className={`text-2xl block ${index===2 && "mt-8"}`}>{items}</Link>
        ))}
      </div>
      <div className='text-xl'>
        <p>M:</p>
        {["Home","services","our work","about us","insights","contact us"].map((items,index)=>(
          <Link key={index} href="" className={`text-2xl block `}>{items}</Link>
        ))}
      </div>
      </div>
      <div className='text-xl mt-7'>
        <p>E:</p>
        <p className='mt-7'>Hello@ochi.design</p>
      </div>
      </div>
    </div>
  )
}

export default Foter
