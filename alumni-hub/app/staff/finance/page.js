import Link from 'next/link';
import { ArrowLeft, Search, FileText, CheckCircle, XCircle, Filter } from 'lucide-react';

export default function FinanceAudit() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-10">

      {/* ── HEADER ── */}
      <div className="bg-[#0f172a] px-5 pt-10 pb-5 shadow-xl">
        <div className="flex items-center space-x-4">
          <Link
            href="/staff/dashboard"
            className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition shrink-0"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[3px]">Finance Section</p>
            <h1 className="text-lg font-black text-white leading-tight">Finance Audit</h1>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-5 space-y-4">

        {/* Search */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center px-4 py-3 space-x-3">
          <Search size={16} className="text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search reference number (e.g. ATN-99X-2023)..."
            className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
          />
          <button className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
            <Filter size={14} className="text-slate-500" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-white rounded-xl border border-slate-100 shadow-sm p-1 space-x-1">
          {['All Transactions', 'Pending', 'Flagged 3'].map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 py-2 rounded-lg text-[11px] font-bold transition ${
                i === 0 ? 'bg-[#0f172a] text-white shadow' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Status Row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pending Verification</p>
            <p className="text-2xl font-black text-amber-500 mt-1">42</p>
            <p className="text-[10px] text-amber-500 font-bold uppercase">High Priority</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Today</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">128</p>
            <p className="text-[10px] text-emerald-500 font-bold">+12% vs yesterday</p>
          </div>
        </div>

        {/* Section label */}
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] px-1">Pending Clearances</p>

        {/* Verification Card 1 */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ref No.</p>
                <p className="text-base font-black text-slate-900">REF-9921-A</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Amount</p>
                <p className="text-base font-black text-emerald-600">₱ 450.00</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center shrink-0">
                <FileText size={16} className="text-slate-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Jeross P. Aballe</p>
                <p className="text-[10px] text-slate-500">Certified Diploma Copy</p>
              </div>
              <div className="ml-auto">
                <p className="text-[9px] text-blue-600 font-black bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">GCash</p>
              </div>
            </div>

            <div className="mt-3 flex items-center space-x-2">
              <p className="text-[10px] text-slate-400">Feb 28 · 11:02 AM</p>
              <span className="text-slate-200">•</span>
              <p className="text-[10px] font-bold text-blue-600">ATN-112-M202</p>
            </div>
          </div>

          <div className="px-5 pb-5 flex space-x-3">
            <button className="flex-1 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600 text-sm flex items-center justify-center space-x-2 hover:bg-slate-100 transition">
              <XCircle size={15} /> <span>Reject</span>
            </button>
            <button className="flex-[2] py-3 bg-emerald-600 hover:bg-emerald-700 transition rounded-xl font-bold text-white text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20">
              <CheckCircle size={15} /> <span>Verify Payment</span>
            </button>
          </div>
        </div>

        {/* Verification Card 2 — already verified */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden opacity-75">
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ref No.</p>
                <p className="text-base font-black text-slate-900">ATN-112-M202</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Amount</p>
                <p className="text-base font-black text-slate-400">₱ 45,200.50</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center shrink-0">
                <FileText size={16} className="text-slate-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Santos, Maria Clara</p>
                <p className="text-[10px] text-slate-500">Tuition Fee</p>
              </div>
              <div className="ml-auto">
                <span className="text-[9px] text-emerald-600 font-black bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">Verified</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}