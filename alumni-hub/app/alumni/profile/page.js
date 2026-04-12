import Link from 'next/link';
import { ArrowLeft, MapPin, Mail, Phone, Calendar, User, GraduationCap, Award, Download, ShieldCheck, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Top Navigation */}
      <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10 flex items-center justify-center shadow-sm">
        <div className="flex items-center justify-between max-w-3xl w-full px-2">
          <div className="flex items-center space-x-4">
            <Link href="/alumni/dashboard" className="text-gray-400 hover:text-gray-600 transition">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-lg font-bold text-blue-900">My Profile</h1>
          </div>
          
          {/* SIGN OUT BUTTON ADDED HERE */}
          <Link href="/" className="flex items-center space-x-2 text-red-500 hover:text-red-700 bg-white hover:bg-red-50 px-3 py-2 rounded-xl transition font-semibold border border-transparent hover:border-red-100">
            <LogOut size={18} />
            <span className="text-sm hidden sm:block">Sign Out</span>
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        {/* Profile Header Hero Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          {/* Cover Photo / Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative flex items-center justify-center overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <ShieldCheck size={120} />
             </div>
          </div>
          
          <div className="px-6 pb-6 relative">
            <div className="flex justify-between items-end mb-4">
              {/* Avatar overlapping the banner */}
              <div className="-mt-12 w-24 h-24 bg-white rounded-full p-1 shadow-sm relative z-10">
                <div className="w-full h-full bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center">
                  <User size={40} className="text-gray-400" />
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                  <ShieldCheck size={12} className="text-white" />
                </div>
              </div>

              {/* Status Badge */}
              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200 flex items-center shadow-sm">
                <ShieldCheck size={14} className="mr-1.5" />
                Verified Alumni
              </span>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Jane Doe</h2>
              <p className="text-blue-600 font-bold text-sm mt-0.5 tracking-wide">Student No: 2018-02345</p>
            </div>
          </div>
        </div>

        {/* Details Section (2-Column Grid for Web) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Academic Information */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-200 transition">
            <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
              <div className="p-1.5 bg-blue-50 text-blue-900 rounded-md mr-2">
                <GraduationCap size={16} />
              </div>
              Academic Record
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Degree Program</p>
                <p className="font-semibold text-sm text-gray-800">Bachelor of Science in Computer Science</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Year Graduated</p>
                  <p className="font-semibold text-sm text-gray-800">March 2022</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center">
                    <Award size={12} className="mr-1 text-yellow-500" /> Honors
                  </p>
                  <p className="font-semibold text-sm text-gray-800">Cum Laude</p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-purple-200 transition">
            <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
              <div className="p-1.5 bg-purple-50 text-purple-600 rounded-md mr-2">
                <User size={16} />
              </div>
              Personal Details
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Full Legal Name</p>
                <p className="font-semibold text-sm text-gray-800">Jane Marie P. Doe</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Date of Birth</p>
                  <p className="font-semibold text-sm text-gray-800 flex items-center">
                    <Calendar size={14} className="mr-1.5 text-gray-400" /> Jan 15, 2000
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Civil Status</p>
                  <p className="font-semibold text-sm text-gray-800">Single</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-green-200 transition">
            <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
              <div className="p-1.5 bg-green-50 text-green-600 rounded-md mr-2">
                <Phone size={16} />
              </div>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Primary Email</p>
                <p className="font-semibold text-sm text-gray-800 flex items-center">
                  <Mail size={14} className="mr-1.5 text-gray-400" /> jane.doe@addu.edu.ph
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Mobile Number</p>
                <p className="font-semibold text-sm text-gray-800 flex items-center">
                  <Phone size={14} className="mr-1.5 text-gray-400" /> +63 912 345 6789
                </p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-orange-200 transition">
            <h3 className="text-sm font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
              <div className="p-1.5 bg-orange-50 text-orange-600 rounded-md mr-2">
                <MapPin size={16} />
              </div>
              Current Address
            </h3>
            <div className="space-y-4 h-full">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Residential Address</p>
                <p className="font-semibold text-sm text-gray-800 leading-relaxed">
                  123 Roxas Avenue, <br/>
                  Brgy. 34-D, Poblacion District, <br/>
                  Davao City, 8000, Philippines
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end">
          <button className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-bold shadow-sm hover:bg-blue-800 transition w-full md:w-auto">
            <Download size={18} />
            <span>Download Verified Credentials</span>
          </button>
        </div>

      </div>
    </div>
  );
}