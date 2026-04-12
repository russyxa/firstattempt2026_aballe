"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Download, X } from 'lucide-react';

export default function StaticReadyPage() {
  const [showModal, setShowModal] = useState(false);

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
        
        {/* Progress Timeline - Hardcoded to 100% / Ready */}
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
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm mb-2"><Check size={14} strokeWidth={3} /></div>
              <p className="text-[11px] font-bold text-gray-800 text-center">Processing</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm mb-2"><Check size={14} strokeWidth={3} /></div>
              <p className="text-[11px] font-bold text-gray-800 text-center">Ready</p>
            </div>
          </div>
          <div className="absolute top-3 left-[12.5%] right-[12.5%] h-[2px] bg-gray-200 -z-0"></div>
          <div className="absolute top-3 left-[12.5%] h-[2px] bg-blue-600 -z-0 w-3/4"></div>
        </div>

        {/* Document Details Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-[18px] font-bold text-gray-900 mb-1">Certificate of Graduation</h2>
          <p className="text-[13px] text-gray-500 font-medium mb-6">Ref No: REQ-1001</p>
          <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-5">
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Requested Date</p>
              <p className="font-semibold text-[14px] text-gray-800">Oct 05, 2023</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Estimated Release</p>
              <p className="font-semibold text-[14px] text-gray-800">Oct 15, 2023</p>
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
               <span className="px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold rounded-md">Cleared</span>
            </div>
          </div>
        </div>

        {/* Action Button - Triggers Modal */}
        <button 
          onClick={() => setShowModal(true)}
          className="w-full flex items-center justify-center py-4 bg-[#16a34a] hover:bg-green-700 text-white font-bold text-[15px] rounded-xl shadow-sm transition space-x-2"
        >
          <Download size={20} />
          <span>Download Document</span>
        </button>
      </div>

      {/* --- DOCUMENT PREVIEW MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity">
          
          <div className="bg-white w-full max-w-[360px] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#2e3192] p-4 flex justify-between items-center text-white">
              <div>
                <h3 className="font-bold text-[15px]">Document Preview</h3>
                <p className="text-[11px] text-blue-200 mt-0.5">Certificate of Graduation</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body - Document Mockup */}
            <div className="p-6 bg-gray-50">
              <div className="bg-white p-5 rounded border border-gray-200 shadow-sm text-center">
                
                {/* Mock Logo Placeholder */}
                <div className="w-12 h-12 mx-auto bg-blue-50 border border-blue-100 rounded-full mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#2e3192] rounded-tl-full rounded-br-full transform rotate-45"></div>
                </div>

                <h4 className="font-serif font-bold text-[11px] tracking-wide text-gray-900">ATENEO DE DAVAO UNIVERSITY</h4>
                <p className="text-[7px] text-gray-500 mt-1 uppercase">E. Jacinto Street, Davao City 8000, Philippines</p>
                <p className="text-[7px] text-gray-500 mb-3">Tel: (082) 221-2411 | registrar@addu.edu.ph</p>
                
                <p className="text-[8px] font-bold text-gray-800 tracking-wider mb-2">OFFICE OF THE UNIVERSITY REGISTRAR</p>
                <div className="h-0.5 bg-gray-800 w-full mb-4"></div>
                
                <h2 className="font-serif font-bold text-[14px] tracking-widest text-gray-900 leading-snug">CERTIFICATE OF<br/>GRADUATION</h2>
                
                <div className="h-[1px] bg-gray-300 w-full mt-4 mb-3"></div>

                <div className="text-[7px] text-right text-gray-500 font-mono space-y-0.5 mb-6">
                  <p>Document No.: CERT-2024-0312</p>
                  <p>Date Issued: February 15, 2026</p>
                </div>

                <p className="text-[9px] text-left leading-relaxed text-gray-700 mb-6">
                  This is to certify that the records of this University show that
                </p>

                <p className="font-serif font-bold text-[13px] text-gray-900 tracking-wide mb-8">
                  JANE DOE
                </p>

              </div>
            </div>

            {/* Modal Footer Buttons */}
            <div className="p-4 bg-white flex space-x-3 border-t border-gray-100">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-[13px] rounded-xl transition"
              >
                Close
              </button>
              <button className="flex-[1.5] py-3 bg-[#7c3aed] hover:bg-purple-700 text-white font-bold text-[13px] rounded-xl transition flex justify-center items-center space-x-2 shadow-sm">
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}