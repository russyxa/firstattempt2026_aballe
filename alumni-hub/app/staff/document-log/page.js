import Link from 'next/link';
import { ArrowLeft, ScanBarcode, CheckCircle2, History } from 'lucide-react';

// ── Shared sub-page header pattern ──
// bg-[#0f172a], flat (no rounded bottom), consistent height, back arrow + title + subtitle

export default function DocumentLogger() {
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
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px]">Registrar Staff</p>
            <h1 className="text-lg font-black text-white leading-tight">Digital Logger</h1>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-5 space-y-5">

        {/* Scanner Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Animated scan bar */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-400 animate-pulse" />
          <div className="p-6 text-center">
            <div className="w-20 h-20 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ScanBarcode size={38} className="text-indigo-600" />
            </div>
            <h2 className="text-base font-bold text-slate-800">Ready to Scan</h2>
            <p className="text-xs text-slate-500 mt-1 mb-5 px-4 leading-relaxed">
              Position the physical document barcode within the scanner range to sync records automatically.
            </p>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl font-bold text-white text-sm shadow-md shadow-indigo-600/20">
              Activate Scanner
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex bg-white rounded-xl border border-slate-100 shadow-sm p-1 space-x-1">
          {['All Logs', 'Pending Release', 'Released'].map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
                i === 0 ? 'bg-[#0f172a] text-white shadow' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recent Scans */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <History size={14} className="text-slate-400" />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Recently Logged</p>
          </div>

          <div className="space-y-3">
            {[
              { id: 'REQ-1001', doc: 'Transcript of Records', time: '10 mins ago', status: 'URGENT', statusColor: 'bg-amber-50 text-amber-600 border-amber-100' },
              { id: 'REQ-0998', doc: 'Diploma Copy', time: '1 hour ago', status: 'LOGGED', statusColor: 'bg-blue-50 text-blue-600 border-blue-100' },
              { id: 'REQ-0990', doc: 'Certificate of Enrollment', time: 'Yesterday', status: 'RELEASED', statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{item.id}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{item.doc}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border uppercase ${item.statusColor}`}>
                    {item.status}
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 text-center mt-4 font-medium">
            End of document log for April 12, 2026
          </p>
        </div>

      </div>
    </div>
  );
}