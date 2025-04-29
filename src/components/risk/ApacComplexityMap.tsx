'use client';

import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { feature } from 'topojson-client';

// APAC country complexity data
const apacComplexityData: Record<string, { score: number, rank: number, highlight: string }> = {
  "Indonesia": { 
    score: 79, 
    rank: 3,
    highlight: "Increasing complexity due to localization regulations and regional variations"
  },
  "China": { 
    score: 78, 
    rank: 4,
    highlight: "Significant regulatory complexity despite digitalization efforts"
  },
  "India": { 
    score: 71, 
    rank: 9,
    highlight: "Improving with GST implementation but still complex across states"
  },
  "Vietnam": { 
    score: 67, 
    rank: 13,
    highlight: "Evolving regulatory environment with frequent changes"
  },
  "Philippines": { 
    score: 63, 
    rank: 17,
    highlight: "Complex bureaucratic procedures and regional differences"
  },
  "Malaysia": { 
    score: 50, 
    rank: 32,
    highlight: "Improving digital government services but moderate complexity remains"
  },
  "Japan": { 
    score: 48, 
    rank: 35,
    highlight: "Language barriers and unique regulatory requirements increase complexity"
  },
  "Thailand": { 
    score: 46, 
    rank: 37,
    highlight: "Moderate complexity with improving administrative processes"
  },
  "Australia": { 
    score: 42, 
    rank: 40,
    highlight: "Moderate complexity with strong digital government services"
  },
  "Hong Kong": { 
    score: 23, 
    rank: 74,
    highlight: "Low complexity but increasing regulatory requirements"
  },
  "Singapore": { 
    score: 21, 
    rank: 75,
    highlight: "Highly efficient regulatory environment with streamlined processes"
  },
  "New Zealand": { 
    score: 18, 
    rank: 77,
    highlight: "Simplest business environment in APAC with transparent regulations"
  }
};

// Country name mapping for display purposes
const countryNameMapping: Record<string, string> = {
  "United States of America": "United States",
  "United Kingdom": "UK",
  "Hong Kong S.A.R.": "Hong Kong"
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

const ApacComplexityMap: React.FC = () => {
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountry | null>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Use local file path
  const geoUrl = "/maps/world-110m.json";

  // Load and process the map data
  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(geoUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to load map data: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Try different object names
        let geoJson;
        if (data.objects.countries) {
          geoJson = feature(data, data.objects.countries);
        } else if (data.objects.land) {
          geoJson = feature(data, data.objects.land);
        } else {
          // Use the first available object
          const firstKey = Object.keys(data.objects)[0];
          geoJson = feature(data, data.objects[firstKey]);
        }
        
        setGeoData(geoJson);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading map data:", error);
        setError(`Failed to load map data: ${error instanceof Error ? error.message : "Unknown error"}`);
        setIsLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  const handleMouseEnter = (geo: any) => {
    const countryName = geo.properties.name;
    const complexityData = apacComplexityData[countryName];
    
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
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-gray-500">Loading map data...</p>
        </div>
      )}
      
      {error && (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      
      {geoData && (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 250,
            center: [100, 15] // Centered on APAC region
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup center={[100, 15]} zoom={1}>
            <Geographies geography={geoData}>
              {({ geographies }) => 
                geographies.map((geo) => {
                  if (!geo.properties) return null;
                  
                  const countryName = geo.properties.name;
                  const complexityData = countryName ? apacComplexityData[countryName] : null;
                  
                  // Filter to only show countries in the Asia-Pacific region
                  // Optional: Uncomment to filter out non-APAC countries
                  /*
                  const coords = geo.properties.centroid || [0, 0];
                  const isInApac = (coords[0] > 60 && coords[0] < 180 && coords[1] > -50 && coords[1] < 60);
                  if (!isInApac) return null;
                  */
                  
                  return (
                    <Geography
                      key={geo.rsmKey || Math.random().toString()}
                      geography={geo}
                      onMouseEnter={() => handleMouseEnter(geo)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        default: {
                          fill: complexityData ? getComplexityColor(complexityData.score) : '#F1F5F9',
                          stroke: '#FFFFFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: complexityData ? getComplexityHoverColor(complexityData.score) : '#F1F5F9',
                          stroke: '#FFFFFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: complexityData ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: complexityData ? getComplexityHoverColor(complexityData.score) : '#F1F5F9',
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
      )}

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

export default ApacComplexityMap;