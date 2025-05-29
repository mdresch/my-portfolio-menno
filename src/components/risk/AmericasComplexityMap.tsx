"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import { getCountriesByRegion } from "@/lib/riskData";

// Get Americas country data
const americasCountryData = getCountriesByRegion("Americas");

// Using CDN-hosted TopoJSON file instead of local file
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Function to get color based on complexity score
const getMapColor = (score: number) => {
  if (score === undefined) return "#F5F5F5"; // Default light gray
  if (score >= 80) return "#EF4444"; // Red - Very High Complexity
  if (score >= 60) return "#F97316"; // Orange - High Complexity
  if (score >= 40) return "#F59E0B"; // Amber - Medium Complexity
  if (score >= 20) return "#10B981"; // Green - Low Complexity
  return "#047857"; // Emerald - Very Low Complexity
};

// List of countries in the Americas to filter the map
const americasCountries = [
  "United States", // This is how the US appears in the GeoJSON
  "Canada", 
  "Mexico", 
  "Brazil", 
  "Argentina", 
  "Colombia", 
  "Chile", 
  "Peru",
  "Venezuela",
  "Ecuador",
  "Bolivia",
  "Paraguay",
  "Uruguay",
  "Guyana",
  "Suriname",
  "French Guiana",
  "Panama",
  "Costa Rica",
  "Nicaragua",
  "Honduras",
  "El Salvador",
  "Guatemala",
  "Belize",
  "Cuba",
  "Haiti",
  "Dominican Rep.",
  "Jamaica",
  "Puerto Rico",
  "Trinidad and Tobago",
  "Bahamas"
];

// Map GeoJSON country names to our country names
const countryMapping: { [key: string]: string } = {
  "United States": "United States of America", // Map from GeoJSON name to our data name
  "Canada": "Canada",
  "Mexico": "Mexico",
  "Brazil": "Brazil",
  "Argentina": "Argentina",
  "Colombia": "Colombia",
  "Chile": "Chile",
  "Peru": "Peru",
  "Dominican Rep.": "Dominican Republic",
  "Venezuela": "Venezuela",
  "Ecuador": "Ecuador",
  "Bolivia": "Bolivia",
  "Paraguay": "Paraguay",
  "Uruguay": "Uruguay",
  "Costa Rica": "Costa Rica",
  "Panama": "Panama",
  "Nicaragua": "Nicaragua",
  "Honduras": "Honduras",
  "El Salvador": "El Salvador",
  "Guatemala": "Guatemala"
};

const AmericasComplexityMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<{
    name: string;
    rank?: number;
    score?: number;
    x: number;
    y: number;
  } | null>(null);
  
  const [mapWidth, setMapWidth] = useState(800);
  const [mapHeight, setMapHeight] = useState(500);

  // Update map size on window resize
  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".map-container");
      if (container) {
        setMapWidth(container.clientWidth);
        setMapHeight(container.clientHeight);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Debug logging to find exact country names from the GeoJSON data
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => {
        const names = data.objects.countries.geometries.map((geo: any) => geo.properties.name);
        console.log("All countries in TopoJSON:", names);
        console.log("Looking for US:", names.filter((name: string) => name.includes("United") || name.includes("US") || name.includes("U.S.")));
      })
      .catch(error => console.error("Error loading map data:", error));
  }, []);

  const handleMouseEnter = (geo: any, event: any) => {
    const countryName = geo.properties.name;
    const mappedName = countryMapping[countryName] || countryName;
    
    if (mappedName) {
      const countryData = americasCountryData.find(c => c.country === mappedName);
      if (countryData) {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipContent({
          name: countryData.country,
          rank: countryData.rank,
          score: countryData.overall,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  return (
    <div className="relative w-full h-full map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [-60, 20] // Center on Americas
        }}
        width={mapWidth}
        height={mapHeight}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) => 
              geographies.map(geo => {
                const countryName = geo.properties.name;
                
                // Check if this is an Americas country
                const isAmericasCountry = americasCountries.includes(countryName);
                
                // Skip if not in Americas
                if (!isAmericasCountry) {
                  return null;
                }
                
                const mappedName = countryMapping[countryName] || countryName;
                const countryData = mappedName ? 
                  americasCountryData.find(c => c.country === mappedName) : 
                  null;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countryData ? getMapColor(countryData.overall) : "#CCCCCC"}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { 
                        outline: "none",
                        fill: countryData ? "#3B82F6" : "#CCCCCC",
                        cursor: countryData ? "pointer" : "default"
                      },
                      pressed: { outline: "none" }
                    }}
                    onMouseEnter={(event) => handleMouseEnter(geo, event)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {tooltipContent && (
        <div 
          className="absolute bg-white p-2 rounded shadow-lg text-sm z-10"
          style={{ 
            left: tooltipContent.x, 
            top: tooltipContent.y - 60,
            transform: "translateX(-50%)"
          }}
        >
          <p className="font-bold">{tooltipContent.name}</p>
          {tooltipContent.score !== undefined && (
            <p>Complexity Score: <span className="font-semibold">{tooltipContent.score}</span></p>
          )}
          {tooltipContent.rank !== undefined && (
            <p>Global Rank: #{tooltipContent.rank}</p>
          )}
        </div>
      )}

      <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-3 rounded-tr shadow-sm">
        <h4 className="text-sm font-semibold mb-1">Complexity Legend</h4>
        <div className="flex flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#EF4444" }}></div>
            <span>Very High (80+)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#F97316" }}></div>
            <span>High (60-79)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#F59E0B" }}></div>
            <span>Medium (40-59)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#10B981" }}></div>
            <span>Low (20-39)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmericasComplexityMap;