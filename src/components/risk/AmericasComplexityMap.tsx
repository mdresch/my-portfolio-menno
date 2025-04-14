'use client';

import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

// Americas country complexity data
const americasComplexityData: Record<string, { score: number, rank: number, highlight: string }> = {
  "Brazil": { 
    score: 84, 
    rank: 1,
    highlight: "Highest global complexity due to intricate tax system and frequent regulatory changes"
  },
  "Mexico": { 
    score: 78, 
    rank: 4,
    highlight: "Complex regulatory environment with significant regional variations"
  },
  "Colombia": { 
    score: 76, 
    rank: 5,
    highlight: "High complexity with evolving regulatory framework"
  },
  "Argentina": { 
    score: 69, 
    rank: 11,
    highlight: "Volatile regulatory environment with complex labor laws"
  },
  "Bolivia": { 
    score: 67, 
    rank: 13,
    highlight: "Challenging compliance environment with frequent changes"
  },
  "Costa Rica": { 
    score: 63, 
    rank: 18,
    highlight: "Moderately complex with good digital infrastructure but bureaucratic processes"
  },
  "Peru": { 
    score: 59, 
    rank: 20,
    highlight: "Moderate complexity with improving regulatory transparency"
  },
  "Chile": { 
    score: 48, 
    rank: 34,
    highlight: "Lower complexity with progressive digital adoption"
  },
  "United States of America": { 
    score: 43, 
    rank: 41,
    highlight: "Relatively streamlined federal system with variations across states"
  },
  "Canada": { 
    score: 32, 
    rank: 59,
    highlight: "Business-friendly environment with efficient processes"
  }
};

// Country name mapping for display purposes
const countryNameMapping: Record<string, string> = {
  "United States of America": "United States"
};

interface HoveredCountry {
  name: string;
  score: number;
  rank: number;
  highlight: string;
}

const getComplexityColor = (score: number) => {
  if (score >= 80) return "#FEE2E2"; // Very High - lighter version of red
  if (score >= 60) return "#FDEDD3"; // High - lighter version of orange
  if (score >= 40) return "#FEF3C7"; // Medium - lighter version of amber 
  if (score >= 20) return "#D1FAE5"; // Low - lighter version of green
  return "#ECFDF5"; // Very Low - lighter version of emerald
};

const getComplexityHoverColor = (score: number) => {
  if (score >= 80) return "#EF4444"; // Very High - red
  if (score >= 60) return "#F97316"; // High - orange
  if (score >= 40) return "#F59E0B"; // Medium - amber
  if (score >= 20) return "#10B981"; // Low - green
  return "#059669"; // Very Low - emerald
};

const AmericasComplexityMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountry | null>(null);

  const handleMouseEnter = (geo: any) => {
    const countryName = geo.properties.name;
    const complexityData = americasComplexityData[countryName];
    
    if (complexityData) {
      const displayName = countryNameMapping[countryName] || countryName;
      setHoveredCountry({ 
        name: displayName, 
        score: complexityData.score,
        rank: complexityData.rank,
        highlight: complexityData.highlight
      });
    } else {
      setHoveredCountry(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  return (
    <div className="relative w-full h-80 border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
          center: [-70, 0] // Centered on Americas region
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup center={[-70, 0]} zoom={1}>
          <Geographies geography="/maps/world-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const complexityData = americasComplexityData[countryName];
                const isInteractive = !!complexityData;
                
                // Filter to only show countries in the Americas region
                const coords = geo.properties.centroid || [0, 0];
                const isInAmericas = 
                  (coords[0] > -170 && coords[0] < -30 && coords[1] > -60 && coords[1] < 80);
                
                if (!isInAmericas) return null;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: isInteractive ? getComplexityColor(complexityData.score) : '#F1F5F9',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      hover: {
                        fill: isInteractive ? getComplexityHoverColor(complexityData.score) : '#F1F5F9',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                        cursor: isInteractive ? 'pointer' : 'default',
                      },
                      pressed: {
                        fill: isInteractive ? getComplexityHoverColor(complexityData.score) : '#F1F5F9',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Information Panel */}
      {hoveredCountry && (
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-lg border border-gray-200 max-w-xs">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{hoveredCountry.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-gray-600">Global Rank: {hoveredCountry.rank}</span>
            <span className="text-sm font-medium text-gray-600">|</span>
            <span className="text-sm font-medium text-gray-600">Complexity Score: {hoveredCountry.score}</span>
          </div>
          <p className="text-sm text-gray-700">{hoveredCountry.highlight}</p>
        </div>
      )}

      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 rounded-md shadow text-xs space-y-1 border border-gray-100">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-red-100 border border-red-200"></span>
          <span className="text-gray-600">Very High (80-100)</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-orange-100 border border-orange-200"></span>
          <span className="text-gray-600">High (60-79)</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-amber-100 border border-amber-200"></span>
          <span className="text-gray-600">Medium (40-59)</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-green-100 border border-green-200"></span>
          <span className="text-gray-600">Low (20-39)</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-emerald-100 border border-emerald-200"></span>
          <span className="text-gray-600">Very Low (0-19)</span>
        </div>
      </div>
    </div>
  );
};

export default AmericasComplexityMap;