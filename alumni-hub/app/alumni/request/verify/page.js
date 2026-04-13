import Link from 'next/link';
import { ShieldCheck, Lock, Fingerprint, ArrowLeft, Home, FileText, Clock, Award } from 'lucide-react';

export default function VerifyIdentity() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">

      {/* ── STICKY SIDEBAR ── */}
      <div className="w-60 bg-[#1a2b6d] shrink-0 sticky top-0 h-screen flex flex-col shadow-xl z-50">
        <div className="p-6 border-b border-white/10 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Award size={20} className="text-blue-300" />
          </div>
          <div>
            <h2 className="text-white font-bold text-base leading-tight">Alumni Hub</h2>
            <p className="text-blue-300 text-xs mt-0.5">AdDU Portal</p>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto mt-4">
          <Link href="/alumni/dashboard" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Home size={18} /><span>Dashboard</span>
          </Link>
          <Link href="/alumni/request" className="flex items-center space-x-3 text-white bg-white/15 px-4 py-3 rounded-xl transition font-medium text-sm">
            <FileText size={18} /><span>Request Docs</span>
          </Link>
          <Link href="/alumni/tracking" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Clock size={18} /><span>Tracking</span>
          </Link>
        </nav>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex items-center space-x-4">
          <Link href="/alumni/request/purpose" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 3 of 3</p>
            <h1 className="text-xl font-bold text-slate-800">Verify Your Identity</h1>
          </div>
        </div>

        {/* Centered Desktop Layout */}
        <div className="flex-1 flex items-center justify-center p-10">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden w-full max-w-xl">
            
            <div className="p-10 space-y-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#1a237e]/10 flex items-center justify-center mb-4">
                  <ShieldCheck size={32} className="text-[#1a237e]" />
                </div>
                <h3 className="font-bold text-slate-800 text-2xl mb-2">Final Verification</h3>
                <p className="text-sm text-slate-500">Authenticate before we process your document request.</p>
              </div>

              {/* Request Summary Box */}
              <div className="bg-[#1a237e]/5 border border-[#1a237e]/15 rounded-2xl p-5 text-center">
                <p className="text-xs font-bold text-[#1a237e] uppercase tracking-widest mb-2">Confirming Request For</p>
                <p className="text-lg font-bold text-[#1a237e]">Transcript of Records</p>
                <p className="text-sm text-[#1a237e]/70 mt-1">Employment / Work · ₱150</p>
              </div>

              {/* Auth Methods */}
              <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 space-x-1.5">
                <button className="flex-1 py-3 rounded-xl shadow font-bold text-sm flex justify-center items-center space-x-2 text-white" style={{ background: 'linear-gradient(135deg, #1a237e, #283593)' }}>
                  <Lock size={16} /> <span>Password</span>
                </button>
                <button className="flex-1 py-3 font-bold text-sm flex justify-center items-center space-x-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 rounded-xl transition">
                  <Fingerprint size={16} /> <span>Biometric</span>
                </button>
              </div>

              {/* Password Input */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enter Password</label>
                <input
                  type="password"
                  placeholder="Enter your ADDU portal password"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/20 text-base text-slate-800 transition"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <Link href="/alumni/request/purpose" className="flex-1 text-center py-4 bg-slate-50 border border-slate-200 text-slate-600 font-bold text-base rounded-2xl hover:bg-slate-100 transition">
                  Back
                </Link>
                <Link href="/alumni/tracking" className="flex-[2] text-center py-4 font-bold text-white text-base rounded-2xl shadow-lg transition hover:opacity-90" style={{ background: 'linear-gradient(135deg, #1a237e, #283593)' }}>
                  Verify & Submit Request
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}