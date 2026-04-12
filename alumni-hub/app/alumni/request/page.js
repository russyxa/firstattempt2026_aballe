"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Award, FileCheck, X, Zap } from 'lucide-react';

export default function RequestDocuments() {
  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center space-x-4">
          <Link href="/alumni/dashboard" className="text-gray-400 hover:text-gray-600 transition">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-lg font-bold text-blue-900 flex-1 tracking-wide">Request Documents</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 mt-8 space-y-6">
        
        {/* New/History Tabs (Static UI) */}
        <div className="bg-white p-1 rounded-xl border border-gray-100 flex shadow-inner">
          <button className="flex-1 text-center py-2.5 bg-blue-50 text-blue-900 font-bold text-sm rounded-lg shadow-sm border border-blue-100">
            New Request
          </button>
          <Link href="/alumni/tracking" className="flex-1 text-center py-2.5 text-gray-500 font-semibold text-sm hover:text-gray-800 transition">
            Request History
          </Link>
        </div>

        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Select a Document Type</h2>

        {/* --- DOCUMENT LIST --- */}
        <div className="space-y-4">
          
          {/* Document 1: TOR (Triggers Pop-Up) */}
          <button 
            onClick={() => setShowConfirmPopUp(true)}
            className="w-full text-left block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <FileText size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-[15px]">Transcript of Records</h3>
                <p className="text-xs text-gray-500 mt-0.5 mb-2 leading-relaxed">Official academic transcript with all courses and grades</p>
                <div className="flex items-center space-x-3 text-[11px] font-bold text-blue-800 tracking-wide">
                  <span>₱150</span><span className="text-gray-300">•</span><span>5-7 business days</span>
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-blue-600 transition">→</span>
            </div>
          </button>

          {/* Document 2: Diploma Copy */}
          <button className="w-full text-left block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 transition group">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                <Award size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-[15px]">Certified True Copy of Diploma</h3>
                <p className="text-xs text-gray-500 mt-0.5 mb-2 leading-relaxed">Authenticated copy of your original diploma</p>
                <div className="flex items-center space-x-3 text-[11px] font-bold text-purple-800 tracking-wide">
                  <span>₱200</span><span className="text-gray-300">•</span><span>3-5 business days</span>
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-purple-600 transition">→</span>
            </div>
          </button>

          {/* Document 3: COG */}
          <button className="w-full text-left block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 transition group">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
                <FileCheck size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-[15px]">Certificate of Graduation</h3>
                <p className="text-xs text-gray-500 mt-0.5 mb-2 leading-relaxed">Official certificate confirming degree completion</p>
                <div className="flex items-center space-x-3 text-[11px] font-bold text-green-800 tracking-wide">
                  <span>₱100</span><span className="text-gray-300">•</span><span>2-3 business days</span>
                </div>
              </div>
              <span className="text-gray-300 group-hover:text-green-600 transition">→</span>
            </div>
          </button>

        </div>
      </div>

      {/* --- CONFIRM REQUEST POP-UP (Step 2 in Flow) --- */}
      {showConfirmPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Dark Blue Header */}
            <div className="bg-[#1e3a8a] p-5 flex justify-between items-center text-white">
              <h3 className="font-bold text-[16px]">Confirm Request</h3>
              <button onClick={() => setShowConfirmPopUp(false)} className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <X size={16} />
              </button>
            </div>

            {/* Pop-Up Body */}
            <div className="p-7 space-y-6">
              <div className="flex items-center space-x-4 border border-gray-100 p-4 rounded-xl bg-gray-50 shadow-inner">
                  <FileText className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1 leading-snug">Transcript of Records</h4>
                    <p className="text-xs text-gray-500">Official academic transcript with all courses and grades</p>
                  </div>
              </div>

              <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                    <span className="text-gray-500 font-medium">Processing Fee</span>
                    <span className="font-bold text-gray-900">₱150</span>
                 </div>
                 <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                    <span className="text-gray-500 font-medium">Processing Time</span>
                    <span className="font-bold text-gray-900">5-7 business days</span>
                 </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start space-x-3">
                <Zap size={18} className="text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={2.5}/>
                <p className="text-xs text-blue-900 leading-relaxed font-medium">
                  Rush Processing (+₱200) can be applied after payment is verified.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button onClick={() => setShowConfirmPopUp(false)} className="flex-1 text-center py-3.5 bg-white border border-gray-200 text-gray-600 font-bold text-sm rounded-xl hover:bg-gray-50 transition">
                  Cancel
                </button>
                {/* Routes to the Purpose Screen */}
                <Link href="/alumni/request/purpose" className="flex-1 text-center py-3.5 bg-blue-900 text-white font-bold text-sm rounded-xl shadow-md hover:bg-blue-800 transition">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}