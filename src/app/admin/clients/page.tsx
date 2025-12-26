"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  UserGroupIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  EyeIcon,
  PencilIcon
} from "@heroicons/react/24/outline";

interface Client {
  id: number;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  industry?: string;
  status: string;
  createdAt: string;
  _count: {
    projects: number;
    inquiries: number;
    communications: number;
  };
}

export default function ClientsManagementPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchClients();
  }, [filter]);

  const fetchClients = async () => {
    try {
      const url = filter === "all" ? "/api/clients" : `/api/clients?status=${filter}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setClients(data);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      case "prospect": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
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
          <h1 className="text-2xl font-bold">Client Management</h1>
          <p className="text-gray-600">Manage your clients and their projects</p>
        </div>
        <Link
          href="/admin/clients/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Client
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { key: "all", label: "All Clients" },
            { key: "active", label: "Active" },
            { key: "prospect", label: "Prospects" },
            { key: "inactive", label: "Inactive" }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                filter === tab.key
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Clients Grid */}
      {clients.length === 0 ? (
        <div className="text-center py-12">
          <UserGroupIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No clients</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your first client.</p>
          <div className="mt-6">
            <Link
              href="/admin/clients/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Add Client
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                  {client.company && (
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                      {client.company}
                    </p>
                  )}
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(client.status)}`}>
                  {client.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  {client.email}
                </div>
                {client.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    {client.phone}
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-blue-600">{client._count.projects}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-green-600">{client._count.inquiries}</div>
                  <div className="text-xs text-gray-500">Inquiries</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-purple-600">{client._count.communications}</div>
                  <div className="text-xs text-gray-500">Messages</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Link
                  href={`/admin/clients/${client.id}`}
                  className="flex-1 bg-blue-50 text-blue-700 py-2 px-3 rounded text-sm font-medium hover:bg-blue-100 transition-colors text-center"
                >
                  <EyeIcon className="h-4 w-4 inline mr-1" />
                  View
                </Link>
                <Link
                  href={`/admin/clients/${client.id}/edit`}
                  className="flex-1 bg-gray-50 text-gray-700 py-2 px-3 rounded text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  <PencilIcon className="h-4 w-4 inline mr-1" />
                  Edit
                </Link>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                Added {new Date(client.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}