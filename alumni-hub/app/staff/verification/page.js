import Link from 'next/link';
import { ArrowLeft, Search, Filter, ChevronRight } from 'lucide-react';

export default function StaffVerificationList() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-10">

      {/* ── HEADER ── */}
      <div className="bg-[#0f172a] px-5 pt-10 pb-5 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/staff/dashboard"
              className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition shrink-0"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px]">Registrar Staff</p>
              <h1 className="text-lg font-black text-white leading-tight">Verification Queue</h1>
            </div>
          </div>
          <button className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-5 space-y-4">

        {/* Filter Tabs */}
        <div className="flex bg-white rounded-xl border border-slate-100 shadow-sm p-1 space-x-1">
          {['! Urgent', '◎ Normal', '⇅ Low'].map((tab, i) => (
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

        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Pending (3)</p>
          <button className="text-slate-400 hover:text-blue-600 transition">
            <Filter size={15} />
          </button>
        </div>

        {/* Request Items */}
        {[
          {
            req: 'REQ-1002',
            name: 'Juan Dela Cruz',
            degree: 'BS Computer Science · Batch 2020',
            doc: 'Transcript of Records',
            time: '2 hours ago',
            urgency: 'Urgent',
            urgencyColor: 'bg-red-50 text-red-600 border-red-100',
          },
          {
            req: 'REQ-1005',
            name: 'Bea Christina Cale',
            degree: 'AB Psychology · Batch 2021',
            doc: 'Certificate of Graduation',
            time: '4 hours ago',
            urgency: 'Normal',
            urgencyColor: 'bg-blue-50 text-blue-600 border-blue-100',
          },
          {
            req: 'REQ-1008',
            name: 'Anna Patricia Lim',
            degree: 'BS Accountancy · Batch 2022',
            doc: 'Diploma Copy',
            time: '6 hours ago',
            urgency: 'Normal',
            urgencyColor: 'bg-blue-50 text-blue-600 border-blue-100',
          },
        ].map((item) => (
          <Link
            key={item.req}
            href="/staff/verification/details"
            className="block bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:border-blue-200 hover:shadow-md transition group"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-xs font-bold text-slate-500">{item.req}</p>
              <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border uppercase ${item.urgencyColor}`}>
                {item.urgency}
              </span>
            </div>
            <p className="text-base font-bold text-[#0f172a] group-hover:text-blue-700 transition">{item.name}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{item.degree}</p>
            <p className="text-xs text-slate-500 mt-1">{item.doc}</p>
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-50">
              <p className="text-[10px] text-slate-400 font-bold">{item.time}</p>
              <ChevronRight size={15} className="text-slate-300 group-hover:text-blue-500 transition" />
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}