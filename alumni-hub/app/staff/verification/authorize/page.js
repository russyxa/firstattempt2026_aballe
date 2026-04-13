import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Fingerprint, Lock, CheckCircle2, Users, ScanBarcode, CreditCard, PackageOpen, LayoutDashboard, LogOut } from 'lucide-react';

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

export default function VerificationAuthorize() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="verification" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-4">
            <Link href="/staff/verification/details" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step 2 of 2 / Review Application</p>
              <h1 className="text-xl font-bold text-slate-800">Authorize Request</h1>
            </div>
          </div>
          <span className="text-[10px] font-black px-3 py-1 rounded-lg border bg-red-50 text-red-700 border-red-200 uppercase tracking-wider">Urgent Priority</span>
        </div>

        <div className="flex-1 overflow-y-auto flex items-center justify-center p-10">
          <main className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: auth form */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-[#1a2b6d]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={28} className="text-[#1a2b6d]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-slate-800">Juan Dela Cruz</p>
                  <p className="text-sm text-slate-500 mt-0.5">REQ-1002 · Transcript of Records</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="p-8 border-b border-slate-100 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a2b6d]/10 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} className="text-[#1a2b6d]" />
                  </div>
                  <h2 className="text-xl font-black text-slate-800 mb-2">Verify Your Identity</h2>
                  <p className="text-sm text-slate-500">For security purposes, please authenticate before finalizing the student's document request.</p>
                </div>

                <div className="px-8 pt-6 pb-2">
                  <div className="flex bg-slate-100 rounded-2xl p-1.5 space-x-1.5">
                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white shadow text-sm font-bold text-[#1a2b6d]">
                      <Lock size={16} /><span>Password</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 transition">
                      <Fingerprint size={16} /><span>Biometric</span>
                    </button>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enter Password</label>
                    <input type="password" placeholder="Enter your staff password"
                      className="w-full mt-2 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-base text-slate-800 outline-none focus:border-[#1a2b6d]/50 focus:ring-2 focus:ring-[#1a2b6d]/10 transition" />
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <Link href="/staff/verification/details" className="flex-1 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-600 text-center text-base hover:bg-slate-100 transition">
                      Cancel
                    </Link>
                    <Link href="/staff/verification" className="flex-[2] py-4 bg-[#1a2b6d] hover:bg-[#16266b] transition rounded-2xl font-bold text-white text-center text-base shadow-md">
                      Verify & Authorize
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: what happens next */}
            <div className="flex flex-col justify-center">
              <div className="bg-[#1a2b6d]/5 border border-[#1a2b6d]/10 rounded-3xl p-8">
                <p className="text-sm font-black text-[#1a2b6d] uppercase tracking-widest mb-6">What happens next</p>
                <div className="space-y-6">
                  {[
                    'Request will be cryptographically marked as Verified',
                    'Alumni will be notified immediately via email',
                    'Document enters the active processing queue',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-[#1a2b6d] text-white flex items-center justify-center text-sm font-black shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-base font-medium text-slate-700 leading-relaxed mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}