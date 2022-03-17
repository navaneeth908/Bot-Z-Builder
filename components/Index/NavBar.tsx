import React,{useState} from 'react'
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import {motion,AnimatePresence} from "framer-motion";

function NavBar() {

  const [showMenu,setShowMenu]=useState(false)

  return (
    
    <div className='bg-white flex flex-col w-screen fixed left-0 top-0 items-center justify-between z-40 md:flex-row justify-evenly px-4 py-2 space-x-15 '>
      
      
      <div className='flex justify-between w-full md:w-1/4'>
      <Link href="/">
      <h1 className="text-2xl font-bold cursor-pointer">Bot Z</h1>
      </Link>
      <button className='text-2xl md:hidden' onClick={()=>{setShowMenu(!showMenu)}}><MenuIcon/></button>
      </div>
    
  

    {/* NavBar Middle */}

      <div className='flex items-center hidden md:inline-flex space-x-10'>
        <h3 className='cursor-pointer'>Home </h3>
        <h3 className='cursor-pointer'>Features</h3>
        <h3 className='cursor-pointer'>Contact</h3>
        <h3 className='cursor-pointer'>About</h3>

      </div>
      


       {/* NavBar Buttons */}

      <div className='hidden flex items-center space-x-5 md:inline-flex'>

      <Link href="/login">
      <button className="px-4 py-1 drop-shadow bg-blue-800 hover:bg-blue-600 transition-all duration-500 rounded-lg text-white">Sign In</button>
      </Link>
    
      <Link href="/signup">
      <button className="px-4 py-1  rounded-lg border text-blue-700 border-blue-800">Get Started</button>
      </Link>
   
      </div>
      
      <AnimatePresence>
    {showMenu && <SideBar/>}
  </AnimatePresence>

    </div>
  )
}

export default NavBar;
