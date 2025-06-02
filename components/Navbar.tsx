"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import { MdClose } from "react-icons/md";
import { assets } from "@/assets/assets";

export default function Navbar() {
  
    const[showMobileMenu,setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
       document.body.style.overflow='auto'
    }
    return ()=>{
       document.body.style.overflow='hidden'
    }
  },[showMobileMenu])

  return (
     <div className='absolute top-0 left-0 w-full z-10 '>
      <div className='contanier mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={'/logo2.png'} className="w-40 h-20 bg-transparnet" alt="" />
        <ul className='hidden md:flex gap-7 text-[#3BB3B1] font-semibold text-2xl'>
          <a href="#Header" className='cursor-pointer hover:text-[#ED4073]'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-[#ED4073]'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-[#ED4073]'>Project</a>
          <a href="#Test" className='cursor-pointer hover:text-[#ED4073]'>Testimonials</a>
        </ul>
        <button className='hidden md:block text-white hover:text-zinc-700 hover:bg-[#3BB3B1] bg-[#ED4073] rounded-full px-8 py-2'>Sign Up</button>
        <button
            aria-label="Toggle Menu"
            className="md:hidden text-gray-300 hover:text-blue-500 transition"
            onClick={() => setShowMobileMenu(true)}
          >
            {showMobileMenu ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        
        </div>
        {/*-------mobile-menu-------*/}
        <div className={` md:hidden ${showMobileMenu ?'fixed w-full' :'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-transpent backdrop-blur-sm transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <button
            aria-label="Toggle Menu"
            className="md:hidden text-gray-300 hover:text-blue-500 transition"
            onClick={() => setShowMobileMenu(false)}
          >
            {showMobileMenu ? <FiX size={28} /> : <MdClose size={28} />}
          </button>
            
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-[#3BB3B1] text-xl font-medium'>
            <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={()=>setShowMobileMenu(false)} href="#Project" className='px-4 py-2 rounded-full inline-block'>Project</a>
            <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          </ul>
        
      </div>

    </div>
   
  );
}
