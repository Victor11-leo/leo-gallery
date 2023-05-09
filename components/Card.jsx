import React from 'react'
import Image from 'next/image'

const Card = ({src,alt}) => {
  return (
    <>
        <div 
        className='flex flex-col border-2 border-[#cb1f27] relative peer rounded-sm hover:shadow-black hover:shadow-md w-fit h-fit'>
          <Image
          src={src}
          width={180}
          height={200}
          alt={alt}
          className='h-auto w-auto'
          />
          <div className='absolute z-2 bg-[#cb1f27] opacity-10 hover:opacity-0 w-full h-full'/>
          {/* Peer hover block usually hidden */}
          <h2 className='text-white absolute bottom-2 left-2 '>{alt}</h2>
        </div>
    </>
  )
}

export default Card