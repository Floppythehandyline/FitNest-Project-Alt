"use client";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

export default function WheyProtienPage() {
  return (
    <main className="sticky h-screen bg-linear-to-t from-[#1F1F1F] to-black z-1">
      <div className="absolute gap-1 justify-self-center top-120 w-[85%] bg-neutral-600/30 backdrop-blur-s m rounded-[40px] backdrop-opacity-10 border-2">
        <div className="w-[100%] flex justify-evenly justify-self-center h-full">
          <div className="sticky flex flex-col top-0 order-1 ml-10 mt-15 h-80 w-[16%] font-[sans-serif]">
            <div className="pb-5 font-[sans-serif] text-xl font-[600] text-nowrap drop-shadow-2xl">
              Selection Fillter
            </div>
            <span className="font-[sans-serif] text-xl font-[400] text-nowrap drop-shadow-2xl">
              Brand
            </span>
            <div className="pb-4 grid w-40">
              <select className="pl-1 col-start-1 row-start-1 appearance-none bg-gray-50 bg-gray-800 border-2 rounded w-40 font-[sans-serif] text-lg font-[500] text-nowrap drop-shadow-2xl z-10">
                <option>All</option>
                <option>brand1</option>
                <option>brand2</option>
              </select>
              <img
                src="selec-1.png"
                className="mr-1.5 pointer-events-none flex self-center justify-self-end-safe w-5 col-start-1 row-start-1 z-20"
              />
            </div>
            <span className="font-[sans-serif] text-xl font-[400] text-nowrap drop-shadow-2xl">
              Price
            </span>
            <div className="grid w-40">
              <select className="pl-1 col-start-1 row-start-1 appearance-none bg-gray-50 bg-gray-800 border-2 rounded w-40 font-[sans-serif] text-lg font-[500] text-nowrap drop-shadow-2xl z-10">
                <option>All</option>
                <option>under 500$</option>
                <option>500 - 1000$ </option>
                <option>over 1000$ </option>
              </select>
              <img
                src="selec-1.png"
                className="mr-1.5 pointer-events-none flex self-center justify-self-end-safe w-5 col-start-1 row-start-1 z-20"
              />
            </div>
          </div>
          <div className="flex justify-center order-2 mt-15 h-full w-[64%] font-[sans-serif] text-xl font-[600] text-nowrap drop-shadow-2xl">
            Product
          </div>
          <div className="sticky top-0 mr-7 flex flex-col order-3 mt-15 h-100 w-[20%] font-[sans-serif]">
            <div className="pb-5 font-[sans-serif] text-xl font-[600] text-nowrap drop-shadow-2xl">
              Shopping Cart
            </div>
            <span className="active:text-[#0067D1] hover:underline underline-offset-2 font-[sans-serif] text-lg font-[400] text-nowrap drop-shadow-2xl">
              <a href="/" rel="noopener noreferrer">
                continue to payment ≫
              </a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
