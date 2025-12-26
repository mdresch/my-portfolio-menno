"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  WrenchScrewdriverIcon,
  PlusIcon,
  PencilIcon,
  EyeIcon,
  TrashIcon
} from "@heroicons/react/24/outline";

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  duration?: string;
  priceRange?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services");
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleServiceStatus = async (id: number, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/services/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      });
      
      if (response.ok) {
        fetchServices(); // Refresh the list
      }
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development": return "bg-blue-100 text-blue-800";
      case "consulting": return "bg-green-100 text-green-800";
      case "ai": return "bg-purple-100 text-purple-800";
      case "design": return "bg-pink-100 text-pink-800";
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
          <h1 className="text-2xl font-bold">Services Management</h1>
          <p className="text-gray-600">Manage your professional services and offerings</p>
        </div>
        <Link
          href="/admin/services/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Service
        </Link>
      </div>

      {/* Services List */}
      {services.length === 0 ? (
        <div className="text-center py-12">
          <WrenchScrewdriverIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No services</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding your first service offering.</p>
          <div className="mt-6">
            <Link
              href="/admin/services/new"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Service
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-sm border p-6 ${
                service.isActive ? "border-gray-200" : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`text-lg font-semibold ${service.isActive ? "text-gray-900" : "text-gray-500"}`}>
                      {service.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(service.category)}`}>
                      {service.category}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      service.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {service.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <p className={`mb-3 ${service.isActive ? "text-gray-700" : "text-gray-500"}`}>
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-medium text-sm text-gray-700 mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Duration and Price */}
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                {service.duration && (
                  <div>
                    <span className="font-medium">Duration:</span> {service.duration}
                  </div>
                )}
                {service.priceRange && (
                  <div>
                    <span className="font-medium">Price:</span> {service.priceRange}
                  </div>
                )}
                <div>
                  <span className="font-medium">Order:</span> {service.order}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Link
                    href={`/admin/services/${service.id}`}
                    className="bg-blue-50 text-blue-700 py-2 px-3 rounded text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    <EyeIcon className="h-4 w-4 inline mr-1" />
                    View
                  </Link>
                  <Link
                    href={`/admin/services/${service.id}/edit`}
                    className="bg-gray-50 text-gray-700 py-2 px-3 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    <PencilIcon className="h-4 w-4 inline mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={() => toggleServiceStatus(service.id, service.isActive)}
                    className={`py-2 px-3 rounded text-sm font-medium transition-colors ${
                      service.isActive
                        ? "bg-red-50 text-red-700 hover:bg-red-100"
                        : "bg-green-50 text-green-700 hover:bg-green-100"
                    }`}
                  >
                    {service.isActive ? "Deactivate" : "Activate"}
                  </button>
                </div>
                
                <div className="text-xs text-gray-500">
                  Updated {new Date(service.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}