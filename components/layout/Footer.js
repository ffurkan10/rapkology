import React from 'react'
import logo from "../../public/images/svg/rapkology-logo.svg"
import facebook from "../../public/images/social/facebook.svg"
import spotify from "../../public/images/social/spotify.svg"
import discord from "../../public/images/social/discord.svg"
import twitter from "../../public/images/social/twitter.svg"
import youtube from "../../public/images/social/youtube.svg"
import Image from 'next/image'
import InputMail from '../elements/inputs/InputMail'
import { navigation } from '@/data/navigation'

const Footer = () => {
  return (
    <div className='container py-10 flex flex-col gap-10'>
        <div className='w-[250px] h-[60px]'>
            <Image src={logo} width={250} height={60} alt="Rapkology Footer Logo" />
        </div>

        <div className='flex align-center justify-between gap-10 md:flex-row flex-col'>
            <div className='lg:w-1/3 md:w-1/2 flex flex-col gap-8'>
                <p className='text-[25px] text-white font-bold'>GELİŞMELERDEN İLK SEN HABERDAR OL!</p>

                <InputMail />
            </div>

            <div className='lg:w-1/3 md:w-1/2 flex flex-col gap-4'>
                 <div className='flex align-center gap-4'>
                    <Image src={facebook} width={15} height={29} alt="Facebook" />
                    <Image src={twitter} width={27} height={22} alt="Twitter" />
                    <Image src={discord} width={32} height={24} alt="Discord" />
                    <Image src={spotify} width={34} height={34} alt="Spotify" />
                    <Image src={youtube} width={34} height={24} alt="YouTube" />
                </div>

                <div className='flex align-center  justify-between gap-4 flex-wrap md:flex-nowrap'>
                    {navigation.map((item, index) => (
                        <p key={index} className='text-white text-sm'>{item.name}</p>
                    ))}
                </div>
            
                <div>
                    <p className='text-[#5C5C5C] text-sm'>© RAPKOLOGY All Rights Are Reserved 2022.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer