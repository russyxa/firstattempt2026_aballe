import Link from 'next/link';
import { ArrowLeft, Clock, AlertCircle, FileText, CheckCircle } from 'lucide-react';

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      
      {/* Dark Blue Header */}
      <div className="bg-[#0f172a] p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center space-x-4 max-w-3xl mx-auto w-full px-2 text-white">
          <Link href="/alumni/dashboard" className="text-gray-300 hover:text-white transition">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-lg font-bold flex-1 tracking-wide">Document Tracker</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 mt-8">
        
        {/* --- NEW SUMMARY CARDS --- */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          
          {/* Pending Card */}
          <div className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-2.5 py-1.5 w-max shadow-sm border border-gray-100 mb-4">
              <Clock size={14} className="text-blue-600" strokeWidth={2.5} />
              <span className="text-[11px] font-bold text-blue-800 tracking-wider">PENDING</span>
            </div>
            <p className="text-4xl font-extrabold text-[#1e3a8a] mb-1">1</p>
            <p className="text-[13px] font-medium text-blue-600">Documents in process</p>
          </div>

          {/* Attention Card */}
          <div className="bg-[#fffbeb] border border-amber-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-2.5 py-1.5 w-max shadow-sm border border-gray-100 mb-4">
              <AlertCircle size={14} className="text-[#d97706]" strokeWidth={2.5} />
              <span className="text-[11px] font-bold text-[#92400e] tracking-wider">COMPLETED</span>
            </div>
            <p className="text-4xl font-extrabold text-[#78350f] mb-1">1</p>
            <p className="text-[13px] font-medium text-[#d97706]">Documents processed</p>
          </div>
          
        </div>

        {/* ACTIVE REQUESTS LIST */}
        <h2 className="text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-4">Active Requests</h2>
        
        <div className="space-y-4">
          
          {/* Document 1: Processing (REQ-1002) */}
          <Link href="/alumni/tracking/REQ-1002" className="block bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="flex space-x-3">
                <div className="mt-1 text-blue-500">
                   <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-gray-900">Official Transcript of Records</h3>
                  <p className="text-[12px] text-gray-500 mt-0.5">Ref: REQ-1002 • Requested Oct 12</p>
                </div>
              </div>
              <span className="flex items-center space-x-1 px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[11px] font-bold rounded-full">
                <Clock size={12} strokeWidth={2.5} />
                <span>Processing</span>
              </span>
            </div>
            
            {/* Progress Bar - 50% */}
            <div>
              <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-1.5">
                <span>Progress</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </Link>

          {/* Document 2: Ready (REQ-1001) */}
          <Link href="/alumni/tracking/REQ-1001" className="block bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="flex space-x-3">
                <div className="mt-1 text-green-500">
                   <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-gray-900">Certificate of Graduation</h3>
                  <p className="text-[12px] text-gray-500 mt-0.5">Ref: REQ-1001 • Requested Oct 05</p>
                </div>
              </div>
              <span className="flex items-center space-x-1 px-2.5 py-1 bg-green-50 text-green-700 border border-green-100 text-[11px] font-bold rounded-full">
                <CheckCircle size={12} strokeWidth={2.5} />
                <span>Ready</span>
              </span>
            </div>
            
            {/* Progress Bar - 100% */}
            <div>
              <div className="flex justify-between text-[11px] font-bold text-gray-500 mb-1.5">
                <span>Progress</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}