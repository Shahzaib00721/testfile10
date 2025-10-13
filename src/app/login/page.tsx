export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">My Profile</h1>
        <p className="text-center text-gray-600 mb-8">Welcome to your profile page!</p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#5B8CA8] text-white py-3 rounded-lg font-medium hover:bg-[#4A7591] transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#5B8CA8] hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}