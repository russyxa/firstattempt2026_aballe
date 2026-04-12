import Link from 'next/link';
import {
  LogOut, Users, ScanBarcode, PackageOpen,
  CreditCard, Bell, ChevronRight, Activity, ShieldCheck
} from 'lucide-react';

export default function StaffDashboard() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-12">

      {/* ── HEADER ── */}
      <div className="bg-[#0f172a] px-5 pt-10 pb-6 shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Logo mark */}
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px]">Ateneo de Davao</p>
              <h1 className="text-lg font-black text-white leading-tight">Registrar Portal</h1>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center space-x-1.5 bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-white/20 transition-all px-3 py-2 rounded-xl text-xs font-bold"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </Link>
        </div>

        {/* Staff info strip */}
        <div className="mt-5 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Logged in as</p>
            <p className="text-sm font-bold text-white mt-0.5">Registrar Staff</p>
            <div className="flex items-center space-x-1.5 mt-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <p className="text-[10px] text-emerald-400 font-bold">Active Session</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Finance & Records</p>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-5 space-y-5">

        {/* Critical Alert */}
        <div className="bg-white border border-red-100 rounded-2xl p-4 flex items-start space-x-3 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
            <Bell className="text-red-500" size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-black text-red-600 uppercase tracking-tight">Critical Supply Alert</p>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
              Diploma Security Paper is at <span className="font-bold text-red-600">15 units</span> — reorder immediately.
            </p>
            <Link
              href="/staff/inventory"
              className="inline-block mt-2 text-[10px] font-black text-white bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-lg uppercase tracking-wide"
            >
              Check Supply Vault →
            </Link>
          </div>
        </div>

        {/* Core Operations */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Core Operations</p>
            <Activity size={13} className="text-slate-300" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/staff/verification"
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition">
                <Users size={20} className="text-blue-600" />
              </div>
              <p className="font-bold text-slate-800 text-sm">Review Queue</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Verify alumni identity</p>
            </Link>

            <Link
              href="/staff/document-log"
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition">
                <ScanBarcode size={20} className="text-indigo-600" />
              </div>
              <p className="font-bold text-slate-800 text-sm">Digital Logger</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Sync docs via scan</p>
            </Link>

            <Link
              href="/staff/finance"
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition">
                <CreditCard size={20} className="text-emerald-600" />
              </div>
              <p className="font-bold text-slate-800 text-sm">Finance Audit</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Match bank references</p>
            </Link>

            <Link
              href="/staff/inventory"
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3 group-hover:bg-orange-100 transition">
                <PackageOpen size={20} className="text-orange-600" />
              </div>
              <p className="font-bold text-slate-800 text-sm">Supply Vault</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Manage paper stocks</p>
            </Link>
          </div>
        </div>

        {/* Pending Worklist */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Pending Worklist</p>
            <Link
              href="/staff/verification"
              className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase hover:bg-blue-100 transition"
            >
              View All
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50">

            {/* Item 1 */}
            <Link
              href="/staff/verification/details"
              className="flex items-center justify-between p-4 hover:bg-slate-50 transition group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-xs shrink-0">BC</div>
                <div>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">Bea Christina Cale</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Profile Verify</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-black rounded-md border border-amber-100 uppercase">Urgent</span>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500 transition" />
              </div>
            </Link>

            {/* Item 2 */}
            <Link
              href="/staff/finance"
              className="flex items-center justify-between p-4 hover:bg-slate-50 transition group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 text-xs shrink-0">JA</div>
                <div>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition">Jeross P. Aballe</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase mt-0.5">REF-9921-A</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-black rounded-md border border-amber-100 uppercase">Receipt</span>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-500 transition" />
              </div>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}