// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      
        <div className="flex flex-col min-h-screen">
          {/* Navbar at the top */}
          <Navbar />

          {/* Sidebar + main content layout */}
          <div className="flex flex-1">
            <Slider  />
            
            {/* Main page area */}
            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
              {children}
            </main>
          </div>
        </div>
     
    
  );
}
