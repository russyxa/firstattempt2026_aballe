import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export default function StaffVerificationAuthorize() {
  return (
    <div className="min-h-screen bg-[#f0f4f8]">

      {/* ── HEADER ── */}
      <div className="bg-[#0f172a] px-5 pt-10 pb-5 shadow-xl">
        <div className="flex items-center space-x-4">
          <Link
            href="/staff/verification/details"
            className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition shrink-0"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px]">Registrar Staff</p>
            <h1 className="text-lg font-black text-white leading-tight">Authorization</h1>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-10 flex flex-col items-center">

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-white border border-blue-100 shadow-lg flex items-center justify-center mb-6">
          <ShieldCheck size={38} className="text-blue-700" />
        </div>

        <h2 className="text-xl font-black text-slate-900 mb-1">Staff Authorization</h2>
        <p className="text-sm text-slate-500 text-center mb-2 px-4 leading-relaxed">
          Authenticate your identity to officially verify and approve
        </p>
        <p className="text-sm font-bold text-blue-700 mb-8 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          REQ-1002 · Juan Dela Cruz
        </p>

        <div className="w-full space-y-5">

          {/* Auth Method Tabs */}
          <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm space-x-1">
            <button className="flex-1 py-3 bg-[#0f172a] rounded-xl shadow font-bold text-xs flex justify-center items-center space-x-2 text-white">
              <Lock size={13} /> <span>Password</span>
            </button>
            <button className="flex-1 py-3 font-bold text-xs flex justify-center items-center space-x-2 text-slate-400 hover:text-slate-600 transition">
              <Fingerprint size={13} /> <span>Biometric</span>
            </button>
          </div>

          {/* PIN Input */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mb-3">Registrar PIN</p>
            <input
              type="password"
              placeholder="••••••"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center text-3xl tracking-[12px] focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
            />
          </div>

          {/* Confirm Button */}
          <Link
            href="/staff/dashboard"
            className="block w-full py-4 bg-[#0f172a] hover:bg-slate-800 transition rounded-2xl font-bold text-white text-center text-sm shadow-xl shadow-slate-900/20"
          >
            Confirm Approval
          </Link>

          <p className="text-[10px] text-slate-400 text-center">
            This action will be logged and is irreversible.
          </p>
        </div>
      </div>
    </div>
  );
}