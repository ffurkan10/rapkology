import Link from 'next/link'
import React from 'react'
import arrow from "../../public/images/svg/bc-arrow.svg"
import Image from 'next/image'
import whiteArrow from "../../public/images/svg/bc-white-arrow.svg"

const Breadcrumbs = ({ data, whiteText = false }) => {
  return (
    <div className='container flex gap-2 relative z-30'>
      {data.map((item, index) => {
        const isLast = index === data.length - 1

        return (
          <div className='flex items-center gap-2' key={index}>
            {isLast ? (
              <p className={`inline max-w-[200px] truncate ${whiteText ? 'text-white' : ''}`}>{item.label}</p>
            ) : (
              <Link className={`inline ${whiteText ? 'text-white' : ''}`} href={item.href}>{item.label}</Link>
            )}
            {!isLast && whiteText && <Image src={whiteArrow} alt='arrow' />}
            {!isLast && !whiteText && <Image src={arrow} alt='arrow' />}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
