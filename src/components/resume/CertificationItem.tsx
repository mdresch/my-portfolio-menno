import React from "react";

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface CertificationItemProps {
  certification: Certification;
}

export default function CertificationItem({ certification }: CertificationItemProps) {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  }

  return (
    <div className="mb-6 last:mb-0 p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg mb-1 sm:mb-0">
          {certification.name}
        </h3>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {formatDate(certification.date)}
        </span>
      </div>
      
      <div className="text-gray-700 dark:text-gray-300">
        <span className="font-medium">Issued by:</span> {certification.issuer}
      </div>
    </div>
  );
}

