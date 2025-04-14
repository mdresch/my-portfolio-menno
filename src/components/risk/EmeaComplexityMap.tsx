'use client';

import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

// EMEA country complexity data
const emeaComplexityData: Record<string, { score: number, rank: number, highlight: string }> = {
  "France": { 
    score: 81, 
    rank: 2,
    highlight: "High complexity due to extensive labor regulations and administrative requirements"
  },
  "Italy": { 
    score: 74, 
    rank: 6,
    highlight: "Complex payroll and tax requirements with notable regional variations"
  },
  "Germany": { 
    score: 70, 
    rank: 10,
    highlight: "Structured but complex regulatory framework with detailed documentation requirements"
  },
  "South Africa": { 
    score: 64, 
    rank: 16,
    highlight: "Administrative complexity and changing regulatory environment"
  },
  "Spain": { 
    score: 56, 
    rank: 22,
    highlight: "Moderate complexity with regional regulatory differences"
  },
  "Poland": { 
    score: 53, 
    rank: 27,
    highlight: "Improving digital government services but still moderate complexity"
  },
  "United Arab Emirates": { 
    score: 47, 
    rank: 36,
    highlight: "Significant business-friendly reforms reducing complexity"
  },
  "United Kingdom": { 
    score: 45, 
    rank: 38,
    highlight: "Moderate complexity with efficient digital government services"
  },
  "Ireland": { 
    score: 34, 
    rank: 55,
    highlight: "Business-friendly environment with transparent regulations"
  },
  "Denmark": { 
    score: 25, 
    rank: 73,
    highlight: "Highly digitalized government services with streamlined processes"
  },
  "Netherlands": { 
    score: 22, 
    rank: 75,
    highlight: "Efficient regulatory environment with digital-first approach"
  }
};

// Country name mapping for display purposes
const countryNameMapping: Record<string, string> = {
  "United States of America": "United States",
  "United Kingdom": "UK",
  "United Arab Emirates": "UAE"
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

const EmeaComplexityMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountry | null>(null);
  const [geoUrl, setGeoUrl] = useState<string>('/maps/world-110m.json');

  // Ensure the map data is loaded correctly
  useEffect(() => {
    // Check if the map data loads
    fetch(geoUrl)
      .then(response => {
        if (!response.ok) {
          console.error('Failed to load map data:', response.status);
          // Try alternative path if the first one fails
          setGeoUrl('/personal-website/maps/world-110m.json');
        }
      })
      .catch(error => {
        console.error('Error loading map data:', error);
      });
  }, [geoUrl]);

  const handleMouseEnter = (geo: any) => {
    const countryName = geo.properties.name;
    const complexityData = emeaComplexityData[countryName];
    
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
          scale: 220,
          center: [20, 45] // Centered on EMEA region
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup center={[20, 45]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const complexityData = emeaComplexityData[countryName];
                const isInteractive = !!complexityData;
                
                // Filter to only show countries in the EMEA region
                const coords = geo.properties.centroid || [0, 0];
                const isInEmea = 
                  (coords[0] > -20 && coords[0] < 60 && coords[1] > -40 && coords[1] < 70); // Europe, Middle East, Africa
                
                if (!isInEmea) return null;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: isInteractive ? getComplexityColor(complexityData?.score) : '#F1F5F9',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                      },
                      hover: {
                        fill: isInteractive ? getComplexityHoverColor(complexityData?.score) : '#F1F5F9',
                        stroke: '#FFFFFF',
                        strokeWidth: 0.5,
                        outline: 'none',
                        cursor: isInteractive ? 'pointer' : 'default',
                      },
                      pressed: {
                        fill: isInteractive ? getComplexityHoverColor(complexityData?.score) : '#F1F5F9',
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

export default EmeaComplexityMap;