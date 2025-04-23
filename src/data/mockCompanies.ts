// Mock data for demonstration (expand as needed)
export const mockCompanies = [
  {
    name: 'Apple',
    ticker: 'AAPL',
    sector: 'Information Technology',
    index: 'S&P 500',
    price: 190,
    change: '+1.1%',
    summary: {
      marketCap: '3.0T',
      pe: 28.75,
      eps: 6.96,
      dividend: 1.00,
      yield: '0.50%',
      beta: 1.29,
      volume: '98.6M',
      shares: '15.02B',
      roe: '151.07%',
      revenue: '395.76B',
      grossMargin: '46.52%',
      netMargin: '26.88%',
      debtToEquity: '145.00%'
    },
    news: [
      { title: 'Apple launches new iPhone 16', date: '2025-04-20', url: 'https://news.example.com/apple-iphone16' },
      { title: 'Apple Q1 earnings beat expectations', date: '2025-04-15', url: 'https://news.example.com/apple-earnings-q1' },
      { title: 'Apple expands services in Asia', date: '2025-04-10', url: 'https://news.example.com/apple-asia' }
    ],
    profile: {
      description: 'Apple Inc. designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories, and sells a variety of related services.',
      executives: [
        { name: 'Timothy Cook', title: 'Chief Executive Officer' },
        { name: 'Arthur Levinson', title: 'Chairman' }
      ],
      address: 'One Apple Park Way, Cupertino, CA 95014, United States',
      website: 'https://www.apple.com/'
    },
    earnings: {
      nextEarningsDate: '2025-05-01',
      lastEarningsDate: '2025-02-01',
      epsActual: 2.10,
      epsEstimate: 2.05,
      revenueActual: '120.0B',
      revenueEstimate: '118.5B',
      surprise: '+2.4%'
    },
    peers: [
      { name: 'Microsoft', ticker: 'MSFT' },
      { name: 'Alphabet', ticker: 'GOOGL' },
      { name: 'Samsung Electronics', ticker: '005930.KS' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '395.76B', netIncome: '105.0B' },
        { year: 2023, revenue: '380.0B', netIncome: '99.8B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '420.0B', liabilities: '280.0B', equity: '140.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '110.0B', investing: '-20.0B', financing: '-30.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 200, expiry: '2025-05-17', price: 5.2, volume: 1200 },
        { strike: 210, expiry: '2025-05-17', price: 2.8, volume: 800 }
      ],
      puts: [
        { strike: 180, expiry: '2025-05-17', price: 3.1, volume: 950 },
        { strike: 170, expiry: '2025-05-17', price: 1.7, volume: 600 }
      ]
    },
    ownership: {
      institutional: '62%',
      insider: '0.07%',
      topHolders: [
        { name: 'Vanguard Group', percent: '8.1%' },
        { name: 'BlackRock', percent: '7.3%' },
        { name: 'Berkshire Hathaway', percent: '5.6%' }
      ]
    },
    priceHistory: [
      { date: '2025-04-16', price: 186 },
      { date: '2025-04-17', price: 187 },
      { date: '2025-04-18', price: 188 },
      { date: '2025-04-19', price: 189 },
      { date: '2025-04-20', price: 190 },
      { date: '2025-04-21', price: 191 },
      { date: '2025-04-22', price: 190 },
    ]
  },
  {
    name: 'Microsoft',
    ticker: 'MSFT',
    sector: 'Information Technology',
    index: 'S&P 500',
    price: 420,
    change: '+0.9%',
    summary: {
      marketCap: '3.2T', pe: 35.2, eps: 9.8, dividend: 2.72, yield: '0.65%', beta: 0.92, volume: '32.1M', shares: '7.45B', roe: '45.2%', revenue: '230.0B', grossMargin: '68.2%', netMargin: '36.5%', debtToEquity: '50.0%'
    },
    news: [
      { title: 'Microsoft unveils new AI features in Office', date: '2025-04-20', url: '#' },
      { title: 'Microsoft Q1 earnings strong', date: '2025-04-15', url: '#' }
    ],
    profile: {
      description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.',
      executives: [ { name: 'Satya Nadella', title: 'Chief Executive Officer' } ],
      address: 'One Microsoft Way, Redmond, WA 98052, United States',
      website: 'https://www.microsoft.com/'
    },
    earnings: { nextEarningsDate: '2025-05-02', lastEarningsDate: '2025-02-02', epsActual: 2.35, epsEstimate: 2.30, revenueActual: '60.0B', revenueEstimate: '59.5B', surprise: '+0.8%' },
    peers: [ { name: 'Apple', ticker: 'AAPL' }, { name: 'Alphabet', ticker: 'GOOGL' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '230.0B', netIncome: '84.0B' } ], balanceSheet: [ { year: 2024, assets: '400.0B', liabilities: '200.0B', equity: '200.0B' } ], cashFlow: [ { year: 2024, operating: '90.0B', investing: '-15.0B', financing: '-20.0B' } ] },
    options: { calls: [ { strike: 430, expiry: '2025-05-17', price: 6.1, volume: 900 } ], puts: [ { strike: 410, expiry: '2025-05-17', price: 4.2, volume: 700 } ] },
    ownership: { institutional: '70%', insider: '0.05%', topHolders: [ { name: 'Vanguard Group', percent: '8.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 415 }, { date: '2025-04-17', price: 417 }, { date: '2025-04-18', price: 419 }, { date: '2025-04-19', price: 420 } ]
  },
  {
    name: 'Alphabet',
    ticker: 'GOOGL',
    sector: 'Communication Services',
    index: 'S&P 500',
    price: 150,
    change: '+0.7%',
    summary: {
      marketCap: '2.0T', pe: 28.1, eps: 5.3, dividend: 0, yield: '0%', beta: 1.05, volume: '18.2M', shares: '13.2B', roe: '28.0%', revenue: '300.0B', grossMargin: '56.0%', netMargin: '25.0%', debtToEquity: '12.0%'
    },
    news: [ { title: 'Alphabet launches new search AI', date: '2025-04-19', url: '#' } ],
    profile: {
      description: 'Alphabet Inc. is a holding company, with Google as its major subsidiary.',
      executives: [ { name: 'Sundar Pichai', title: 'Chief Executive Officer' } ],
      address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States',
      website: 'https://www.abc.xyz/'
    },
    earnings: { nextEarningsDate: '2025-05-03', lastEarningsDate: '2025-02-03', epsActual: 1.45, epsEstimate: 1.40, revenueActual: '70.0B', revenueEstimate: '69.0B', surprise: '+1.4%' },
    peers: [ { name: 'Microsoft', ticker: 'MSFT' }, { name: 'Apple', ticker: 'AAPL' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '300.0B', netIncome: '75.0B' } ], balanceSheet: [ { year: 2024, assets: '350.0B', liabilities: '100.0B', equity: '250.0B' } ], cashFlow: [ { year: 2024, operating: '80.0B', investing: '-10.0B', financing: '-5.0B' } ] },
    options: { calls: [ { strike: 155, expiry: '2025-05-17', price: 2.5, volume: 500 } ], puts: [ { strike: 145, expiry: '2025-05-17', price: 1.8, volume: 400 } ] },
    ownership: { institutional: '65%', insider: '0.08%', topHolders: [ { name: 'BlackRock', percent: '7.5%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 148 }, { date: '2025-04-17', price: 149 }, { date: '2025-04-18', price: 150 }, { date: '2025-04-19', price: 150 } ]
  },
  {
    name: 'Samsung Electronics',
    ticker: '005930.KS',
    sector: 'Information Technology',
    index: 'KOSPI',
    price: 70,
    change: '+0.5%',
    summary: {
      marketCap: '500B', pe: 15.0, eps: 4.7, dividend: 1.2, yield: '1.7%', beta: 1.1, volume: '10.0M', shares: '5.97B', roe: '12.0%', revenue: '200.0B', grossMargin: '38.0%', netMargin: '12.0%', debtToEquity: '30.0%'
    },
    news: [ { title: 'Samsung unveils new Galaxy phone', date: '2025-04-18', url: '#' } ],
    profile: {
      description: 'Samsung Electronics is a global leader in technology, opening new possibilities for people everywhere.',
      executives: [ { name: 'Jong-Hee Han', title: 'Vice Chairman & CEO' } ],
      address: '129 Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea',
      website: 'https://www.samsung.com/'
    },
    earnings: { nextEarningsDate: '2025-05-04', lastEarningsDate: '2025-02-04', epsActual: 1.2, epsEstimate: 1.1, revenueActual: '50.0B', revenueEstimate: '49.0B', surprise: '+2.0%' },
    peers: [ { name: 'Apple', ticker: 'AAPL' }, { name: 'Sony', ticker: '6758.T' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '200.0B', netIncome: '24.0B' } ], balanceSheet: [ { year: 2024, assets: '300.0B', liabilities: '120.0B', equity: '180.0B' } ], cashFlow: [ { year: 2024, operating: '30.0B', investing: '-8.0B', financing: '-5.0B' } ] },
    options: { calls: [ { strike: 75, expiry: '2025-05-17', price: 1.1, volume: 200 } ], puts: [ { strike: 65, expiry: '2025-05-17', price: 0.8, volume: 150 } ] },
    ownership: { institutional: '55%', insider: '0.10%', topHolders: [ { name: 'National Pension Service', percent: '10.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 69 }, { date: '2025-04-17', price: 69.5 }, { date: '2025-04-18', price: 70 }, { date: '2025-04-19', price: 70 } ]
  },
  {
    name: 'Barclays PLC',
    ticker: 'BARC.L',
    sector: 'Financials',
    index: 'FTSE 100',
    price: 9,
    change: '+0.2%',
    summary: {
      marketCap: '35B', pe: 7.5, eps: 1.2, dividend: 0.3, yield: '3.3%', beta: 1.2, volume: '5.0M', shares: '17.0B', roe: '8.0%', revenue: '30.0B', grossMargin: 'N/A', netMargin: '20.0%', debtToEquity: '120.0%'
    },
    news: [ { title: 'Barclays reports steady growth', date: '2025-04-17', url: '#' } ],
    profile: {
      description: 'Barclays PLC is a British multinational investment bank and financial services company.',
      executives: [ { name: 'C.S. Venkatakrishnan', title: 'Group Chief Executive' } ],
      address: '1 Churchill Place, London, E14 5HP, United Kingdom',
      website: 'https://www.barclays.com/'
    },
    earnings: { nextEarningsDate: '2025-05-05', lastEarningsDate: '2025-02-05', epsActual: 0.32, epsEstimate: 0.30, revenueActual: '8.0B', revenueEstimate: '7.8B', surprise: '+2.6%' },
    peers: [ { name: 'HSBC Holdings PLC', ticker: 'HSBA.L' }, { name: 'JPMorgan Chase & Co', ticker: 'JPM' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '30.0B', netIncome: '6.0B' } ], balanceSheet: [ { year: 2024, assets: '1500.0B', liabilities: '1400.0B', equity: '100.0B' } ], cashFlow: [ { year: 2024, operating: '10.0B', investing: '-2.0B', financing: '-1.0B' } ] },
    options: { calls: [ { strike: 10, expiry: '2025-05-17', price: 0.2, volume: 100 } ], puts: [ { strike: 8, expiry: '2025-05-17', price: 0.1, volume: 80 } ] },
    ownership: { institutional: '60%', insider: '0.02%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 8.8 }, { date: '2025-04-17', price: 8.9 }, { date: '2025-04-18', price: 9 }, { date: '2025-04-19', price: 9 } ]
  },
  {
    name: 'JPMorgan Chase & Co',
    ticker: 'JPM',
    sector: 'Financials',
    index: 'Dow Jones',
    price: 180,
    change: '+0.4%',
    summary: {
      marketCap: '520B', pe: 12.5, eps: 14.4, dividend: 4.2, yield: '2.3%', beta: 1.1, volume: '12.0M', shares: '3.0B', roe: '15.0%', revenue: '130.0B', grossMargin: 'N/A', netMargin: '30.0%', debtToEquity: '110.0%'
    },
    news: [ { title: 'JPMorgan expands digital banking', date: '2025-04-18', url: '#' } ],
    profile: {
      description: 'JPMorgan Chase & Co is a leading global financial services firm and one of the largest banking institutions in the United States.',
      executives: [ { name: 'Jamie Dimon', title: 'Chairman & CEO' } ],
      address: '383 Madison Avenue, New York, NY 10179, United States',
      website: 'https://www.jpmorganchase.com/'
    },
    earnings: { nextEarningsDate: '2025-05-06', lastEarningsDate: '2025-02-06', epsActual: 3.8, epsEstimate: 3.7, revenueActual: '32.0B', revenueEstimate: '31.5B', surprise: '+1.6%' },
    peers: [ { name: 'Bank of America Corp', ticker: 'BAC' }, { name: 'Wells Fargo & Co', ticker: 'WFC' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '130.0B', netIncome: '39.0B' } ], balanceSheet: [ { year: 2024, assets: '4000.0B', liabilities: '3700.0B', equity: '300.0B' } ], cashFlow: [ { year: 2024, operating: '20.0B', investing: '-5.0B', financing: '-3.0B' } ] },
    options: { calls: [ { strike: 185, expiry: '2025-05-17', price: 2.5, volume: 300 } ], puts: [ { strike: 175, expiry: '2025-05-17', price: 1.9, volume: 250 } ] },
    ownership: { institutional: '68%', insider: '0.03%', topHolders: [ { name: 'Vanguard Group', percent: '7.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 178 }, { date: '2025-04-17', price: 179 }, { date: '2025-04-18', price: 180 }, { date: '2025-04-19', price: 180 } ]
  },
  {
    name: 'Bank of America Corp',
    ticker: 'BAC',
    sector: 'Financials',
    index: 'S&P 500',
    price: 40,
    change: '+0.3%',
    summary: {
      marketCap: '320B', pe: 10.2, eps: 3.9, dividend: 0.88, yield: '2.2%', beta: 1.0, volume: '8.0M', shares: '8.2B', roe: '11.0%', revenue: '90.0B', grossMargin: 'N/A', netMargin: '22.0%', debtToEquity: '100.0%'
    },
    news: [ { title: 'Bank of America launches new credit card', date: '2025-04-17', url: '#' } ],
    profile: {
      description: 'Bank of America Corporation is a multinational investment bank and financial services holding company.',
      executives: [ { name: 'Brian Moynihan', title: 'Chairman & CEO' } ],
      address: '100 North Tryon Street, Charlotte, NC 28255, United States',
      website: 'https://www.bankofamerica.com/'
    },
    earnings: { nextEarningsDate: '2025-05-07', lastEarningsDate: '2025-02-07', epsActual: 1.1, epsEstimate: 1.0, revenueActual: '23.0B', revenueEstimate: '22.5B', surprise: '+2.2%' },
    peers: [ { name: 'JPMorgan Chase & Co', ticker: 'JPM' }, { name: 'Wells Fargo & Co', ticker: 'WFC' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '90.0B', netIncome: '19.8B' } ], balanceSheet: [ { year: 2024, assets: '3000.0B', liabilities: '2800.0B', equity: '200.0B' } ], cashFlow: [ { year: 2024, operating: '12.0B', investing: '-3.0B', financing: '-2.0B' } ] },
    options: { calls: [ { strike: 42, expiry: '2025-05-17', price: 0.7, volume: 200 } ], puts: [ { strike: 38, expiry: '2025-05-17', price: 0.5, volume: 150 } ] },
    ownership: { institutional: '66%', insider: '0.04%', topHolders: [ { name: 'Berkshire Hathaway', percent: '12.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 39.5 }, { date: '2025-04-17', price: 39.8 }, { date: '2025-04-18', price: 40 }, { date: '2025-04-19', price: 40 } ]
  },
  {
    name: 'Wells Fargo & Co',
    ticker: 'WFC',
    sector: 'Financials',
    index: 'S&P 500',
    price: 50,
    change: '+0.1%',
    summary: {
      marketCap: '180B', pe: 9.8, eps: 5.1, dividend: 1.2, yield: '2.4%', beta: 1.05, volume: '6.0M', shares: '4.0B', roe: '10.0%', revenue: '70.0B', grossMargin: 'N/A', netMargin: '18.0%', debtToEquity: '90.0%'
    },
    news: [ { title: 'Wells Fargo expands mortgage lending', date: '2025-04-16', url: '#' } ],
    profile: {
      description: 'Wells Fargo & Company is a diversified, community-based financial services company.',
      executives: [ { name: 'Charles Scharf', title: 'CEO & President' } ],
      address: '420 Montgomery Street, San Francisco, CA 94104, United States',
      website: 'https://www.wellsfargo.com/'
    },
    earnings: { nextEarningsDate: '2025-05-08', lastEarningsDate: '2025-02-08', epsActual: 1.3, epsEstimate: 1.2, revenueActual: '18.0B', revenueEstimate: '17.5B', surprise: '+2.9%' },
    peers: [ { name: 'JPMorgan Chase & Co', ticker: 'JPM' }, { name: 'Bank of America Corp', ticker: 'BAC' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '70.0B', netIncome: '12.6B' } ], balanceSheet: [ { year: 2024, assets: '1900.0B', liabilities: '1750.0B', equity: '150.0B' } ], cashFlow: [ { year: 2024, operating: '8.0B', investing: '-2.0B', financing: '-1.0B' } ] },
    options: { calls: [ { strike: 52, expiry: '2025-05-17', price: 0.6, volume: 100 } ], puts: [ { strike: 48, expiry: '2025-05-17', price: 0.4, volume: 80 } ] },
    ownership: { institutional: '64%', insider: '0.03%', topHolders: [ { name: 'Vanguard Group', percent: '8.5%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 49.8 }, { date: '2025-04-17', price: 49.9 }, { date: '2025-04-18', price: 50 }, { date: '2025-04-19', price: 50 } ]
  },
  {
    name: 'HSBC Holdings PLC',
    ticker: 'HSBA.L',
    sector: 'Financials',
    index: 'FTSE 100',
    price: 8,
    change: '+0.2%',
    summary: {
      marketCap: '160B', pe: 8.2, eps: 1.0, dividend: 0.5, yield: '6.0%', beta: 0.9, volume: '4.0M', shares: '20.0B', roe: '9.0%', revenue: '60.0B', grossMargin: 'N/A', netMargin: '21.0%', debtToEquity: '130.0%'
    },
    news: [ { title: 'HSBC expands in Asia', date: '2025-04-15', url: '#' } ],
    profile: {
      description: 'HSBC Holdings plc is a British multinational investment bank and financial services holding company.',
      executives: [ { name: 'Noel Quinn', title: 'Group Chief Executive' } ],
      address: '8 Canada Square, London, E14 5HQ, United Kingdom',
      website: 'https://www.hsbc.com/'
    },
    earnings: { nextEarningsDate: '2025-05-09', lastEarningsDate: '2025-02-09', epsActual: 0.28, epsEstimate: 0.27, revenueActual: '15.0B', revenueEstimate: '14.8B', surprise: '+1.4%' },
    peers: [ { name: 'Barclays PLC', ticker: 'BARC.L' }, { name: 'JPMorgan Chase & Co', ticker: 'JPM' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '60.0B', netIncome: '12.6B' } ], balanceSheet: [ { year: 2024, assets: '3000.0B', liabilities: '2850.0B', equity: '150.0B' } ], cashFlow: [ { year: 2024, operating: '10.0B', investing: '-2.0B', financing: '-1.0B' } ] },
    options: { calls: [ { strike: 8.5, expiry: '2025-05-17', price: 0.1, volume: 60 } ], puts: [ { strike: 7.5, expiry: '2025-05-17', price: 0.08, volume: 40 } ] },
    ownership: { institutional: '58%', insider: '0.01%', topHolders: [ { name: 'Ping An Insurance', percent: '8.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 7.8 }, { date: '2025-04-17', price: 7.9 }, { date: '2025-04-18', price: 8 }, { date: '2025-04-19', price: 8 } ]
  },
  {
    name: 'American Express Co',
    ticker: 'AXP',
    sector: 'Financials',
    index: 'S&P 500',
    price: 180,
    change: '+0.6%',
    summary: {
      marketCap: '130B', pe: 16.5, eps: 11.0, dividend: 2.4, yield: '1.3%', beta: 1.2, volume: '3.0M', shares: '0.72B', roe: '29.0%', revenue: '55.0B', grossMargin: 'N/A', netMargin: '17.0%', debtToEquity: '250.0%'
    },
    news: [ { title: 'Amex launches new rewards program', date: '2025-04-14', url: '#' } ],
    profile: {
      description: 'American Express Company is a multinational financial services corporation.',
      executives: [ { name: 'Stephen Squeri', title: 'Chairman & CEO' } ],
      address: '200 Vesey Street, New York, NY 10285, United States',
      website: 'https://www.americanexpress.com/'
    },
    earnings: { nextEarningsDate: '2025-05-10', lastEarningsDate: '2025-02-10', epsActual: 2.5, epsEstimate: 2.4, revenueActual: '14.0B', revenueEstimate: '13.8B', surprise: '+1.5%' },
    peers: [ { name: 'JPMorgan Chase & Co', ticker: 'JPM' }, { name: 'Bank of America Corp', ticker: 'BAC' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '55.0B', netIncome: '9.4B' } ], balanceSheet: [ { year: 2024, assets: '200.0B', liabilities: '150.0B', equity: '50.0B' } ], cashFlow: [ { year: 2024, operating: '6.0B', investing: '-1.0B', financing: '-0.5B' } ] },
    options: { calls: [ { strike: 185, expiry: '2025-05-17', price: 1.8, volume: 90 } ], puts: [ { strike: 175, expiry: '2025-05-17', price: 1.2, volume: 70 } ] },
    ownership: { institutional: '60%', insider: '0.02%', topHolders: [ { name: 'Berkshire Hathaway', percent: '20.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 178 }, { date: '2025-04-17', price: 179 }, { date: '2025-04-18', price: 180 }, { date: '2025-04-19', price: 180 } ]
  },
  {
    name: 'ASML Holding',
    ticker: 'ASML.AS',
    sector: 'Information Technology',
    index: 'AEX',
    price: 900,
    change: '+1.2%',
    summary: { marketCap: '350B', pe: 45.0, eps: 20.0, dividend: 6.0, yield: '0.7%', beta: 1.1, volume: '1.2M', shares: '0.4B', roe: '60.0%', revenue: '30.0B', grossMargin: '52.0%', netMargin: '28.0%', debtToEquity: '20.0%' },
    news: [ { title: 'ASML expands EUV production', date: '2025-04-20', url: '#' } ],
    profile: { description: 'ASML Holding N.V. is a Dutch company and currently the largest supplier in the world of photolithography systems for the semiconductor industry.', executives: [ { name: 'Peter Wennink', title: 'President & CEO' } ], address: 'De Run 6501, 5504 DR Veldhoven, Netherlands', website: 'https://www.asml.com/' },
    earnings: { nextEarningsDate: '2025-05-11', lastEarningsDate: '2025-02-11', epsActual: 5.2, epsEstimate: 5.0, revenueActual: '8.0B', revenueEstimate: '7.8B', surprise: '+2.5%' },
    peers: [ { name: 'BE Semiconductor', ticker: 'BESI.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '30.0B', netIncome: '8.4B' } ], balanceSheet: [ { year: 2024, assets: '40.0B', liabilities: '8.0B', equity: '32.0B' } ], cashFlow: [ { year: 2024, operating: '10.0B', investing: '-2.0B', financing: '-1.0B' } ] },
    options: { calls: [ { strike: 920, expiry: '2025-05-17', price: 12.0, volume: 60 } ], puts: [ { strike: 880, expiry: '2025-05-17', price: 10.0, volume: 40 } ] },
    ownership: { institutional: '80%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '7.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 890 }, { date: '2025-04-17', price: 895 }, { date: '2025-04-18', price: 900 }, { date: '2025-04-19', price: 900 } ]
  },
  {
    name: 'Shell PLC',
    ticker: 'SHELL.AS',
    sector: 'Energy',
    index: 'AEX',
    price: 32,
    change: '+0.4%',
    summary: { marketCap: '210B', pe: 8.5, eps: 3.8, dividend: 1.8, yield: '5.6%', beta: 1.0, volume: '3.5M', shares: '6.5B', roe: '14.0%', revenue: '380.0B', grossMargin: '18.0%', netMargin: '7.0%', debtToEquity: '40.0%' },
    news: [ { title: 'Shell invests in renewables', date: '2025-04-19', url: '#' } ],
    profile: { description: 'Shell plc is a British multinational oil and gas company.', executives: [ { name: 'Wael Sawan', title: 'CEO' } ], address: 'Carel van Bylandtlaan 30, 2596 HR The Hague, Netherlands', website: 'https://www.shell.com/' },
    earnings: { nextEarningsDate: '2025-05-12', lastEarningsDate: '2025-02-12', epsActual: 1.0, epsEstimate: 0.98, revenueActual: '90.0B', revenueEstimate: '88.0B', surprise: '+2.3%' },
    peers: [ { name: 'BP', ticker: 'BP.L' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '380.0B', netIncome: '26.6B' } ], balanceSheet: [ { year: 2024, assets: '400.0B', liabilities: '250.0B', equity: '150.0B' } ], cashFlow: [ { year: 2024, operating: '30.0B', investing: '-10.0B', financing: '-5.0B' } ] },
    options: { calls: [ { strike: 34, expiry: '2025-05-17', price: 0.5, volume: 100 } ], puts: [ { strike: 30, expiry: '2025-05-17', price: 0.3, volume: 80 } ] },
    ownership: { institutional: '70%', insider: '0.02%', topHolders: [ { name: 'Vanguard Group', percent: '6.5%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 31.8 }, { date: '2025-04-17', price: 32 }, { date: '2025-04-18', price: 32 }, { date: '2025-04-19', price: 32 } ]
  },
  {
    name: 'ING Groep NV',
    ticker: 'INGA.AS',
    sector: 'Financials',
    index: 'AEX',
    price: 14,
    change: '+0.3%',
    summary: { marketCap: '54B', pe: 7.2, eps: 1.9, dividend: 0.7, yield: '5.0%', beta: 1.1, volume: '2.1M', shares: '3.8B', roe: '10.0%', revenue: '18.0B', grossMargin: 'N/A', netMargin: '22.0%', debtToEquity: '60.0%' },
    news: [ { title: 'ING expands digital banking', date: '2025-04-18', url: '#' } ],
    profile: { description: 'ING Groep N.V. is a Dutch multinational banking and financial services corporation.', executives: [ { name: 'Steven van Rijswijk', title: 'CEO' } ], address: 'Bijlmerplein 888, 1102 MG Amsterdam, Netherlands', website: 'https://www.ing.com/' },
    earnings: { nextEarningsDate: '2025-05-13', lastEarningsDate: '2025-02-13', epsActual: 0.5, epsEstimate: 0.48, revenueActual: '4.5B', revenueEstimate: '4.4B', surprise: '+2.1%' },
    peers: [ { name: 'ABN Amro Bank NV', ticker: 'ABN.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '18.0B', netIncome: '4.0B' } ], balanceSheet: [ { year: 2024, assets: '980.0B', liabilities: '930.0B', equity: '50.0B' } ], cashFlow: [ { year: 2024, operating: '5.0B', investing: '-1.0B', financing: '-0.5B' } ] },
    options: { calls: [ { strike: 15, expiry: '2025-05-17', price: 0.2, volume: 60 } ], puts: [ { strike: 13, expiry: '2025-05-17', price: 0.1, volume: 40 } ] },
    ownership: { institutional: '65%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '5.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 13.8 }, { date: '2025-04-17', price: 14 }, { date: '2025-04-18', price: 14 }, { date: '2025-04-19', price: 14 } ]
  },
  {
    name: 'Ahold Del',
    ticker: 'AD.AS',
    sector: 'Consumer Staples',
    index: 'AEX',
    price: 30,
    change: '+0.2%',
    summary: { marketCap: '30B', pe: 12.0, eps: 2.5, dividend: 1.0, yield: '3.3%', beta: 0.8, volume: '1.0M', shares: '1.0B', roe: '15.0%', revenue: '80.0B', grossMargin: '25.0%', netMargin: '4.0%', debtToEquity: '50.0%' },
    news: [ { title: 'Ahold Delhaize expands in US', date: '2025-04-17', url: '#' } ],
    profile: { description: 'Ahold Delhaize is a Dutch multinational retail and wholesaling company.', executives: [ { name: 'Frans Muller', title: 'President & CEO' } ], address: 'Provincialeweg 11, 1506 MA Zaandam, Netherlands', website: 'https://www.aholddelhaize.com/' },
    earnings: { nextEarningsDate: '2025-05-14', lastEarningsDate: '2025-02-14', epsActual: 0.7, epsEstimate: 0.68, revenueActual: '20.0B', revenueEstimate: '19.8B', surprise: '+1.5%' },
    peers: [ { name: 'Unilever', ticker: 'UNA.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '80.0B', netIncome: '3.2B' } ], balanceSheet: [ { year: 2024, assets: '40.0B', liabilities: '20.0B', equity: '20.0B' } ], cashFlow: [ { year: 2024, operating: '4.0B', investing: '-1.0B', financing: '-0.5B' } ] },
    options: { calls: [ { strike: 32, expiry: '2025-05-17', price: 0.4, volume: 50 } ], puts: [ { strike: 28, expiry: '2025-05-17', price: 0.3, volume: 30 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'Vanguard Group', percent: '4.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 29.8 }, { date: '2025-04-17', price: 30 }, { date: '2025-04-18', price: 30 }, { date: '2025-04-19', price: 30 } ]
  },
  {
    name: 'Prosus',
    ticker: 'PRX.AS',
    sector: 'Consumer Discretionary',
    index: 'AEX',
    price: 32,
    change: '+0.5%',
    summary: { marketCap: '130B', pe: 18.0, eps: 1.8, dividend: 0.2, yield: '0.6%', beta: 1.3, volume: '0.8M', shares: '4.0B', roe: '8.0%', revenue: '25.0B', grossMargin: '40.0%', netMargin: '10.0%', debtToEquity: '30.0%' },
    news: [ { title: 'Prosus invests in new tech startups', date: '2025-04-16', url: '#' } ],
    profile: { description: 'Prosus N.V. is a global consumer internet group and one of the largest technology investors in the world.', executives: [ { name: 'Bob van Dijk', title: 'CEO' } ], address: 'Gustav Mahlerplein 5, 1082 MS Amsterdam, Netherlands', website: 'https://www.prosus.com/' },
    earnings: { nextEarningsDate: '2025-05-15', lastEarningsDate: '2025-02-15', epsActual: 0.5, epsEstimate: 0.48, revenueActual: '6.0B', revenueEstimate: '5.8B', surprise: '+3.0%' },
    peers: [ { name: 'Adyen', ticker: 'ADYEN.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '25.0B', netIncome: '2.5B' } ], balanceSheet: [ { year: 2024, assets: '50.0B', liabilities: '20.0B', equity: '30.0B' } ], cashFlow: [ { year: 2024, operating: '3.0B', investing: '-1.0B', financing: '-0.5B' } ] },
    options: { calls: [ { strike: 34, expiry: '2025-05-17', price: 0.6, volume: 40 } ], puts: [ { strike: 30, expiry: '2025-05-17', price: 0.4, volume: 20 } ] },
    ownership: { institutional: '55%', insider: '0.01%', topHolders: [ { name: 'Naspers', percent: '27.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 31.8 }, { date: '2025-04-17', price: 32 }, { date: '2025-04-18', price: 32 }, { date: '2025-04-19', price: 32 } ]
  },
  {
    name: 'Wolters Kluwer',
    ticker: 'WKL.AS',
    sector: 'Industrials',
    index: 'AEX',
    price: 130,
    change: '+0.6%',
    summary: { marketCap: '40B', pe: 30.0, eps: 4.3, dividend: 1.8, yield: '1.4%', beta: 0.9, volume: '0.6M', shares: '0.3B', roe: '40.0%', revenue: '5.0B', grossMargin: '70.0%', netMargin: '20.0%', debtToEquity: '40.0%' },
    news: [ { title: 'Wolters Kluwer acquires new legal tech firm', date: '2025-04-15', url: '#' } ],
    profile: { description: 'Wolters Kluwer N.V. is a global provider of professional information, software solutions, and services.', executives: [ { name: 'Nancy McKinstry', title: 'CEO & Chair' } ], address: 'Zuidpoolsingel 2, 2408 ZE Alphen aan den Rijn, Netherlands', website: 'https://www.wolterskluwer.com/' },
    earnings: { nextEarningsDate: '2025-05-16', lastEarningsDate: '2025-02-16', epsActual: 1.1, epsEstimate: 1.08, revenueActual: '1.3B', revenueEstimate: '1.2B', surprise: '+2.8%' },
    peers: [ { name: 'Relx', ticker: 'REN.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '5.0B', netIncome: '1.0B' } ], balanceSheet: [ { year: 2024, assets: '10.0B', liabilities: '4.0B', equity: '6.0B' } ], cashFlow: [ { year: 2024, operating: '1.2B', investing: '-0.3B', financing: '-0.2B' } ] },
    options: { calls: [ { strike: 135, expiry: '2025-05-17', price: 1.2, volume: 20 } ], puts: [ { strike: 125, expiry: '2025-05-17', price: 1.0, volume: 10 } ] },
    ownership: { institutional: '70%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 129 }, { date: '2025-04-17', price: 130 }, { date: '2025-04-18', price: 130 }, { date: '2025-04-19', price: 130 } ]
  },
  {
    name: 'Adyen',
    ticker: 'ADYEN.AS',
    sector: 'Information Technology',
    index: 'AEX',
    price: 1400,
    change: '+1.0%',
    summary: { marketCap: '45B', pe: 60.0, eps: 23.0, dividend: 0, yield: '0%', beta: 1.4, volume: '0.3M', shares: '0.03B', roe: '35.0%', revenue: '2.0B', grossMargin: '60.0%', netMargin: '25.0%', debtToEquity: '10.0%' },
    news: [ { title: 'Adyen launches new payment platform', date: '2025-04-14', url: '#' } ],
    profile: { description: 'Adyen N.V. is a Dutch payment company that allows businesses to accept e-commerce, mobile, and point-of-sale payments.', executives: [ { name: 'Pieter van der Does', title: 'Co-founder & CEO' } ], address: 'Simon Carmiggeltstraat 6-50, 1011 DJ Amsterdam, Netherlands', website: 'https://www.adyen.com/' },
    earnings: { nextEarningsDate: '2025-05-17', lastEarningsDate: '2025-02-17', epsActual: 6.0, epsEstimate: 5.8, revenueActual: '0.6B', revenueEstimate: '0.58B', surprise: '+3.4%' },
    peers: [ { name: 'Prosus', ticker: 'PRX.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '2.0B', netIncome: '0.5B' } ], balanceSheet: [ { year: 2024, assets: '5.0B', liabilities: '1.0B', equity: '4.0B' } ], cashFlow: [ { year: 2024, operating: '0.7B', investing: '-0.2B', financing: '-0.1B' } ] },
    options: { calls: [ { strike: 1450, expiry: '2025-05-17', price: 10.0, volume: 10 } ], puts: [ { strike: 1350, expiry: '2025-05-17', price: 8.0, volume: 8 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'Vanguard Group', percent: '5.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 1390 }, { date: '2025-04-17', price: 1400 }, { date: '2025-04-18', price: 1400 }, { date: '2025-04-19', price: 1400 } ]
  },
  {
    name: 'Unilever',
    ticker: 'UNA.AS',
    sector: 'Consumer Staples',
    index: 'AEX',
    price: 50,
    change: '+0.3%',
    summary: { marketCap: '130B', pe: 18.0, eps: 2.8, dividend: 1.7, yield: '3.4%', beta: 0.9, volume: '1.5M', shares: '2.6B', roe: '18.0%', revenue: '60.0B', grossMargin: '45.0%', netMargin: '12.0%', debtToEquity: '70.0%' },
    news: [ { title: 'Unilever launches new sustainability initiative', date: '2025-04-13', url: '#' } ],
    profile: { description: 'Unilever N.V. is a British-Dutch multinational consumer goods company.', executives: [ { name: 'Hein Schumacher', title: 'CEO' } ], address: 'Weena 455, 3013 AL Rotterdam, Netherlands', website: 'https://www.unilever.com/' },
    earnings: { nextEarningsDate: '2025-05-18', lastEarningsDate: '2025-02-18', epsActual: 0.8, epsEstimate: 0.78, revenueActual: '15.0B', revenueEstimate: '14.8B', surprise: '+1.9%' },
    peers: [ { name: 'Ahold Del', ticker: 'AD.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '60.0B', netIncome: '7.2B' } ], balanceSheet: [ { year: 2024, assets: '80.0B', liabilities: '50.0B', equity: '30.0B' } ], cashFlow: [ { year: 2024, operating: '8.0B', investing: '-2.0B', financing: '-1.0B' } ] },
    options: { calls: [ { strike: 52, expiry: '2025-05-17', price: 0.6, volume: 40 } ], puts: [ { strike: 48, expiry: '2025-05-17', price: 0.4, volume: 30 } ] },
    ownership: { institutional: '65%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 49.8 }, { date: '2025-04-17', price: 50 }, { date: '2025-04-18', price: 50 }, { date: '2025-04-19', price: 50 } ]
  },
  {
    name: 'Heineken',
    ticker: 'HEIA.AS',
    sector: 'Consumer Staples',
    index: 'AEX',
    price: 90,
    change: '+0.4%',
    summary: { marketCap: '50B', pe: 20.0, eps: 4.5, dividend: 1.8, yield: '2.0%', beta: 1.0, volume: '0.7M', shares: '0.6B', roe: '16.0%', revenue: '28.0B', grossMargin: '55.0%', netMargin: '10.0%', debtToEquity: '60.0%' },
    news: [ { title: 'Heineken opens new brewery in Asia', date: '2025-04-12', url: '#' } ],
    profile: { description: 'Heineken N.V. is a Dutch multinational brewing company.', executives: [ { name: 'Dolf van den Brink', title: 'Chairman & CEO' } ], address: 'Tweede Weteringplantsoen 21, 1017 ZD Amsterdam, Netherlands', website: 'https://www.theheinekencompany.com/' },
    earnings: { nextEarningsDate: '2025-05-19', lastEarningsDate: '2025-02-19', epsActual: 1.2, epsEstimate: 1.18, revenueActual: '7.0B', revenueEstimate: '6.8B', surprise: '+2.9%' },
    peers: [ { name: 'Unilever', ticker: 'UNA.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '28.0B', netIncome: '2.8B' } ], balanceSheet: [ { year: 2024, assets: '30.0B', liabilities: '18.0B', equity: '12.0B' } ], cashFlow: [ { year: 2024, operating: '3.0B', investing: '-1.0B', financing: '-0.5B' } ] },
    options: { calls: [ { strike: 92, expiry: '2025-05-17', price: 0.8, volume: 20 } ], puts: [ { strike: 88, expiry: '2025-05-17', price: 0.6, volume: 10 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'Heineken Holding', percent: '50.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 89.8 }, { date: '2025-04-17', price: 90 }, { date: '2025-04-18', price: 90 }, { date: '2025-04-19', price: 90 } ]
  },
  {
    name: 'KPN Kon',
    ticker: 'KPN.AS',
    sector: 'Communication Services',
    index: 'AEX',
    price: 3.5,
    change: '+0.1%',
    summary: { marketCap: '15B', pe: 15.0, eps: 0.23, dividend: 0.14, yield: '4.0%', beta: 0.8, volume: '2.0M', shares: '4.3B', roe: '8.0%', revenue: '5.5B', grossMargin: '45.0%', netMargin: '8.0%', debtToEquity: '70.0%' },
    news: [ { title: 'KPN expands fiber network', date: '2025-04-11', url: '#' } ],
    profile: { description: 'Koninklijke KPN N.V. is a Dutch landline and mobile telecommunications company.', executives: [ { name: 'Joost Farwerck', title: 'CEO' } ], address: 'Wilhelminakade 123, 3072 AP Rotterdam, Netherlands', website: 'https://www.kpn.com/' },
    earnings: { nextEarningsDate: '2025-05-20', lastEarningsDate: '2025-02-20', epsActual: 0.06, epsEstimate: 0.05, revenueActual: '1.4B', revenueEstimate: '1.3B', surprise: '+2.0%' },
    peers: [ { name: 'Relx', ticker: 'REN.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '5.5B', netIncome: '0.44B' } ], balanceSheet: [ { year: 2024, assets: '10.0B', liabilities: '7.0B', equity: '3.0B' } ], cashFlow: [ { year: 2024, operating: '0.8B', investing: '-0.2B', financing: '-0.1B' } ] },
    options: { calls: [ { strike: 3.7, expiry: '2025-05-17', price: 0.05, volume: 10 } ], puts: [ { strike: 3.3, expiry: '2025-05-17', price: 0.03, volume: 8 } ] },
    ownership: { institutional: '55%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '5.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 3.48 }, { date: '2025-04-17', price: 3.5 }, { date: '2025-04-18', price: 3.5 }, { date: '2025-04-19', price: 3.5 } ]
  },
  {
    name: 'BE Semiconductor',
    ticker: 'BESI.AS',
    sector: 'Information Technology',
    index: 'AEX',
    price: 150,
    change: '+0.8%',
    summary: { marketCap: '12B', pe: 25.0, eps: 6.0, dividend: 2.0, yield: '1.3%', beta: 1.2, volume: '0.4M', shares: '0.08B', roe: '30.0%', revenue: '1.5B', grossMargin: '55.0%', netMargin: '22.0%', debtToEquity: '20.0%' },
    news: [ { title: 'BESI wins major chip contract', date: '2025-04-10', url: '#' } ],
    profile: { description: 'BE Semiconductor Industries N.V. is a Dutch multinational company that designs and manufactures semiconductor equipment.', executives: [ { name: 'Richard Blickman', title: 'CEO' } ], address: 'Ratio 6, 6921 RW Duiven, Netherlands', website: 'https://www.besi.com/' },
    earnings: { nextEarningsDate: '2025-05-21', lastEarningsDate: '2025-02-21', epsActual: 1.5, epsEstimate: 1.4, revenueActual: '0.4B', revenueEstimate: '0.38B', surprise: '+2.6%' },
    peers: [ { name: 'ASML Holding', ticker: 'ASML.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '1.5B', netIncome: '0.33B' } ], balanceSheet: [ { year: 2024, assets: '2.0B', liabilities: '0.5B', equity: '1.5B' } ], cashFlow: [ { year: 2024, operating: '0.4B', investing: '-0.1B', financing: '-0.05B' } ] },
    options: { calls: [ { strike: 155, expiry: '2025-05-17', price: 1.5, volume: 8 } ], puts: [ { strike: 145, expiry: '2025-05-17', price: 1.2, volume: 6 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 149 }, { date: '2025-04-17', price: 150 }, { date: '2025-04-18', price: 150 }, { date: '2025-04-19', price: 150 } ]
  },
  {
    name: 'Relx',
    ticker: 'REN.AS',
    sector: 'Industrials',
    index: 'AEX',
    price: 35,
    change: '+0.2%',
    summary: { marketCap: '70B', pe: 28.0, eps: 1.25, dividend: 0.6, yield: '1.7%', beta: 0.9, volume: '0.5M', shares: '2.0B', roe: '25.0%', revenue: '10.0B', grossMargin: '65.0%', netMargin: '18.0%', debtToEquity: '30.0%' },
    news: [ { title: 'Relx expands data analytics business', date: '2025-04-09', url: '#' } ],
    profile: { description: 'RELX PLC is a British multinational information and analytics company.', executives: [ { name: 'Erik Engstrom', title: 'CEO' } ], address: 'Radarweg 29, 1043 NX Amsterdam, Netherlands', website: 'https://www.relx.com/' },
    earnings: { nextEarningsDate: '2025-05-22', lastEarningsDate: '2025-02-22', epsActual: 0.32, epsEstimate: 0.31, revenueActual: '2.5B', revenueEstimate: '2.4B', surprise: '+2.1%' },
    peers: [ { name: 'Wolters Kluwer', ticker: 'WKL.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '10.0B', netIncome: '1.8B' } ], balanceSheet: [ { year: 2024, assets: '15.0B', liabilities: '5.0B', equity: '10.0B' } ], cashFlow: [ { year: 2024, operating: '2.0B', investing: '-0.5B', financing: '-0.2B' } ] },
    options: { calls: [ { strike: 36, expiry: '2025-05-17', price: 0.3, volume: 10 } ], puts: [ { strike: 34, expiry: '2025-05-17', price: 0.2, volume: 8 } ] },
    ownership: { institutional: '65%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 34.8 }, { date: '2025-04-17', price: 35 }, { date: '2025-04-18', price: 35 }, { date: '2025-04-19', price: 35 } ]
  },
  {
    name: 'ABN Amro Bank NV',
    ticker: 'ABN.AS',
    sector: 'Financials',
    index: 'AEX',
    price: 15,
    change: '+0.2%',
    summary: { marketCap: '14B', pe: 6.5, eps: 2.3, dividend: 0.7, yield: '4.7%', beta: 1.0, volume: '0.9M', shares: '1.0B', roe: '9.0%', revenue: '7.0B', grossMargin: 'N/A', netMargin: '18.0%', debtToEquity: '80.0%' },
    news: [ { title: 'ABN Amro launches new digital platform', date: '2025-04-08', url: '#' } ],
    profile: { description: 'ABN AMRO Bank N.V. is a Dutch bank with headquarters in Amsterdam.', executives: [ { name: 'Robert Swaak', title: 'CEO' } ], address: 'Gustav Mahlerlaan 10, 1082 PP Amsterdam, Netherlands', website: 'https://www.abnamro.com/' },
    earnings: { nextEarningsDate: '2025-05-23', lastEarningsDate: '2025-02-23', epsActual: 0.6, epsEstimate: 0.58, revenueActual: '1.8B', revenueEstimate: '1.7B', surprise: '+2.5%' },
    peers: [ { name: 'ING Groep NV', ticker: 'INGA.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '7.0B', netIncome: '1.3B' } ], balanceSheet: [ { year: 2024, assets: '400.0B', liabilities: '380.0B', equity: '20.0B' } ], cashFlow: [ { year: 2024, operating: '1.5B', investing: '-0.3B', financing: '-0.1B' } ] },
    options: { calls: [ { strike: 16, expiry: '2025-05-17', price: 0.2, volume: 10 } ], puts: [ { strike: 14, expiry: '2025-05-17', price: 0.1, volume: 8 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'Dutch State', percent: '56.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 14.8 }, { date: '2025-04-17', price: 15 }, { date: '2025-04-18', price: 15 }, { date: '2025-04-19', price: 15 } ]
  },
  {
    name: 'NN Group',
    ticker: 'NN.AS',
    sector: 'Financials',
    index: 'AEX',
    price: 38,
    change: '+0.3%',
    summary: { marketCap: '12B', pe: 8.0, eps: 4.8, dividend: 2.0, yield: '5.3%', beta: 1.0, volume: '0.5M', shares: '0.3B', roe: '10.0%', revenue: '7.5B', grossMargin: 'N/A', netMargin: '15.0%', debtToEquity: '60.0%' },
    news: [ { title: 'NN Group acquires insurance portfolio', date: '2025-04-07', url: '#' } ],
    profile: { description: 'NN Group N.V. is a Dutch insurance and asset management company.', executives: [ { name: 'David Knibbe', title: 'CEO' } ], address: 'Schenkkade 65, 2595 AS The Hague, Netherlands', website: 'https://www.nn-group.com/' },
    earnings: { nextEarningsDate: '2025-05-24', lastEarningsDate: '2025-02-24', epsActual: 1.2, epsEstimate: 1.18, revenueActual: '2.0B', revenueEstimate: '1.9B', surprise: '+2.1%' },
    peers: [ { name: 'Aegon', ticker: 'AGN.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '7.5B', netIncome: '1.1B' } ], balanceSheet: [ { year: 2024, assets: '50.0B', liabilities: '40.0B', equity: '10.0B' } ], cashFlow: [ { year: 2024, operating: '1.2B', investing: '-0.3B', financing: '-0.1B' } ] },
    options: { calls: [ { strike: 40, expiry: '2025-05-17', price: 0.3, volume: 8 } ], puts: [ { strike: 36, expiry: '2025-05-17', price: 0.2, volume: 6 } ] },
    ownership: { institutional: '55%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '5.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 37.8 }, { date: '2025-04-17', price: 38 }, { date: '2025-04-18', price: 38 }, { date: '2025-04-19', price: 38 } ]
  },
  {
    name: 'Akzo Nobel',
    ticker: 'AKZA.AS',
    sector: 'Materials',
    index: 'AEX',
    price: 70,
    change: '+0.2%',
    summary: { marketCap: '12B', pe: 16.0, eps: 4.4, dividend: 1.8, yield: '2.6%', beta: 1.1, volume: '0.4M', shares: '0.17B', roe: '12.0%', revenue: '10.0B', grossMargin: '40.0%', netMargin: '10.0%', debtToEquity: '50.0%' },
    news: [ { title: 'Akzo Nobel launches new paint line', date: '2025-04-06', url: '#' } ],
    profile: { description: 'Akzo Nobel N.V. is a Dutch multinational company which creates paints and performance coatings.', executives: [ { name: 'Gregoire Poux-Guillaume', title: 'CEO' } ], address: 'Christian Neefestraat 2, 1077 WW Amsterdam, Netherlands', website: 'https://www.akzonobel.com/' },
    earnings: { nextEarningsDate: '2025-05-25', lastEarningsDate: '2025-02-25', epsActual: 1.1, epsEstimate: 1.08, revenueActual: '2.5B', revenueEstimate: '2.4B', surprise: '+1.9%' },
    peers: [ { name: 'Randstad', ticker: 'RAND.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '10.0B', netIncome: '1.0B' } ], balanceSheet: [ { year: 2024, assets: '12.0B', liabilities: '6.0B', equity: '6.0B' } ], cashFlow: [ { year: 2024, operating: '1.2B', investing: '-0.3B', financing: '-0.1B' } ] },
    options: { calls: [ { strike: 72, expiry: '2025-05-17', price: 0.4, volume: 8 } ], puts: [ { strike: 68, expiry: '2025-05-17', price: 0.3, volume: 6 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 69.8 }, { date: '2025-04-17', price: 70 }, { date: '2025-04-18', price: 70 }, { date: '2025-04-19', price: 70 } ]
  },
  {
    name: 'Randstad',
    ticker: 'RAND.AS',
    sector: 'Industrials',
    index: 'AEX',
    price: 60,
    change: '+0.3%',
    summary: { marketCap: '11B', pe: 13.0, eps: 4.6, dividend: 2.2, yield: '3.7%', beta: 1.0, volume: '0.3M', shares: '0.18B', roe: '14.0%', revenue: '25.0B', grossMargin: '20.0%', netMargin: '6.0%', debtToEquity: '40.0%' },
    news: [ { title: 'Randstad expands HR tech services', date: '2025-04-05', url: '#' } ],
    profile: { description: 'Randstad N.V. is a Dutch multinational human resource consulting firm.', executives: [ { name: 'Sander van t Noordende', title: 'CEO' } ], address: 'Diemermere 25, 1112 TC Diemen, Netherlands', website: 'https://www.randstad.com/' },
    earnings: { nextEarningsDate: '2025-05-26', lastEarningsDate: '2025-02-26', epsActual: 1.2, epsEstimate: 1.18, revenueActual: '6.5B', revenueEstimate: '6.3B', surprise: '+2.5%' },
    peers: [ { name: 'Akzo Nobel', ticker: 'AKZA.AS' } ],
    financials: { incomeStatement: [ { year: 2024, revenue: '25.0B', netIncome: '1.5B' } ], balanceSheet: [ { year: 2024, assets: '10.0B', liabilities: '5.0B', equity: '5.0B' } ], cashFlow: [ { year: 2024, operating: '1.5B', investing: '-0.4B', financing: '-0.2B' } ] },
    options: { calls: [ { strike: 62, expiry: '2025-05-17', price: 0.5, volume: 8 } ], puts: [ { strike: 58, expiry: '2025-05-17', price: 0.4, volume: 6 } ] },
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },
    priceHistory: [ { date: '2025-04-16', price: 59.8 }, { date: '2025-04-17', price: 60 }, { date: '2025-04-18', price: 60 }, { date: '2025-04-19', price: 60 } ]
  }
];
