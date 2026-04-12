import Link from 'next/link';
import { User, Lock, Fingerprint } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mb-6 text-white font-bold text-2xl shadow-lg">
        AdDU
      </div>
      <h1 className="text-2xl font-bold text-blue-900 mb-1">Welcome, Blue Knight</h1>
      <p className="text-sm text-gray-500 mb-8">Alumni Knights Hub</p>

      <div className="w-full space-y-4 mb-6">
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="STUDENT NO. OR EMPLOYEE ID" 
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-sm"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-sm"
          />
        </div>

        <div className="text-right pb-2">
          <Link href="#" className="text-xs text-gray-500 hover:text-blue-900">Forgot password?</Link>
        </div>
      </div>

      <div className="w-full space-y-3">
        {/* UPDATED LINK HERE */}
        <Link 
          href="/alumni/dashboard" 
          className="block w-full text-center bg-blue-900 text-white font-semibold py-3.5 rounded-xl shadow-md hover:bg-blue-800 transition"
        >
          Sign In as Alumni
        </Link>
        
        <Link 
          href="/staff/dashboard" 
          className="block w-full text-center bg-white text-blue-900 border border-blue-900 font-semibold py-3.5 rounded-xl shadow-sm hover:bg-blue-50 transition"
        >
          Sign In as Office Staff
        </Link>
      </div>

      <div className="mt-8 text-center space-y-4 w-full">
        <button className="flex items-center justify-center w-full space-x-2 border border-gray-200 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">
          <Fingerprint size={18} />
          <span>Biometric Login</span>
        </button>
        
        <p className="text-xs text-gray-500">
          Don't have an account? <Link href="#" className="text-blue-900 font-semibold">Register</Link>
        </p>
      </div>
    </div>
  );
}