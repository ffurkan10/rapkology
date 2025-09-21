import React from 'react'

const CrookedButton = ({text}) => {
  return (
    <button className='bg-white text-black font-bold px-6 py-3 [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)] cursor-pointer w-[200px]'>
        {text}
    </button>
  )
}

export default CrookedButton