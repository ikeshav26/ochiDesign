import React from 'react'

const About = () => {
  return (
    <div className='w-full  px-10 py-20 bg-[#CDEA68] rounded-tl-3xl'>
      <h1 className='text-zinc-900  font-["NeueMontreal"] text-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growthing tech</h1>
      <h1 className='text-zinc-900 font-["NeueMontreal"] text-[4vw] tracking-tight'>businesses that need to raise funds, sell products.</h1>
      <h1 className='text-zinc-900 font-["NeueMontreal"] text-[4vw] tracking-tight'>explain complex ideas, and hire great people.</h1>
      <div className='text-zinc-900 flex justify-around pt-[10vh] pb-[3vh] border-t-2 border-b-2 mt-10 border-[#a1b562]'>
        <div className=' '><h3>What you can expect:</h3></div>
        <div className='w-[25vw] ml-40 flex-col'><h3 className='mb-14'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management,
            build photonic chips, and open Michelin-starred restaurants.
        </h3>
        <h3>
        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
        </h3></div>
        <div className='p-15 py-28 mr-14'><h3>S:</h3>
            <p className=' mt-4 underline'>Instagram</p>
            <p className='underline'>Behance</p>
            <p className='underline'>Facebook</p>
            <p className='underline'>Linkedin</p></div>
      </div>
      <div className='w-full flex px-3 py-8 gap-5'>
        <div className='w-1/2'>
        <h1 className='text-zinc-900 text-6xl'>Our Approach :</h1>
        <button className='px-10  py-4 mt-9 bg-zinc-900 rounded-full text-white flex  items-center gap-10'>
         <h1 className='uppercase'>Read More</h1>
          <div className='w-2 h-2 bg-white rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[60vh] rounded-3xl '>
        <img className='w-full h-full bg-cover rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"></img>
        </div>
      </div>
    </div>
  )
}

export default About
