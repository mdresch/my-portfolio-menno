declare module 'react-simple-maps' {
  import React from 'react';

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      [key: string]: unknown;
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    [key: string]: unknown;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    className?: string;
    style?: React.CSSProperties;
    onMoveStart?: () => void;
    onMove?: () => void;
    onMoveEnd?: () => void;
    [key: string]: unknown;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: GeoType[] }) => React.ReactNode;
    [key: string]: unknown;
  }

  export interface GeographyProps {
    geography: GeoType;
    style?: {
      default?: { [key: string]: unknown };
      hover?: { [key: string]: unknown };
      pressed?: { [key: string]: unknown };
    };
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
    [key: string]: unknown;
  }

  export interface GeoType {
    rsmKey: string;
    properties: {
      name: string;
      [key: string]: unknown;
    };
    geometry: {
      type: string;
      coordinates: number[][][];
    };
    [key: string]: unknown;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
}
