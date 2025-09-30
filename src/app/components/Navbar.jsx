// src/app/components/Navbar.tsx
"use client";
import { Bell, Star, Folder } from "lucide-react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Navbar() {
  return (
    <header className="w-full bg-[#4A7D9E] flex items-center justify-between px-4 py-2">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/img1.svg" 
          alt="pics"
          width={35}
          height={35}
        />
      </div>

      {/* Center: Search Bar */}
  <div className="flex-1 bg-[#4A7D9E] max-w-xl mx-4 hidden md:flex pl-5">
  <div className="relative w-80">
    {/* Search Icon inside input (left side) */}
    <MagnifyingGlassIcon className="h-5 w-5 text-[rgba(145,177,197,1)] absolute left-3 top-1/2 -translate-y-1/2" />

    <input 
      type="text"
      placeholder="Search <<code+s>>, programs, forms, etc."
      className="w-full pl-10 pr-4 py-1 bg-[rgba(236,240,240,1)] text-[rgba(145,177,197,1)] rounded-md text-sm outline-none border border-gray-400"
    />
  </div>
</div>

      {/* Right: Icons */}
      <div className="flex items-center  gap-4">
        <button className=" hidden md:flex items-center gap-2 bg-[rgba(145,177,197,1)] w-full md:w-30 text-sm px-3 py-1 text-gray-500 rounded-md">
            <span className="text-lg">📝</span>

          Feedback
        </button>
        <Bell className="text-white w-6 h-6 cursor-pointer" />
        <Folder className="text-white w-6 h-6 cursor-pointer" />
        <Star className="text-white w-6 h-6 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold">
          QS
        </div>
      </div>
    </header>
  );
}















