import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// Use a TopoJSON world map (public/maps/world-110m.json)
const geoUrl = "/maps/world-110m.json";

// Helper to get coordinates for some countries (for demo purposes)
const countryCoords = {
  USA: [-100, 40],
  CHN: [105, 35],
  DEU: [10, 51],
  JPN: [138, 36],
  GBR: [-1, 54],
  IND: [78, 22],
  BRA: [-51, -10],
  NLD: [5, 52],
  FRA: [2, 46],
  CAN: [-106, 56],
};

export default function WorldMap({ data }) {
  return (
    <div>
      <ComposableMap projectionConfig={{ scale: 120 }} width={400} height={220}>
        <Geographies geography={geoUrl}>
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
        {data.map((d) =>
          countryCoords[d.code] ? (
            <Marker key={d.code} coordinates={countryCoords[d.code]}>
              <circle r={6} fill="#2563eb" fillOpacity={0.7} />
              <text textAnchor="middle" y={-12} style={{ fontFamily: "sans-serif", fontSize: 10 }}>
                {d.code}
              </text>
            </Marker>
          ) : null
        )}
      </ComposableMap>
      <div className="text-xs text-gray-500 text-center mt-2">Map markers are illustrative for demo purposes.</div>
    </div>
  );
}
