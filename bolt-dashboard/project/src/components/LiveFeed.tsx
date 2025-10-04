import React from 'react';
import { Plus, FileText } from 'lucide-react';

interface LiveActivity {
  id: number;
  icon: string;
  message: string;
  timestamp: string;
}

interface LiveFeedProps {
  activities: LiveActivity[];
}

const LiveFeed: React.FC<LiveFeedProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-900">Live Processing Feed</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4 mb-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <span className="text-lg">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Process New Order
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors">
            <FileText className="h-4 w-4 mr-2" />
            View Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;