import Image from 'next/image'
import React from 'react'
import trendPerson from "../../../public/images/png/trend-person.png"
import moment from 'moment'
import "moment/locale/tr";
import Link from 'next/link'

const BlogCard = ({ blog }) => {

  return (
    <Link href={`/blog/${blog.attributes?.slug}`} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 '>
            <div className='flex items-center gap-4'>
                <div className='w-[35px] h-[35px]'>
                    <Image src={trendPerson} alt={blog.title} width={35} height={35} className='w-full h-full rounded-lg' />
                </div>
                <p className='text-white'>{blog.attributes?.authors[0]}</p>
            </div>
            <div className='w-full h-auto sm:w-[300px] sm:h-[200px]'>
                <Image src={blog?.attributes?.img} alt={blog.attributes.title} width={300} height={200} className='w-full h-full' />
            </div>
            <p className='text-[#3B3B3B]'>{moment(blog.createdAt).format('LL')}</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4 border-b border-b-[#3B3B3B] sm:h-[120px] sm:pb-0 pb-4'>
                <p className='text-white text-md font-bold line-clamp-4'>{blog.attributes?.desc}</p>
            </div>
            <button className='text-white font-normal pt-4'>Daha Fazla Oku</button>
        </div>
    </Link>
  )
}

export default BlogCard