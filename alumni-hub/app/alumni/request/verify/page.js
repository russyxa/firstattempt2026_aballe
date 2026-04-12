import Link from 'next/link';
import { ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export default function VerifyIdentity() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 relative">
      
      {/* Background Overlay Simulation */}
      <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>

      {/* Modal positioned absolutely at the top */}
      <div className="max-w-lg mx-auto px-4 pt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          
          {/* Modal Header */}
          <div className="bg-[#1e3a8a] p-5 flex items-center space-x-3 text-white">
            <ShieldCheck size={20} strokeWidth={2.5} />
            <h3 className="font-bold text-[16px]">Verify Your Identity</h3>
          </div>

          {/* Modal Body */}
          <div className="p-7 space-y-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">For security purposes, please authenticate before proceeding with your document request.</p>
            
            {/* Tabs Simulation (Static) */}
            <div className="flex space-x-2 border-b border-gray-100 pb-3 mb-6">
                <button className="flex-1 py-2.5 bg-blue-50 border border-blue-100 text-blue-800 rounded-lg font-semibold text-sm flex items-center justify-center space-x-1.5">
                   <Lock size={14} /> <span>Password</span>
                </button>
                <button className="flex-1 py-2.5 text-gray-400 font-semibold text-sm hover:text-gray-800 transition flex items-center justify-center space-x-1.5">
                   <Fingerprint size={14} /> <span>Biometric</span>
                </button>
            </div>

            {/* Password Input */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Enter Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-6 border-t border-gray-100 mt-6">
                <Link href="/alumni/request/purpose" className="flex-1 text-center py-3.5 bg-white border border-gray-200 text-gray-600 font-bold text-sm rounded-xl hover:bg-gray-50 transition">
                  Cancel
                </Link>
                {/* Routes to the final Tracking screen (Step 5) */}
                <Link href="/alumni/tracking" className="flex-1 text-center py-3.5 bg-blue-900 text-white font-bold text-sm rounded-xl shadow-md hover:bg-blue-800 transition">
                  Verify Password
                </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}