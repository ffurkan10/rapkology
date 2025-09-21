import Image from 'next/image'
import React from 'react'
import fav from "../../public/images/svg/fav.svg"
import comment from "../../public/images/svg/comment.svg"
import eye from "../../public/images/svg/eye.svg"
import play from "../../public/images/svg/play.svg"

const BlogDetailContent = ({ blogDetail }) => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex items-center gap-2 '>
            <Image src={eye} alt='eye' />
            <p className='text-white'>12.094</p>
        </div>

        <h1 className='text-white lg:text-[50px] text-[40px] font-bold leading-[1.2]'>{blogDetail?.attributes?.title}</h1>

        <p className='text-white font-bold lg:text-[25px] text-[20px] leading-[1.2]'>{blogDetail?.attributes?.desc}</p>
        <div className='w-full h-auto relative'>
            <Image src={blogDetail?.attributes?.img} alt={blogDetail?.attributes?.title} width={800} height={400} className='w-full h-auto rounded-lg' />
            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>                    
                <Image src={play} alt='play' />
            </div>
        </div>

        <p className='text-white'>{blogDetail?.attributes?.content}</p>

        <div className='flex items-center gap-4'>
            {blogDetail?.attributes?.tags.map((tag, index) => (
                <span key={index} className='text-white bg-[#323232] p-2'>{tag}</span>
            ))}
        </div>

        <div className='flex items-center gap-8'>
            <div className='flex items-center gap-2'>
                <Image src={fav} alt='fav' />
                <p className='text-white'><strong>14 Kişi</strong> Beğendi</p>
            </div>
            <div className='flex items-center gap-2'>
                <Image src={comment} alt='comment' />
                <p className='text-white'>3</p>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailContent