'use client'
import {useState,useRef} from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const SearchBar = ({search,setSearch}) => {
  // const [values,setValues]  = useState('')
  return (
    <div className='justify-center flex w-full mt-6'>
        <div className='relative'>
            <MagnifyingGlassIcon 
            onClick={() => setSearch(values)}
            className='w-8 h-8 text-white absolute bg-[#cb1f27] p-1 rounded-full right-1 top-1 cursor-pointer'/>
            <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-slate-900 text-white rounded-md w-[400px] h-fit py-2 px-4' />
        </div>
    </div>
  )
}

export default SearchBar