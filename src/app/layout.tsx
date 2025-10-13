// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Professional Next.js Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <div className="flex flex-col min-h-screen">
          {/* Navbar at the top */}
          <Navbar />

          {/* Sidebar + main content layout */}
          <div className="flex flex-1">
            <Slider />
            
            {/* Main page area */}
            <main className="flex-1  overflow-y-auto bg-gray-51">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
