"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import leftArrow from "../../../public/images/svg/left-arrow.svg";
import rightArrow from "../../../public/images/svg/right-arrow.svg";
import { sliderData } from "@/data/homeSlider";
import CrookedButton from "@/components/elements/buttons/CrookedButton";
import HomeSliderButton from "@/components/elements/buttons/HomeSliderButton";

export default function Slider() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //! lg'den küçük ekran -> sadece ilk slayt
  if (!isLarge) {
    const item = sliderData[0];
    return (
      <div className="relative w-full h-[90vh] flex">
        {/* Görsel */}
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className={`object-contain object-bottom w-full h-full`}
          />
        </div>

        {/* Sağ taraf */}
        <div
          className="
            absolute w-[90%] mx-auto text-center
            top-1/4 right-0 w-full
            flex flex-col justify-center
            px-4 sm:px-8
          "
        >
          <h1
            style={item.id === 1 ? { color: "white" } : { color: "#121212" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-[1]"
          >
            {item.title}
          </h1>
          <p
            style={item.id === 1 ? { color: "white" } : { color: "#121212" }}
            className="text-md font-normal mb-4 w-[90%] mx-auto"
          >
            {item.text}
          </p>
          <div className="w-full flex justify-center">
            <div className="relative inline-block ">
              <div className="absolute inset-0 bg-black [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)] translate-x-1 translate-y-1"></div>
              <div className="relative inline-block">
                <HomeSliderButton text={"Devamını Oku"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //! lg ve üstü ekran -> Swiper
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{
        clickable: true,
      }}
      onInit={(swiper) => {
        swiper.params.pagination.el =
          document.querySelector(".custom-pagination");
        swiper.pagination.init();
        swiper.pagination.update();
      }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-screen relative"
    >
      {sliderData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-full flex">
            {/* Görsel */}
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`lg:object-contain lg:object-left ${
                  item?.id === 1 ? "object-contain object-bottom" : ""
                } w-full h-full`}
              />
            </div>

            {/* Sağ taraf */}
            <div
              className="
              absolute
              w-[90%] mx-auto text-center
              top-1/4 right-0 w-full
              lg:top-1/3 lg:w-1/2 lg:right-[150px] lg:text-left lg:mx-0
              flex flex-col justify-center
              px-4 sm:px-8 lg:px-12
            "
            >
              <h1
                style={item.id === 1 ? { color: "white" } : { color: "#121212" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-bold mb-2 leading-[1]"
              >
                {item.title}
              </h1>
              <p
                style={item.id === 1 ? { color: "white" } : { color: "#121212" }}
                className="text-md font-normal mb-4 w-[90%]"
              >
                {item.text}
              </p>

              <div className="md:align-center md:justify-center lg:align-start lg:justify-start w-full">
                <div className="relative inline-block ">
                  <div className="absolute inset-0 bg-black [clip-path:polygon(95%_100%,100%_0,0_2%,5%_90%)] translate-x-1 translate-y-1"></div>
                  <div className="relative inline-block">
                    <HomeSliderButton text={"Devamını Oku"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* navigation & pagination */}
      <button className="custom-prev absolute left-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer hidden lg:block">
        <Image src={leftArrow} alt="prev" width={24} height={24} />
      </button>
      <button className="custom-next absolute right-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer hidden lg:block">
        <Image src={rightArrow} alt="next" width={24} height={24} />
      </button>
      <div className="custom-pagination absolute bottom-10 right-[52%] !left-auto !w-auto !text-left z-50 hidden lg:flex"></div>
    </Swiper>
  );
}
