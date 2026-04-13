import Link from 'next/link';
import { Search, Filter, ChevronRight, Users, ScanBarcode, CreditCard, PackageOpen, ShieldCheck, LayoutDashboard, LogOut } from 'lucide-react';

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

const queue = [
  { req: 'REQ-1002', name: 'Juan Dela Cruz', degree: 'BS Computer Science · Batch 2020', doc: 'Transcript of Records', time: 'Feb 27, 2026', urgency: 'Urgent', urgencyColor: 'bg-red-50 text-red-700 border-red-200', status: 'Pending', statusColor: 'bg-amber-50 text-amber-700 border-amber-200' },
  { req: 'REQ-1005', name: 'Maria Clara Santos', degree: 'AB Psychology · Batch 2018', doc: 'Certificate of Graduation', time: 'Feb 26, 2026', urgency: 'Normal', urgencyColor: 'bg-[#1a2b6d]/5 text-[#1a2b6d] border-[#1a2b6d]/20', status: 'Processed', statusColor: 'bg-[#1a2b6d]/5 text-[#1a2b6d] border-[#1a2b6d]/20' },
  { req: 'REQ-1006', name: 'Roberto Gomez', degree: 'BS Architecture · Batch 2015', doc: 'Diploma Copy', time: 'Feb 25, 2026', urgency: 'Low', urgencyColor: 'bg-slate-100 text-slate-500 border-slate-200', status: 'Verified', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { req: 'REQ-1008', name: 'Anna Patricia Lim', degree: 'BS Accountancy · Batch 2022', doc: 'Certificate of Enrollment', time: 'Feb 25, 2026', urgency: 'Normal', urgencyColor: 'bg-[#1a2b6d]/5 text-[#1a2b6d] border-[#1a2b6d]/20', status: 'Pending', statusColor: 'bg-amber-50 text-amber-700 border-amber-200' },
];

export default function StaffVerificationList() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="verification" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Staff / Profile Management</p>
            <h1 className="text-xl font-bold text-slate-800">Review Queue</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search by name, degree, or ID..." className="pl-11 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a2b6d] w-72" />
            </div>
            <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto w-full px-10 py-8 space-y-6">
            <div className="flex bg-slate-100 rounded-xl p-1 space-x-1 w-max mb-4">
              {['! Urgent', '◎ Normal', '⇅ Low'].map((tab, i) => (
                <button key={tab} className={`px-6 py-2.5 rounded-lg text-sm font-bold transition ${i === 0 ? 'bg-white text-[#1a2b6d] shadow' : 'text-slate-500 hover:text-slate-700'}`}>
                  {tab}
                </button>
              ))}
            </div>

            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pending Requests ({queue.length})</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {queue.map((item) => (
                <Link key={item.req} href="/staff/verification/details"
                  className="block bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:border-[#1a2b6d]/40 hover:shadow-md transition group">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.req}</p>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-wider ${item.urgencyColor}`}>{item.urgency}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#1a2b6d] transition mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">{item.degree}</p>
                  <p className="text-base font-medium text-slate-700">{item.doc}</p>
                  
                  <div className="flex justify-between items-center mt-6 pt-5 border-t border-slate-100">
                    <div className="flex items-center space-x-3">
                      <span className={`text-[10px] font-black px-3 py-1 rounded-lg border uppercase tracking-wider ${item.statusColor}`}>{item.status}</span>
                      <p className="text-sm text-slate-400 font-bold">{item.time}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-[#1a2b6d]">
                      <p className="text-sm font-bold">Review</p>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}