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
              <div className="absolute bottom-32 left-10 text-white text-lg font-bold drop-shadow-lg">
                    <h2 className="text-3xl font-bold mb-2">Just Arrived!</h2>
                    <p className="text-xl font-semibold">DUMBELLS</p>
                    <p className="mt-2 text-sm text-gray-200">คอลเลคชันใหม่ที่จะช่วยยกระดับการออกกำลังกายของคุณ</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                className="w-screen h-screen items-center justify-center z-1"
                src="/home-treadmills.jpg"
              />
              <div className="absolute bottom-32 left-10 text-white text-lg font-bold drop-shadow-lg">
                    <h2 className="text-3xl font-bold mb-2">Just Arrived!</h2>
                    <p className="text-xl font-semibold">TREADMILLS</p>
                    <p className="mt-2 text-sm text-gray-200">อุปกรณ์การวิ่งที่จะทำให้คุณมีสุขภาพที่ดี</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <img
                className="w-screen h-screen items-center justify-center z-1"
                src="/home-whey.jpg"
              />
              <div className="absolute bottom-32 left-10 text-white text-lg font-bold drop-shadow-lg">
                    <h2 className="text-3xl font-bold mb-2">Just Arrived!</h2>
                    <p className="text-xl font-semibold">WHEY PROTEIN</p>
                    <p className="mt-2 text-sm text-gray-200">อาหารเสริมสุขภาพเพื่อยกระดับร่างกายของคุณ</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
