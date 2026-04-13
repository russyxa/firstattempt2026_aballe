import Link from 'next/link';
import { AlertTriangle, TrendingDown, PlusCircle, Package, Users, ScanBarcode, CreditCard, PackageOpen, ShieldCheck, LayoutDashboard, LogOut } from 'lucide-react';

const navItems = [
  { href: '/staff/dashboard', icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
  { href: '/staff/verification', icon: Users, label: 'Review Queue', key: 'verification' },
  { href: '/staff/document-log', icon: ScanBarcode, label: 'Digital Logger', key: 'document-log' },
  { href: '/staff/finance', icon: CreditCard, label: 'Finance Audit', key: 'finance' },
  { href: '/staff/inventory', icon: PackageOpen, label: 'Supply Vault', key: 'inventory' },
];

function Sidebar({ active }) {
  return (
    <div className="w-60 bg-[#1a2b6d] shrink-0 sticky top-0 h-screen flex flex-col shadow-xl z-50">
      <div className="p-6 border-b border-white/10 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          <ShieldCheck size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-white font-bold text-base leading-tight">Registrar Hub</h2>
          <p className="text-blue-300 text-xs mt-0.5">AdDU Portal</p>
        </div>
      </div>
      <div className="px-6 py-4 bg-white/5 border-b border-white/5">
        <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Logged In As</p>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-bold text-white">Registrar Staff</p>
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map(({ href, icon: Icon, label, key }) => (
          <Link key={key} href={href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition font-medium text-sm ${
              active === key ? 'bg-white/15 text-white' : 'text-blue-200 hover:bg-white/10 hover:text-white'
            }`}>
            <Icon size={18} /><span>{label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <Link href="/" className="flex w-full items-center space-x-3 text-red-300 hover:text-red-100 hover:bg-red-500/10 px-4 py-3 rounded-xl transition font-medium text-sm">
          <LogOut size={18} /><span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
}

export default function InventoryStatus() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="inventory" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Staff / Inventory</p>
            <h1 className="text-xl font-bold text-slate-800">Supply Vault Alerts</h1>
          </div>
          <button className="flex items-center space-x-2 text-sm font-bold text-white bg-[#1a2b6d] hover:bg-[#16266b] shadow-md transition px-5 py-3 rounded-xl border border-[#1a2b6d]/15">
            <PlusCircle size={18} /><span>Add Stock</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto w-full px-10 py-8 space-y-8">

            {/* Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex items-center space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="text-amber-600" size={28} />
              </div>
              <div>
                <p className="text-base font-black text-amber-800 uppercase tracking-wider mb-1">Critical Alert: Stock Low</p>
                <p className="text-sm text-amber-700">Diploma Paper stock is below the 20% safety threshold. Immediate replenishment required to avoid operation delays.</p>
              </div>
            </div>

            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Current Stock Levels</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Low Stock (2/3) */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-red-200 shadow-sm p-8 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500" />
                <div className="pl-4">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Diploma Paper</h2>
                      <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Official Parchment · A4 120gsm · #DP-2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-5xl font-black text-red-600 leading-none">150</p>
                      <p className="text-sm font-bold text-red-500 uppercase flex items-center justify-end mt-2">
                        <TrendingDown size={16} className="mr-1" /> Sheets Left
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '10%' }} />
                  </div>
                  <p className="text-xs text-slate-400 mb-8 font-bold tracking-wide">Threshold reached 2 hours ago</p>

                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Quick Reorder</p>
                    <div className="flex space-x-3 mb-4">
                      {[250, 500, 750, 1000].map((qty) => (
                        <button key={qty} className="flex-1 py-3 text-sm font-bold bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-[#1a2b6d]/5 hover:border-[#1a2b6d]/30 hover:text-[#1a2b6d] transition shadow-sm">
                          {qty}
                        </button>
                      ))}
                    </div>
                    <button className="w-full py-4 bg-[#1a2b6d] hover:bg-[#16266b] shadow-md transition rounded-xl text-white text-base font-bold flex items-center justify-center space-x-2">
                      <Package size={20} /><span>Place Supplier Order</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Healthy items (1/3) */}
              <div className="space-y-6">
                {[
                  { name: 'TOR Special Paper', sub: 'Long Size · Blue border', qty: 450, pct: 75 },
                  { name: 'Official Envelopes', sub: 'Standard with Logo', qty: 200, pct: 40 },
                ].map((item) => (
                  <div key={item.name} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500" />
                    <div className="pl-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="font-bold text-slate-800 text-lg">{item.name}</p>
                          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{item.sub}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-black text-slate-800 leading-none">{item.qty}</p>
                          <p className="text-xs font-bold text-emerald-600 uppercase mt-1">Healthy</p>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-400 text-center font-medium">↻ Last updated 5 mins ago</p>
          </main>
        </div>
      </div>
    </div>
  );
}