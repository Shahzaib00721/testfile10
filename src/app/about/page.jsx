"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [activeCode, setActiveCode] = useState("Active <Code+s>");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white  sticky top-0 z-10">
          <h1 className="text-3xl font-bold text-center pt-7 text-gray-800">My Profile</h1>
        <div className="max-w-7xl mx-auto px-4 pb-5 flex items-center justify-end">
          <div className="flex items-center space-x-2">
            <button className="p-3 hover:bg-gray-100 rounded-full">
              <img src="vector.svg" alt="" />
            </button>
            <button className="p-2 hover:bg-gray-101 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-2 flex justify-end space-x-1 text-sm">
          <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Open all</button>
          <button className="px-3 py-1 text-gray-500 hover:text-gray-700">Close all</button>
        </div>
      </div>

       <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Sidebar */}
          <div className="space-y-4">
            {/* User Card */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#5B8CA8] text-white px-6 py-4 flex items-center justify-between relative">
                <h2 className="text-lg font-medium">Janie Doe</h2>
                <div className="absolute right-4 top-14 transform -translate-y-1/2 w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-3xl font-bold text-gray-700">JD</span>
                </div>
              </div>
              <div className="px-6 py-4 pt-8">
                <button className="text-gray-400 hover:text-gray-600 ml-auto block">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

             
              <div className="px-6 pb-6 space-y-4 border-t pt-4">
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Role</span>
                  <span className="font-sm text-gray-900">Admin</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Programs</span>
                  <div className="flex items-center gap-2">
                    <span className="font-sm text-gray-900 text-right">ABC Program, XYZ Project</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-600 text-sm">Location </span>
                  <div className="flex items-center gap-3">
                    <span className="font-sm text-gray-900">Salem</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

       
            <div className="bg-white rounded-lg">
              <button className="w-full px-4 py-3 bg-[#5B8CA8] text-white font-medium rounded-t-lg flex items-center justify-between">
                <span>Assigned &lt;Code+s&gt;</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="p-4">
                <select 
                  className="w-70 px-3 py-2 text-black rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                  value={activeCode}
                   
                  onChange={(e) => setActiveCode(e.target.value)}
                  
                >
                  
                  <option>Active &lt;Code+s&gt;</option>
                 
                </select>
                <br/>
                <br/>

                <h3 className="text-end text-black  "> <span className=" text-[rgba(118,217,236,1)]">Ccode </span> Accounts</h3>
                
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between items-center">
                  <a href="#" className="text-[rgba(40,167,197,1)]  hover:underline">Timothy Burkoworth</a>
                    <span className="text-sm text-gray-500">Active Account</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-[rgba(40,167,197,1)]  hover:underline">Julie Cho</a>
                    <span className="text-sm text-gray-500">Send Invite</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-[rgba(40,167,197,1)]  hover:underline">Larry Doyo</a>
                    <span className="text-sm text-gray-500">Send Invite</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-[rgba(40,167,197,1)]  hover:underline">Chad Echo</a>
                    <span className="text-sm text-gray-500">Resend Invite</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-[rgba(40,167,197,1)] hover:underline">Charlotte Matthiasson</a>
                    <span className="text-sm text-gray-500">Active Account</span>
                  </div>
                  <a href="#" className="text-[rgba(40,167,197,1)] hover:underline text-sm">+Code+ Accounts</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Login & Security */}
            <div className="bg-white rounded-lg">
              <button className="w-full px-4 py-3 bg-[#5B8CA8] text-white font-medium rounded-t-lg flex items-center justify-between">
                <span>Login & Security</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Username</label>
                    <div className="relative">
                      <input
                        type="text"
                        value="janiedoe5"
                        readOnly
                        className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        value="••••••••••"
                        readOnly
                        className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg bg-gray-50"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                    </div>
                    <a href="#" className="text-sm text-[#5B8CA8] hover:underline mt-1 inline-block">Reset my password</a>
                  </div>
                </div>
                <a href="#" className="text-sm text-[#5B8CA8] hover:underline mt-4 inline-block">Manage two-factor authentication</a>
              </div>
            </div>

            {/* Preferred Date Format & Time Zone */}
            <div className="bg-white rounded-lg">
              <button className="w-full px-4 py-3 bg-[#5B8CA8] text-white font-medium rounded-t-lg flex items-center justify-between">
                <span>Preferred Date Format & Time Zone</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Set your preferred date format:</label>
                    <select className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent">
                      <option>Jun 1, 2025</option>
                      <option>01/06/2025</option>
                      <option>2025-06-01</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Set your preferred time zone</label>
                    <select className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent">
                      <option>Pacific (UTC -08:00) - 09:45 AM</option>
                      <option>Eastern (UTC -05:00)</option>
                      <option>Central (UTC -06:00)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg">
              <button className="w-full px-4 py-3 bg-[#5B8CA8] text-white font-medium rounded-t-lg flex items-center justify-between">
                <span>Contact Details</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <input
                      type="text"
                      value="Janie"
                      className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <input
                      type="text"
                      value="Doe"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value="janie@email.com"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Birth date</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select date"
                        className="w-full px-3 text-black py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-black text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value="555-555-5555"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Home Address */}
            <div className="bg-white rounded-lg">
              <button className="w-full px-4 py-3 bg-[#5B8CA8] text-white font-medium rounded-t-lg flex items-center justify-between">
                <span>Home Address</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Street</label>
                    <input
                      type="text"
                      placeholder="Street"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address 2</label>
                    <input
                      type="text"
                      placeholder="Address 2"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal code</label>
                    <input
                      type="text"
                      placeholder="Postal code"
                      className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}