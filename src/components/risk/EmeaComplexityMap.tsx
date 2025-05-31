"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  ZoomableGroup 
} from "react-simple-maps";
import { allCountryData, getComplexityColor } from "../../lib/riskData";

// Type definitions
interface CountryData {
  name: string;
  score: number;
  rank: number;
  highlight: string;
  region: string;
}

interface HoveredCountryData {
  name: string;
  score: number;
  rank: number;
  highlight: string;
  region: string;
}

const GlobalComplexityMap: React.FC = () => {
  // State for managing the tooltip and interaction
  const [hoveredCountry, setHoveredCountry] = useState<HoveredCountryData | null>(null);
  const [complexityData, setComplexityData] = useState<Record<string, any>>({});
  const debugLoggedRef = useRef(false);

  // Country name mapping for GeoJSON mismatches
  const countryNameMapping: Record<string, string> = {
    // From GeoJSON to our data format
    "France": "France",
    "Italy": "Italy", 
    "Poland": "Poland",
    "Turkey": "Turkey",
    "S. Africa": "South Africa",
    "United Kingdom": "United Kingdom",
    "Denmark": "Denmark",
    "Russia": "Russia",
    "Germany": "Germany",
    "Saudi Arabia": "Saudi Arabia",
    "United Arab Emirates": "United Arab Emirates",
    "Serbia": "Serbia",
    "Sweden": "Sweden",
    "Bulgaria": "Bulgaria",
    "Finland": "Finland",
    "Switzerland": "Switzerland",
    "Czech Rep.": "Czech Republic",
    "Norway": "Norway",
    "Israel": "Israel",
    "Cyprus": "Cyprus",
    "Luxembourg": "Luxembourg",
    "Mauritius": "Mauritius",
    "Qatar": "Qatar",
    "Brazil": "Brazil",
    "Mexico": "Mexico",
    "Colombia": "Colombia",
    "Argentina": "Argentina",
    "China": "China",
    "Greece": "Greece",
    "Vietnam": "Vietnam",
    "Thailand": "Thailand",
    "India": "India",
    "Spain": "Spain",
    "Portugal": "Portugal",
    "Bolivia": "Bolivia",
    "Peru": "Peru",
    "Nicaragua": "Nicaragua",
    "Costa Rica": "Costa Rica",
    "Panama": "Panama",
    "Canada": "Canada",
    "Dominican Rep.": "Dominican Republic",
    "El Salvador": "El Salvador",
    "Guatemala": "Guatemala",
    "Honduras": "Honduras",
    "Croatia": "Croatia",
    "Indonesia": "Indonesia",
    "Taiwan": "Taiwan ROC",
    "S. Korea": "South Korea",
    "Japan": "Japan",
    "Philippines": "Philippines",
    "Australia": "Australia",
    "New Zealand": "New Zealand",
    "Cayman Is.": "Cayman Islands",
    "Dem. Rep. Congo": "Democratic Republic of Congo",
    "Singapore": "Singapore",
    "Jamaica": "Jamaica",
    
    // From our data format to GeoJSON
    "South Africa": "S. Africa",
    "Czech Republic": "Czech Rep.",
    "Republic of Ireland": "Ireland",
    "United States of America": "United States",
    "Dominican Republic": "Dominican Rep.",
    "Taiwan ROC": "Taiwan",
    "South Korea": "S. Korea",
    "Cayman Islands": "Cayman Is.",
    "Democratic Republic of Congo": "Dem. Rep. Congo",
    "British Virgin Islands": "British Virgin Is."
  };

  // Prepare data on component mount
  useEffect(() => {
    // Get all country data
    const dataByCountry: Record<string, any> = {};
    allCountryData.forEach(country => {
      dataByCountry[country.country] = {
        score: country.overall,
        rank: country.rank,
        highlight: country.highlight,
        region: country.region
      };
    });
    
    setComplexityData(dataByCountry);
    console.log("All countries loaded:", allCountryData.length);
  }, []);

  // Helper to determine fill colors based on complexity score
  const getComplexityFillColor = (score: number) => {
    if (score >= 80) return "#FEE2E2"; // Red
    if (score >= 60) return "#FFEDD5"; // Orange
    if (score >= 40) return "#FEF3C7"; // Amber
    if (score >= 20) return "#D1FAE5"; // Green
    return "#A7F3D0"; // Emerald
  };

  // Helper to determine hover colors (darker version of the regular color)
  const getComplexityHoverColor = (score: number) => {
    if (score >= 80) return "#FCA5A5"; // Darker red
    if (score >= 60) return "#FDBA74"; // Darker orange
    if (score >= 40) return "#FCD34D"; // Darker amber
    if (score >= 20) return "#86EFAC"; // Darker green
    return "#6EE7B7"; // Darker emerald
  };

  return (
    <div className="relative w-full h-full">
      {/* Main map container */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150,
          center: [0, 30] // Centered globally
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup center={[0, 30]} zoom={1}>
          <Geographies 
            geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
            onError={(error) => {
              console.error("Error loading map:", error);
            }}
          >
            {({ geographies }) => {
              // Debug log the country names from the GeoJSON
              if (geographies.length > 0) {
                if (!debugLoggedRef.current) {
                  console.log("All country names from GeoJSON:", 
                    geographies.map(geo => geo.properties.name));
                  console.log("Looking for these countries:", Object.keys(complexityData));
                  debugLoggedRef.current = true;
                }
              }
              
              return geographies.map((geo) => {
                const countryName = geo.properties.name;
                
                // Check if this is one of our countries with data
                let countryData = null;
                
                // Try to get the country data using the mapping or direct name
                const mappedName = countryNameMapping[countryName];
                if (mappedName && complexityData[mappedName]) {
                  countryData = complexityData[mappedName];
                } else if (complexityData[countryName]) {
                  countryData = complexityData[countryName];
                }
                
                const isInteractive = !!countryData;
                
                // Default fill for countries without data
                const fillColor = isInteractive 
                  ? getComplexityFillColor(countryData.score) 
                  : "#F1F5F9";  // Light gray for countries without data

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (countryData) {
                        setHoveredCountry({ 
                          name: mappedName || countryName, 
                          score: countryData.score,
                          rank: countryData.rank,
                          highlight: countryData.highlight,
                          region: countryData.region
                        });
                      }
                    }}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{
                      default: {
                        fill: fillColor,
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                        opacity: isInteractive ? 1 : 0.7, // Make countries without data slightly transparent
                      },
                      hover: {
                        fill: isInteractive ? getComplexityHoverColor(countryData.score) : fillColor,
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: isInteractive ? "pointer" : "default",
                      },
                      pressed: {
                        fill: isInteractive ? getComplexityHoverColor(countryData.score) : fillColor,
                        outline: "none",
                      },
                    }}
                  />
                );
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip that follows mouse */}
      {hoveredCountry && (
        <div className="absolute bg-white p-3 rounded shadow-lg border border-gray-200 z-10 w-64"
          style={{ 
            top: "10px", 
            right: "10px",
            maxWidth: "calc(100% - 20px)" 
          }}>
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium text-gray-900">{hoveredCountry.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(hoveredCountry.score)}`}>
              Score: {hoveredCountry.score}
            </span>
          </div>
          <p className="text-sm text-gray-600">Global Rank: #{hoveredCountry.rank}</p>
          <p className="text-xs mt-1 text-gray-500">{hoveredCountry.highlight}</p>
          <p className="text-xs mt-1 font-medium">Region: {hoveredCountry.region}</p>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2 rounded-md shadow-sm border border-gray-100">
        <div className="text-xs font-semibold mb-1 text-gray-700">Complexity Score:</div>
        <div className="flex flex-wrap gap-1">
          <div className="flex items-center">
            <span className="h-3 w-3 bg-red-100 inline-block mr-1 rounded-sm"></span>
            <span className="text-xs text-gray-600">Very High (80+)</span>
          </div>
          <div className="flex items-center ml-2">
            <span className="h-3 w-3 bg-orange-100 inline-block mr-1 rounded-sm"></span>
            <span className="text-xs text-gray-600">High (60-79)</span>
          </div>
          <div className="flex items-center ml-2">
            <span className="h-3 w-3 bg-amber-100 inline-block mr-1 rounded-sm"></span>
            <span className="text-xs text-gray-600">Medium (40-59)</span>
          </div>
          <div className="flex items-center ml-2">
            <span className="h-3 w-3 bg-green-100 inline-block mr-1 rounded-sm"></span>
            <span className="text-xs text-gray-600">Low (20-39)</span>
          </div>
          <div className="flex items-center ml-2">
            <span className="h-3 w-3 bg-emerald-100 inline-block mr-1 rounded-sm"></span>
            <span className="text-xs text-gray-600">Very Low (0-19)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalComplexityMap;