"use client";

import { useState, useEffect } from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

interface CrossPostStatistics {
  platform: string;
  totalCrossPosts: number;
  lastCrossPostedAt: string;
}

interface PlatformDistribution {
  platform: string;
  count: number;
}

interface CrossPost {
  id: number;
  sourceSlug: string;
  platform: string;
  crossPostedUrl: string;
  crossPostedAt: string;
  status: string;
}

interface CrossPostAnalytics {
  totalCrossPosts: number;
  platformStatistics: CrossPostStatistics[];
  platformDistribution: PlatformDistribution[];
  recentCrossPosts: CrossPost[];
}

// Colors for the pie chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function BlogCrossPostAnalytics() {
  const [analytics, setAnalytics] = useState<CrossPostAnalytics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        // In production, this would fetch from your .NET API
        // For now, we'll fetch from the Next.js API route that proxies to .NET
        const response = await fetch("/api/cross-post/analytics");
        
        if (!response.ok) {
          throw new Error(`Error fetching analytics: ${response.status}`);
        }
        
        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
        <p className="font-semibold">Error loading analytics</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4">
        <p>No analytics data available yet.</p>
      </div>
    );
  }

  // Prepare monthly data for the line chart
  // For demo, we're creating example data - in production this would come from the API
  const monthlyData = [
    { month: "Jan", hashnode: 5, devto: 3, medium: 2 },
    { month: "Feb", hashnode: 7, devto: 5, medium: 4 },
    { month: "Mar", hashnode: 10, devto: 8, medium: 6 },
    { month: "Apr", hashnode: 8, devto: 12, medium: 5 },
    { month: "May", hashnode: 12, devto: 14, medium: 8 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Cross-Posting Analytics</h2>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Total Cross-Posts</h3>
          <p className="text-3xl font-bold">{analytics.totalCrossPosts}</p>
        </div>
        
        <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">Platforms</h3>
          <p className="text-3xl font-bold">{analytics.platformStatistics.length}</p>
        </div>
        
        <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">Recent Posts</h3>
          <p className="text-3xl font-bold">{analytics.recentCrossPosts.length}</p>
        </div>
      </div>
      
      {/* Platform Distribution Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Platform Distribution</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={analytics.platformDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="platform"
                label={({ platform, percent }) => `${platform}: ${(percent * 100).toFixed(0)}%`}
              >
                {analytics.platformDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} posts`, "Count"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Monthly Cross-Posts Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Monthly Cross-Posts</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={monthlyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hashnode" stroke="#0088FE" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="devto" stroke="#00C49F" />
              <Line type="monotone" dataKey="medium" stroke="#FFBB28" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Recent Cross-Posts */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Recent Cross-Posts</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-3 px-4 text-left">Post</th>
                <th className="py-3 px-4 text-left">Platform</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {analytics.recentCrossPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-3 px-4">
                    <a 
                      href={`/blog/${post.sourceSlug}`} 
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {post.sourceSlug.replace(/-/g, " ")}
                    </a>
                  </td>
                  <td className="py-3 px-4 capitalize">{post.platform}</td>
                  <td className="py-3 px-4">{new Date(post.crossPostedAt).toLocaleDateString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      post.status === "Success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
