"use client";
import { Home, Calendar, FileText, MessageSquare, Video, BarChart, Settings, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);

  const menu = [
    { name: "Admin View" },
    { name: "Main Dashboard", active: true },
    { name: "<Ccode+s>" },
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
    <aside className="bg-[rgba(74,125,158,0.95)] text-white font-normal w-60 min-h-screen  hidden md:block">
      <nav className="space-y-4">
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
                    <div className="text-gray-400">
                    <ChevronDown size={18} />
                    </div>
                  ) : (
                      <div className="text-gray-400">
                    <ChevronRight size={18} />
                    </div>
                  )}
                </>
              )}
            </div>

        
            {item.name === "Admin View" && showSettings && (
              <div className="pl-8 text-gray-400">
                <Settings size={20} />
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
