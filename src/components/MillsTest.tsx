import { useState, useEffect } from 'react';
import { Database, Plus, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Mill {
  id: string;
  mill_name: string;
  email: string;
  keywords: string;
  created_at: string;
}

export default function MillsTest() {
  const [mills, setMills] = useState<Mill[]>([]);
  const [loading, setLoading] = useState(false);
  const [inserting, setInserting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchMills = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('mills')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setMills(data || []);
      setMessage({ type: 'success', text: `Fetched ${data?.length || 0} records successfully` });
    } catch (error) {
      console.error('Error fetching mills:', error);
      setMessage({ type: 'error', text: `Error fetching records: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  const insertTestMill = async () => {
    setInserting(true);
    try {
      const { data, error } = await supabase
        .from('mills')
        .insert([
          {
            mill_name: 'Test Paper Mill Ltd',
            email: 'test@testmill.com',
            keywords: 'test, test mill, test paper'
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      setMessage({ type: 'success', text: 'Test mill inserted successfully!' });
      fetchMills(); // Refresh the list
    } catch (error) {
      console.error('Error inserting mill:', error);
      setMessage({ type: 'error', text: `Error inserting record: ${error.message}` });
    } finally {
      setInserting(false);
    }
  };

  useEffect(() => {
    fetchMills();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Database className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">Mills Table Connection Test</h1>
          </div>

          {/* Message Display */}
          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={insertTestMill}
              disabled={inserting}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="h-5 w-5" />
              {inserting ? 'Inserting...' : 'Insert Test Mill'}
            </button>

            <button
              onClick={fetchMills}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>

          {/* Mills Table */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Mills Table ({mills.length} records)
            </h2>

            {mills.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No mills found. Click "Insert Test Mill" to add a test record.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">ID</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Mill Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Email</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Keywords</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mills.map((mill) => (
                      <tr key={mill.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                          {mill.id.substring(0, 8)}...
                        </td>
                        <td className="border border-gray-300 px-4 py-2 font-medium">
                          {mill.mill_name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {mill.email}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {mill.keywords}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-sm">
                          {new Date(mill.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Connection Info */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Connection Details:</h3>
            <p className="text-sm text-blue-800">
              Testing connection to Supabase database with the 'mills' table.
            </p>
            <p className="text-sm text-blue-800 mt-1">
              If you see records above and can insert new ones, your Supabase connection is working correctly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}