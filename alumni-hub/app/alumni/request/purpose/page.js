import Link from 'next/link';
import { ArrowLeft, Briefcase, PlaneTakeoff, GraduationCap, Award, FileQuestion } from 'lucide-react';

export default function RequestPurpose() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 relative">
      
      {/* Background Overlay Simulation */}
      <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>

      {/* Modal positioned absolutely at the top */}
      <div className="max-w-xl mx-auto px-4 pt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          
          {/* Dark Blue Header */}
          <div className="bg-[#1e3a8a] p-5 flex justify-between items-center text-white">
            <h3 className="font-bold text-[16px]">What do you need this for?</h3>
          </div>

          {/* Modal Body */}
          <div className="p-7 space-y-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Please select the purpose for requesting this document</p>
            
            <div className="space-y-4">
              {/* Option 1: Employment */}
              <Link href="/alumni/request/verify" className="w-full text-left block bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-md transition group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition">
                    <Briefcase size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">Employment / Work</h3>
                    <p className="text-xs text-gray-500 mt-0.5 mb-1 leading-relaxed">Documents needed for job applications or employment verification</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-blue-600 transition">→</span>
                </div>
              </Link>

              {/* Option 2: Abroad */}
              <Link href="/alumni/request/verify" className="w-full text-left block bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-300 hover:shadow-md transition group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition">
                    <PlaneTakeoff size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">Working / Studying Abroad</h3>
                    <p className="text-xs text-gray-500 mt-0.5 mb-1 leading-relaxed">Documents for international opportunities requiring authentication</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-purple-600 transition">→</span>
                </div>
              </Link>

              {/* Option 3: Licensure */}
              <Link href="/alumni/request/verify" className="w-full text-left block bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition">
                    <Award size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">Board Exam / Licensure</h3>
                    <p className="text-xs text-gray-500 mt-0.5 mb-1 leading-relaxed">Requirements for professional board examinations</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-green-600 transition">→</span>
                </div>
              </Link>
              
            </div>

            {/* Cancel Button */}
            <div className="pt-6 border-t border-gray-100 mt-6 flex justify-end">
                <Link href="/alumni/request" className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition text-sm">
                  Cancel
                </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}