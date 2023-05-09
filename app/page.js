'use client'
import {useState,useEffect} from 'react'
import { Navbar,SearchBar,CardList } from '@/components'

// Home page
const page = () => {
  const [search,setSearch] = useState('')
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const link = process.env.NEXT_PUBLIC_UNSPLASH
 
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.unsplash.com/photos?client_id=${link}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data)
  return (
    <div className='bg-[#f8f8f8] h-screen sm:flex block'>
      <div className='sm:w-[60px] fixed'>
        <Navbar/>
      </div>
      <div className='w-full items-center flex flex-col'>
        <SearchBar search={search} setSearch={setSearch}/>
        <CardList search={search} data={data} loading={isLoading}/>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  const url =`https://api.unsplash.com/photos?client_id=j90BQ0bqgV2gI2ZUxPbprlvNCbWPyMvRXFTMGGn1dGo`
  const res = await fetch(url) 
  const data = await res.json()
  
  return {
    props:{data}
  }
}

export default page