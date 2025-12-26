"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "../../lib/auth";

interface NetworkingContact {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  location: string;
  connectionType: "linkedin" | "email" | "referral" | "event";
  status: "pending" | "connected" | "declined";
  notes: string;
  lastContact: string;
  profileUrl?: string;
}

interface NetworkingEvent {
  id: string;
  title: string;
  type: "virtual" | "in-person" | "hybrid";
  date: string;
  time: string;
  location: string;
  industry: string[];
  description: string;
  attendees: number;
  registrationUrl: string;
}

export default function NetworkingHub() {
  const [activeTab, setActiveTab] = useState<"contacts" | "events" | "opportunities">("contacts");
  const [contacts, setContacts] = useState<NetworkingContact[]>([]);
  const [events, setEvents] = useState<NetworkingEvent[]>([]);
  const [showAddContact, setShowAddContact] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Load networking data (in a real app, this would come from your backend)
    loadNetworkingData();
  }, []);

  const loadNetworkingData = () => {
    // Sample data - in a real app, this would be fetched from your API
    const sampleContacts: NetworkingContact[] = [
      {
        id: "1",
        name: "Sarah Johnson",
        title: "Senior Software Engineer",
        company: "Tech Corp",
        industry: "Technology",
        location: "San Francisco, CA",
        connectionType: "linkedin",
        status: "connected",
        notes: "Met at React conference. Interested in discussing frontend architecture.",
        lastContact: "2024-01-15",
        profileUrl: "https://linkedin.com/in/sarahjohnson"
      },
      {
        id: "2",
        name: "Michael Chen",
        title: "Product Manager",
        company: "Innovation Labs",
        industry: "Technology",
        location: "New York, NY",
        connectionType: "referral",
        status: "pending",
        notes: "Referred by John Smith. Working on AI products.",
        lastContact: "2024-01-10",
      }
    ];

    const sampleEvents: NetworkingEvent[] = [
      {
        id: "1",
        title: "Tech Professionals Networking Mixer",
        type: "hybrid",
        date: "2024-02-15",
        time: "18:00",
        location: "San Francisco, CA / Virtual",
        industry: ["Technology", "Software"],
        description: "Connect with fellow tech professionals in an informal setting. Great opportunity to expand your network and learn about new opportunities.",
        attendees: 150,
        registrationUrl: "https://example.com/register"
      },
      {
        id: "2",
        title: "Women in Tech Leadership Summit",
        type: "virtual",
        date: "2024-02-20",
        time: "14:00",
        location: "Virtual Event",
        industry: ["Technology", "Leadership"],
        description: "Join industry leaders for discussions on career advancement, leadership skills, and breaking barriers in tech.",
        attendees: 500,
        registrationUrl: "https://example.com/register"
      }
    ];

    setContacts(sampleContacts);
    setEvents(sampleEvents);
  };

  const addContact = (contactData: Partial<NetworkingContact>) => {
    const newContact: NetworkingContact = {
      id: Date.now().toString(),
      name: contactData.name || "",
      title: contactData.title || "",
      company: contactData.company || "",
      industry: contactData.industry || "",
      location: contactData.location || "",
      connectionType: contactData.connectionType || "linkedin",
      status: "pending",
      notes: contactData.notes || "",
      lastContact: new Date().toISOString().split('T')[0],
      profileUrl: contactData.profileUrl
    };

    setContacts(prev => [...prev, newContact]);
    setShowAddContact(false);
  };

  const updateContactStatus = (id: string, status: NetworkingContact["status"]) => {
    setContacts(prev => prev.map(contact => 
      contact.id === id ? { ...contact, status } : contact
    ));
  };

  const getStatusColor = (status: NetworkingContact["status"]) => {
    switch (status) {
    case "connected":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "declined":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const tabs = [
    { id: "contacts" as const, label: "My Network", icon: "👥" },
    { id: "events" as const, label: "Networking Events", icon: "📅" },
    { id: "opportunities" as const, label: "Connection Opportunities", icon: "🎯" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Networking Hub
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Build meaningful professional connections efficiently
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600 dark:text-blue-400"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Contacts Tab */}
      {activeTab === "contacts" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Your Professional Network ({contacts.length})
            </h3>
            <button
              onClick={() => setShowAddContact(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              + Add Contact
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {contacts.filter(c => c.status === "connected").length}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">Connected</div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {contacts.filter(c => c.status === "pending").length}
              </div>
              <div className="text-sm text-yellow-700 dark:text-yellow-300">Pending</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {new Set(contacts.map(c => c.industry)).size}
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Industries</div>
            </div>
          </div>

          {/* Contacts List */}
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {contact.name}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                        {contact.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      {contact.title} at {contact.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {contact.industry} • {contact.location}
                    </p>
                    {contact.notes && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <strong>Notes:</strong> {contact.notes}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Last contact: {new Date(contact.lastContact).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {contact.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateContactStatus(contact.id, "connected")}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateContactStatus(contact.id, "declined")}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          Decline
                        </button>
                      </>
                    )}
                    {contact.profileUrl && (
                      <a
                        href={contact.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                      >
                        View Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === "events" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Upcoming Networking Events
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === "virtual" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" :
                      event.type === "in-person" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" :
                        "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    📅 {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    📍 {event.location}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    👥 {event.attendees} attendees
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {event.industry.map((ind) => (
                      <span key={ind} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Connection Opportunities Tab */}
      {activeTab === "opportunities" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Smart Connection Suggestions
          </h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
              🎯 Personalized Networking Tips
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Industry Focus:</strong> Connect with 3-5 professionals in your target industry each week
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Quality over Quantity:</strong> Send personalized messages mentioning shared interests or mutual connections
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Follow Up:</strong> Schedule regular check-ins with your network to maintain relationships
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔍 LinkedIn Optimization
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Update your headline with target keywords</li>
                <li>• Add a professional photo</li>
                <li>• Write a compelling summary</li>
                <li>• Request recommendations from colleagues</li>
                <li>• Join industry-specific groups</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📧 Email Templates
              </h4>
              <div className="space-y-3">
                <button className="w-full text-left bg-white dark:bg-gray-600 p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Cold Outreach</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Professional introduction template</div>
                </button>
                <button className="w-full text-left bg-white dark:bg-gray-600 p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Follow-up</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">After meeting someone new</div>
                </button>
                <button className="w-full text-left bg-white dark:bg-gray-600 p-3 rounded border hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors">
                  <div className="font-medium text-gray-900 dark:text-white">Informational Interview</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Request for career advice</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Contact Modal */}
      {showAddContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Add New Contact
            </h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              addContact({
                name: formData.get("name") as string,
                title: formData.get("title") as string,
                company: formData.get("company") as string,
                industry: formData.get("industry") as string,
                location: formData.get("location") as string,
                connectionType: formData.get("connectionType") as NetworkingContact["connectionType"],
                notes: formData.get("notes") as string,
                profileUrl: formData.get("profileUrl") as string,
              });
            }}>
              <div className="space-y-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input
                  name="title"
                  type="text"
                  placeholder="Job Title"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input
                  name="industry"
                  type="text"
                  placeholder="Industry"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input
                  name="location"
                  type="text"
                  placeholder="Location"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <select
                  name="connectionType"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="linkedin">LinkedIn</option>
                  <option value="email">Email</option>
                  <option value="referral">Referral</option>
                  <option value="event">Event</option>
                </select>
                <input
                  name="profileUrl"
                  type="url"
                  placeholder="Profile URL (optional)"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <textarea
                  name="notes"
                  placeholder="Notes (optional)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Contact
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddContact(false)}
                  className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}