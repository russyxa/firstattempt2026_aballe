import Link from 'next/link';
import { ArrowLeft, Check, Clock } from 'lucide-react';

export default function StaticProcessingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      
      {/* Dark Blue Header */}
      <div className="bg-[#0f172a] p-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center space-x-4 max-w-3xl mx-auto w-full px-2 text-white">
          <Link href="/alumni/tracking" className="text-gray-300 hover:text-white transition">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-lg font-bold flex-1 tracking-wide">Process Documents</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 mt-8">
        
        {/* Progress Timeline - Hardcoded to 50% / Processing */}
        <div className="mb-10 relative">
          <div className="flex items-center justify-between relative z-10">
            <div className="flex flex-col items-center w-1/4">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm mb-2"><Check size={14} strokeWidth={3} /></div>
              <p className="text-[11px] font-bold text-gray-800 text-center">Submitted</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm mb-2"><Check size={14} strokeWidth={3} /></div>
              <p className="text-[11px] font-bold text-gray-800 text-center">Paid</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm mb-2"><Clock size={14} strokeWidth={3} /></div>
              <p className="text-[11px] font-bold text-gray-800 text-center">Processing</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 text-gray-300 flex items-center justify-center shadow-sm mb-2"><div className="w-2 h-2 rounded-full bg-gray-300"></div></div>
              <p className="text-[11px] font-bold text-gray-400 text-center">Ready</p>
            </div>
          </div>
          <div className="absolute top-3 left-[12.5%] right-[12.5%] h-[2px] bg-gray-200 -z-0"></div>
          <div className="absolute top-3 left-[12.5%] h-[2px] bg-blue-600 -z-0 w-2/4"></div>
        </div>

        {/* Document Details Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-[18px] font-bold text-gray-900 mb-1">Official Transcript of Records</h2>
          <p className="text-[13px] text-gray-500 font-medium mb-6">Ref No: REQ-1002</p>
          <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-5">
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Requested Date</p>
              <p className="font-semibold text-[14px] text-gray-800">Oct 12, 2023</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Estimated Release</p>
              <p className="font-semibold text-[14px] text-gray-800">Oct 25, 2023</p>
            </div>
          </div>
        </div>

        {/* Requirements Status List */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-[14px] font-bold text-gray-800 mb-4">Requirements Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100">
               <span className="text-[13px] font-semibold text-gray-700">Payment</span>
               <span className="px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md">Paid</span>
            </div>
            <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100">
               <span className="text-[13px] font-semibold text-gray-700">ID Verification</span>
               <span className="px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md">Verified</span>
            </div>
            <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100">
               <span className="text-[13px] font-semibold text-gray-700">Clearance</span>
               <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-[11px] font-bold rounded-md">Pending</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link href="/alumni/tracking/REQ-1002/rush" className="block w-full py-4 bg-[#f97316] hover:bg-orange-600 text-white text-center font-bold text-[15px] rounded-xl shadow-sm transition">
          Rush Processing
        </Link>
      </div>
    </div>
  );
}