import Link from 'next/link';
import {
  Settings, User, Download, FileText,
  Bell, MessageCircle, GraduationCap, LogOut, ChevronRight, ShieldCheck, Home, Clock
} from 'lucide-react';

export default function AlumniDashboard() {
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
        
        {/* Session Info */}
        <div className="px-6 py-4 bg-white/5 border-b border-white/5">
          <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Logged In As</p>
          <p className="text-sm font-bold text-white">Jeross P. Aballe</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/alumni/dashboard" className="flex items-center space-x-3 text-white bg-white/15 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Home size={18} /><span>Dashboard</span>
          </Link>
          <Link href="/alumni/profile" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
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
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 flex justify-between items-center shadow-sm">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Alumni / Dashboard</p>
            <h1 className="text-xl font-bold text-slate-800">Welcome back, Jeross!</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition">
            <Settings size={18} />
          </button>
        </div>

        {/* Scaled Grid Container */}
        <div className="max-w-5xl mx-auto w-full px-10 py-8 space-y-8">

          {/* Quick Actions - scaled to grid-cols-4 */}
          <div>
            <p className="text-base font-bold text-slate-800 mb-4">Quick Actions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/alumni/profile" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-[#1a237e]/30 hover:shadow-md transition group">
                <div className="w-12 h-12 rounded-xl bg-[#1a237e]/8 border border-[#1a237e]/15 flex items-center justify-center mb-4">
                  <User size={24} className="text-[#1a237e]" />
                </div>
                <p className="font-bold text-slate-800 text-base">View Profile</p>
                <p className="text-xs text-slate-500 mt-1">Access verified academic records</p>
              </Link>

              <Link href="/alumni/request" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-emerald-300 hover:shadow-md transition group">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                  <Download size={24} className="text-emerald-600" />
                </div>
                <p className="font-bold text-slate-800 text-base">Request Document</p>
                <p className="text-xs text-slate-500 mt-1">Order transcripts & certifications</p>
              </Link>
            </div>
          </div>

          {/* What You Can Do - scaled to grid-cols-4 */}
          <div>
            <p className="text-base font-bold text-slate-800 mb-4">What You Can Do</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/alumni/request" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:border-[#1a237e]/30 transition group flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[#1a237e]/8 border border-[#1a237e]/15 flex items-center justify-center mb-3">
                  <FileText size={22} className="text-[#1a237e]" />
                </div>
                <p className="font-bold text-slate-800 text-sm">Order Transcripts</p>
                <p className="text-xs text-slate-500 mt-1">Official records</p>
              </Link>

              <Link href="/alumni/tracking" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:border-amber-300 transition group flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3">
                  <Bell size={22} className="text-amber-500" />
                </div>
                <p className="font-bold text-slate-800 text-sm">Track Processing</p>
                <p className="text-xs text-slate-500 mt-1">3 Pending Docs</p>
              </Link>
              
              {/* Need Help CTA styled as a grid card */}
              <Link href="#" className="lg:col-span-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-2xl p-5 shadow-lg shadow-emerald-500/20 group flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">Need Help?</p>
                    <p className="text-sm text-emerald-100">Chat with our support team instantly</p>
                  </div>
                </div>
                <ChevronRight size={24} className="text-white/70 group-hover:text-white transition" />
              </Link>
            </div>
          </div>

          {/* Latest Notifications */}
          <div>
            <p className="text-base font-bold text-slate-800 mb-4">Latest Notifications</p>
            <div className="bg-[#1a237e] rounded-2xl p-5 flex items-start space-x-4 border-l-4 border-[#c8b400] shadow-md shadow-[#1a237e]/20 max-w-2xl">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-white uppercase tracking-wider mb-1">Transcript Request Approved</p>
                <p className="text-sm text-blue-200 mt-0.5 leading-relaxed">
                  Your Official Transcript of Records is ready for download. You have 14 days before the link expires.
                </p>
                <p className="text-xs text-blue-300 font-bold mt-2">2 hours ago</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}