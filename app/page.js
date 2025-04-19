"use client"
import About from '@/components/About'
import Eyes from '@/components/Eyes'
import LandingPage from '@/components/LandingPage'
import Marque from '@/components/Marque'
import Navbar from '@/components/Navbar'
import FeaturedProject from '@/components/FeaturedProject'
import React from 'react'
import Cards from '@/components/Cards'
import Foter from '@/components/Foter'
import StartProject from "@/components/StartProject"
import LocomotiveScroll from 'locomotive-scroll';


const page = () => {

  const locomotivescroll=new LocomotiveScroll();

  return (
    <div className='w-[100vw] h-screen text-white bg-zinc-900 '>
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyes/>
      <FeaturedProject/>
      <Cards/>
      <StartProject/>
      <Foter/>
    </div>
  )
}

export default page
