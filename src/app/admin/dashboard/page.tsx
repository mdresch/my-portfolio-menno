'use client';

import { useEffect, useState } from 'react';
import Dashboard from '../../../components/admin/Dashboard';

const AdminDashboardPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
          <span className="text-gray-700 font-medium">
            Initializing dashboard...
          </span>
        </div>
      </div>
    );
  }

  return <Dashboard />;
};

export default AdminDashboardPage;