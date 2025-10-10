import React from 'react'

export default function ProfilePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-black mb-2">My Profile</h1>
      <p className="text-gray-600 mb-8">Welcome to your profile page!</p>
      
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 pb-6 border-b">
          <div className="w-24 h-24 bg-[#5B8CA8] rounded-full flex items-center justify-center text-white text-3xl font-bold">
            OS
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">User Name</h2>
            <p className="text-gray-600">user@example.com</p>
            <button className="mt-2 px-4 py-2 bg-[#5B8CA8] text-white rounded-lg hover:bg-[#4A7591] transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Information Form */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                placeholder="Enter first name"
                defaultValue="John"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                placeholder="Enter last name"
                defaultValue="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
              placeholder="Enter email"
              defaultValue="user@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>

        {/* Account Settings */}
        <div className="space-y-6 pt-6 border-t">
          <h3 className="text-xl font-semibold text-gray-800">Account Settings</h3>
          
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
              placeholder="Enter current password"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                placeholder="Enter new password"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8CA8] focus:border-transparent"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#5B8CA8] text-white rounded-lg hover:bg-[#4A7591] transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}