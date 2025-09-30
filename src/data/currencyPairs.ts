// Mock data for currency pairs with 1 year of daily historical data
// Generated for demonstration purposes

interface CurrencyPairData {
  pair: string;
  rate: number;
  change: string;
  base: string;
  quote: string;
  strength: string;
  history: number[];
  dailyRates: DailyRate[];
}

interface DailyRate {
  date: string;
  rate: number;
  high: number;
  low: number;
}

// Helper function to generate realistic daily rates for a year
function generateDailyRates(
  startRate: number, 
  volatility: number, 
  trend: number, 
  startDate?: Date
): DailyRate[] {
  // If no start date provided, calculate 1 year ago from today
  if (!startDate) {
    startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
  }
  
  const rates: DailyRate[] = [];
  let currentRate = startRate;
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate!);
    date.setDate(date.getDate() + i);
    
    // Add trend (small daily drift)
    currentRate += trend;
    
    // Add random volatility
    const randomChange = (Math.random() - 0.5) * volatility;
    currentRate += randomChange;
    
    // Generate high and low based on daily volatility
    const dailyVolatility = volatility * 0.3;
    const high = currentRate + Math.random() * dailyVolatility;
    const low = currentRate - Math.random() * dailyVolatility;
    
    rates.push({
      date: date.toISOString().split('T')[0],
      rate: Math.round(currentRate * 10000) / 10000,
      high: Math.round(high * 10000) / 10000,
      low: Math.round(low * 10000) / 10000
    });
  }
  
  return rates;
}

export const currencyPairs: CurrencyPairData[] = [
  {
    pair: "EUR/USD",
    rate: 1.1734,
    change: "+0.56%",
    base: "EUR",
    quote: "USD",
    strength: "Strong EUR",
    history: [1.1669, 1.1685, 1.1702, 1.1718, 1.1734],
    dailyRates: generateDailyRates(1.05, 0.008, 0.0003) // Starting from 1.05, moderate volatility, slight upward trend
  },
  {
    pair: "USD/JPY",
    rate: 145.23,
    change: "-1.85%",
    base: "USD",
    quote: "JPY",
    strength: "Weak USD",
    history: [147.97, 147.12, 146.45, 145.89, 145.23],
    dailyRates: generateDailyRates(150.0, 1.2, -0.015) // Starting from 150, higher volatility, downward trend
  },
  {
    pair: "GBP/USD",
    rate: 1.3521,
    change: "+0.55%",
    base: "GBP",
    quote: "USD",
    strength: "Strong GBP",
    history: [1.3447, 1.3468, 1.3491, 1.3506, 1.3521],
    dailyRates: generateDailyRates(1.25, 0.012, 0.0005) // Starting from 1.25, higher volatility, upward trend
  },
  {
    pair: "USD/CHF",
    rate: 0.7891,
    change: "-1.82%",
    base: "USD",
    quote: "CHF",
    strength: "Strong CHF",
    history: [0.8037, 0.8012, 0.7978, 0.7934, 0.7891],
    dailyRates: generateDailyRates(0.85, 0.006, -0.0002) // Starting from 0.85, moderate volatility, slight downward trend
  },
  {
    pair: "AUD/USD",
    rate: 0.6689,
    change: "+2.17%",
    base: "AUD",
    quote: "USD",
    strength: "Strong AUD",
    history: [0.6547, 0.6578, 0.6612, 0.6651, 0.6689],
    dailyRates: generateDailyRates(0.62, 0.015, 0.0008) // Starting from 0.62, high volatility, strong upward trend
  },
  {
    pair: "USD/CAD",
    rate: 1.3456,
    change: "-2.41%",
    base: "USD",
    quote: "CAD",
    strength: "Strong CAD",
    history: [1.3788, 1.3723, 1.3654, 1.3556, 1.3456],
    dailyRates: generateDailyRates(1.40, 0.008, -0.0004) // Starting from 1.40, moderate volatility, downward trend
  },
  {
    pair: "EUR/GBP",
    rate: 0.8681,
    change: "-0.74%",
    base: "EUR",
    quote: "GBP",
    strength: "Strong GBP",
    history: [0.8746, 0.8723, 0.8708, 0.8694, 0.8681],
    dailyRates: generateDailyRates(0.88, 0.005, -0.0001) // Starting from 0.88, low volatility, slight downward trend
  },
  {
    pair: "EUR/JPY",
    rate: 170.45,
    change: "-2.50%",
    base: "EUR",
    quote: "JPY",
    strength: "Weak EUR",
    history: [174.82, 173.89, 172.56, 171.48, 170.45],
    dailyRates: generateDailyRates(175.0, 1.5, -0.012) // Starting from 175, high volatility, downward trend
  },
  {
    pair: "USD/CNY",
    rate: 7.1892,
    change: "-0.78%",
    base: "USD",
    quote: "CNY",
    strength: "Weak USD",
    history: [7.2456, 7.2312, 7.2156, 7.2023, 7.1892],
    dailyRates: generateDailyRates(7.30, 0.02, -0.0003) // Starting from 7.30, low volatility, slight downward trend
  },
  {
    pair: "USD/INR",
    rate: 82.6789,
    change: "-0.54%",
    base: "USD",
    quote: "INR",
    strength: "Weak USD",
    history: [83.1250, 82.9876, 82.8456, 82.7567, 82.6789],
    dailyRates: generateDailyRates(84.0, 0.15, -0.004) // Starting from 84.0, moderate volatility, downward trend
  },
  {
    pair: "GBP/JPY",
    rate: 196.34,
    change: "-1.78%",
    base: "GBP",
    quote: "JPY",
    strength: "Neutral",
    history: [199.89, 199.12, 198.23, 197.45, 196.34],
    dailyRates: generateDailyRates(200.0, 2.0, -0.010) // Starting from 200, high volatility, downward trend
  },
  {
    pair: "NZD/USD",
    rate: 0.6123,
    change: "+4.19%",
    base: "NZD",
    quote: "USD",
    strength: "Strong NZD",
    history: [0.5877, 0.5923, 0.5989, 0.6056, 0.6123],
    dailyRates: generateDailyRates(0.58, 0.018, 0.0012) // Starting from 0.58, high volatility, strong upward trend
  },
  {
    pair: "USD/SGD",
    rate: 1.3289,
    change: "-0.98%",
    base: "USD",
    quote: "SGD",
    strength: "Strong SGD",
    history: [1.3421, 1.3389, 1.3345, 1.3312, 1.3289],
    dailyRates: generateDailyRates(1.36, 0.006, -0.0003) // Starting from 1.36, low volatility, slight downward trend
  },
  {
    pair: "USD/HKD",
    rate: 7.7956,
    change: "-0.44%",
    base: "USD",
    quote: "HKD",
    strength: "Strong HKD",
    history: [7.8302, 7.8234, 7.8123, 7.8034, 7.7956],
    dailyRates: generateDailyRates(7.85, 0.002, -0.0001) // Starting from 7.85, very low volatility, slight downward trend
  },
  {
    pair: "EUR/CHF",
    rate: 0.9267,
    change: "-1.15%",
    base: "EUR",
    quote: "CHF",
    strength: "Strong CHF",
    history: [0.9375, 0.9345, 0.9312, 0.9289, 0.9267],
    dailyRates: generateDailyRates(0.95, 0.004, -0.0002) // Starting from 0.95, low volatility, slight downward trend
  }
];

// Helper function to get rates for a specific date range
export function getRatesForDateRange(pair: string, startDate: string, endDate: string): DailyRate[] {
  const currencyPair = currencyPairs.find(p => p.pair === pair);
  if (!currencyPair) return [];
  
  return currencyPair.dailyRates.filter(rate => 
    rate.date >= startDate && rate.date <= endDate
  );
}

// Helper function to get the latest rate for a currency pair
export function getLatestRate(pair: string): DailyRate | null {
  const currencyPair = currencyPairs.find(p => p.pair === pair);
  if (!currencyPair || currencyPair.dailyRates.length === 0) return null;
  
  return currencyPair.dailyRates[currencyPair.dailyRates.length - 1];
}

// Helper function to calculate price statistics for a currency pair
export function getPriceStatistics(pair: string): {
  min: number;
  max: number;
  avg: number;
  volatility: number;
} | null {
  const currencyPair = currencyPairs.find(p => p.pair === pair);
  if (!currencyPair || currencyPair.dailyRates.length === 0) return null;
  
  const rates = currencyPair.dailyRates.map(r => r.rate);
  const min = Math.min(...rates);
  const max = Math.max(...rates);
  const avg = rates.reduce((sum, rate) => sum + rate, 0) / rates.length;
  
  // Calculate volatility (standard deviation)
  const variance = rates.reduce((sum, rate) => sum + Math.pow(rate - avg, 2), 0) / rates.length;
  const volatility = Math.sqrt(variance);
  
  return { min, max, avg, volatility };
}
