import Link from 'next/link';
import { ArrowLeft, ScanBarcode, CheckCircle2, History, Users, CreditCard, PackageOpen, ShieldCheck, LayoutDashboard, LogOut } from 'lucide-react';

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

export default function DocumentLogger() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="document-log" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Staff / Digital Logger</p>
            <h1 className="text-xl font-bold text-slate-800">Scan & Sync Records</h1>
          </div>
          <div className="flex bg-slate-100 rounded-xl p-1 space-x-1 shrink-0">
            {['All Logs', 'Pending', 'Released'].map((tab, i) => (
              <button key={tab} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition ${i === 0 ? 'bg-white text-[#1a2b6d] shadow' : 'text-slate-500 hover:text-slate-700'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto w-full px-10 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left: scanner (1/3) */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden sticky top-8">
                  <div className="h-1.5 w-full bg-[#1a2b6d]" />
                  <div className="p-8 text-center">
                    <div className="w-24 h-24 bg-[#1a2b6d]/8 border-2 border-[#1a2b6d]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <ScanBarcode size={48} className="text-[#1a2b6d]" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-800 mb-2">Ready to Scan</h2>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                      Position the physical document barcode within the scanner range to sync records automatically.
                    </p>
                    <button className="w-full py-4 bg-[#1a2b6d] hover:bg-[#16266b] transition rounded-2xl font-bold text-white text-base shadow-lg">
                      Activate Scanner
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: log list (2/3) */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center space-x-2 mb-2">
                  <History size={18} className="text-slate-400" />
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recently Logged</p>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'REQ-1001', doc: 'Transcript of Records', name: 'De Los Reyes, Juan A.', detail: 'ID: 19-4502 · BS CS', time: 'Today, 10:45 AM', barcode: 'BC-990-TR', status: 'URGENT', statusColor: 'bg-red-50 text-red-700 border-red-200' },
                    { id: 'REQ-0998', doc: 'Diploma Copy', name: 'Santos, Maria Clara', detail: 'ID: 20-1192 · AB POS', time: 'Today, 09:12 AM', barcode: 'BC-412-DP', status: 'LOGGED', statusColor: 'bg-[#1a2b6d]/8 text-[#1a2b6d] border-[#1a2b6d]/20' },
                    { id: 'REQ-0990', doc: 'Certificate of Enrollment', name: 'Aguinaldo, Emilio Q.', detail: 'ID: 21-0083 · BS MGT', time: 'Yesterday, 04:30 PM', barcode: 'BC-182-CE', status: 'RELEASED', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                  ].map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex items-center justify-between gap-4">
                      <div className="flex items-center space-x-5 min-w-0">
                        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={28} className="text-emerald-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center space-x-3 mb-1">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-wider">{item.id}</p>
                            <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-lg border uppercase tracking-wide ${item.statusColor}`}>{item.status}</span>
                          </div>
                          <p className="text-base font-bold text-slate-800">{item.doc}</p>
                          <p className="text-sm text-slate-500 mt-0.5">{item.name} <span className="text-slate-300 mx-1">•</span> {item.detail}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm text-slate-400">{item.time}</p>
                        <p className="text-xs font-bold text-[#1a2b6d] mt-1 bg-[#1a2b6d]/5 px-2 py-1 rounded-md inline-block">{item.barcode}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-400 text-center mt-8">End of document log for April 13, 2026</p>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}