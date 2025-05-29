// Mock GDP growth data for charting and future API integration
export const gdpGrowthData = {
  World: [3.1, 3.2, 2.9, 3.0, 3.1, 3.2, 3.2, 3.2], // Example, update with real values if available
  UnitedStates: [2.887, 2.796, 1.826, 1.744, 1.983, 2.122, 2.122, 2.122],
  Australia: [2.056, 1.038, 1.634, 2.078, 2.296, 2.327, 2.293, 2.272],
  Austria: [-0.955, -1.174, -0.261, 0.775, 1.623, 1.181, 1.073, 0.869],
  Belgium: [1.252, 0.996, 0.839, 0.969, 1.189, 1.268, 1.317, 1.342],
  Canada: [1.529, 1.528, 1.376, 1.558, 1.711, 1.575, 1.640, 1.517],
  France: [1.116, 1.067, 0.641, 1.015, 1.189, 1.259, 1.209, 1.210],
  Germany: [-0.264, -0.232, -0.050, 0.922, 1.452, 1.201, 0.954, 0.694],
  Italy: [0.715, 0.726, 0.440, 0.835, 0.569, 0.680, 0.700, 0.700],
  Japan: [1.486, 0.084, 0.554, 0.579, 0.625, 0.585, 0.520, 0.532],
  Korea: [1.404, 2.025, 1.027, 1.447, 2.099, 2.111, 1.945, 1.840],
  UnitedKingdom: [0.397, 1.101, 1.077, 1.407, 1.538, 1.457, 1.442, 1.436],
  China: [5.2, 5.0, 4.5, 4.3, 4.2, 4.1, 4.0, 4.0], // Example, update with real values if available
};

export const gdpGrowthYears = [
  "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"
];

export const gdpGrowthCountryOptions = [
  { value: "World", label: "World" },
  { value: "UnitedStates", label: "United States" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Belgium", label: "Belgium" },
  { value: "Canada", label: "Canada" },
  { value: "France", label: "France" },
  { value: "Germany", label: "Germany" },
  { value: "Italy", label: "Italy" },
  { value: "Japan", label: "Japan" },
  { value: "Korea", label: "Korea" },
  { value: "UnitedKingdom", label: "United Kingdom" },
  { value: "China", label: "China" },
];

export interface GDPGrowthData {
  [country: string]: number[];
}

export interface GDPGrowthCountryOption {
  value: string;
  label: string;
}

export interface GDPGrowthDataSource {
  getData: () => GDPGrowthData;
  getYears: () => string[];
  getCountryOptions: () => GDPGrowthCountryOption[];
}

export const gdpGrowthDataSource: GDPGrowthDataSource = {
  getData: () => gdpGrowthData,
  getYears: () => gdpGrowthYears,
  getCountryOptions: () => gdpGrowthCountryOptions,
};
