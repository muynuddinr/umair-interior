'use client';
import React, { useState } from 'react';

interface Quote {
  id: number;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  date: string;
  status: string;
  priority: string;
}

const AdminQuotes = () => {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [filter, setFilter] = useState('all');

  // Mock data for demonstration
  const quotes = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 (555) 123-4567',
      projectType: 'Residential Design',
      message: 'Looking to redesign my living room and kitchen. I love modern minimalist style with natural materials.',
      date: '2024-01-15',
      status: 'New',
      priority: 'High'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '+1 (555) 234-5678',
      projectType: 'Commercial Space',
      message: 'Need help with office space design for our new startup. Looking for a modern, collaborative environment.',
      date: '2024-01-14',
      status: 'In Progress',
      priority: 'Medium'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      phone: '+1 (555) 345-6789',
      projectType: 'Home Renovation',
      message: 'Complete home renovation needed. 3 bedroom house, looking for contemporary design with sustainable materials.',
      date: '2024-01-13',
      status: 'Completed',
      priority: 'Low'
    },
    {
      id: 4,
      name: 'David Thompson',
      email: 'david@example.com',
      phone: '+1 (555) 456-7890',
      projectType: 'Design Consultation',
      message: 'Just moved into a new apartment and need help with furniture placement and color schemes.',
      date: '2024-01-12',
      status: 'New',
      priority: 'Medium'
    }
  ];

  const filteredQuotes = quotes.filter(quote => {
    if (filter === 'all') return true;
    return quote.status.toLowerCase() === filter.toLowerCase();
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-light text-stone-900">Quote Requests</h1>
            <p className="text-stone-600 mt-1">Manage and respond to quote requests from potential clients.</p>
          </div>
          <div className="flex space-x-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors duration-200">
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-light text-stone-900">{quotes.length}</div>
                <div className="text-sm text-stone-600 mt-1">Total Quotes</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-light text-stone-900">{quotes.filter(q => q.status === 'New').length}</div>
                <div className="text-sm text-stone-600 mt-1">New</div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-light text-stone-900">{quotes.filter(q => q.status === 'In Progress').length}</div>
                <div className="text-sm text-stone-600 mt-1">In Progress</div>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-light text-stone-900">{quotes.filter(q => q.status === 'Completed').length}</div>
                <div className="text-sm text-stone-600 mt-1">Completed</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Table */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-200">
                {filteredQuotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-stone-900">{quote.name}</div>
                        <div className="text-sm text-stone-600">{quote.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                      {quote.projectType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                      {quote.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(quote.status)}`}>
                        {quote.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(quote.priority)}`}>
                        {quote.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedQuote(quote)}
                        className="text-stone-600 hover:text-stone-900 mr-3"
                      >
                        View
                      </button>
                      <button className="text-stone-600 hover:text-stone-900">
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quote Detail Modal */}
        {selectedQuote && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setSelectedQuote(null)}></div>
              
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-6 py-4 border-b border-stone-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-stone-900">Quote Details</h3>
                    <button
                      onClick={() => setSelectedQuote(null)}
                      className="text-stone-400 hover:text-stone-600"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white px-6 py-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Name</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedQuote.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Email</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedQuote.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Phone</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedQuote.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Project Type</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedQuote.projectType}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Message</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedQuote.message}</p>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Status</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedQuote.status)}`}>
                          {selectedQuote.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Priority</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(selectedQuote.priority)}`}>
                          {selectedQuote.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-stone-50 px-6 py-3 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedQuote(null)}
                    className="px-4 py-2 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800">
                    Reply to Client
                  </button>
                </div>
              </div>
            </div>
          </div>
         )}
       </div>
   );
};

export default AdminQuotes;
