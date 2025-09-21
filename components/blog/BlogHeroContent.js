import React from 'react'
import bg from "../../public/images/blog/blog-hero-bg.png"
import style from "../../public/images/blog/style.png"
import Image from 'next/image'
import Breadcrumbs from '../breadcrumbs'
import { blogBreadcrumbs } from '@/data/breadcrumbs'
import heroImg from "../../public/images/blog/blog-hero.png"
import play from "../../public/images/svg/play.svg"
import { blogHeroData } from '@/data/blogHeroDatas'

const BlogHeroContent = () => {
  return (
    <div className='w-full min-h-full bg-cover bg-center flex flex-col relative pb-40' style={{ backgroundImage: `url(${bg.src})` }}>

        <div className='py-10 hidden md:block'>
            <Breadcrumbs data={blogBreadcrumbs} />
        </div>

        <div className='absolute bg-[var(--yellow)] inset-0 opacity-80 z-10 h-full w-full' />
        <div className="absolute top-0 right-0 h-full z-20 flex items-end justify-end">
            <Image src={style} alt="style" className="object-contain h-full w-auto" />
        </div>


        <div className='container flex flex-col relative z-30 py-6 md:py-0'>
            <h1 className='text-[40px] lg:text[50px] font-bold text-black mb-6 hidden md:block'>BLOG</h1>
            <div className='flex lg:flex-row flex-col justify-between gap-6'>
                <div className='flex flex-col lg:w-1/2 w-full gap-6'>
                    <div className='relative w-full md:h-[400px] h-[300px]'>
                        <Image src={heroImg} alt="heroImg" fill className='object-cover' />
                        <p className='absolute md:bottom-10 md:left-10 bottom-2 left-2 p-4 text-white xl:text-[40px] text-[30px] font-bold'>LOREM FT - IPSUM</p>
                        <Image src={play} alt="play" width={70} height={70} className='absolute md:bottom-5 md:right-10 bottom-0 w-[50px] h-[50px] md:w-[70px] md:h-[70px] right-2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform' />
                    </div>

                    <p className='xl:text-[25px] text-[20px] font-bold leading-tight relative'>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...</p>
                </div>

                <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                    {blogHeroData.map(item => (
                        <div key={item.id} className='flex gap-4 cursor-pointer hover:scale-105 transition-transform'>
                            <div className='w-[175px] h-[105px] flex-shrink-0'>
                                <Image src={item.img} alt={item.title} width={175} height={105} className='object-contain' />
                            </div>
                            <div>
                                <h3 className='xl:text-[25px] text-[20px] line-clamp-3 font-bold leading-tight'>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogHeroContent