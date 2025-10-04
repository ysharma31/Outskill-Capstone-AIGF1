import React from 'react';
import { Play, FileText } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Automate Purchase Order Processing for Trading Businesses
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            WhatsApp → AI Processing → Automated Supplier Emails
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
              <Play className="h-5 w-5 mr-2" />
              Live Demo
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
              <FileText className="h-5 w-5 mr-2" />
              View Sample Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;