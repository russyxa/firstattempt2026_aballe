import Link from 'next/link';
import { Briefcase, PlaneTakeoff, Award, GraduationCap, FileText, ChevronRight, Home, User, Clock, ArrowLeft } from 'lucide-react';

export default function RequestPurpose() {
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
          <Link href="/alumni/request" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 2 of 3</p>
            <h1 className="text-xl font-bold text-slate-800">Select Document Purpose</h1>
          </div>
        </div>

        {/* 2/3 Split Container */}
        <div className="max-w-5xl mx-auto w-full px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Left Side: Options (2/3) */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-bold text-slate-800 mb-6">What do you need this document for?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    href: '/alumni/request/verify',
                    icon: <Briefcase size={24} className="text-[#1a237e]" />,
                    bg: 'bg-[#1a237e]/8 border-[#1a237e]/15',
                    hoverBorder: 'hover:border-[#1a237e]/40',
                    title: 'Employment / Work',
                    desc: 'Documents for job applications or employment verification',
                  },
                  {
                    href: '/alumni/request/verify',
                    icon: <PlaneTakeoff size={24} className="text-indigo-600" />,
                    bg: 'bg-indigo-50 border-indigo-100',
                    hoverBorder: 'hover:border-indigo-300',
                    title: 'Working / Studying Abroad',
                    desc: 'Documents for international opportunities requiring authentication',
                  },
                  {
                    href: '/alumni/request/verify',
                    icon: <Award size={24} className="text-emerald-600" />,
                    bg: 'bg-emerald-50 border-emerald-100',
                    hoverBorder: 'hover:border-emerald-300',
                    title: 'Board Exam / Licensure',
                    desc: 'Requirements for professional board examinations',
                  },
                  {
                    href: '/alumni/request/verify',
                    icon: <GraduationCap size={24} className="text-amber-600" />,
                    bg: 'bg-amber-50 border-amber-100',
                    hoverBorder: 'hover:border-amber-300',
                    title: 'Graduate School',
                    desc: "Application to master's or doctoral programs",
                  },
                  {
                    href: '/alumni/request/verify',
                    icon: <FileText size={24} className="text-slate-500" />,
                    bg: 'bg-slate-50 border-slate-100',
                    hoverBorder: 'hover:border-slate-300',
                    title: 'Other Purpose',
                    desc: 'Browse all available document types',
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-start space-x-4 bg-white border border-slate-200 ${item.hoverBorder} rounded-3xl p-6 shadow-sm hover:shadow-md transition group`}
                  >
                    <div className={`w-12 h-12 rounded-xl border ${item.bg} flex items-center justify-center shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-base">{item.title}</p>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side: Summary Card (1/3) */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm sticky top-32">
                <p className="text-sm font-bold text-slate-800 mb-4">Request Summary</p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  <p className="text-sm font-bold text-slate-900">Transcript of Records</p>
                  <p className="text-xs text-slate-500 mt-1">Fee: ₱150</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Selecting the correct purpose ensures we attach the right certifications (like CAV for abroad) to your documents.
                </p>
                <Link
                  href="/alumni/request"
                  className="block w-full text-center py-4 text-slate-600 bg-slate-100 font-bold text-base rounded-2xl hover:bg-slate-200 transition"
                >
                  Cancel Request
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}