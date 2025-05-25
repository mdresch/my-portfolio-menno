'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from '../../components/ErrorBoundary';

// Dynamically load the AmericasComplexityMap component with error handling
const AmericasComplexityMap = dynamic(
  () => import('../../components/risk/AmericasComplexityMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[500px] w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent" role="status"></div>
          <p className="mt-2 text-sm text-gray-600">Loading Americas map visualization...</p>
        </div>
      </div>
    )
  }
);

const AmericasComplexityMapWrapper = () => {
  return (
    <ErrorBoundary>
      <div className="h-[500px] w-full border border-gray-100 rounded-lg">
        <AmericasComplexityMap />
      </div>
    </ErrorBoundary>
  );
};

export default AmericasComplexityMapWrapper;