import Link from 'next/link';
import { Settings, User, Download, FileText, Bell, MessageCircle, GraduationCap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Top Header / Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm">
               AdDU
             </div>
             <h1 className="text-lg font-bold text-blue-900 hidden sm:block">Alumni Hub</h1>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Container - Constrained for Web */}
      <div className="max-w-3xl mx-auto px-4 mt-8 space-y-8">
        
        {/* Welcome Hero Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 shadow-sm text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <GraduationCap size={120} className="-mt-4 -mr-4" />
          </div>
          <div className="relative z-10">
            <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Dashboard</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome, Blue Knight!</h2>
            <p className="text-blue-100 text-sm max-w-md">Access your verified academic records, track requests, and manage your alumni profile easily.</p>
          </div>
        </div>

        {/* Quick Actions (Grid Format) */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/alumni/profile" className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition group">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mr-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <User size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm">View Profile</h3>
                <p className="text-xs text-gray-500 mt-0.5">Access verified records</p>
              </div>
              <span className="text-gray-300 group-hover:text-blue-600 transition">→</span>
            </Link>

            <Link href="/alumni/request" className="flex items-center p-5 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-green-300 hover:shadow-md transition group">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl mr-4 group-hover:bg-green-600 group-hover:text-white transition">
                <Download size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm">Request Document</h3>
                <p className="text-xs text-gray-500 mt-0.5">Order transcripts & certs</p>
              </div>
              <span className="text-gray-300 group-hover:text-green-600 transition">→</span>
            </Link>
          </div>
        </div>

        {/* What You Can Do (Grid Format) */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/alumni/request" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-start hover:border-blue-300 hover:shadow-md transition">
              <div className="p-3 bg-blue-50 text-blue-900 rounded-xl mb-4">
                <FileText size={20} />
              </div>
              <h3 className="font-bold text-sm text-gray-800 mb-1">Request Documents</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Order physical or digital copies of your official academic files.</p>
            </Link>
            
            <Link href="/alumni/tracking" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-start hover:border-orange-300 hover:shadow-md transition">
              <div className="p-3 bg-orange-50 text-orange-500 rounded-xl mb-4">
                <Bell size={20} />
              </div>
              <h3 className="font-bold text-sm text-gray-800 mb-1">Process Documents</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Check the real-time status of your ongoing document requests.</p>
            </Link>
          </div>
        </div>

        {/* Help & Support */}
        <button className="w-full flex items-center justify-between bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:border-gray-300 hover:bg-gray-50 transition group">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-100 text-gray-600 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition">
              <MessageCircle size={20} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-sm text-gray-800">Need Help?</h3>
              <p className="text-xs text-gray-500">Chat with our alumni support team</p>
            </div>
          </div>
          <span className="text-gray-400 group-hover:text-blue-600 font-bold">→</span>
        </button>

      </div>
    </div>
  );
}