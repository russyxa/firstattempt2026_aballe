"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, AlertCircle, LogOut, FileText, CheckCircle, ChevronRight, Download, Check, MessageCircle, Send, Home, User, Search, Upload, X, ShieldCheck, AlertTriangle, FileUp } from 'lucide-react';

export default function TrackingPage() {
  const [selectedDoc, setSelectedDoc] = useState('COG'); // Default selection
  const [activeModal, setActiveModal] = useState(null); // 'DOWNLOAD', 'UPLOAD', 'RUSH', or null

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
          <Link href="/alumni/request" className="flex items-center space-x-3 text-blue-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition font-medium text-sm">
            <FileText size={18} /><span>Request Docs</span>
          </Link>
          <Link href="/alumni/tracking" className="flex items-center space-x-3 text-white bg-white/15 px-4 py-3 rounded-xl transition font-medium text-sm">
            <GraduationCap size={18} /><span>Tracking</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="flex w-full items-center space-x-3 text-red-300 hover:text-red-100 hover:bg-red-500/10 px-4 py-3 rounded-xl transition font-medium text-sm">
          <LogOut size={18} /><span>Sign Out</span>
        </Link>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md px-10 py-5 border-b border-slate-200 z-40 shadow-sm flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-4">
            <Link href="/alumni/dashboard" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition shrink-0">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Alumni / Tracking</p>
              <h1 className="text-xl font-bold text-slate-800">Process Documents</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search requests..." className="pl-11 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#1a2b6d] w-64" />
            </div>
            <select className="bg-slate-100 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-[#1a2b6d]">
              <option>All Statuses</option>
              <option>Pending Upload</option>
              <option>Processing</option>
              <option>Ready</option>
            </select>
          </div>
        </div>

        {/* 2/3 + 1/3 Split Content Area */}
        <div className="flex-1 overflow-hidden flex px-10 py-8 space-x-8 max-w-[1400px] mx-auto w-full">
          
          {/* LEFT SIDE (2/3) */}
          <div className="flex-[2] overflow-y-auto pr-2 space-y-8 pb-10">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#eef2ff] rounded-3xl border border-[#1a237e]/10 p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1a237e] uppercase tracking-widest mb-1">In Process</p>
                  <p className="text-4xl font-black text-[#1a237e]">3</p>
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <GraduationCap size={24} className="text-[#1a237e]" strokeWidth={2.5} />
                </div>
              </div>

              <div className="bg-amber-50 rounded-3xl border border-amber-100 p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">Require Attention</p>
                  <p className="text-4xl font-black text-amber-600">2</p>
                </div>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <AlertCircle size={24} className="text-amber-500" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <p className="text-lg font-bold text-slate-800">Your Document Requests</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => setSelectedDoc('COG')}
                className={`text-left rounded-3xl border transition shadow-sm p-6 ${selectedDoc === 'COG' ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20' : 'bg-white border-slate-200 hover:border-emerald-200'}`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-slate-900">Certificate of Graduation</p>
                    <p className="text-xs text-slate-400 mt-1">#COG-2024-0521</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg border border-emerald-200">
                    Ready to Download
                  </span>
                  <ChevronRight size={18} className={selectedDoc === 'COG' ? 'text-emerald-600' : 'text-slate-400'} />
                </div>
              </button>

              <button 
                onClick={() => setSelectedDoc('TOR')}
                className={`text-left rounded-3xl border transition shadow-sm p-6 ${selectedDoc === 'TOR' ? 'bg-[#1a237e]/5 border-[#1a237e]/30 ring-2 ring-[#1a237e]/20' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a237e]/8 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-[#1a237e]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-slate-900">Transcript of Records</p>
                    <p className="text-xs text-slate-400 mt-1">#TOR-2024-0342</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 rounded-lg border border-amber-200">
                    Pending Upload (2/3)
                  </span>
                  <ChevronRight size={18} className={selectedDoc === 'TOR' ? 'text-[#1a237e]' : 'text-slate-400'} />
                </div>
              </button>

              <button 
                onClick={() => setSelectedDoc('DIP')}
                className={`text-left rounded-3xl border transition shadow-sm p-6 ${selectedDoc === 'DIP' ? 'bg-purple-50 border-purple-300 ring-2 ring-purple-500/20' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100/50 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-slate-900">Certified Diploma Copy</p>
                    <p className="text-xs text-slate-400 mt-1">#DIP-2024-0198</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-lg border border-blue-200">
                    Processing
                  </span>
                  <ChevronRight size={18} className={selectedDoc === 'DIP' ? 'text-purple-600' : 'text-slate-400'} />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (1/3) */}
          <div className="flex-1 bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden flex flex-col h-full max-h-[800px]">
            {selectedDoc === 'COG' && (
              <div className="flex-1 overflow-y-auto p-8 flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-1">Certificate of Graduation</h3>
                <p className="text-sm text-slate-500 mb-6">Ref ID: #COG-2024-0521</p>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start space-x-3 mb-8">
                  <GraduationCap size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-amber-800">Download before expiration</p>
                    <p className="text-xs text-amber-700 mt-1">Expires in <span className="font-bold">11 days 8 hours</span></p>
                    <p className="text-xs text-amber-600 mt-1">This document will be automatically deleted from servers after 14 days for security.</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Request Status</p>
                  <div className="flex items-center justify-between relative px-2">
                    {['Submitted', 'Verified', 'Processed', 'Ready'].map((step, i) => (
                      <div key={step} className="flex flex-col items-center relative z-10 w-1/4">
                        {i < 3 && <div className="absolute top-4 left-[50%] w-full h-1 bg-emerald-200 -z-10" />}
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mb-2 shadow-sm">
                          <Check size={16} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide text-center">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0" />
                    <p className="text-sm text-emerald-800 font-bold">All requirements successfully verified</p>
                  </div>
                  <button 
                    onClick={() => setActiveModal('DOWNLOAD')}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-emerald-500 hover:bg-emerald-600 transition text-white font-bold text-base rounded-2xl shadow-md"
                  >
                    <Download size={20} />
                    <span>Download Official PDF</span>
                  </button>
                </div>

                <div className="mt-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col h-48">
                  <div className="flex items-center space-x-2 mb-4">
                    <MessageCircle size={18} className="text-slate-500" />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Registrar Chat Support</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-sm text-slate-400 text-center">No messages yet. Ask a question regarding this document.</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-700 outline-none focus:border-[#1a2b6d]" />
                    <button className="w-12 h-12 rounded-xl bg-[#1a2b6d] flex items-center justify-center shrink-0 hover:bg-[#283593] transition">
                      <Send size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(selectedDoc === 'TOR' || selectedDoc === 'DIP') && (
               <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                 <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                   {selectedDoc === 'TOR' ? <Upload size={32} className="text-slate-400" /> : <GraduationCap size={32} className="text-slate-400" />}
                 </div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">
                   {selectedDoc === 'TOR' ? 'Transcript of Records' : 'Certified Diploma Copy'}
                 </h3>
                 <p className="text-sm text-slate-500 max-w-xs mb-8">
                   {selectedDoc === 'TOR' 
                     ? 'Please upload your missing clearance forms to continue processing.' 
                     : 'Your document is currently being processed by the registrar.'}
                 </p>
                 
                 {selectedDoc === 'TOR' ? (
                   <button 
                     onClick={() => setActiveModal('UPLOAD')}
                     className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl text-sm font-bold text-white shadow-lg transition hover:opacity-90" 
                     style={{ background: 'linear-gradient(135deg, #1a237e, #283593)' }}
                   >
                     <Upload size={18} />
                     <span>Upload Files</span>
                   </button>
                 ) : (
                   <button 
                     onClick={() => setActiveModal('RUSH')}
                     className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl text-sm font-bold text-white shadow-lg transition hover:opacity-90" 
                     style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                   >
                     <GraduationCap size={18} />
                     <span>Apply Rush Processing</span>
                   </button>
                 )}
               </div>
            )}
          </div>
        </div>
      </div>

      {/* ── GLOBAL MODAL OVERLAY ── */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative animate-in fade-in zoom-in duration-200 overflow-hidden flex flex-col">
            
            {/* --- DOWNLOAD MODAL CONTENT --- */}
            {activeModal === 'DOWNLOAD' && (
              <>
                {/* Header matching reference */}
                <div className="bg-[#283593] p-5 flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-lg font-bold">Document Preview</h2>
                    <p className="text-xs text-blue-200">Certificate of Graduation</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                    <X size={16} />
                  </button>
                </div>
                
                {/* Document Mockup Area */}
                <div className="bg-slate-100 p-6 flex items-center justify-center">
                  <div className="bg-white shadow-md rounded border border-slate-200 w-full p-8 flex flex-col items-center text-center max-h-[50vh] overflow-y-auto">
                    {/* Simulated Logo */}
                    <div className="w-16 h-16 rounded-full border-2 border-[#283593] flex items-center justify-center mb-4">
                       <ShieldCheck size={32} className="text-[#283593]" />
                    </div>
                    <h3 className="font-serif font-bold text-[#1a237e] text-lg tracking-wide mb-1">ATENEO DE DAVAO UNIVERSITY</h3>
                    <p className="text-[9px] text-slate-500 mb-4 uppercase">E. Jacinto Street, Davao City 8000, Philippines</p>
                    <div className="w-full h-px bg-slate-300 mb-6" />
                    <h4 className="font-serif font-bold text-slate-800 text-xl tracking-widest mb-6">CERTIFICATE OF<br/>GRADUATION</h4>
                    <p className="text-xs text-slate-600 mb-8 leading-relaxed">This is to certify that the records of this University show that</p>
                    <h2 className="font-serif font-black text-slate-900 text-lg mb-8">JEROSS ABALLE</h2>
                    <div className="mt-auto w-full text-right pt-8">
                       <p className="text-[10px] text-slate-400">Document No.: CERT-2024-0312</p>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 bg-white border-t border-slate-100 flex space-x-3">
                  <button onClick={() => setActiveModal(null)} className="flex-1 py-3.5 rounded-xl font-bold text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 transition">
                    Close
                  </button>
                  <button style={{ background: 'linear-gradient(to right, #6200ea, #8c9eff)' }} className="flex-[2] py-3.5 rounded-xl font-bold text-sm text-white shadow-md hover:opacity-90 transition flex items-center justify-center space-x-2">
                    <Download size={18} />
                    <span>Download PDF</span>
                  </button>
                </div>
              </>
            )}

            {/* --- UPLOAD MODAL CONTENT --- */}
            {activeModal === 'UPLOAD' && (
              <>
                <div className="bg-[#1a237e] p-5 flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-lg font-bold">Upload Requirement</h2>
                    <p className="text-xs text-blue-200">Transcript of Records Clearance</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                    <X size={16} />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="border-2 border-dashed border-[#1a237e]/30 bg-[#1a237e]/5 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer hover:bg-[#1a237e]/10 transition">
                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                      <FileUp size={28} className="text-[#1a237e]" />
                    </div>
                    <p className="font-bold text-slate-800 mb-1">Click or drag file to this area to upload</p>
                    <p className="text-xs text-slate-500">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex space-x-3">
                  <button onClick={() => setActiveModal(null)} className="flex-1 py-3.5 rounded-xl font-bold text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition">
                    Cancel
                  </button>
                  <button className="flex-[2] py-3.5 rounded-xl font-bold text-sm text-white bg-[#1a237e] shadow-md hover:bg-[#283593] transition flex items-center justify-center space-x-2">
                    <Upload size={18} />
                    <span>Confirm Upload</span>
                  </button>
                </div>
              </>
            )}

            {/* --- RUSH PROCESSING MODAL CONTENT --- */}
            {activeModal === 'RUSH' && (
              <>
                <div className="bg-amber-600 p-5 flex justify-between items-center text-white">
                  <div>
                    <h2 className="text-lg font-bold">Rush Processing</h2>
                    <p className="text-xs text-amber-100">Certified Diploma Copy</p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition">
                    <X size={16} />
                  </button>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-4 bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <AlertTriangle size={24} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-amber-900">Expedite your request</p>
                      <p className="text-xs text-amber-700 mt-1">Standard processing takes 7-10 working days. Rush processing guarantees completion within 2-3 working days.</p>
                    </div>
                  </div>
                  
                  <div className="border border-slate-200 rounded-xl p-4">
                     <div className="flex justify-between items-center mb-2">
                       <span className="text-sm text-slate-500">Standard Fee</span>
                       <span className="text-sm font-medium text-slate-800">₱ 150.00</span>
                     </div>
                     <div className="flex justify-between items-center mb-4">
                       <span className="text-sm text-slate-500">Rush Processing Fee</span>
                       <span className="text-sm font-medium text-amber-600">+ ₱ 250.00</span>
                     </div>
                     <div className="w-full h-px bg-slate-200 mb-4" />
                     <div className="flex justify-between items-center">
                       <span className="text-sm font-bold text-slate-800">Total Amount</span>
                       <span className="text-lg font-black text-slate-900">₱ 400.00</span>
                     </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex space-x-3">
                  <button onClick={() => setActiveModal(null)} className="flex-1 py-3.5 rounded-xl font-bold text-sm text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition">
                    Cancel
                  </button>
                  <button className="flex-[2] py-3.5 rounded-xl font-bold text-sm text-white bg-amber-500 shadow-md hover:bg-amber-600 transition flex items-center justify-center space-x-2">
                    <GraduationCap size={18} />
                    <span>Pay & Expedite</span>
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
      
    </div>
  );
}