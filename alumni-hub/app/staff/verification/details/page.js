import Link from 'next/link';
import { ArrowLeft, User, FileText, Briefcase, CheckCircle2, Calendar, Users, ScanBarcode, CreditCard, PackageOpen, ShieldCheck, LayoutDashboard, LogOut, Download, XCircle } from 'lucide-react';

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

export default function StaffVerificationDetails() {
  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">
      <Sidebar active="verification" />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <Link href="/staff/verification" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Staff / Review Queue / Application</p>
              <h1 className="text-xl font-bold text-slate-800">REQ-1002</h1>
            </div>
          </div>
          <span className="text-[10px] font-black px-3 py-1 rounded-lg border bg-red-50 text-red-700 border-red-200 uppercase tracking-wider">Urgent Priority</span>
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto w-full px-10 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left Column (2/3) */}
              <div className="lg:col-span-2 space-y-6">

                {/* Applicant Info */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Applicant</p>
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#1a2b6d]/10 flex items-center justify-center border border-[#1a2b6d]/20 shrink-0">
                      <User size={36} className="text-[#1a2b6d]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">Juan Dela Cruz</p>
                      <p className="text-base text-slate-500 mt-1">Alumni ID: 2020-10492</p>
                      <p className="text-sm text-slate-400 mt-1">BS Computer Science · Batch 2020</p>
                    </div>
                  </div>
                </div>

                {/* Documents Requested */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Documents Requested</p>
                  <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6 flex items-start space-x-5">
                    <div className="w-14 h-14 rounded-xl bg-[#1a2b6d]/10 flex items-center justify-center shrink-0">
                      <FileText size={24} className="text-[#1a2b6d]" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-800">Transcript of Records</p>
                      <p className="text-sm text-slate-500 mt-1">Official academic transcript with all courses and grades</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <p className="text-sm font-bold text-slate-700 bg-white px-3 py-1 rounded-md border border-slate-200">₱150</p>
                        <span className="text-slate-300">•</span>
                        <p className="text-sm text-slate-500 font-medium">5–7 business days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Request Details */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Request Information</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: Briefcase, color: 'bg-slate-100', iconColor: 'text-slate-500', label: 'Declared Purpose', value: 'Employment / Work' },
                      { icon: Calendar, color: 'bg-slate-100', iconColor: 'text-slate-500', label: 'Date Submitted', value: 'Feb 27, 2026 · 2 hrs ago' },
                      { icon: CheckCircle2, color: 'bg-emerald-100', iconColor: 'text-emerald-600', label: 'Finance Clearance', value: 'Cleared / Paid', valueColor: 'text-emerald-600' },
                    ].map(({ icon: Icon, color, iconColor, label, value, valueColor }) => (
                      <div key={label} className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                          <Icon size={20} className={iconColor} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{label}</p>
                          <p className={`text-base font-bold mt-1 ${valueColor || 'text-slate-800'}`}>{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (1/3) */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Status Tracker */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Request Status</p>
                  <div className="space-y-6">
                    {['Submitted', 'Verified', 'Processed', 'Ready'].map((step, i) => (
                      <div key={step} className="flex items-center space-x-4 relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0 z-10 ${
                          i === 0 ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {i === 0 ? '✓' : i + 1}
                        </div>
                        {i < 3 && <div className={`w-1 h-10 absolute left-[18px] top-8 -z-0 ${i === 0 ? 'bg-emerald-200' : 'bg-slate-100'}`} />}
                        <p className={`text-base font-bold ${i === 0 ? 'text-emerald-600' : 'text-slate-400'}`}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 space-y-4 sticky top-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Actions</p>
                  <Link href="/staff/verification/authorize"
                    className="flex w-full items-center justify-center py-4 bg-[#1a2b6d] hover:bg-[#16266b] transition rounded-2xl font-bold text-white text-base shadow-md">
                    Proceed to Verify →
                  </Link>
                  <Link href="/staff/verification"
                    className="flex w-full items-center justify-center py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-600 text-base hover:bg-slate-100 transition">
                    Deny Request
                  </Link>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}