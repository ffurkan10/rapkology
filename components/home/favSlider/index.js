"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { favSliderData } from "@/data/favSlider";
import Image from "next/image";
import bg from "../../../public/images/svg/fav-bg.svg";

export default function Favorites() {
  return (
    <div className="relative text-white pt-6 w-full lg:w-1/2 lg:ml-auto">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={"auto"}
        pagination={{ type: "progressbar" }}
        className="!pb-6 h-full" 
        loop
      >
        {favSliderData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[274px] h-[268px] rounded-lg relative overflow-hidden flex items-center justify-center cursor-pointer"
          >
            <Image
                src={bg}
                alt="background"
                width={274}
                height={268}
                className="object-cover z-0 absolute w-full h-full"
            />

            <div className="relative z-10 flex items-center text-center w-full h-full">
                <div>
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col items-center gap-2 ml-6">
                    <p className="text-sm bg-[#323232] p-2 rounded-full mb-4">
                        Top 10 <span className="font-bold">({item.sort})</span>
                    </p>
                    <p className="text-lg font-normal leading-1">{item.name}</p>
                    <p className="text-lg font-bold">{item.song}</p>
                </div>
                
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
