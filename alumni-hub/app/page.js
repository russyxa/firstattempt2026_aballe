import Link from 'next/link';
import { User, Lock, Fingerprint, ShieldCheck } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">
      
      {/* ── LEFT PANEL: BRANDING (Hidden on mobile, 50% width on desktop) ── */}
      <div className="hidden lg:flex flex-col w-1/2 p-12 relative"
           style={{ background: 'linear-gradient(135deg, #1a2b6d 0%, #121e4f 100%)' }}>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border-4 border-white/20" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border-4 border-white/20" />
        </div>

        {/* Brand Text & Logo - Centered Vertically in the remaining space */}
        <div className="flex-0 flex flex-col justify-center relative z-10">
          
          {/* Even BIGGER Logo */}
          <div className="mb-0">
            <img 
              src="/knightslogo.png" 
              alt="AdDU Knight Logo" 
              className="w-96 h-auto object-contain brightness-0 invert" 
            />
          </div>

          <h1 className="text-5xl font-black text-white leading-tight mb-4">
            Ateneo de Davao <br /> <span className="text-[#c8b400]">Alumni Knights Hub</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-md leading-relaxed">
            Your secure portal for verified academic records, document requests, and registrar services.
          </p>
        </div>

        {/* Footer Text - Pinned to bottom */}
        <div className="relative z-10 text-blue-300/60 text-sm font-medium mt-auto">
          © 2026 Ateneo de Davao University. All rights reserved.
        </div>
      </div>

      {/* ── RIGHT PANEL: LOGIN FORM (100% width on mobile, 50% on desktop) ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f0f2f5] p-6 lg:p-12 relative">
        
        {/* Form Container */}
        <div className="w-full max-w-md bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center">

          {/* Mobile Header (Only visible on small screens) */}
          <div className="lg:hidden flex flex-col items-center mb-8">
            <img 
              src="/knightslogo.png" 
              alt="AdDU Knight Logo" 
              className="w-24 h-auto object-contain mb-4" 
            />
            <h1 className="text-2xl font-bold text-slate-800">Alumni Hub</h1>
          </div>

          {/* Header */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Welcome Back</h2>
            <p className="text-sm text-slate-500 mt-2">Please sign in to your account.</p>
          </div>

          {/* Input Fields */}
          <div className="space-y-5">
            {/* Student Number */}
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Student Number</p>
              <div className="relative">
                <User className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="e.g. 20210001"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a2b6d] focus:ring-2 focus:ring-[#1a2b6d]/20 text-sm text-slate-800 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</p>
                <Link href="#" className="text-[10px] font-bold text-[#1a2b6d] hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-slate-400" size={18} />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a2b6d] focus:ring-2 focus:ring-[#1a2b6d]/20 text-sm text-slate-800 transition"
                />
              </div>
            </div>
          </div>

          {/* Buttons Area */}
          <div className="mt-8 space-y-4">
            {/* Primary Login Button */}
            <Link
              href="/alumni/dashboard"
              className="flex w-full items-center justify-center font-bold py-4 rounded-xl shadow-md text-white text-sm transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1a2b6d 0%, #283593 50%, #c8b400 100%)' }}
            >
              Sign In
            </Link>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Or continue with</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* Google / Univ Email */}
            <button className="w-full flex items-center justify-center space-x-3 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition shadow-sm">
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              <span>University Email</span>
            </button>
          </div>

          {/* Footer Quick Links */}
          <div className="mt-8 flex items-center justify-between text-xs">
            <Link href="/staff/dashboard" className="text-slate-500 font-bold hover:text-[#1a2b6d] transition flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-slate-100">
              <ShieldCheck size={16} />
              <span>Staff Login</span>
            </Link>
            <button className="text-slate-500 font-bold hover:text-[#1a2b6d] transition flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-slate-100">
              <Fingerprint size={16} />
              <span>Biometric</span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Don't have an account?{' '}
              <Link href="#" className="text-[#1a2b6d] font-bold hover:underline">Register</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}