"use client";
import Link from "next/link";



import {
  Settings,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
const menu = [
    { name: "Admin View" },
    { name: "Main Dashboard", active: true },
    { name: "<Ccode+s>",link: "/about" },
    { name: "Profile", link: "/" }, 
    { name: "My Website", link: "/login" },
    { name: "Forms" },
    { name: "Calendar" },
    { name: "Reporting" },
    { name: "Directory" },
    { name: "Messaging" },
    { name: "Video Calls" },
    { name: "Billing" },
    { name: "My Free Tools" },
    { name: "Organization" },
    { name: "Shared Items" },
  ];

  return (
    <>
    
      {/* 🔹 Fixed Menu/Cross Icon (always on top, doesn't scroll) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-15 left-4 z-[9999] p-2 bg-[rgba(74,125,158,0.95)] text-white rounded-lg  md:hidden"
      >
        {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
      
      {/* 🔹 Sidebar */}
      <aside
        className={`absolute top-12 left-0 h-280 w-60 bg-[rgba(74,125,158,0.95)] text-[rgba(255,255,255,0.95)] font-normal transform transition-transform duration-300 ease-in-out z-[999]
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
       
        <nav className="space-y-4 mt-12">
          {menu.map((item, i) => (
            <div key={i}>
              <div
                onClick={() =>
                  item.name === "Admin View" && setShowSettings(!showSettings)
                }
                className={`flex items-center justify-between p-4 cursor-pointer ${
                  item.active
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-yellow-500"
                }`}
              >
                <span>{item.name}</span>
             
                {item.name === "Admin View" && (
                  <>
                    {showSettings ? (
                      <ChevronDown size={18} className="text-gray-200" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-200" />
                    )}
                  </>
                )}
              </div>

              {item.name === "Admin View" && showSettings && (
                <div className="pl-8 text-gray-300">
                  <Settings size={20} />
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
