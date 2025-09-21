import React from 'react'
import yellow from "../../../public/images/svg/yellow-right.svg"
import Image from 'next/image'

const InputMail = () => {

  return (
    <div className='relative w-full'>
        <input type="email" placeholder="Email" className='p-2 pr-22 outline-none border-b border-[var(--border)] w-full text-white' />
        <button className='absolute text-[var(--yellow)] top-2 right-1 flex items-center gap-1'>Gönder <Image src={yellow} alt="yellow-right" /></button>
    </div>
  )
}

export default InputMail