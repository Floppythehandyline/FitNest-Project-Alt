"use client";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="flex justify-center bg-gradient-to-b from-black to-[#1F1F1F] min-h-screen bg-[1d1d20]">
      <div className="self-center w-[65%]">
        <Link
          className="flex justify-self-start font-[sans-serif] text-xl font-[600] hover:text-[#9c9c9c] active:text-[#0067D1]"
          href="/"
        >
          ↩ back to shopping
        </Link>
        <div className="flex justify-self-center pb-15 text-6xl font-[sans-serif] font-[700] text-nowrap drop-shadow-2xl">
          Checkout
        </div>

        <div className="mb-11 relative gap-1 self-center justify-self-center top-0 w-[90%] bg-neutral-600/30 backdrop-blur-s m rounded-[40px] backdrop-opacity-10 border-2">
          <div className="pb-15 w-full flex justify-between">
            <span className="flex mt-6 ml-7 text-lg font-[sans-serif] font-[600] text-nowrap drop-shadow-2xl">
              item list
            </span>
            <button className="flex mr-10 hover:text-[#ec0000] active:text-[#a30000] cursor-pointer text-neutral-400 grid place-self-end w-15 font-[sans-serif] text-lg font-[500] text-nowrap drop-shadow-xl">
              clear list
            </button>
          </div>
          <div className="pb-10 w-full">
            <span className="flex self-center justify-self-center">No item in the cart</span>
          </div>
        </div>
        <div className="flex justify-between font-[sans-serif] text-nowrap drop-shadow-2xl justify-self-center w-[90%]">
          <div className="justify-self-start flex flex-col ">
            <span className="pb-4 text-xl font-[500]">Address</span>
            <textarea className="w-85 text-lg caret-blue-500 border-2 border-solid resize-y rounded-md "></textarea>
          </div>
          {/* <form action="/action_page.php">
            <p><label for="w3review">Review of W3Schools:</label></p>
            <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
            <br>
            <input type="submit" value="Submit">
          </form> */}
          <button className="flex justify-center items-center w-85 h-13 bg-[#0067D1] rounded-xl text-2xl font-[600] cursor-pointer hover:bg-[#0040a1] active:border-3 border-[#0079e3]">
            Continute to payment ≫
          </button>
        </div>
      </div>
    </main>
  );
}
