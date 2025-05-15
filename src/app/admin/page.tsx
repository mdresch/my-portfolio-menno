'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { ProjectService, BlogService, ContactService } from '@/lib/api-services';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    projectsCount: 0,
    blogPostsCount: 0,
    contactMessagesCount: 0,
    unreadMessagesCount: 0,
  });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchStats() {
      try {
        const [projects, blogPosts] = await Promise.all([
          ProjectService.getAll(),
          BlogService.getAll(),
        ]);
        
        // Contact messages count would require a separate endpoint
        // This is a placeholder for now
        setStats({
          projectsCount: projects.length,
          blogPostsCount: blogPosts.length,
          contactMessagesCount: 0, // Would need a specific API endpoint
          unreadMessagesCount: 0, // Would need a specific API endpoint
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchStats();
  }, []);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold">Welcome back, {user?.username || 'Admin'}</h2>
          <p className="text-gray-600 dark:text-gray-300">Manage your portfolio content</p>
        </div>
        
        <button
          onClick={logout}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Log Out
        </button>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Projects"
              count={stats.projectsCount}
              icon="📋"
              href="/projects"
            />
            <StatCard
              title="Blog Posts"
              count={stats.blogPostsCount}
              icon="📝"
              href="/blog"
            />
            <StatCard
              title="Messages"
              count={stats.contactMessagesCount}
              icon="✉️"
              href="/messages"
              badge={stats.unreadMessagesCount > 0 ? stats.unreadMessagesCount : undefined}
            />
            <StatCard
              title="Skills"
              count="Manage"
              icon="🧠"
              href="/admin/skills"
            />
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <ActionButton
                title="Add New Project"
                href="/admin/projects/new"
                icon="➕"
              />
              <ActionButton
                title="Create Blog Post"
                href="/admin/blog/new"
                icon="✏️"
              />
              <ActionButton
                title="View Site"
                href="/"
                icon="🌐"
                target="_blank"
              />
            </div>
            <Link
              href="/admin/dashboard"
              className="text-blue-600 hover:underline text-base font-medium"
            >
              Go to new Admin Dashboard
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

// Stat card component
function StatCard({
  title,
  count,
  icon,
  href,
  badge,
}: {
  title: string;
  count: number | string;
  icon: string;
  href: string;
  badge?: number;
}) {
  return (
    <Link href={href}>
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 relative">
        {badge !== undefined && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {badge}
          </span>
        )}
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="font-medium text-gray-700 dark:text-gray-300">{title}</h3>
        <p className="text-lg font-bold">{count}</p>
      </div>
    </Link>
  );
}

// Action button component
function ActionButton({
  title,
  href,
  icon,
  target,
}: {
  title: string;
  href: string;
  icon: string;
  target?: string;
}) {
  return (
    <Link href={href} target={target}>
      <div className="bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-3 rounded-lg transition-colors border border-blue-100 dark:border-blue-800/50">
        <div className="flex items-center">
          <span className="text-xl mr-2">{icon}</span>
          <span className="font-medium">{title}</span>
        </div>
      </div>
    </Link>
  );
}
