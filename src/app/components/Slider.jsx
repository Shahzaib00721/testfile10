"use client";
import { Home, Calendar, FileText, MessageSquare, Video, BarChart } from "lucide-react";

export default function Sidebar() {
  const menu = [
    {name: "Admin View"},
    { name: "Main Dashboard", active: true },
    { name: "<Ccode+s>"},
    { name: "My Website" },
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
    <aside className=" bg-[#4A7D9E] text-white font-normal w-60 min-h-screen py-5 hidden md:block">
      
      <nav className="space-y-4">
        {menu.map((item, i) => (
          <div
            key={i}
            className={`p-3  cursor-pointer ${
              item.active ? "bg-yellow-400  text-black font-semibold" : "hover:bg-yellow-400"
            }`}
          >
            {item.name }
          </div>
        ))}
      </nav>
    </aside>
  );
}
