"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  InboxIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

interface ClientInquiry {
  id: number;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
  budget?: string;
  timeline?: string;
  status: string;
  priority: string;
  source?: string;
  createdAt: string;
  client?: {
    id: number;
    name: string;
  };
  communications: Array<{
    id: number;
    subject: string;
    type: string;
    createdAt: string;
  }>;
}

export default function InquiriesManagementPage() {
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, priorityFilter]);

  const fetchInquiries = async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.append("status", statusFilter);
      if (priorityFilter !== "all") params.append("priority", priorityFilter);
      
      const response = await fetch(`/api/client-inquiries?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      }
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800";
      case "contacted": return "bg-yellow-100 text-yellow-800";
      case "qualified": return "bg-green-100 text-green-800";
      case "converted": return "bg-purple-100 text-purple-800";
      case "closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return <ExclamationTriangleIcon className="h-4 w-4" />;
      case "medium": return <ClockIcon className="h-4 w-4" />;
      case "low": return <CheckCircleIcon className="h-4 w-4" />;
      default: return <ClockIcon className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Client Inquiries</h1>
          <p className="text-gray-600">Manage incoming client inquiries and leads</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inquiries List */}
      {inquiries.length === 0 ? (
        <div className="text-center py-12">
          <InboxIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No inquiries</h3>
          <p className="mt-1 text-sm text-gray-500">
            {statusFilter !== "all" || priorityFilter !== "all" 
              ? "No inquiries match your current filters."
              : "New client inquiries will appear here."
            }
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{inquiry.subject}</h3>
                    <div className={`flex items-center ${getPriorityColor(inquiry.priority)}`}>
                      {getPriorityIcon(inquiry.priority)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{inquiry.name}</span>
                    <span>{inquiry.email}</span>
                    {inquiry.company && <span>{inquiry.company}</span>}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2">{inquiry.message}</p>

              {/* Project Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                {inquiry.serviceType && (
                  <div>
                    <span className="font-medium text-gray-500">Service:</span>
                    <div className="text-gray-900">{inquiry.serviceType}</div>
                  </div>
                )}
                {inquiry.budget && (
                  <div>
                    <span className="font-medium text-gray-500">Budget:</span>
                    <div className="text-gray-900">{inquiry.budget}</div>
                  </div>
                )}
                {inquiry.timeline && (
                  <div>
                    <span className="font-medium text-gray-500">Timeline:</span>
                    <div className="text-gray-900">{inquiry.timeline}</div>
                  </div>
                )}
                {inquiry.source && (
                  <div>
                    <span className="font-medium text-gray-500">Source:</span>
                    <div className="text-gray-900">{inquiry.source}</div>
                  </div>
                )}
              </div>

              {/* Communications Count */}
              {inquiry.communications.length > 0 && (
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1" />
                  {inquiry.communications.length} communication{inquiry.communications.length !== 1 ? 's' : ''}
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-2">
                <Link
                  href={`/admin/inquiries/${inquiry.id}`}
                  className="bg-blue-50 text-blue-700 py-2 px-4 rounded text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <EyeIcon className="h-4 w-4 inline mr-1" />
                  View Details
                </Link>
                <button className="bg-green-50 text-green-700 py-2 px-4 rounded text-sm font-medium hover:bg-green-100 transition-colors">
                  Mark as Contacted
                </button>
                {inquiry.status === "qualified" && (
                  <button className="bg-purple-50 text-purple-700 py-2 px-4 rounded text-sm font-medium hover:bg-purple-100 transition-colors">
                    Convert to Client
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}