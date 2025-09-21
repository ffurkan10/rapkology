import BlogHeroContent from '@/components/blog/BlogHeroContent'
import Image from 'next/image'
import React from 'react'
import overlayRight from "../../public/images/blog/blog-overlay-right.png"
import overlayLeft from "../../public/images/blog/blog-overlay-left.png"
import search from '../../public/images/svg/search.svg'
import hamburger from '../../public/images/svg/hamburger.svg'
import grid from '../../public/images/svg/grid.svg'
import explore from "../../public/images/svg/explore.svg"
import WantToSee from '@/components/home/wantToSee'
import { blogData } from '@/data/blogData'
import BlogCard from '@/components/ui/cards/BlogCard'
import CrookedButton from '@/components/elements/buttons/CrookedButton'
import Footer from '@/components/layout/Footer'

const Blog = () => {
  return (
    <div className='lg:mt-[90px] mt-[77px] relative'>
      <div className="w-full min-h-screen overflow-hidden relative">
        <BlogHeroContent />

        <div className="absolute bottom-0 left-0 w-full flex pointer-events-none z-40">
          <div className="relative w-1/2 h-[100px]">
            <Image
              src={overlayLeft}
              alt="Overlay Left"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-1/2 h-[100px]">
            <Image
              src={overlayRight}
              alt="Overlay Right"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className='container flex flex-col gap-10 py-10'>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-6'>
            <h2 className='text-[40px] lg:text-[50px] font-bold text-white'>Keşfet</h2>
            <Image src={explore} alt="Explore" />
          </div>
  
          <div className='flex items-center gap-4'>
              <Image src={search} alt="Search" width={23} height={22} />
              <Image src={hamburger} alt="Hamburger" width={24} height={19} />
              <Image src={grid} alt="Grid" width={23} height={19} />
          </div>
        </div>

        <WantToSee />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {blogData.splice(0, 8).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        <div className='flex justify-center align-center mt-16'>
            <CrookedButton text="Daha Fazla Gör" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog
