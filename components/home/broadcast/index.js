import React from 'react'
import viewers from "../../../public/images/png/viewers.png"
import white from "../../../public/images/png/white-guy.png"
import women from "../../../public/images/png/women.png"
import Image from 'next/image'
import twitch from "../../../public/images/png/twitch.png"
import fav from "../../../public/images/svg/fav.svg"
import star from "../../../public/images/svg/star.svg"

const Broadcast = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row justify-around relative items-center lg:items-start mt-10">
      
      <div className="relative z-10 hidden lg:block">
        <Image src={white} alt="white" className='lg:max-w-auto lg:max-h-auto' />
      </div>

      <div className="flex flex-col gap-6 relative z-10 order-1 lg:order-none">
        <div className="flex justify-start items-start">
          <div className="w-[120px] h-[80px] md:w-[160px] md:h-[100px]">
            <Image src={twitch} alt="twitch" />
          </div>
          <div className="text-white flex flex-col justify-center border-l-2 border-[var(--border)] pl-4 rotate-[-4deg]">
            <p className="font-tiny text-[32px] md:text-[40px] lg:text-[50px] leading-[1]">HER HAFTA</p>
            <p className="font-semibold text-[32px] md:text-[40px] lg:text-[50px] text-[var(--yellow)] leading-[1.2]">CANLIDAYIZ</p>
            <p className="text-sm md:text-base">Bizi Takip Edin!</p>
          </div>
        </div>

        <div className="border border-[var(--border)] rounded-md flex gap-4 p-2 w-fit rotate-[-4deg] mx-auto">
          <div className="p-2 bg-[var(--purple)] text-white rounded-md flex items-center justify-center gap-2">
            <Image src={fav} alt="fav" />
            <p className='font-semibold lg:font-bold text-sm'>Takip Et</p>
          </div>
          <div className="p-2 bg-[var(--subsbg)] text-white rounded-md flex items-center justify-center gap-2">
            <Image src={star} alt="star" />
            <p className='font-semibold lg:font-bold text-sm'>Abone Ol</p>
          </div>
        </div>
      </div>

      <div className="order-2 lg:order-none flex flex-row justify-between lg:justify-start gap-6 relative z-10 mt-6 lg:mt-0">
          <Image src={white} alt="white" className="block lg:hidden max-w-auto max-h-auto" />
          <Image src={women} alt="women" className="max-w-auto max-h-auto" />
      </div>

      <div className="absolute bottom-0 right-0 left-0 w-full z-0">
        <Image src={viewers} alt="viewers" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Broadcast
