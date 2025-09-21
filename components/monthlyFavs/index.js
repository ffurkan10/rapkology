import React from 'react'
import youtube from '../../public/images/png/youtube.png'
import spotify from '../../public/images/png/spotify.png'
import Image from 'next/image'
import Favorites from '../home/favSlider'

const MonthlyFavs = () => {
  return (
    <div className='relative flex align-center py-20'>
        <div className='absolute top-0 left-0 w-3/4 md:w-1/2 lg:w-1/3 h-fit px-4 py-8 [clip-path:polygon(90%_80%,100%_0,0_0,0_100%)] bg-white flex align-start justify-center gap-6'>
            <div className='lg:w-[160px] lg:h-[35px] w-[115px] h-[25px]'>
                <Image src={youtube} width={160} height={35} alt='Youtube' />
            </div>
            <div className='lg:w-[160px] lg:h-[48px] w-[110px] h-[30px] '>
                <Image src={spotify} width={160} height={48} alt='Spotify' />
            </div>
        </div>

        <div className='flex flex-col lg:flex-row align-center w-[90%] mx-auto lg:w-[95%] lg:ml-auto h-[350px]'>
            <h2 className='text-[40px] lg:text-[50px] font-bold text-white pt-20 leading-[1.2] text-center lg:text-left'>AYIN<br/> FAVORİLERİ</h2>

            <Favorites />
        </div>
    </div>
  )
}

export default MonthlyFavs