"use client";
import React, { useRef, useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { geoEqualEarth } from "d3-geo";

// Complex, global trade routes with value property for thickness
const tradeRoutes = [
  { from: "USA", to: "CHN", value: 900 }, { from: "USA", to: "AUS", value: 200 }, { from: "USA", to: "RUS", value: 400 }, { from: "USA", to: "ZAF", value: 100 },
  { from: "BRA", to: "IND", value: 150 }, { from: "BRA", to: "CHN", value: 700 }, { from: "BRA", to: "RUS", value: 120 }, { from: "BRA", to: "AUS", value: 80 },
  { from: "CAN", to: "DEU", value: 300 }, { from: "CAN", to: "JPN", value: 250 }, { from: "CAN", to: "KOR", value: 100 }, { from: "CAN", to: "GBR", value: 90 },
  { from: "MEX", to: "ESP", value: 60 }, { from: "MEX", to: "FRA", value: 70 }, { from: "MEX", to: "NGA", value: 30 }, { from: "MEX", to: "EGY", value: 20 },
  { from: "DEU", to: "CHN", value: 800 }, { from: "DEU", to: "JPN", value: 400 }, { from: "DEU", to: "IND", value: 350 }, { from: "DEU", to: "USA", value: 900 },
  { from: "FRA", to: "USA", value: 500 }, { from: "FRA", to: "AUS", value: 100 }, { from: "FRA", to: "BRA", value: 200 }, { from: "FRA", to: "ZAF", value: 60 },
  { from: "GBR", to: "USA", value: 600 }, { from: "GBR", to: "CHN", value: 300 }, { from: "GBR", to: "IND", value: 200 }, { from: "GBR", to: "AUS", value: 100 },
  { from: "ESP", to: "USA", value: 100 }, { from: "ESP", to: "BRA", value: 80 }, { from: "ESP", to: "ZAF", value: 40 }, { from: "ESP", to: "RUS", value: 30 },
  { from: "NLD", to: "USA", value: 200 }, { from: "NLD", to: "CHN", value: 100 }, { from: "NLD", to: "JPN", value: 60 }, { from: "NLD", to: "AUS", value: 40 },
  { from: "RUS", to: "USA", value: 400 }, { from: "RUS", to: "CHN", value: 700 }, { from: "RUS", to: "IND", value: 300 }, { from: "RUS", to: "AUS", value: 200 },
  { from: "TUR", to: "USA", value: 100 }, { from: "TUR", to: "CHN", value: 80 }, { from: "TUR", to: "IND", value: 60 }, { from: "TUR", to: "AUS", value: 40 },
  { from: "CHN", to: "USA", value: 900 }, { from: "CHN", to: "BRA", value: 500 }, { from: "CHN", to: "ZAF", value: 200 }, { from: "CHN", to: "AUS", value: 800 },
  { from: "JPN", to: "USA", value: 700 }, { from: "JPN", to: "BRA", value: 100 }, { from: "JPN", to: "ZAF", value: 60 }, { from: "JPN", to: "AUS", value: 400 },
  { from: "KOR", to: "USA", value: 300 }, { from: "KOR", to: "BRA", value: 80 }, { from: "KOR", to: "ZAF", value: 40 }, { from: "KOR", to: "AUS", value: 200 },
  { from: "IND", to: "USA", value: 600 }, { from: "IND", to: "BRA", value: 200 }, { from: "IND", to: "ZAF", value: 100 }, { from: "IND", to: "AUS", value: 300 },
  { from: "SGP", to: "USA", value: 100 }, { from: "SGP", to: "BRA", value: 60 }, { from: "SGP", to: "ZAF", value: 40 }, { from: "SGP", to: "AUS", value: 80 },
  { from: "IDN", to: "USA", value: 80 }, { from: "IDN", to: "BRA", value: 40 }, { from: "IDN", to: "ZAF", value: 20 }, { from: "IDN", to: "AUS", value: 60 },
  { from: "AUS", to: "USA", value: 400 }, { from: "AUS", to: "BRA", value: 200 }, { from: "AUS", to: "ZAF", value: 100 }, { from: "AUS", to: "CHN", value: 800 },
  { from: "NGA", to: "USA", value: 60 }, { from: "NGA", to: "BRA", value: 40 }, { from: "NGA", to: "ZAF", value: 200 }, { from: "NGA", to: "AUS", value: 20 },
  { from: "ZAF", to: "USA", value: 200 }, { from: "ZAF", to: "BRA", value: 100 }, { from: "ZAF", to: "CHN", value: 300 }, { from: "ZAF", to: "AUS", value: 100 },
  { from: "EGY", to: "USA", value: 40 }, { from: "EGY", to: "BRA", value: 20 }, { from: "EGY", to: "ZAF", value: 60 }, { from: "EGY", to: "AUS", value: 30 },
];

// World country coordinates (longitude, latitude)
const coords = {
  USA: [-100, 40], CAN: [-106, 56], MEX: [-102, 23], BRA: [-51, -10], ARG: [-64, -34],
  DEU: [10, 51], FRA: [2, 46], GBR: [-1, 54], NLD: [5, 52], ESP: [-3, 40],
  RUS: [100, 60], TUR: [35, 39],
  CHN: [104, 35], JPN: [138, 36], KOR: [127, 37], IND: [78, 22], SGP: [104, 1], IDN: [120, -5], AUS: [134, -25],
  NGA: [8, 9], ZAF: [24, -29], EGY: [30, 26],
};

// Projection config for both map and d3-geo
const width = 800;
const height = 400;
const scale = 130;
const center = [0, 0];
const translate = [width / 2, height / 2];
const projection = geoEqualEarth().scale(scale).center(center).translate(translate);

export default function GlobeWithTradeRoutes({ zoomable }) {
  // Animation state: progress from 0 to 1 for each route
  const [progress, setProgress] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    let last = performance.now();
    const animate = (now) => {
      // Animate at 60fps, progress from 0 to 1 in ~3s, then loop
      const delta = (now - last) / 3000; // 3 seconds for a full loop
      last = now;
      setProgress((prev) => (prev + delta) % 1);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="relative w-full h-[400px] mx-auto">
      <ComposableMap
        projection="geoEqualEarth"
        width={width}
        height={height}
        projectionConfig={{ scale, center }}
        style={{ width: "100%", height: "400px" }}
      >
        {zoomable ? (
          <ZoomableGroup zoom={1} minZoom={0.7} maxZoom={4} center={center} translate={translate}>
            <Geographies geography="/maps/world-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#E5E7EB"
                    stroke="#D1D5DB"
                    style={{ outline: "none" }}
                  />
                ))
              }
            </Geographies>
            {/* Trade routes overlay */}
            {tradeRoutes.map((route, idx) => {
              const from = coords[route.from];
              const to = coords[route.to];
              if (!from || !to) return null;
              const [x1, y1] = projection(from);
              const [x2, y2] = projection(to);
              // Map value to thickness: min 0.5, max 4
              const minW = 0.5, maxW = 4, minV = 20, maxV = 900;
              const thickness = ((route.value - minV) / (maxV - minV)) * (maxW - minW) + minW;
              // Animate dot position along the route
              // Optionally, speed can be proportional to value
              const speed = 0.5 + (route.value - minV) / (maxV - minV); // 0.5 to 1.5
              const t = (progress * speed) % 1;
              const dotX = x1 + (x2 - x1) * t;
              const dotY = y1 + (y2 - y1) * t;
              return (
                <g key={idx}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth={thickness} opacity={0.6} markerEnd="url(#arrow)" />
                  <circle cx={x1} cy={y1} r={2.5} fill="#f59e42" />
                  <circle cx={x2} cy={y2} r={2.5} fill="#10b981" />
                  {/* Animated dot */}
                  <circle cx={dotX} cy={dotY} r={2.5 + thickness} fill="#2563eb" opacity={0.8} />
                </g>
              );
            })}
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
              </marker>
            </defs>
          </ZoomableGroup>
        ) : (
          <Geographies geography="/maps/world-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E5E7EB"
                  stroke="#D1D5DB"
                  style={{ outline: "none" }}
                />
              ))
            }
          </Geographies>
        )}
      </ComposableMap>
    </div>
  );
}
