import Link from 'next/link';
import {
  LogOut, Users, ScanBarcode, PackageOpen,
  CreditCard, Bell, ChevronRight, Activity, ShieldCheck, LayoutDashboard
} from 'lucide-react';

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
          <ShieldCheck size={20} className="text-blue-300" />
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

export default function StaffDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="dashboard" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Staff / Dashboard</p>
            <h1 className="text-xl font-bold text-slate-800">Registrar Operations</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto w-full px-10 py-8 space-y-8">

            {/* Alert */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                  <Bell className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-red-600 uppercase tracking-widest mb-1">Critical Supply Alert</p>
                  <p className="text-sm text-slate-600">
                    Diploma Security Paper is at <span className="font-bold text-red-600">15 units</span> — reorder immediately.
                  </p>
                </div>
              </div>
              <Link href="/staff/inventory" className="shrink-0 text-sm font-bold text-white bg-red-500 hover:bg-red-600 shadow-md transition px-6 py-3 rounded-xl">
                Check Supply Vault →
              </Link>
            </div>

            {/* Core Operations */}
            <div>
              <p className="text-base font-bold text-slate-800 mb-4">Core Operations</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { href: '/staff/verification', icon: Users, label: 'Review Queue', sub: 'Verify identity', iconClass: 'bg-[#1a2b6d]/8 border-[#1a2b6d]/15 text-[#1a2b6d]', hoverClass: 'hover:border-[#1a2b6d]/30' },
                  { href: '/staff/document-log', icon: ScanBarcode, label: 'Digital Logger', sub: 'Sync docs via scan', iconClass: 'bg-[#1a2b6d]/8 border-[#1a2b6d]/15 text-[#1a2b6d]', hoverClass: 'hover:border-[#1a2b6d]/30' },
                  { href: '/staff/finance', icon: CreditCard, label: 'Finance Audit', sub: 'Match bank ref', iconClass: 'bg-[#1a2b6d]/8 border-[#1a2b6d]/15 text-[#1a2b6d]', hoverClass: 'hover:border-[#1a2b6d]/30' },
                  { href: '/staff/inventory', icon: PackageOpen, label: 'Supply Vault', sub: 'Manage stocks', iconClass: 'bg-amber-50 border-amber-100 text-amber-600', hoverClass: 'hover:border-amber-300' },
                ].map(({ href, icon: Icon, label, sub, iconClass, hoverClass }) => (
                  <Link key={href} href={href}
                    className={`bg-white rounded-2xl p-6 border border-slate-200 ${hoverClass} hover:shadow-md transition-all group`}>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition ${iconClass}`}>
                      <Icon size={24} />
                    </div>
                    <p className="font-bold text-slate-800 text-base">{label}</p>
                    <p className="text-xs text-slate-500 mt-1">{sub}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Pending Worklist */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-base font-bold text-slate-800">Pending Worklist</p>
                <Link href="/staff/verification" className="text-xs font-bold text-[#1a2b6d] bg-[#1a2b6d]/8 px-4 py-1.5 rounded-full uppercase hover:bg-[#1a2b6d]/15 transition">
                  View All
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
                {[
                  { href: '/staff/verification/details', initials: 'BC', bg: 'bg-[#1a2b6d]/10 text-[#1a2b6d]', name: 'Bea Christina Cale', sub: 'Profile Verify', badge: 'Urgent' },
                  { href: '/staff/finance', initials: 'JA', bg: 'bg-emerald-100 text-emerald-700', name: 'Jeross P. Aballe', sub: 'REF-9921-A', badge: 'Receipt' },
                ].map((item) => (
                  <Link key={item.name} href={item.href}
                    className="flex items-center justify-between px-6 py-5 hover:bg-slate-50 transition group">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${item.bg}`}>{item.initials}</div>
                      <div>
                        <p className="text-base font-bold text-slate-800 group-hover:text-[#1a2b6d] transition">{item.name}</p>
                        <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-wider">{item.sub}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-black rounded-lg border border-amber-200 uppercase">{item.badge}</span>
                      <ChevronRight size={20} className="text-slate-300 group-hover:text-[#1a2b6d] transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}