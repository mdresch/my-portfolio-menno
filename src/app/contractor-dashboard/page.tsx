"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  UserGroupIcon,
  FolderIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PlusIcon
} from "@heroicons/react/24/outline";

interface DashboardStats {
  clients: {
    total: number;
    active: number;
    prospects: number;
  };
  projects: {
    total: number;
    active: number;
    completed: number;
    onHold: number;
  };
  inquiries: {
    total: number;
    new: number;
    contacted: number;
    qualified: number;
  };
  revenue: {
    thisMonth: string;
    lastMonth: string;
    growth: number;
  };
}

interface RecentActivity {
  id: number;
  type: "inquiry" | "project" | "client";
  title: string;
  description: string;
  timestamp: string;
  status?: string;
}

export default function ContractorDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    clients: { total: 0, active: 0, prospects: 0 },
    projects: { total: 0, active: 0, completed: 0, onHold: 0 },
    inquiries: { total: 0, new: 0, contacted: 0, qualified: 0 },
    revenue: { thisMonth: "€0", lastMonth: "€0", growth: 0 }
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch clients
      const clientsResponse = await fetch("/api/clients");
      const clients = clientsResponse.ok ? await clientsResponse.json() : [];
      
      // Fetch projects
      const projectsResponse = await fetch("/api/projects");
      const projects = projectsResponse.ok ? await projectsResponse.json() : [];
      
      // Fetch inquiries
      const inquiriesResponse = await fetch("/api/client-inquiries");
      const inquiries = inquiriesResponse.ok ? await inquiriesResponse.json() : [];

      // Calculate stats
      const clientStats = {
        total: clients.length,
        active: clients.filter((c: any) => c.status === "active").length,
        prospects: clients.filter((c: any) => c.status === "prospect").length,
      };

      const projectStats = {
        total: projects.length,
        active: projects.filter((p: any) => p.status === "active").length,
        completed: projects.filter((p: any) => p.status === "completed").length,
        onHold: projects.filter((p: any) => p.status === "on-hold").length,
      };

      const inquiryStats = {
        total: inquiries.length,
        new: inquiries.filter((i: any) => i.status === "new").length,
        contacted: inquiries.filter((i: any) => i.status === "contacted").length,
        qualified: inquiries.filter((i: any) => i.status === "qualified").length,
      };

      setStats({
        clients: clientStats,
        projects: projectStats,
        inquiries: inquiryStats,
        revenue: { thisMonth: "€12,500", lastMonth: "€8,750", growth: 42.9 } // Mock data
      });

      // Create recent activity from inquiries and projects
      const activities: RecentActivity[] = [
        ...inquiries.slice(0, 3).map((inquiry: any) => ({
          id: inquiry.id,
          type: "inquiry" as const,
          title: `New inquiry: ${inquiry.subject}`,
          description: `From ${inquiry.name} at ${inquiry.company || "Unknown Company"}`,
          timestamp: inquiry.createdAt,
          status: inquiry.status
        })),
        ...projects.slice(0, 2).map((project: any) => ({
          id: project.id,
          type: "project" as const,
          title: `Project: ${project.title}`,
          description: `Status: ${project.status}`,
          timestamp: project.datePublished || project.createdAt,
          status: project.status
        }))
      ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 5);

      setRecentActivity(activities);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "inquiry": return <EnvelopeIcon className="h-5 w-5 text-blue-600" />;
      case "project": return <FolderIcon className="h-5 w-5 text-green-600" />;
      case "client": return <UserGroupIcon className="h-5 w-5 text-purple-600" />;
      default: return <ChartBarIcon className="h-5 w-5 text-gray-600" />;
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
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Contractor Dashboard</h1>
          <p className="text-gray-600">Overview of your business performance and activities</p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/contact/professional"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            New Inquiry
          </Link>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Clients */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Clients</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.clients.total}</p>
              <p className="text-xs text-gray-500">
                {stats.clients.active} active, {stats.clients.prospects} prospects
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <FolderIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Projects</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.projects.total}</p>
              <p className="text-xs text-gray-500">
                {stats.projects.active} active, {stats.projects.completed} completed
              </p>
            </div>
          </div>
        </div>

        {/* Inquiries */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <EnvelopeIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Inquiries</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.inquiries.total}</p>
              <p className="text-xs text-gray-500">
                {stats.inquiries.new} new, {stats.inquiries.qualified} qualified
              </p>
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">This Month</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.revenue.thisMonth}</p>
              <p className="text-xs text-green-600">
                +{stats.revenue.growth}% from last month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/admin/inquiries"
            className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-blue-900">View Inquiries</p>
              <p className="text-sm text-blue-600">{stats.inquiries.new} new</p>
            </div>
          </Link>
          
          <Link
            href="/admin/project-management"
            className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <FolderIcon className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-green-900">Manage Projects</p>
              <p className="text-sm text-green-600">{stats.projects.active} active</p>
            </div>
          </Link>
          
          <Link
            href="/admin/clients"
            className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <UserGroupIcon className="h-6 w-6 text-purple-600 mr-3" />
            <div>
              <p className="font-medium text-purple-900">Client Management</p>
              <p className="text-sm text-purple-600">{stats.clients.total} total</p>
            </div>
          </Link>
          
          <Link
            href="/services"
            className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <ChartBarIcon className="h-6 w-6 text-yellow-600 mr-3" />
            <div>
              <p className="font-medium text-yellow-900">View Services</p>
              <p className="text-sm text-yellow-600">Public page</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        {recentActivity.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No recent activity</p>
        ) : (
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={`${activity.type}-${activity.id}`} className="flex items-center p-3 bg-gray-50 rounded-lg">
                {getActivityIcon(activity.type)}
                <div className="ml-3 flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(activity.timestamp).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Project Status Distribution</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm">Active</span>
              </div>
              <span className="font-medium">{stats.projects.active}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Completed</span>
              </div>
              <span className="font-medium">{stats.projects.completed}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ExclamationTriangleIcon className="h-4 w-4 text-yellow-600 mr-2" />
                <span className="text-sm">On Hold</span>
              </div>
              <span className="font-medium">{stats.projects.onHold}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Inquiry Pipeline</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">New Inquiries</span>
              <span className="font-medium text-blue-600">{stats.inquiries.new}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Contacted</span>
              <span className="font-medium text-yellow-600">{stats.inquiries.contacted}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Qualified</span>
              <span className="font-medium text-green-600">{stats.inquiries.qualified}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}