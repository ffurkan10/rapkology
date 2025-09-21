import Image from 'next/image'
import React from 'react'
import explore from "../../../public/images/svg/explore.svg"
import { blogData } from '@/data/blogData'
import search from '../../../public/images/svg/search.svg'
import hamburger from '../../../public/images/svg/hamburger.svg'
import grid from '../../../public/images/svg/grid.svg'
import WantToSee from '../wantToSee'
import HomeBlogCard from '@/components/ui/cards/HomeBlogCard'

const Explore = () => {
  
  return (
    <div className='flex flex-col w-full lg:w-1/2'>
      <div className='flex items-center justify-between  mb-10'>
        <div className='flex items-center gap-6'>
          <h2 className='text-[40px] lg:text-[50px] font-bold text-white'>Keşfet</h2>
          <Image src={explore} alt="Explore" />
        </div>

        <div className='flex items-center gap-4'>
          <Image src={search} alt="Search" />
          <Image src={hamburger} alt="Hamburger" />
          <Image src={grid} alt="Grid" />
        </div>
      </div>

      <div className='block lg:hidden mb-10'>
        <WantToSee />
      </div>

      <div className='flex flex-col gap-8'>
        {blogData.map((blog) => (
          <HomeBlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Explore