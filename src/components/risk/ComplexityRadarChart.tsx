'use client';

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Define the props type for the component
interface ComplexityRadarChartProps {
  countryData: {
    country: string;
    overall: number;
    regulatory: number;
    tax: number;
    corporate: number;
    employment: number;
    // Additional metrics can be added here as the data model expands
  };
}

const ComplexityRadarChart: React.FC<ComplexityRadarChartProps> = ({ countryData }) => {
  // Prepare data for the radar chart
  const chartData = {
    labels: ['Regulatory Complexity', 'Tax Complexity', 'Corporate Governance', 'Employment Compliance', 'Overall Complexity'],
    datasets: [
      {
        label: `${countryData.country} Complexity Scores`,
        data: [
          countryData.regulatory,
          countryData.tax,
          countryData.corporate,
          countryData.employment,
          countryData.overall,
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(53, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(53, 162, 235, 1)',
      }
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}/100`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Radar data={chartData} options={chartOptions} />
  );
};

export default ComplexityRadarChart;