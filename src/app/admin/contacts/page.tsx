'use client';
import React, { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  date: string;
  source: string;
  status: string;
}

const AdminContacts = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 (555) 123-4567',
      projectType: 'Residential Design',
      message: 'Looking to redesign my living room and kitchen. I love modern minimalist style with natural materials.',
      date: '2024-01-15',
      source: 'Website Contact Form',
      status: 'New'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '+1 (555) 234-5678',
      projectType: 'Commercial Space',
      message: 'Need help with office space design for our new startup. Looking for a modern, collaborative environment.',
      date: '2024-01-14',
      source: 'Quote Popup',
      status: 'Contacted'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@example.com',
      phone: '+1 (555) 345-6789',
      projectType: 'Home Renovation',
      message: 'Complete home renovation needed. 3 bedroom house, looking for contemporary design with sustainable materials.',
      date: '2024-01-13',
      source: 'Website Contact Form',
      status: 'Qualified'
    },
    {
      id: 4,
      name: 'David Thompson',
      email: 'david@example.com',
      phone: '+1 (555) 456-7890',
      projectType: 'Design Consultation',
      message: 'Just moved into a new apartment and need help with furniture placement and color schemes.',
      date: '2024-01-12',
      source: 'Quote Popup',
      status: 'New'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      email: 'lisa@example.com',
      phone: '+1 (555) 567-8901',
      projectType: 'Residential Design',
      message: 'Interested in a complete home makeover. Budget is flexible, looking for high-end finishes.',
      date: '2024-01-11',
      source: 'Website Contact Form',
      status: 'In Progress'
    }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.projectType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'Contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'Qualified':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Website Contact Form':
        return 'bg-green-100 text-green-800';
      case 'Quote Popup':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-light text-stone-900">Contact Management</h1>
            <p className="text-stone-600 mt-1">Manage and track all contact inquiries from potential clients.</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-stone-200 rounded-md text-sm hover:bg-stone-50 transition-colors duration-200">
              Export CSV
            </button>
            <button className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-md hover:bg-stone-800 transition-colors duration-200">
              Add Contact
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search contacts by name, email, or project type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500"
              />
            </div>
            <div className="flex space-x-2">
              <select className="px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500">
                <option value="">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="in-progress">In Progress</option>
              </select>
              <select className="px-4 py-2 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-stone-500">
                <option value="">All Sources</option>
                <option value="website">Website Contact Form</option>
                <option value="popup">Quote Popup</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{contacts.length}</div>
            <div className="text-sm text-stone-600">Total Contacts</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{contacts.filter(c => c.status === 'New').length}</div>
            <div className="text-sm text-stone-600">New</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{contacts.filter(c => c.status === 'Qualified').length}</div>
            <div className="text-sm text-stone-600">Qualified</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <div className="text-2xl font-light text-stone-900">{contacts.filter(c => c.source === 'Quote Popup').length}</div>
            <div className="text-sm text-stone-600">From Popup</div>
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-white rounded-lg shadow-sm border border-stone-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">
                    Date
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
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-stone-900">{contact.name}</div>
                        <div className="text-sm text-stone-600">{contact.email}</div>
                        <div className="text-xs text-stone-500">{contact.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                      {contact.projectType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSourceColor(contact.source)}`}>
                        {contact.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                      {contact.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(contact.status)}`}>
                        {contact.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedContact(contact)}
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

        {/* Contact Detail Modal */}
        {selectedContact && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setSelectedContact(null)}></div>
              
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-6 py-4 border-b border-stone-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-stone-900">Contact Details</h3>
                    <button
                      onClick={() => setSelectedContact(null)}
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
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Name</label>
                        <p className="mt-1 text-sm text-stone-900">{selectedContact.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Phone</label>
                        <p className="mt-1 text-sm text-stone-900">{selectedContact.phone}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Email</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedContact.email}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Project Type</label>
                        <p className="mt-1 text-sm text-stone-900">{selectedContact.projectType}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Source</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getSourceColor(selectedContact.source)}`}>
                          {selectedContact.source}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700">Message</label>
                      <p className="mt-1 text-sm text-stone-900">{selectedContact.message}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Date</label>
                        <p className="mt-1 text-sm text-stone-900">{selectedContact.date}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700">Status</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedContact.status)}`}>
                          {selectedContact.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-stone-50 px-6 py-3 flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedContact(null)}
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
       </div>
   );
};

export default AdminContacts;
