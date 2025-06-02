"use client";
import React from 'react'
import Navbar from './Navbar'

import { motion } from "framer-motion"
const Header = () => {
  return (
    <div className=' min-h-screen mb-4 bg-cover bg-center
    flex items-center w-full overflow-hidden' style={{backgroundImage:'url("/hero1.png") '} }>
      <Navbar/>
      <motion.div 
      initial={{opacity:0,y: 100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className='container text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <div className=''>

        
        <h2 className='text-4xl sm:text-6x md:text-[82px] mt-1 space-y-2 inline-block max-w-3xl font-semibold pt-20'>Explore <span className='text-[#ED4073]'>Technology</span> and Projects that fit yours dreams</h2>
        </div>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded  hover:py-4 '>Projects</a>
            <a href="#Contact" className='bg-[#3BB3B1] px-8 py-3 rounded hover:bg-muted[#3BB3B1] hover:text-gray-200  hover:py-4'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header