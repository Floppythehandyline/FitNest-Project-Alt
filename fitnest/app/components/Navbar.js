"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="justify-center flex items-center w-screen gap-[4%] h-0 bg-linear-to-bl z-2">
        <div className="relative -left-20 -top-3 w-75 shadow-xl/30">
          <Link href="/" className="logo">
            <img
              className="fitnestlogo absolute z-3"
              src="/fitnest_logo7.png"
            />
          </Link>
        </div>
        <ul className="nav-list relative top-18 justify-center flex items-center gap-[15%] font-[sans-serif] text-3xl font-[700] text-nowrap drop-shadow-2xl z-4">
          <li className="nav-item active:text-[#0067D1] hover:underline underline-offset-2 text-shadow-lg drop-shadow-2xl">
            <a href="/" target="_blank" rel="noopener noreferrer">
              DUMBBELLS
            </a>
          </li>
          <li className="nav-item active:text-[#0067D1] hover:underline underline-offset-2 text-shadow-lg drop-shadow-2xl">
            <a
              href="https://youtu.be/DZ47H84Bc_Q?si=lSayEz1673zdfEFz&t=45"
              target="_blank"
              rel="noopener noreferrer"
            >
              TREADMILLS
            </a>
          </li>
          <li className="nav-item active:text-[#0067D1] hover:underline underline-offset-2 text-shadow-lg drop-shadow-2xl ">
            <a
              href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwQMMCnzSpLsFNtcztVLvQhvDVNwjFgBbZnlqQtvKHCQgCSZVVHXmnDgbFXBQspWrlBJSfg"
              target="_blank"
              rel="noopener noreferrer"
            >
              WHEY PROTEIN
            </a>
          </li>
        </ul>
      </div>

    </>
  );
}