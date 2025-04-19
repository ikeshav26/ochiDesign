import React from 'react'

const FeaturedProject = () => {
  return (
    <div className='w-full  p-20 border-b-2 border-zinc-700 '>
      <div className='border-b-2 border-zinc-700 py-20 '>
        <h1 className='text-7xl  tracking-tighter'>Featured projects</h1>
      </div>
      <div className='cards w-full mt-10 flex gap-14'>
        <div className='w-1/2 h-[75vh]'>
        <ul className='flex items-center  gap-2 ml-4 mb-3 text-zinc-300'>
          <li className='w-2 h-2 rounded-full bg-zinc-300'></li>
          <li className='text-2xl'>FYDE</li>
        </ul>
            <div className='card w-full h-full  rounded-3xl bg-[#004d43]'>
               <img className='w-full h-full bg-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"></img>
            </div>
            
            </div>
            <div className='w-1/2 h-[75vh]'>
        <ul className='flex items-center  gap-2 ml-4 mb-3 text-zinc-300'>
          <li className='w-2 h-2 rounded-full bg-zinc-300'></li>
          <li className='text-2xl'>VISE</li>
        </ul>
            <div className='card w-full h-full  rounded-3xl bg-[#004d43]'>
               <img className='w-full h-full bg-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"></img>
            </div>
            </div>
        </div>
        <div className='cards w-full mt-20 flex gap-14'>
          <div className='h-[75vh] w-1/2'>
          <ul className='flex items-center  gap-2 ml-4 mb-3 text-zinc-300'>
          <li className='w-2 h-2 rounded-full bg-zinc-300'></li>
          <li className='text-2xl'>SALIANCE LABS</li>
        </ul>
            <div className='card w-full h-full  rounded-3xl bg-[#004d43]'>
               <img className='w-full h-full bg-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"></img>
            </div>
            </div>
            <div className='w-1/2 h-[75vh]'>
            <ul className='flex items-center  gap-2 ml-4 mb-3 text-zinc-300'>
          <li className='w-2 h-2 rounded-full bg-zinc-300'></li>
          <li className='text-2xl'>AH2 & MATT HORN</li>
        </ul>
            <div className='card w-full h-full rounded-3xl bg-[#004d43]'>
            <img className='w-full h-full bg-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"></img></div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProject
 