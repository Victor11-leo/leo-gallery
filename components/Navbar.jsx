import React from 'react'
import {HomeModernIcon, FolderIcon,} from '@heroicons/react/24/solid'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-screen w-full items-center  bg-[#ffffff] justify-between shadow-lg shadow-black flex flex-col py-8'>
        {/* Logo */}
        <div>
            <img src="/pinsLogo.svg" alt="" 
            className='w-8 h-8 cursor-pointer'
            />
        </div>

        {/* Navigation */}
        <div className='bg-[#cb1f27] text-white w-[100%] flex flex-col items-center space-y-5 py-3'>
          <Link href='/'>
            <HomeModernIcon className='w-8 h-8 cursor-pointer'/>
          </Link>
          <Link href='/collections'>
            <FolderIcon className='w-8 h-8 cursor-pointer'/>
          </Link>
        </div>

        {/* Settings */}
        <div></div>
    </nav>
  )
}

export default Navbar