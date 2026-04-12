import Link from 'next/link';
import { ArrowLeft, Zap, AlertCircle, CreditCard } from 'lucide-react';

export default function RushProcessing() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Top Navigation */}
      <div className="bg-white p-4 border-b border-gray-200 sticky top-0 z-10 flex items-center justify-center shadow-sm">
        <div className="flex items-center space-x-4 max-w-3xl w-full px-2">
          <Link href="/alumni/tracking/REQ-1002" className="text-gray-400 hover:text-gray-600 transition">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-lg font-bold text-blue-900 flex-1">Apply for Rush</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-8">
        
        {/* Hero Info */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 shadow-sm text-white mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <Zap size={28} />
            <h2 className="text-2xl font-bold">Rush Processing</h2>
          </div>
          <p className="text-orange-50 text-sm">Cut your waiting time. Get your Official Transcript of Records prioritized and released within 24-48 hours.</p>
        </div>

        {/* Pricing Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
          <h3 className="text-sm font-bold text-gray-800 mb-4 border-b border-gray-100 pb-3">Payment Summary</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Document Processing Fee</span>
              <span className="font-medium text-gray-800">₱ 0.00 (Paid)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center"><Zap size={14} className="mr-1 text-orange-500" /> Expedite Upgrade Fee</span>
              <span className="font-medium text-gray-800">₱ 250.00</span>
            </div>
          </div>
          
          <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-100 pt-4">
            <span>Total to Pay</span>
            <span>₱ 250.00</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start space-x-3 mb-8">
          <AlertCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-blue-800 leading-relaxed">
            By proceeding, you agree to pay the Rush Upgrade fee. The 24-hour countdown begins as soon as this payment is successfully verified by the Finance Office.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/alumni/tracking/REQ-1002" className="flex-1 py-4 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-center hover:bg-gray-50 transition">
            Cancel
          </Link>
          <button className="flex-1 py-4 bg-blue-900 text-white font-bold rounded-xl shadow-md hover:bg-blue-800 transition flex items-center justify-center space-x-2">
            <CreditCard size={18} />
            <span>Proceed to Payment</span>
          </button>
        </div>

      </div>
    </div>
  );
}