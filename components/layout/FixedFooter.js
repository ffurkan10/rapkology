import React from 'react'
import facebook from "../../public/images/social/facebook.svg"
import spotify from "../../public/images/social/spotify.svg"
import discord from "../../public/images/social/discord.svg"
import twitter from "../../public/images/social/twitter.svg"
import youtube from "../../public/images/social/youtube.svg"
import Image from 'next/image'
import InputMail from '../elements/inputs/InputMail'
import { navigation } from '@/data/navigation'

const FixedFooter = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <p className='text-4xl font-bold text-white'>GELİŞMELERDEN İLK SEN HABERDAR OL!</p>

      <div className='w-full'>
        <InputMail />
      </div>

      <div className='flex align-center gap-4'>
        <Image src={facebook} width={15} height={29} alt="Facebook" />
        <Image src={twitter} width={27} height={22} alt="Twitter" />
        <Image src={discord} width={32} height={24} alt="Discord" />
        <Image src={spotify} width={34} height={34} alt="Spotify" />
        <Image src={youtube} width={34} height={24} alt="YouTube" />
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {navigation.map((item, index) => (
          <p key={index} className='text-white text-sm'>{item.name}</p>
        ))}
      </div>

      <div>
        <p className='text-[#5C5C5C] text-sm'>© RAPKOLOGY All Rights Are Reserved 2022.</p>
      </div>
    </div>
  )
}

export default FixedFooter