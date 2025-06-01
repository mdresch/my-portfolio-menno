import React from 'react';

type ComplexityFactorsProps = {
  factors: Array<{
    label: string;
    level: string;
    percentage: number;
    color?: string;
  }>;
};

export default function ComplexityFactors({ factors }: ComplexityFactorsProps) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h4 className="font-medium mb-4 text-gray-800">Complexity Factors</h4>
      <div className="space-y-4">
        {factors.map((factor, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{factor.label}</span>
              <span className="text-sm font-medium">{factor.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`${factor.color || 'bg-red-500'} h-2.5 rounded-full`} 
                style={{ width: `${factor.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
