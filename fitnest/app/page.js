"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="h-screen bg-linear-to-t from-[#1F1F1F] to-black">
      <div className="w-screen h-screen items-center justify-center">
        <Swiper
          modules={[Mousewheel, Pagination]}
          direction="vertical"
          spaceBetween={5}
          slidesPerView={1}
          mousewheel={true}
          effect="fade"
          pagination={{ clickable: true }}
          loop={true}
          speed={800}
          className="h-full"
        >
          <SwiperSlide>
            <a className="w-screen h-screen" href="/">
              <img
                className="w-screen h-screen items-center justify-center z-1"
                src="/home-dumbbells.jpg"
              />
              <div className="absolute bottom-5 left-5 text-white text-lg font-bold drop-shadow-lg">
              DUMBELLS
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                className="w-screen h-screen items-center justify-center z-1"
                src="/home-treadmills.jpg"
              />
              <div className="absolute bottom-5 left-5 text-white text-lg font-bold drop-shadow-lg">
                TREADMILLS
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                className="w-screen h-screen items-center justify-center z-1"
                src="/home-whey.jpg"
              />
              <div className="absolute bottom-5 left-5 text-white text-lg font-bold drop-shadow-lg">
                WHEY PROTEIN
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
