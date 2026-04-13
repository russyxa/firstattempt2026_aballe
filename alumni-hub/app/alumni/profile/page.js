import Link from 'next/link';
import {
  ArrowLeft, MapPin, Mail, Phone, Calendar,
  User, GraduationCap, Award, Download, ShieldCheck, Fingerprint, Home, FileText, Clock, LogOut
} from 'lucide-react';

export default function AlumniProfile() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">

      {/* ── STICKY SIDEBAR ── */}
      <div className="w-60 bg-[#1a2b6d] shrink-0 sticky top-0 h-screen flex flex-col shadow-xl z-50">
        <div className="p-6 border-b border-white/10 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <GraduationCap size={20} className="text-blue-300" />
          </div>
          <div>
            <h2 className="text-white font-bold text-base leading-tight">Alumni Hub</h2>
            <p className="text-blue-300 text-xs mt-0.5">AdDU Portal</p>
          </div>
        </div>
        <div className="px-6 py-4 bg-white/5 border-b border-white/5">
          <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Logged In As</p>
          <p className="text-sm font-bold text-white">Jeross P. Aballe</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/alumni/dashboard" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Home size={18} /><span>Dashboard</span>
          </Link>
          <Link href="/alumni/profile" className="flex items-center space-x-3 text-white bg-white/15 px-4 py-3 rounded-xl transition font-medium text-sm">
            <User size={18} /><span>Profile</span>
          </Link>
          <Link href="/alumni/request" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <FileText size={18} /><span>Request Docs</span>
          </Link>
          <Link href="/alumni/tracking" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Clock size={18} /><span>Tracking</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex w-full items-center space-x-3 text-red-300 hover:text-red-100 hover:bg-red-500/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <LogOut size={18} /><span>Sign Out</span>
          </Link>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex items-center space-x-4">
          <Link href="/alumni/dashboard" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Alumni / Profile</p>
            <h1 className="text-xl font-bold text-slate-800">My Academic Passport</h1>
          </div>
        </div>

        {/* Layout Split: 2/3 + 1/3 Grid Container */}
        <div className="max-w-5xl mx-auto w-full px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column (2/3) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Hero Card */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-[#1a237e]/10 border-2 border-[#1a237e]/20 flex items-center justify-center shrink-0 relative">
                    <User size={40} className="text-[#1a237e]" />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                      <ShieldCheck size={16} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Jeross P. Aballe</h2>
                    <p className="text-sm text-slate-500 mt-1">Student No. 20180234</p>
                    <div className="flex items-center space-x-2 mt-2 bg-emerald-50 px-3 py-1.5 rounded-lg w-max">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <p className="text-xs text-emerald-700 font-bold">Verified by Registrar</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a237e]/8 flex items-center justify-center shrink-0">
                      <GraduationCap size={22} className="text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Degree</p>
                      <p className="text-sm font-bold text-slate-800">BS in Information Technology</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                      <Calendar size={22} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Graduated</p>
                      <p className="text-sm font-bold text-slate-800">March 2028</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <Award size={22} className="text-amber-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Honors</p>
                      <p className="text-sm font-bold text-slate-800">Cum Laude</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                <p className="text-lg font-bold text-slate-800 mb-6">Contact Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm font-bold text-slate-800">jaballe@addu.edu.ph</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-sm font-bold text-slate-800">+63 912 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 md:col-span-2">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm font-bold text-slate-800">Davao City, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (1/3) */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Security Note */}
              <div className="bg-[#1a237e]/5 border border-[#1a237e]/15 rounded-3xl p-6 flex flex-col space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1a237e]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={28} className="text-[#1a237e]" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#1a237e]">Ateneo de Davao University</p>
                  <p className="text-sm text-[#1a237e]/70 mt-2 leading-relaxed">
                    This credential is cryptographically secured and synced with the AdDU Registrar's Office. Share it instantly with employers for verification.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  className="w-full py-4 font-bold text-white text-base flex items-center justify-center space-x-3 rounded-2xl shadow-lg transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #c8b400 100%)' }}
                >
                  <Download size={20} />
                  <span>Share Credential</span>
                </button>

                <button className="w-full py-4 bg-white border border-slate-200 text-slate-600 font-bold text-base rounded-2xl flex items-center justify-center space-x-3 hover:bg-slate-50 transition shadow-sm">
                  <Download size={20} />
                  <span>Download PDF</span>
                </button>
              </div>

              {/* Quick Login Settings */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
                <p className="text-base font-bold text-slate-800 mb-4">Security</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                      <Fingerprint size={24} className="text-slate-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Biometric Login</p>
                      <p className="text-xs text-slate-500 mt-1">Enable for faster access</p>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 bg-[#1a237e] hover:bg-[#283593] transition text-white text-sm font-bold rounded-xl shadow">
                    Enable
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}