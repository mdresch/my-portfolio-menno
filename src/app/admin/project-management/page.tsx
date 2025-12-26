"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FolderIcon,
  ClockIcon,
  UserIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PauseIcon
} from "@heroicons/react/24/outline";

interface Project {
  id: number;
  title: string;
  description?: string;
  status: string;
  clientName?: string;
  duration?: string;
  budget?: string;
  serviceType?: string;
  datePublished?: string;
  client?: {
    id: number;
    name: string;
    email: string;
    company?: string;
  };
}

export default function ProjectManagementPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetchProjects();
  }, [statusFilter]);

  const fetchProjects = async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "all") {
        params.append("status", statusFilter);
      }
      
      const response = await fetch(`/api/projects?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <ClockIcon className="h-5 w-5 text-blue-600" />;
      case "completed": return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case "on-hold": return <PauseIcon className="h-5 w-5 text-yellow-600" />;
      default: return <ExclamationTriangleIcon className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "on-hold": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const statusCounts = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

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
          <h1 className="text-2xl font-bold">Project Management</h1>
          <p className="text-gray-600">Track and manage your client projects</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          New Project
        </Link>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Active</p>
              <p className="text-2xl font-semibold text-gray-900">{statusCounts.active || 0}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-semibold text-gray-900">{statusCounts.completed || 0}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <PauseIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">On Hold</p>
              <p className="text-2xl font-semibold text-gray-900">{statusCounts["on-hold"] || 0}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <FolderIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-500">Total</p>
              <p className="text-2xl font-semibold text-gray-900">{projects.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {[
            { key: "all", label: "All Projects" },
            { key: "active", label: "Active" },
            { key: "completed", label: "Completed" },
            { key: "on-hold", label: "On Hold" }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                statusFilter === tab.key
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Projects List */}
      {projects.length === 0 ? (
        <div className="text-center py-12">
          <FolderIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
          <p className="mt-1 text-sm text-gray-500">
            {statusFilter !== "all" 
              ? `No projects with status "${statusFilter}".`
              : "Get started by creating your first project."
            }
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(project.status)}
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.description && (
                    <p className="text-gray-600 mb-3">{project.description}</p>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                {project.clientName && (
                  <div className="flex items-center text-gray-600">
                    <UserIcon className="h-4 w-4 mr-2" />
                    <span>{project.clientName}</span>
                  </div>
                )}
                {project.serviceType && (
                  <div className="flex items-center text-gray-600">
                    <FolderIcon className="h-4 w-4 mr-2" />
                    <span>{project.serviceType}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.budget && (
                  <div className="flex items-center text-gray-600">
                    <CurrencyDollarIcon className="h-4 w-4 mr-2" />
                    <span>{project.budget}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="bg-blue-50 text-blue-700 py-2 px-3 rounded text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="bg-gray-50 text-gray-700 py-2 px-3 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Edit
                  </Link>
                  {project.client && (
                    <Link
                      href={`/admin/clients/${project.client.id}`}
                      className="bg-green-50 text-green-700 py-2 px-3 rounded text-sm font-medium hover:bg-green-100 transition-colors"
                    >
                      View Client
                    </Link>
                  )}
                </div>
                
                {project.datePublished && (
                  <div className="text-xs text-gray-500">
                    Started {new Date(project.datePublished).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}