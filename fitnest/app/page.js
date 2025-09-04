"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="h-screen bg-linear-to-t from-[#1F1F1F] to-black">
      <div className="w-screen h-screen items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <a href="/">
              <img
                className="items-center justify-center"
                src="/home-dumbbells.jpg"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 text-white p-10 text-center text-xl rounded-2xl">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-500 text-white p-10 text-center text-xl rounded-2xl">
              Slide 3
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
