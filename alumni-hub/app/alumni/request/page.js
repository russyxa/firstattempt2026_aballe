"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, GraduationCap, LogOut, FileCheck, X, Zap, ChevronRight, Clock, Home, User, Search } from 'lucide-react';

export default function RequestDocuments() {
  const [showConfirmPopUp, setShowConfirmPopUp] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f0f2f5]">

      {/* ── STICKY SIDEBAR ── */}
      <div className="w-60 bg-[#1a2b6d] shrink-0 sticky top-0 h-screen flex flex-col shadow-xl z-50">
        <div className="p-6 border-b border-white/10 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <GraduationCap size={20} className="text-blue-300" />
          </div>
          <div>
            <h2 className="text-white font-bold text-base leading-tight">Alumni Hub</h2>
            <p className="text-blue-300 text-xs mt-0.5">AdDU Portal</p>
          </div>
        </div>
        <div className="px-6 py-4 bg-white/5 border-b border-white/5">
          <p className="text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Logged In As</p>
          <p className="text-sm font-bold text-white">Jeross P. Aballe</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/alumni/dashboard" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Home size={18} /><span>Dashboard</span>
          </Link>
          <Link href="/alumni/profile" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <User size={18} /><span>Profile</span>
          </Link>
          <Link href="/alumni/request" className="flex items-center space-x-3 text-white bg-white/15 px-4 py-3 rounded-xl transition font-medium text-sm">
            <FileText size={18} /><span>Request Docs</span>
          </Link>
          <Link href="/alumni/tracking" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <Clock size={18} /><span>Tracking</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex w-full items-center space-x-3 text-red-300 hover:text-red-100 hover:bg-red-500/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <LogOut size={18} /><span>Sign Out</span>
          </Link>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/alumni/dashboard" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Alumni / Request</p>
              <h1 className="text-xl font-bold text-slate-800">Request Documents</h1>
            </div>
          </div>
          
          {/* Horizontal Tabs & Search Row */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search documents..." className="pl-11 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a2b6d] w-64" />
            </div>
            <div className="flex bg-slate-100 rounded-xl p-1 shrink-0">
              <button className="px-6 py-2 rounded-lg text-sm font-bold shadow bg-white text-[#1a237e]">New Request</button>
              <Link href="/alumni/tracking" className="px-6 py-2 text-slate-500 hover:text-slate-800 text-sm font-bold transition">History</Link>
            </div>
          </div>
        </div>

        {/* Scaled Grid Container */}
        <div className="max-w-5xl mx-auto w-full px-10 py-8 space-y-6">
          <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Select a Document Type</p>

          {/* Document List - scaled to grid-cols-2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* TOR */}
            <button onClick={() => setShowConfirmPopUp(true)} className="w-full text-left bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:border-[#1a237e]/40 hover:shadow-md transition group">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-[#1a237e]/8 border border-[#1a237e]/15 flex items-center justify-center shrink-0">
                  <FileText size={28} className="text-[#1a237e]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-base">Transcript of Records</p>
                  <p className="text-sm text-slate-500 mt-1 mb-4 leading-relaxed">Official academic transcript with all courses and grades</p>
                  <div className="flex items-center space-x-3 text-xs font-black text-[#1a237e] uppercase tracking-wide">
                    <span className="bg-blue-50 px-3 py-1 rounded-lg">₱150</span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center space-x-1.5 text-slate-500">
                      <Clock size={14} /><span>5-7 business days</span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-[#1a237e] transition shrink-0 mt-2" />
              </div>
            </button>

            {/* Diploma Copy */}
            <button className="w-full text-left bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:border-purple-300 hover:shadow-md transition group">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0">
                  <GraduationCap size={28} className="text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-base">Certified True Copy of Diploma</p>
                  <p className="text-sm text-slate-500 mt-1 mb-4 leading-relaxed">Authenticated copy of your original diploma</p>
                  <div className="flex items-center space-x-3 text-xs font-black text-purple-700 uppercase tracking-wide">
                    <span className="bg-purple-50 px-3 py-1 rounded-lg">₱200</span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center space-x-1.5 text-slate-500">
                      <Clock size={14} /><span>3-5 business days</span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-purple-500 transition shrink-0 mt-2" />
              </div>
            </button>

            {/* COG */}
            <button className="w-full text-left bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:border-emerald-300 hover:shadow-md transition group">
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <FileCheck size={28} className="text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-base">Certificate of Graduation</p>
                  <p className="text-sm text-slate-500 mt-1 mb-4 leading-relaxed">Official certificate confirming degree completion</p>
                  <div className="flex items-center space-x-3 text-xs font-black text-emerald-700 uppercase tracking-wide">
                    <span className="bg-emerald-50 px-3 py-1 rounded-lg">₱100</span>
                    <span className="text-slate-300">•</span>
                    <div className="flex items-center space-x-1.5 text-slate-500">
                      <Clock size={14} /><span>2-3 business days</span>
                    </div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-300 group-hover:text-emerald-500 transition shrink-0 mt-2" />
              </div>
            </button>

          </div>
        </div>
      </div>

      {/* ── CONFIRM REQUEST MODAL (Adapted for larger screen) ── */}
      {showConfirmPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 flex justify-between items-center border-b border-slate-100">
              <div>
                <p className="text-xs font-bold text-[#1a237e]/60 uppercase tracking-widest mb-1">Step 1 of 3</p>
                <h3 className="font-bold text-slate-800 text-xl">Confirm Request</h3>
              </div>
              <button onClick={() => setShowConfirmPopUp(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition text-slate-500">
                <X size={20} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center space-x-4 bg-[#1a237e]/5 border border-[#1a237e]/10 p-5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#1a237e]/10 flex items-center justify-center shrink-0">
                  <FileText size={24} className="text-[#1a237e]" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">Transcript of Records</p>
                  <p className="text-sm text-slate-500 mt-1">Official academic transcript with all courses and grades</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden text-base">
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-slate-500 font-medium">Processing Fee</span>
                  <span className="font-bold text-slate-900">₱150</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-slate-500 font-medium">Processing Time</span>
                  <span className="font-bold text-slate-900">5-7 business days</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex items-start space-x-4">
                <Zap size={20} className="text-amber-500 mt-0.5 shrink-0" strokeWidth={2.5} />
                <p className="text-sm text-amber-800 leading-relaxed font-medium">
                  Rush Processing (+₱200) can be applied after payment is verified.
                </p>
              </div>

              <p className="text-sm text-slate-500 text-center px-4 leading-relaxed">
                You will be directed to payment after confirming. Required documents must be uploaded within 48 hours.
              </p>

              <div className="flex space-x-4 pt-4">
                <button onClick={() => setShowConfirmPopUp(false)} className="flex-1 py-4 bg-slate-50 border border-slate-200 text-slate-600 font-bold text-base rounded-2xl hover:bg-slate-100 transition">
                  Cancel
                </button>
                <Link href="/alumni/request/purpose" className="flex-1 text-center py-4 font-bold text-white text-base rounded-2xl shadow-lg transition hover:opacity-90" style={{ background: 'linear-gradient(135deg, #1a237e, #283593)' }}>
                  Continue →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}