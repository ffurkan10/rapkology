import React from 'react'
import WantToSee from '../wantToSee'
import FixedFooter from '@/components/layout/FixedFooter'

const FixedContent = () => {
  return (
    <div className='w-1/3 relative z-10 flex-col gap-20 lg:flex hidden'>
      <div className='flex flex-col gap-6'>
          <h2 className='text-4xl font-bold text-white mb-10'>NE GÖRMEK İSTERSİNİZ?</h2>
          <WantToSee />
      </div>

      <div className='sticky top-[95px]'>
        <FixedFooter />
      </div>
    </div>
  )
}

export default FixedContent