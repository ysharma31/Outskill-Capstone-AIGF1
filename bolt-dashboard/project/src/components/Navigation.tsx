import React from 'react';
import { FileText, Download } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">PO AutoFlow</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="text-blue-600 border-b-2 border-blue-600 px-1 pt-1 pb-4 text-sm font-medium">
                Dashboard
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium transition-colors">
                Orders
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium transition-colors">
                Suppliers
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium transition-colors">
                Settings
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;