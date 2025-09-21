import Image from 'next/image'
import React from 'react'
import trend from '../../public/images/svg/trend.svg'
import { trendsData } from '@/data/trends'
import TrendCard from '../ui/cards/TrendCard'
import CrookedButton from '../elements/buttons/CrookedButton'

const Trends = () => {
  return (
    <div className='w-[90%] mx-auto my-10 lg:my-20'>
        <div className='flex items-center gap-4 mb-10 justify-center lg:justify-start'>
            <h2 className='text-[40px] lg:text-[50px] font-bold text-white'>TRENDLER</h2>
            <Image src={trend} alt="trend" width={50} height={50} className='lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {trendsData.map((trend) => (
                <TrendCard key={trend.id} trend={trend} />
            ))}
        </div>

        <div className='flex justify-center align-center mt-16'>
            <CrookedButton text="Tüm Trendleri Gör" />
        </div>
    </div>
  )
}

export default Trends