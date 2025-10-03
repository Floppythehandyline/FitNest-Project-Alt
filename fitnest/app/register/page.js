"use client";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="bg-gradient-to-b from-black to-[#1F1F1F] min-h-screen flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-6">
        <Link href="/" className="logo">
          <img className="w-250" src="/Vector.png" alt="Logo" />
        </Link>
      </div>

      {/* Form Container */}
      <div className="w-[50%] max-w-md bg-neutral-600/30 backdrop-blur-sm rounded-[30px] border-2 p-8 space-y-6 text-white">
        {/* Navigation */}
        <ul className="flex justify-center gap-6 text-xl font-bold">
          <li>
            <a
              href="/dumbell"
              rel="noopener noreferrer"
              className="text-[#0067D1] hover:underline underline-offset-2"
            >
              BACK TO HOME
            </a>
          </li>
        </ul>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold">สมัครสมาชิก</h2>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-lg font-bold">อีเมล / Email</label>
          <input
            type="email"
            className="w-full h-12 rounded-[20px] px-4 bg-white text-black placeholder:text-gray-800 placeholder:font-semibold"
            placeholder="กรอกอีเมล"
          />
        </div>

        {/* Username */}
        <div className="space-y-2">
          <label className="text-lg font-bold">ชื่อผู้ใช้ /Username</label>
          <input
            type="text"
            className="w-full h-12 rounded-[20px] px-4 bg-white text-black placeholder:text-gray-800 placeholder:font-semibold"
            placeholder="กรอกชื่อผู้ใช้"
          />
        </div>
        
        {/* Password */}
        <div className="space-y-2">
          <label className="text-lg font-bold">รหัสผ่าน /Password</label>
          <input
            type="password"
            className="w-full h-12 rounded-[20px] px-4 bg-white text-black placeholder:text-gray-800 placeholder:font-semibold"
            placeholder="กรอกรหัสผ่าน"
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="text-lg font-bold">ยืนยันรหัสผ่าน / Confirm Password</label>
          <input
            type="password"
            className="w-full h-12 rounded-[20px] px-4 bg-white text-black placeholder:text-gray-800 placeholder:font-semibold"
            placeholder="ยืนยันรหัสผ่าน"
          />
        </div>


        {/* Button */}
        <button className="justify-self-center flex justify-center w-[80%] bg-[#0067D1] text-white py-6 rounded-[50px] font-semibold hover:bg-[#0050a8] transition">
          ลงชื่อเข้าใช้
        </button>

        {/* Register Link */}
        <p className="text-center text-sm">
          มีบัญชีอยู่แล้ว{" "}
          <Link href="login" className="text-[#0067D1] hover:underline">
            ลงชื่อเข้าใช้
          </Link>
        </p>
      </div>
    </main>
  );
}