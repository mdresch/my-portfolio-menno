"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  GeoType
} from "react-simple-maps";
import { regionalRiskData, countryNameMapping } from "../../lib/riskData"; // Adjust path as needed

// You might need to download or link to a GeoJSON file.
// This example assumes a world map GeoJSON is available at this path.
// Common sources: Natural Earth, TopoJSON collection.
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"; // Using a remote TopoJSON file from world-atlas

// Using GeoType from react-simple-maps

// Style type definitions for Geography component
interface GeoStyleProps {
  default: {
    fill: string;
    outline: string;
    stroke: string;
    strokeWidth: number;
    cursor?: string;
  };
  hover: {
    fill: string;
    outline: string;
    stroke: string;
    strokeWidth: number;
    cursor?: string;
  };
  pressed: {
    fill: string;
    outline: string;
  };
}

interface HoveredRegion {
  name: string;
  risks: string[];
}

interface InteractiveRiskMapProps {
  className?: string;
}

const InteractiveRiskMap: React.FC<InteractiveRiskMapProps> = ({ className }) => {
  const [hoveredRegion, setHoveredRegion] = useState<HoveredRegion | null>(null);

  const handleMouseEnter = (geo: GeoType) => {
    const countryName = geo.properties.name; // Use 'name' for world-atlas TopoJSON
    const risks = regionalRiskData[countryName];
    if (risks) {
      const displayName = countryNameMapping[countryName] || countryName;
      setHoveredRegion({ name: displayName, risks });
    } else {
      setHoveredRegion(null); // Clear if country not in our data
    }
  };

  const handleMouseLeave = () => {
    setHoveredRegion(null);
  };  return (
    <div className={`relative w-full h-full max-w-4xl mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md ${className || ""}`}><ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 120, // Adjust scale as needed
        center: [0, 20], // Adjust center as needed
      }}
      style={{ width: "100%", height: "100%", display: "block" }}
    >        <ZoomableGroup center={[0, 20] as [number, number]} zoom={1}>
        <Geographies geography={geoUrl}>            
          {({ geographies }: { geographies: GeoType[] }) =>
            geographies.map((geo: GeoType) => {
              const countryName = geo.properties.name; // Use 'name' for world-atlas TopoJSON
              const isInteractive = regionalRiskData.hasOwnProperty(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={handleMouseLeave}                    style={{
                    default: {
                      fill: isInteractive ? "#D1E5F0" : "#E0E0E0", // Light blue for interactive, gray otherwise
                      outline: "none",
                      stroke: "#FFFFFF", // White borders
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: isInteractive ? "#4682B4" : "#E0E0E0", // Darker blue on hover if interactive
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.5,
                      cursor: isInteractive ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isInteractive ? "#2E618D" : "#E0E0E0", // Even darker blue if pressed
                      outline: "none",
                    },
                  } as GeoStyleProps}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>

    {/* Information Panel */}
    {hoveredRegion && (
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-md shadow-lg border border-gray-200 max-w-xs">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{hoveredRegion.name}</h3>
        <p className="text-sm font-medium text-gray-600 mb-1">Top Risks (Placeholder):</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          {hoveredRegion.risks.map((risk, index) => (
            <li key={index}>{risk}</li>
          ))}
        </ul>
      </div>
    )}
    {/* Legend/Instructions */}
    <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-md shadow text-xs text-gray-600">
         Hover over highlighted countries for risk info.
    </div>
    </div>
  );
};

export default InteractiveRiskMap;