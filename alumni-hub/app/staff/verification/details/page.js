import Link from 'next/link';
import { ArrowLeft, User, FileText, Briefcase, CheckCircle2, Calendar } from 'lucide-react';

export default function StaffVerificationDetails() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-28">

      {/* ── HEADER ── */}
      <div className="bg-[#0f172a] px-5 pt-10 pb-5 shadow-xl">
        <div className="flex items-center space-x-4">
          <Link
            href="/staff/verification"
            className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition shrink-0"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px]">Review Application</p>
            <h1 className="text-lg font-black text-white leading-tight">REQ-1002</h1>
          </div>
          <div className="ml-auto">
            <span className="text-[9px] font-black px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase">
              Urgent
            </span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-5 space-y-4">

        {/* Applicant Info */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mb-3">Applicant</p>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center border border-blue-200">
              <User size={22} className="text-blue-600" />
            </div>
            <div>
              <p className="text-base font-bold text-slate-900">Juan Dela Cruz</p>
              <p className="text-xs text-slate-500">Alumni ID: 2020-10492</p>
              <p className="text-[10px] text-slate-400 mt-0.5">BS Computer Science · Batch 2020</p>
            </div>
          </div>
        </div>

        {/* Request Details */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Request Information</p>

          <div className="flex items-start space-x-3 pb-4 border-b border-slate-50">
            <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <FileText size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Document Type</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">Transcript of Records</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 pb-4 border-b border-slate-50">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
              <Briefcase size={16} className="text-indigo-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Declared Purpose</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">Employment / Work</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 pb-4 border-b border-slate-50">
            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
              <Calendar size={16} className="text-slate-500" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Date Submitted</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">February 27, 2026 · 2 hours ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <CheckCircle2 size={16} className="text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Finance Clearance</p>
              <p className="text-sm font-bold text-emerald-600 mt-0.5">Cleared / Paid</p>
            </div>
          </div>
        </div>

        {/* Request Status Track */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mb-4">Request Status</p>
          <div className="flex items-center justify-between">
            {['Submitted', 'Verified', 'Processed', 'Ready'].map((step, i) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black ${
                  i === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {i === 0 ? '✓' : i + 1}
                </div>
                {i < 3 && (
                  <div className={`absolute ml-7 w-full h-0.5 ${i === 0 ? 'bg-emerald-200' : 'bg-slate-100'}`} />
                )}
                <p className="text-[9px] font-bold text-slate-400 mt-1 uppercase">{step}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── FIXED BOTTOM ACTIONS ── */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-100 px-5 py-4 pb-6 shadow-2xl">
        <div className="flex space-x-3">
          <Link
            href="/staff/verification"
            className="flex-1 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-600 text-center text-sm hover:bg-slate-100 transition"
          >
            Deny
          </Link>
          <Link
            href="/staff/verification/authorize"
            className="flex-[2] py-3.5 bg-[#0f172a] hover:bg-slate-800 transition rounded-2xl font-bold text-white text-center text-sm shadow-xl"
          >
            Proceed to Verify →
          </Link>
        </div>
      </div>
    </div>
  );
}