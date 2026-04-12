import Link from 'next/link';
import { ArrowLeft, AlertTriangle, TrendingDown, PlusCircle, Package } from 'lucide-react';

export default function InventoryStatus() {
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
            <p className="text-[10px] font-black text-orange-400 uppercase tracking-[3px]">Inventory</p>
            <h1 className="text-lg font-black text-white leading-tight">Supply Vault</h1>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="px-5 pt-5 space-y-4">

        {/* Critical Alert */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start space-x-3">
          <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="text-red-600" size={18} />
          </div>
          <div>
            <p className="text-[11px] font-black text-red-700 uppercase tracking-tight">Critical Stock Warning</p>
            <p className="text-xs text-red-600 mt-0.5 leading-relaxed">
              Diploma Security Paper is critically low. Reorder immediately to prevent delays.
            </p>
          </div>
        </div>

        {/* Section header */}
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Current Stock Levels</p>
          <button className="flex items-center space-x-1 text-[10px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition px-3 py-1.5 rounded-full border border-blue-100">
            <PlusCircle size={12} /> <span>Add Stock</span>
          </button>
        </div>

        {/* Inventory Items */}
        <div className="space-y-3">

          {/* Low Stock */}
          <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-5 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
            <div className="pl-3">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="font-bold text-slate-800 text-sm">Diploma Security Paper</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">A4 Size · Watermarked · Item #DP-2024</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-red-600">150</p>
                  <p className="text-[10px] font-bold text-red-400 uppercase flex items-center justify-end">
                    <TrendingDown size={11} className="mr-0.5" /> Low
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                {['Min Required', 'Reorder Point', 'Daily Usage', 'Est. Days Left'].map((label, i) => (
                  <div key={label}>
                    <p className="text-[9px] text-slate-400 uppercase font-bold">{label}</p>
                    <p className="text-xs font-black text-slate-700 mt-0.5">{['≥ 500', '500', '35/avg', '~ 4 Days'][i]}</p>
                  </div>
                ))}
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }} />
              </div>
              <div className="mt-3 flex space-x-2">
                {[250, 500, 750, 1000].map((qty) => (
                  <button key={qty} className="flex-1 py-1.5 text-[10px] font-bold border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
                    {qty}
                  </button>
                ))}
              </div>
              <button className="mt-3 w-full py-2.5 bg-[#0f172a] hover:bg-slate-800 transition rounded-xl text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-lg">
                <Package size={14} /> <span>Place Order</span>
              </button>
            </div>
          </div>

          {/* Healthy: TOR Paper */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
            <div className="pl-3 flex justify-between items-start mb-2">
              <div>
                <p className="font-bold text-slate-800 text-sm">TOR Special Paper</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">Long Size · Blue border</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-slate-800">450</p>
                <p className="text-[10px] font-bold text-emerald-500 uppercase">Healthy</p>
              </div>
            </div>
            <div className="pl-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>

          {/* Healthy: Envelopes */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
            <div className="pl-3 flex justify-between items-start mb-2">
              <div>
                <p className="font-bold text-slate-800 text-sm">Official Envelopes</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">Standard with Logo</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-black text-slate-800">200</p>
                <p className="text-[10px] font-bold text-emerald-500 uppercase">Healthy</p>
              </div>
            </div>
            <div className="pl-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '40%' }} />
            </div>
          </div>

        </div>

        <p className="text-[10px] text-slate-400 text-center pt-2">↻ Last updated 5 mins ago</p>
      </div>
    </div>
  );
}