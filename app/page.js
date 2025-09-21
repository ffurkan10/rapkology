import Slider from '@/components/home/silder'
import Image from 'next/image'
import React from 'react'
import overlay from "../public/images/png/overlay.png"
import Broadcast from '@/components/home/broadcast'
import Trends from '@/components/trends'
import MonthlyFavs from '@/components/monthlyFavs'
import Explore from '@/components/home/explore'
import FixedContent from '@/components/home/fixedContent'
import Footer from '@/components/layout/Footer'

const Page = () => {
  return (
    <>
      <div className='relative w-full h-[90vh] lg:h-screen overflow-hidden'>
        <Slider />

        <div className="absolute bottom-[-5px] left-0 w-full pointer-events-none z-40">
          <div className="relative w-full h-[100px] md:h-[100px]">
            <Image
              src={overlay}
              alt="Overlay"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>

      <div className='relative w-full '>
        <Broadcast />

        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-40">
          <div className="relative w-full h-[100px] md:h-[100px]">
            <Image
              src={overlay}
              alt="Overlay"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <Trends />

      <MonthlyFavs />

      <div className='w-[90%] mx-auto my-20 relative z-10 flex justify-between '>
        <Explore />

        <FixedContent />
      </div>

      <div className='block lg:hidden'>
        <Footer />
      </div>
    </>
  )
}

export default Page