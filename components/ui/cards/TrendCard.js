import Image from 'next/image'
import React from 'react'

const TrendCard = ({ trend }) => {
  return (
    <div className='flex gap-10 align-start justify-start'>
        <div className='flex items-start justify-start '>
            <p className='text-[40px] lg:text-[50px] text-[var(--sort)] font-bold leading-[1]'>{trend.sort}</p>
        </div>
        <div className='flex flex-col gap-4  justify-between'>
            <div className='flex flex-col gap-2 '>
                <div className='flex gap-2 items-center'>
                    <Image src={trend.image} width={30} height={30} alt={trend.name} />
                    <p className='text-white text-sm'>{trend.name}</p>
                </div>
                <p className='text-white text-[20px] lg:text-[25px] leading-[1.2]'>{trend.text}</p>
            </div>
            <div className='text-white cursor-pointer flex items-center text-sm border-t border-[var(--border)] pt-4'>
                <p>Daha Fazla Oku</p>
            </div>
        </div>
    </div>
  )
}

export default TrendCard