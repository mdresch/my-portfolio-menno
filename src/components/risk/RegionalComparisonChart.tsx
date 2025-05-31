"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the props type for the component
interface RegionalComparisonChartProps {
  countryData: {
    country: string;
    region: string;
    overall: number;
    regulatory: number;
    tax: number;
    corporate: number;
    employment: number;
  };
  regionalAverages: {
    region: string;
    overall: number;
    regulatory: number;
    tax: number;
    corporate: number;
    employment: number;
  };
}

const RegionalComparisonChart: React.FC<RegionalComparisonChartProps> = ({ 
  countryData, 
  regionalAverages 
}) => {
  // Categories to display
  const categories = ["Overall", "Regulatory", "Tax", "Corporate", "Employment"];
  
  // Data mapping for country and regional averages
  const countryValues = [
    countryData.overall,
    countryData.regulatory,
    countryData.tax,
    countryData.corporate,
    countryData.employment
  ];
  
  const regionalValues = [
    regionalAverages.overall,
    regionalAverages.regulatory,
    regionalAverages.tax,
    regionalAverages.corporate,
    regionalAverages.employment
  ];

  // Prepare data for the bar chart
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: countryData.country,
        data: countryValues,
        backgroundColor: "rgba(53, 162, 235, 0.8)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: `${regionalAverages.region} Average`,
        data: regionalValues,
        backgroundColor: "rgba(175, 175, 175, 0.8)",
        borderColor: "rgba(175, 175, 175, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        title: {
          display: true,
          text: "Complexity Score",
          font: {
            weight: "bold" as const,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Complexity Categories",
          font: {
            weight: "bold" as const,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}/100`;
          },
        },
      },
    },
  };

  return (
    <Bar data={chartData} options={chartOptions} />
  );
};

export default RegionalComparisonChart;