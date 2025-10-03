"use client";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

export default function CheckoutPage() {
  return (
    <main className="flex justify-center bg-gradient-to-b from-black to-[#1F1F1F] min-h-screen bg-[1d1d20]">
      <div className="self-center w-[65%]">
        <div className="flex justify-self-center pb-15 text-6xl font-[sans-serif] font-[700] text-nowrap drop-shadow-2xl">
          Checkout
        </div>
        <div className="relative h-120 gap-1 self-center justify-self-center top-0 w-[90%] bg-neutral-600/30 backdrop-blur-s m rounded-[40px] backdrop-opacity-10 border-2"></div>
      </div>
    </main>
  );
}
