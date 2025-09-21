import React from 'react'
import { blogData } from '@/data/blogData';
import Breadcrumbs from '@/components/breadcrumbs';
import { notFound } from 'next/navigation';
import { blogBreadcrumbs } from '@/data/breadcrumbs';
import FixedFooter from '@/components/layout/FixedFooter';
import BlogDetailContent from '@/components/blogDetail/BlogDetailContent';
import Link from 'next/link';
import Image from 'next/image';
import TrendCard from '@/components/ui/cards/TrendCard';
import { trendsData } from '@/data/trends';
import trend from '../../../public/images/svg/trend.svg'
import CrookedButton from '@/components/elements/buttons/CrookedButton';

export async function generateMetadata({ params }) {
  const { slug } = await params

  const blogDetail = await blogData.find(item => item?.attributes?.slug === slug);

  if(blogDetail === null){
    return {
      title: "Blog Detay",
      description: "Blog Detay",
    };
  }else{
    return {
      title: blogDetail?.attributes?.seo?.metaTitle || "Blog Detay",
      description: blogDetail?.attributes?.seo?.metaDesc || "Blog Detay",
      alternates: {
        canonical: `https://www.rapkology.com/blog/${slug}`,
    },
    };
  }
  
}

const BlogDetail = async ({params}) => {
    const { slug } = await params

    const blogDetail = await blogData.find(item => item?.attributes?.slug === slug);

    const breadData = [...blogBreadcrumbs, { label: blogDetail?.attributes?.title, href: `/blog/${slug}` }];

    if (!blogDetail) {
        return notFound();
    }

  return (
    <div className='lg:mt-[90px] mt-[77px] py-10 relative'>
        <div className='w-full mb-10'>
          <Breadcrumbs whiteText data={breadData} />
        </div>

        <div className='flex lg:flex-row flex-col gap-10 justify-between container mt-10 relative'>

          <div className='w-full lg:w-1/2 flex flex-col gap-10'>

            <BlogDetailContent blogDetail={blogDetail} />

            <div className='flex flex-col gap-4'>
              <h2 className='text-white lg:text-[50px] text-[40px] font-bold leading-[1.2]'>DAHA FAZLA İÇERİK</h2>

              <div className='flex flex-col'>
                {blogData.slice(0, 3).map((blog, index) => (
                  <Link key={index} href={`/blog/${blog.attributes?.slug}`} className='text-white flex gap-4 border-b border-b-[#323232] py-4 last:border-0'>
                    <div className='w-[200px] h-[100px] flex-shrink-0'>
                      <Image src={blog.attributes?.img} alt={blog.attributes?.title} width={200} height={100} className='w-full h-auto rounded-lg mb-2' />
                    </div>
                    <p className='text-white lg:text-[25px] text-[20px] font-bold line-clamp-4 leading-tight'>{blog.attributes?.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className='flex items-center gap-3 mb-10 justify-center lg:justify-start'>
                <h2 className='text-white lg:text-[50px] text-[40px] font-bold leading-[1.2]'>TRENDLER</h2>
                <Image src={trend} alt="trend" />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                  {trendsData.slice(0, 4).map((trend) => (
                      <TrendCard key={trend.id} trend={trend} />
                  ))}
              </div>

              <div className='flex justify-center align-center mt-16 w-full'>
                <CrookedButton text="Tümünü Gör" />
              </div>
            </div>
          
          </div>

          <div className="w-full lg:w-1/3 lg:pl-8">
            <div className="sticky top-[100px]">
              <FixedFooter />
            </div>
          </div>
        </div>
    </div>
  )
}

export default BlogDetail