"use client"
import React, { useState } from 'react'
import { wantToSeeData } from '@/data/wantToSee'

const WantToSee = ({ isBlogPage = false }) => {

  const [selected, setSelected] = useState(null);

  return (
    <div className={`flex overflow-x-auto gap-4 scrollbar-hide ${isBlogPage ? 'flex-nowrap' : 'lg:flex-wrap'}`}>
        {wantToSeeData.map((item, index) => (
            <div key={index} onClick={() => setSelected(item.id)} className={`px-4 py-2 border border-white w-max min-w-[170px] lg:min-w-auto text-center cursor-pointer ${selected === item.id ? 'bg-[var(--yellow)] !border-[var(--background)]' : ''}`}>
                <h3 className={`${selected === item.id ? 'text-black' : 'text-white '}`}>{item.title}</h3>
            </div>
        ))}
    </div>
  )
}

export default WantToSee