'use client';
import React, { useState } from 'react';

interface Subscriber {
  id: number;
  email: string;
  name: string;
  status: string;
  subscribedDate: string;
  source: string;
  lastOpened: string;
}

const AdminNewsletter = () => {
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showComposeModal, setShowComposeModal] = useState(false);

  // Mock data for demonstration
  const subscribers = [
    {
      id: 1,
      email: 'sarah@example.com',
      name: 'Sarah Johnson',
      status: 'Active',
      subscribedDate: '2024-01-15',
      source: 'Website Footer',
      lastOpened: '2024-01-20'
    },
    {
      id: 2,
      email: 'michael@example.com',
      name: 'Michael Chen',
      status: 'Active',
      subscribedDate: '2024-01-14',
      source: 'Quote Popup',
      lastOpened: '2024-01-19'
    },
    {
      id: 3,
      email: 'emily@example.com',
      name: 'Emily Rodriguez',
      status: 'Unsubscribed',
      subscribedDate: '2024-01-13',
      source: 'Website Footer',
      lastOpened: '2024-01-18'
    },
    {
      id: 4,
      email: 'david@example.com',
      name: 'David Thompson',
      status: 'Active',
      subscribedDate: '2024-01-12',
      source: 'Quote Popup',
      lastOpened: '2024-01-17'
    },
    {
      id: 5,
      email: 'lisa@example.com',
      name: 'Lisa Wang',
      status: 'Active',
      subscribedDate: '2024-01-11',
      source: 'Website Footer',
      lastOpened: '2024-01-16'
    }
  ];

  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subscriber.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Unsubscribed':
        return 'bg-red-100 text-red-800';
      case 'Bounced':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Website Footer':
        return 'bg-blue-100 text-blue-800';
      case 'Quote Popup':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-light text-stone-900">Newsletter Management</h1>
            <p className="text-stone-600 mt-1">Manage subscribers and send newsletters to your audience.</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => setShowComposeModal(true)}
              className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors duration-200"
            >
              Compose Newsletter
            </button>
            <button className="px-4 py-2 border border-stone-200 rounded-md text-sm hover:bg-stone-50 transition-colors duration-200">
              Export Subscribers
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{subscribers.length}</div>
            <div className="text-sm text-stone-600">Total Subscribers</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{subscribers.filter(s => s.status === 'Active').length}</div>
            <div className="text-sm text-stone-600">Active</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{subscribers.filter(s => s.status === 'Unsubscribed').length}</div>
            <div className="text-sm text-stone-600">Unsubscribed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">24.5%</div>
            <div className="text-sm text-stone-600">Open Rate</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search subscribers by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="unsubscribed">Unsubscribed</option>
                <option value="bounced">Bounced</option>
              </select>
              <select className="px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500">
                <option value="">All Sources</option>
                <option value="website">Website Footer</option>
                <option value="popup">Quote Popup</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-200">
          <div className="px-6 py-4 border-b border-stone-200">
            <h2 className="text-lg font-light text-stone-900">Recent Campaigns</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-stone-900">January Newsletter</h3>
                  <p className="text-sm text-stone-600">Sent to 1,247 subscribers</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-stone-600">24.5% open rate</p>
                  <p className="text-xs text-stone-500">Jan 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-stone-900">Holiday Special</h3>
                  <p className="text-sm text-stone-600">Sent to 1,198 subscribers</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-stone-600">31.2% open rate</p>
                  <p className="text-xs text-stone-500">Dec 20, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribers Table */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Subscriber
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Subscribed Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Last Opened
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-200">
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-stone-900">{subscriber.name}</div>
                        <div className="text-sm text-stone-600">{subscriber.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSourceColor(subscriber.source)}`}>
                        {subscriber.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                      {subscriber.subscribedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                      {subscriber.lastOpened}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(subscriber.status)}`}>
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedSubscriber(subscriber)}
                        className="text-stone-600 hover:text-stone-900 mr-3"
                      >
                        View
                      </button>
                      <button className="text-stone-600 hover:text-stone-900">
                        Email
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subscriber Detail Modal */}
        {selectedSubscriber && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setSelectedSubscriber(null)}></div>
              
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-6 py-4 border-b border-stone-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-stone-900">Subscriber Details</h3>
                    <button
                      onClick={() => setSelectedSubscriber(null)}
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
                      <p className="mt-1 text-sm text-stone-900">{selectedSubscriber.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Email</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedSubscriber.email}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Source</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSourceColor(selectedSubscriber.source)}`}>
                          {selectedSubscriber.source}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Status</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedSubscriber.status)}`}>
                          {selectedSubscriber.status}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Subscribed Date</label>
                        <p className="mt-1 text-sm text-stone-900">{selectedSubscriber.subscribedDate}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Last Opened</label>
                        <p className="mt-1 text-sm text-stone-900">{selectedSubscriber.lastOpened}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-stone-50 px-6 py-3 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedSubscriber(null)}
                    className="px-4 py-2 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compose Newsletter Modal */}
        {showComposeModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setShowComposeModal(false)}></div>
              
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                <div className="bg-white px-6 py-4 border-b border-stone-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-stone-900">Compose Newsletter</h3>
                    <button
                      onClick={() => setShowComposeModal(false)}
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
                      <label className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500"
                        placeholder="Enter newsletter subject..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Content</label>
                      <textarea
                        rows={8}
                        className="w-full px-3 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500"
                        placeholder="Write your newsletter content here..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Send To</label>
                        <select className="w-full px-3 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500">
                          <option value="all">All Subscribers</option>
                          <option value="active">Active Only</option>
                          <option value="segment">Specific Segment</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Schedule</label>
                        <select className="w-full px-3 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500">
                          <option value="now">Send Now</option>
                          <option value="schedule">Schedule for Later</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-stone-50 px-6 py-3 flex justify-end space-x-3">
                  <button
                    onClick={() => setShowComposeModal(false)}
                    className="px-4 py-2 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800">
                    Send Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default AdminNewsletter;
