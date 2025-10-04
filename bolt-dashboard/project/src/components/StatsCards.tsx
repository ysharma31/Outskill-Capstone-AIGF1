import React from 'react';
import { TrendingUp, CheckCircle, Clock } from 'lucide-react';

const StatsCards: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Today's Orders</p>
            <p className="text-3xl font-bold text-gray-900">23</p>
            <p className="text-sm text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +15% vs yesterday
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Success Rate</p>
            <p className="text-3xl font-bold text-gray-900">94%</p>
            <p className="text-sm text-red-600">3 failed</p>
          </div>
          <div className="bg-green-50 p-3 rounded-full">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Avg Process Time</p>
            <p className="text-3xl font-bold text-gray-900">2.3 sec</p>
            <p className="text-sm text-gray-500">WhatsApp→Email</p>
          </div>
          <div className="bg-orange-50 p-3 rounded-full">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;