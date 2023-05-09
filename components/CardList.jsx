import Image from 'next/image'
import Link from 'next/link'
import {ArrowDownTrayIcon, LinkIcon} from '@heroicons/react/24/solid'

const CardList = ({search,data,loading}) => {
    // const cards = cardInfo.filter((d) => d.alt.toLowerCase().includes(search.toLowerCase()))
    const handleClick = () => {setClick((prev) => !prev)}
    console.log(data)
  return (
    <>
        <div  className='grid grid-cols-1 sm:grid-cols-3 gap-3 w-[1300px] h-full mt-4'>
          {data && 
          <>
          {data.filter((d) => d.alt_description.toLowerCase().includes(search.toLowerCase())).map((d) => {
            const downloadLink = d.links.download
            return (
          <div key={d.id} className='h-fit w-fit relative'>
            <Image
            width={d.width}
            height={d.height}
            alt={d.alt_description}
            src={d.urls.regular}
            className='peer/image'
            />
            <div className='absolute top-4 left-2 space-x-5 hidden peer-hover/image:flex'>
              <ArrowDownTrayIcon className='w-8 h-8 text-white cursor-pointer bg-red-700 rounded-full p-2'/>
              <Link href={d.links.html}>
                <LinkIcon className='w-8 h-8 text-white cursor-pointer bg-red-700 rounded-full p-2'/>
              </Link>
            </div>
            <div className={`bg-gradient-to-b from-transparent to-slate-900 absolute w-full h-full opacity-30 z-10 top-0 bottom-0 left-0 right-0`}/>
            <h2 className='absolute font-bold bottom-2 text-slate-400'>{d.alt_description}</h2>
          </div>
          )})}
          </>}
        </div> 
        <div className='flex items-center w-full justify-center space-x-5'>
            
        </div>
    </>
  )
}



export default CardList