import Link from 'next/link';
import { Search, FileText, CheckCircle, XCircle, Filter, Users, ScanBarcode, CreditCard, PackageOpen, ShieldCheck, LayoutDashboard, LogOut, AlertCircle } from 'lucide-react';

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

export default function FinanceAudit() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="finance" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Staff / Finance Audit</p>
            <h1 className="text-xl font-bold text-slate-800">Payment Verification</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search unique payment code..." className="pl-11 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a2b6d] w-72" />
            </div>
            <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto w-full px-10 py-8 space-y-8">
            
            <div className="flex bg-slate-100 rounded-xl p-1 space-x-1 w-max">
              {['All Transactions', 'Pending Verification', 'Flagged (3)'].map((tab, i) => (
                <button key={tab} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition ${i === 0 ? 'bg-white text-[#1a2b6d] shadow' : 'text-slate-500 hover:text-slate-700'}`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Pending Verification</p>
                  <div className="flex items-end space-x-3 mt-2">
                    <p className="text-5xl font-black text-amber-500 leading-none">42</p>
                    <p className="text-sm text-amber-600 font-bold mb-1">High Priority</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                  <AlertCircle size={28} className="text-amber-500" />
                </div>
              </div>
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Verified Today</p>
                  <div className="flex items-end space-x-3 mt-2">
                    <p className="text-5xl font-black text-emerald-600 leading-none">128</p>
                    <p className="text-sm text-emerald-600 font-bold mb-1">+12% vs yesterday</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle size={28} className="text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Pending Clearances */}
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Pending Clearances</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Card 1 — pending */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Ref No.</p>
                        <p className="text-xl font-black text-slate-900 tracking-tight">REF-9921-A</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Amount</p>
                        <p className="text-xl font-black text-emerald-600">₱ 450.00</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1a2b6d]/8 flex items-center justify-center shrink-0">
                        <FileText size={24} className="text-[#1a2b6d]" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-slate-800">Jeross P. Aballe</p>
                        <p className="text-sm text-slate-500">Certified Diploma Copy</p>
                      </div>
                      <div className="ml-auto">
                        <p className="text-xs text-[#1a2b6d] font-black bg-[#1a2b6d]/10 px-3 py-1 rounded-lg border border-[#1a2b6d]/20 uppercase">GCash</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-2">
                      <p className="text-sm text-slate-400">Feb 28 · 11:02 AM</p>
                      <span className="text-slate-300">•</span>
                      <p className="text-sm font-bold text-[#1a2b6d]">ATN-112-M202</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 mt-auto flex space-x-3">
                    <button className="flex-1 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-600 text-sm flex items-center justify-center space-x-2 hover:bg-slate-100 transition">
                      <XCircle size={18} /><span>Reject</span>
                    </button>
                    <button className="flex-[2] py-4 bg-[#1a2b6d] hover:bg-[#16266b] transition rounded-2xl font-bold text-white text-sm flex items-center justify-center space-x-2 shadow-md">
                      <CheckCircle size={18} /><span>Verify Payment</span>
                    </button>
                  </div>
                </div>

                {/* Card 2 — verified */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden opacity-60">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Ref No.</p>
                        <p className="text-xl font-black text-slate-900 tracking-tight">ATN-112-M202</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Amount</p>
                        <p className="text-xl font-black text-slate-500">₱ 45,200.50</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                        <FileText size={24} className="text-slate-500" />
                      </div>
                      <div>
                        <p className="text-base font-bold text-slate-800">Santos, Maria Clara</p>
                        <p className="text-sm text-slate-500">Tuition Fee</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs text-emerald-700 font-black bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 uppercase">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}