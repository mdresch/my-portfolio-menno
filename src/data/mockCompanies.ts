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
  },  {
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
    ownership: { institutional: '60%', insider: '0.01%', topHolders: [ { name: 'BlackRock', percent: '6.0%' } ] },    priceHistory: [ { date: '2025-04-16', price: 59.8 }, { date: '2025-04-17', price: 60 }, { date: '2025-04-18', price: 60 }, { date: '2025-04-19', price: 60 } ]
  },
  {
    name: 'Toyota',
    ticker: 'TM',
    sector: 'Consumer Discretionary',
    index: 'Nikkei 225',
    price: 215,
    change: '+1.2%',
    summary: {
      marketCap: '350B',
      pe: 12.5,
      eps: 17.2,
      dividend: 5.4,
      yield: '2.5%',
      beta: 0.85,
      volume: '2.1M',
      shares: '1.63B',
      roe: '14.2%',
      revenue: '320.0B',
      grossMargin: '18.5%',
      netMargin: '8.4%',
      debtToEquity: '110.0%'
    },
    news: [
      { title: 'Toyota unveils new hydrogen-electric hybrid vehicle', date: '2025-04-15', url: 'https://news.example.com/toyota-hydrogen-electric' },
      { title: 'Toyota expands EV production capacity', date: '2025-04-10', url: 'https://news.example.com/toyota-ev-production' }
    ],
    profile: {
      description: 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Japan. It is the global leader in hybrid electric vehicle sales.',
      executives: [
        { name: 'Koji Sato', title: 'Chief Executive Officer' },
        { name: 'Akio Toyoda', title: 'Chairman' }
      ],
      address: '1 Toyota-Cho, Toyota City, Aichi Prefecture 471-8571, Japan',
      website: 'https://global.toyota/'
    },
    earnings: {
      nextEarningsDate: '2025-05-08',
      lastEarningsDate: '2025-02-08',
      epsActual: 4.35,
      epsEstimate: 4.20,
      revenueActual: '82.0B',
      revenueEstimate: '80.5B',
      surprise: '+3.6%'
    },
    peers: [
      { name: 'Honda', ticker: 'HMC' },
      { name: 'Volkswagen', ticker: 'VWAGY' },
      { name: 'Ford', ticker: 'F' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '320.0B', netIncome: '27.0B' },
        { year: 2023, revenue: '310.0B', netIncome: '25.5B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '550.0B', liabilities: '340.0B', equity: '210.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '45.0B', investing: '-22.0B', financing: '-12.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 225, expiry: '2025-05-20', price: 3.8, volume: 450 },
        { strike: 235, expiry: '2025-05-20', price: 2.1, volume: 320 }
      ],
      puts: [
        { strike: 205, expiry: '2025-05-20', price: 2.9, volume: 380 },
        { strike: 195, expiry: '2025-05-20', price: 1.5, volume: 240 }
      ]
    },
    ownership: {
      institutional: '12%',
      insider: '0.5%',
      topHolders: [
        { name: 'Toyota Industries', percent: '8.7%' },
        { name: 'Nippon Life Insurance', percent: '4.2%' },
        { name: 'Bank of Japan', percent: '3.9%' }
      ]
    },
    priceHistory: [
      { date: '2025-04-16', price: 212 },
      { date: '2025-04-17', price: 213 },
      { date: '2025-04-18', price: 214 },
      { date: '2025-04-19', price: 215 },
      { date: '2025-04-20', price: 215 }
    ]
  },
  {
    name: 'Nestle',
    ticker: 'NSRGY',
    sector: 'Consumer Staples',
    index: 'SMI',
    price: 115,
    change: '+0.5%',
    summary: {
      marketCap: '310B',
      pe: 19.3,
      eps: 5.96,
      dividend: 3.12,
      yield: '2.7%',
      beta: 0.45,
      volume: '1.8M',
      shares: '2.7B',
      roe: '28.5%',
      revenue: '95.0B',
      grossMargin: '47.5%',
      netMargin: '16.2%',
      debtToEquity: '80.0%'
    },
    news: [
      { title: 'Nestle expands plant-based product line', date: '2025-04-18', url: 'https://news.example.com/nestle-plant-based' },
      { title: 'Nestle acquires premium coffee brand', date: '2025-04-12', url: 'https://news.example.com/nestle-coffee-acquisition' }
    ],
    profile: {
      description: 'Nestle S.A. is a Swiss multinational food and drink processing company headquartered in Vevey, Switzerland. It is the largest food company in the world.',
      executives: [
        { name: 'Mark Schneider', title: 'Chief Executive Officer' },
        { name: 'Paul Bulcke', title: 'Chairman' }
      ],
      address: 'Avenue Nestlé 55, 1800 Vevey, Switzerland',
      website: 'https://www.nestle.com/'
    },
    earnings: {
      nextEarningsDate: '2025-05-22',
      lastEarningsDate: '2025-02-15',
      epsActual: 1.48,
      epsEstimate: 1.45,
      revenueActual: '24.5B',
      revenueEstimate: '24.1B',
      surprise: '+2.1%'
    },
    peers: [
      { name: 'Unilever', ticker: 'UL' },
      { name: 'PepsiCo', ticker: 'PEP' },
      { name: 'Danone', ticker: 'DANOY' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '95.0B', netIncome: '15.4B' },
        { year: 2023, revenue: '93.2B', netIncome: '14.8B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '130.0B', liabilities: '75.0B', equity: '55.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '18.0B', investing: '-5.8B', financing: '-8.2B' }
      ]
    },
    options: {
      calls: [
        { strike: 120, expiry: '2025-05-15', price: 2.5, volume: 320 },
        { strike: 125, expiry: '2025-05-15', price: 1.3, volume: 210 }
      ],
      puts: [
        { strike: 110, expiry: '2025-05-15', price: 1.8, volume: 280 },
        { strike: 105, expiry: '2025-05-15', price: 1.0, volume: 150 }
      ]
    },
    ownership: {
      institutional: '44%',
      insider: '0.08%',
      topHolders: [
        { name: 'Vanguard Group', percent: '5.2%' },
        { name: 'BlackRock', percent: '4.8%' },
        { name: 'Norges Bank Investment', percent: '2.3%' }
      ]
    },
    priceHistory: [
      { date: '2025-04-16', price: 114 },
      { date: '2025-04-17', price: 114.5 },
      { date: '2025-04-18', price: 114.8 },
      { date: '2025-04-19', price: 115 },
      { date: '2025-04-20', price: 115 }
    ]
  },
  {
    name: 'BMW',
    ticker: 'BMW.DE',
    sector: 'Consumer Discretionary',
    index: 'DAX',
    price: 92,
    change: '-0.8%',
    summary: {
      marketCap: '60B',
      pe: 6.4,
      eps: 14.38,
      dividend: 6.00,
      yield: '6.5%',
      beta: 1.15,
      volume: '0.9M',
      shares: '0.65B',
      roe: '12.3%',
      revenue: '155.0B',
      grossMargin: '19.8%',
      netMargin: '7.1%',
      debtToEquity: '145.2%'
    },
    news: [
      { title: 'BMW faces FX volatility and raw material cost increases', date: '2025-05-08', url: 'https://news.example.com/bmw-challenges-2025' },
      { title: 'BMW affected by China tariffs on EVs', date: '2025-04-30', url: 'https://news.example.com/bmw-china-tariffs' }
    ],
    profile: {
      description: 'Bayerische Motoren Werke AG (BMW) is a German multinational corporation which produces luxury vehicles and motorcycles.',
      executives: [
        { name: 'Oliver Zipse', title: 'Chairman of the Board of Management' },
        { name: 'Nicolas Peter', title: 'Chief Financial Officer' }
      ],
      address: 'Petuelring 130, 80788 Munich, Germany',
      website: 'https://www.bmwgroup.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-03',
      lastEarningsDate: '2025-05-02',
      epsActual: 3.25,
      epsEstimate: 3.60,
      revenueActual: '36.5B',
      revenueEstimate: '38.2B',
      surprise: '-9.7%'
    },
    peers: [
      { name: 'Mercedes-Benz Group', ticker: 'MBG.DE' },
      { name: 'Volkswagen', ticker: 'VOW3.DE' },
      { name: 'Porsche', ticker: 'P911.DE' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '155.0B', netIncome: '10.5B' },
        { year: 2023, revenue: '150.7B', netIncome: '12.6B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '250.0B', liabilities: '190.0B', equity: '60.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '22.0B', investing: '-12.0B', financing: '-8.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 95, expiry: '2025-06-20', price: 2.1, volume: 350 },
        { strike: 100, expiry: '2025-06-20', price: 1.4, volume: 220 }
      ],
      puts: [
        { strike: 90, expiry: '2025-06-20', price: 2.5, volume: 410 },
        { strike: 85, expiry: '2025-06-20', price: 1.7, volume: 280 }
      ]
    },
    ownership: {
      institutional: '55%',
      insider: '25%',
      topHolders: [
        { name: 'Quandt Family', percent: '29.0%' },
        { name: 'Norges Bank Investment', percent: '3.2%' },
        { name: 'Vanguard Group', percent: '2.4%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 95 },
      { date: '2025-05-06', price: 94 },
      { date: '2025-05-07', price: 92.5 },
      { date: '2025-05-08', price: 92 }
    ]
  },
  {
    name: 'Volkswagen AG',
    ticker: 'VOW3.DE',
    sector: 'Consumer Discretionary',
    index: 'DAX',
    price: 118,
    change: '-1.5%',
    summary: {
      marketCap: '70B',
      pe: 4.3,
      eps: 27.44,
      dividend: 9.06,
      yield: '7.7%',
      beta: 1.35,
      volume: '1.2M',
      shares: '0.5B',
      roe: '10.4%',
      revenue: '322.0B',
      grossMargin: '20.4%',
      netMargin: '5.1%',
      debtToEquity: '157.0%'
    },
    news: [
      { title: 'Volkswagen reports 46.3% decline in Q1 operating profit', date: '2025-05-05', url: 'https://news.example.com/volkswagen-q1-2025' },
      { title: 'Volkswagen struggles with inventory write-downs linked to US tariffs', date: '2025-04-28', url: 'https://news.example.com/volkswagen-tariff-impact' }
    ],
    profile: {
      description: 'Volkswagen AG is a German multinational automotive manufacturing company headquartered in Wolfsburg, Germany. It is the largest automaker by production worldwide.',
      executives: [
        { name: 'Oliver Blume', title: 'Chief Executive Officer' },
        { name: 'Arno Antlitz', title: 'Chief Financial Officer' }
      ],
      address: 'Berliner Ring 2, 38440 Wolfsburg, Germany',
      website: 'https://www.volkswagenag.com/'
    },
    earnings: {
      nextEarningsDate: '2025-07-27',
      lastEarningsDate: '2025-04-30',
      epsActual: 4.50,
      epsEstimate: 7.60,
      revenueActual: '76.5B',
      revenueEstimate: '82.0B',
      surprise: '-40.8%'
    },
    peers: [
      { name: 'BMW', ticker: 'BMW.DE' },
      { name: 'Mercedes-Benz Group', ticker: 'MBG.DE' },
      { name: 'Stellantis', ticker: 'STLA' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '322.0B', netIncome: '14.9B' },
        { year: 2023, revenue: '310.5B', netIncome: '26.8B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '580.0B', liabilities: '430.0B', equity: '150.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '38.0B', investing: '-23.0B', financing: '-10.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 125, expiry: '2025-06-15', price: 1.8, volume: 420 },
        { strike: 130, expiry: '2025-06-15', price: 1.2, volume: 260 }
      ],
      puts: [
        { strike: 115, expiry: '2025-06-15', price: 2.7, volume: 540 },
        { strike: 110, expiry: '2025-06-15', price: 1.9, volume: 320 }
      ]
    },
    ownership: {
      institutional: '40%',
      insider: '30.8%',
      topHolders: [
        { name: 'Porsche Automobil Holding SE', percent: '31.4%' },
        { name: 'State of Lower Saxony', percent: '11.8%' },
        { name: 'Qatar Investment Authority', percent: '10.5%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 122 },
      { date: '2025-05-06', price: 120 },
      { date: '2025-05-07', price: 119 },
      { date: '2025-05-08', price: 118 }
    ]
  },
  {
    name: 'Mercedes-Benz Group AG',
    ticker: 'MBG.DE',
    sector: 'Consumer Discretionary',
    index: 'DAX',
    price: 67,
    change: '-1.2%',
    summary: {
      marketCap: '72B',
      pe: 5.8,
      eps: 11.55,
      dividend: 4.30,
      yield: '6.4%',
      beta: 1.28,
      volume: '1.1M',
      shares: '1.07B',
      roe: '14.2%',
      revenue: '153.0B',
      grossMargin: '22.6%',
      netMargin: '8.1%',
      debtToEquity: '124.5%'
    },
    news: [
      { title: 'Mercedes-Benz revenue declined by 7.4% in Q1 2025', date: '2025-05-04', url: 'https://news.example.com/mercedes-q1-2025' },
      { title: 'Mercedes-Benz cuts dividend as net income drops 43% in Q1', date: '2025-04-26', url: 'https://news.example.com/mercedes-dividend-cut' }
    ],
    profile: {
      description: 'Mercedes-Benz Group AG, formerly Daimler AG, is a German multinational automotive corporation headquartered in Stuttgart, known for luxury vehicles, trucks, and buses.',
      executives: [
        { name: 'Ola Källenius', title: 'Chairman of the Board of Management' },
        { name: 'Harald Wilhelm', title: 'Chief Financial Officer' }
      ],
      address: 'Mercedesstraße 120, 70372 Stuttgart, Germany',
      website: 'https://www.mercedes-benz.com/'
    },
    earnings: {
      nextEarningsDate: '2025-07-25',
      lastEarningsDate: '2025-04-30',
      epsActual: 2.05,
      epsEstimate: 2.35,
      revenueActual: '37.2B',
      revenueEstimate: '40.0B',
      surprise: '-13.0%'
    },
    peers: [
      { name: 'BMW', ticker: 'BMW.DE' },
      { name: 'Volkswagen', ticker: 'VOW3.DE' },
      { name: 'Tesla', ticker: 'TSLA' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '153.0B', netIncome: '12.5B' },
        { year: 2023, revenue: '158.2B', netIncome: '21.5B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '340.0B', liabilities: '255.0B', equity: '85.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '25.0B', investing: '-14.0B', financing: '-9.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 70, expiry: '2025-06-20', price: 1.4, volume: 380 },
        { strike: 75, expiry: '2025-06-20', price: 0.9, volume: 250 }
      ],
      puts: [
        { strike: 65, expiry: '2025-06-20', price: 2.1, volume: 470 },
        { strike: 60, expiry: '2025-06-20', price: 1.3, volume: 300 }
      ]
    },
    ownership: {
      institutional: '60%',
      insider: '5%',
      topHolders: [
        { name: 'BAIC Group', percent: '9.98%' },
        { name: 'Geely Group', percent: '9.69%' },
        { name: 'Kuwait Investment Authority', percent: '6.8%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 69 },
      { date: '2025-05-06', price: 68 },
      { date: '2025-05-07', price: 67.5 },
      { date: '2025-05-08', price: 67 }
    ]
  },
  {
    name: 'Tesla Inc.',
    ticker: 'TSLA',
    sector: 'Consumer Discretionary',
    index: 'S&P 500',
    price: 212,
    change: '-2.1%',
    summary: {
      marketCap: '685B',
      pe: 58.9,
      eps: 3.60,
      dividend: 0,
      yield: '0%',
      beta: 2.04,
      volume: '85.2M',
      shares: '3.18B',
      roe: '17.5%',
      revenue: '103.0B',
      grossMargin: '21.0%',
      netMargin: '11.3%',
      debtToEquity: '18.5%'
    },
    news: [
      { title: 'Tesla car sales in Europe fall to two-year low', date: '2025-05-07', url: 'https://news.example.com/tesla-europe-sales-drop' },
      { title: 'Tesla disappoints with Q1 earnings amid slumping China sales', date: '2025-04-25', url: 'https://news.example.com/tesla-q1-2025-earnings' }
    ],
    profile: {
      description: 'Tesla, Inc. is an American multinational automotive and clean energy company that designs and manufactures electric vehicles, battery energy storage, solar panels and solar roof tiles.',
      executives: [
        { name: 'Elon Musk', title: 'Chief Executive Officer' },
        { name: 'Vaibhav Taneja', title: 'Chief Financial Officer' }
      ],
      address: '1 Tesla Road, Austin, TX 78725, United States',
      website: 'https://www.tesla.com/'
    },
    earnings: {
      nextEarningsDate: '2025-07-22',
      lastEarningsDate: '2025-04-22',
      epsActual: 0.65,
      epsEstimate: 0.72,
      revenueActual: '22.5B',
      revenueEstimate: '23.8B',
      surprise: '-9.7%'
    },
    peers: [
      { name: 'Rivian Automotive', ticker: 'RIVN' },
      { name: 'BYD Co', ticker: '1211.HK' },
      { name: 'Lucid Group', ticker: 'LCID' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '103.0B', netIncome: '11.6B' },
        { year: 2023, revenue: '96.8B', netIncome: '15.3B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '165.0B', liabilities: '42.0B', equity: '123.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '16.0B', investing: '-11.0B', financing: '-2.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 220, expiry: '2025-06-20', price: 7.8, volume: 15000 },
        { strike: 240, expiry: '2025-06-20', price: 4.3, volume: 12000 }
      ],
      puts: [
        { strike: 200, expiry: '2025-06-20', price: 8.5, volume: 17000 },
        { strike: 180, expiry: '2025-06-20', price: 5.2, volume: 10000 }
      ]
    },
    ownership: {
      institutional: '45%',
      insider: '13.4%',
      topHolders: [
        { name: 'Elon Musk', percent: '13.0%' },
        { name: 'Vanguard Group', percent: '8.1%' },
        { name: 'BlackRock', percent: '6.8%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 220 },
      { date: '2025-05-06', price: 217 },
      { date: '2025-05-07', price: 215 },
      { date: '2025-05-08', price: 212 }
    ]
  },
  {
    name: 'Porsche AG',
    ticker: 'P911.DE',
    sector: 'Consumer Discretionary',
    index: 'DAX',
    price: 82,
    change: '-1.8%',
    summary: {
      marketCap: '25B',
      pe: 11.3,
      eps: 7.26,
      dividend: 2.31,
      yield: '2.8%',
      beta: 1.40,
      volume: '0.5M',
      shares: '0.3B',
      roe: '16.5%',
      revenue: '40.0B',
      grossMargin: '24.8%',
      netMargin: '9.2%',
      debtToEquity: '95.0%'
    },
    news: [
      { title: 'Porsche reports 43.8% drop in operating profit', date: '2025-05-06', url: 'https://news.example.com/porsche-profit-drop' },
      { title: 'Porsche plans to cut 2,000 jobs amid financial pressure', date: '2025-04-30', url: 'https://news.example.com/porsche-job-cuts' }
    ],
    profile: {
      description: 'Dr. Ing. h.c. F. Porsche AG is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans.',
      executives: [
        { name: 'Oliver Blume', title: 'Chief Executive Officer' },
        { name: 'Lutz Meschke', title: 'Chief Financial Officer' }
      ],
      address: 'Porscheplatz 1, 70435 Stuttgart, Germany',
      website: 'https://www.porsche.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-05',
      lastEarningsDate: '2025-05-02',
      epsActual: 1.20,
      epsEstimate: 2.15,
      revenueActual: '9.8B',
      revenueEstimate: '10.5B',
      surprise: '-44.2%'
    },
    peers: [
      { name: 'BMW', ticker: 'BMW.DE' },
      { name: 'Mercedes-Benz Group', ticker: 'MBG.DE' },
      { name: 'Ferrari', ticker: 'RACE' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '40.0B', netIncome: '3.7B' },
        { year: 2023, revenue: '42.5B', netIncome: '6.2B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '68.0B', liabilities: '46.0B', equity: '22.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '6.0B', investing: '-4.5B', financing: '-1.8B' }
      ]
    },
    options: {
      calls: [
        { strike: 85, expiry: '2025-06-20', price: 1.6, volume: 180 },
        { strike: 90, expiry: '2025-06-20', price: 0.9, volume: 120 }
      ],
      puts: [
        { strike: 80, expiry: '2025-06-20', price: 2.2, volume: 210 },
        { strike: 75, expiry: '2025-06-20', price: 1.4, volume: 150 }
      ]
    },
    ownership: {
      institutional: '25%',
      insider: '75%',
      topHolders: [
        { name: 'Porsche Automobil Holding SE', percent: '25.0%' },
        { name: 'Volkswagen AG', percent: '75.0%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 85 },
      { date: '2025-05-06', price: 84 },
      { date: '2025-05-07', price: 83 },
      { date: '2025-05-08', price: 82 }
    ]
  },
  {
    name: 'Ferrari N.V.',
    ticker: 'RACE',
    sector: 'Consumer Discretionary',
    index: 'S&P 100',
    price: 395,
    change: '-0.5%',
    summary: {
      marketCap: '72B',
      pe: 46.5,
      eps: 8.50,
      dividend: 2.18,
      yield: '0.55%',
      beta: 0.98,
      volume: '0.3M',
      shares: '0.18B',
      roe: '45.4%',
      revenue: '6.5B',
      grossMargin: '47.8%',
      netMargin: '25.2%',
      debtToEquity: '70.5%'
    },
    news: [
      { title: 'Ferrari reports 25% sales drop in greater China region', date: '2025-05-08', url: 'https://news.example.com/ferrari-china-sales' },
      { title: 'Ferrari global shipments up 1% despite regional challenges', date: '2025-05-03', url: 'https://news.example.com/ferrari-shipments-2025' }
    ],
    profile: {
      description: 'Ferrari N.V. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939.',
      executives: [
        { name: 'Benedetto Vigna', title: 'Chief Executive Officer' },
        { name: 'Antonio Picca Piccon', title: 'Chief Financial Officer' }
      ],
      address: 'Via Abetone Inferiore 4, 41053 Maranello, Italy',
      website: 'https://www.ferrari.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-01',
      lastEarningsDate: '2025-05-02',
      epsActual: 2.15,
      epsEstimate: 2.10,
      revenueActual: '1.6B',
      revenueEstimate: '1.7B',
      surprise: '-5.9%'
    },
    peers: [
      { name: 'Porsche AG', ticker: 'P911.DE' },
      { name: 'Lamborghini', ticker: 'LAMBO.MI' },
      { name: 'Aston Martin', ticker: 'AML.L' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '6.5B', netIncome: '1.64B' },
        { year: 2023, revenue: '6.3B', netIncome: '1.58B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '9.2B', liabilities: '5.7B', equity: '3.5B' }
      ],
      cashFlow: [
        { year: 2024, operating: '2.0B', investing: '-0.8B', financing: '-0.7B' }
      ]
    },
    options: {
      calls: [
        { strike: 400, expiry: '2025-06-20', price: 8.5, volume: 140 },
        { strike: 420, expiry: '2025-06-20', price: 4.2, volume: 90 }
      ],
      puts: [
        { strike: 390, expiry: '2025-06-20', price: 7.6, volume: 120 },
        { strike: 380, expiry: '2025-06-20', price: 5.3, volume: 80 }
      ]
    },
    ownership: {
      institutional: '45%',
      insider: '33.95%',
      topHolders: [
        { name: 'Exor N.V.', percent: '24.2%' },
        { name: 'Piero Ferrari', percent: '10.0%' },
        { name: 'BlackRock', percent: '5.8%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 397 },
      { date: '2025-05-06', price: 396 },
      { date: '2025-05-07', price: 395.5 },
      { date: '2025-05-08', price: 395 }
    ]
  },
  {
    name: 'Nissan Motor Co. Ltd.',
    ticker: '7201.T',
    sector: 'Consumer Discretionary',
    index: 'Nikkei 225',
    price: 452, // JPY
    change: '-3.2%',
    summary: {
      marketCap: '1.8T', // JPY (trillion)
      pe: 'N/A', // Negative earnings
      eps: '-159.21', // JPY
      dividend: '10.00', // JPY
      yield: '2.2%',
      beta: 1.45,
      volume: '12.5M',
      shares: '3.9B',
      roe: '-12.6%',
      revenue: '12.5T', // JPY (trillion)
      grossMargin: '18.5%',
      netMargin: '-4.8%',
      debtToEquity: '185.0%'
    },
    news: [
      { title: 'Nissan to cut 9,000 jobs and reduce production capacity', date: '2025-05-07', url: 'https://news.example.com/nissan-job-cuts' },
      { title: 'Nissan expects net loss of up to ¥750 billion for fiscal year', date: '2025-04-28', url: 'https://news.example.com/nissan-fiscal-projection' }
    ],
    profile: {
      description: 'Nissan Motor Co., Ltd. is a Japanese multinational automobile manufacturer headquartered in Yokohama, Japan.',
      executives: [
        { name: 'Makoto Uchida', title: 'Chief Executive Officer' },
        { name: 'Stephen Ma', title: 'Chief Financial Officer' }
      ],
      address: '1-1, Takashima 1-chome, Nishi-ku, Yokohama-shi, Kanagawa 220-8686, Japan',
      website: 'https://www.nissan-global.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-08',
      lastEarningsDate: '2025-05-05',
      epsActual: '-42.50', // JPY
      epsEstimate: '-35.00', // JPY
      revenueActual: '3.1T', // JPY (trillion)
      revenueEstimate: '3.2T', // JPY (trillion)
      surprise: '-21.4%'
    },
    peers: [
      { name: 'Toyota', ticker: '7203.T' },
      { name: 'Honda', ticker: '7267.T' },
      { name: 'Mazda', ticker: '7261.T' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '12.5T', netIncome: '-600B' }, // JPY (trillion/billion)
        { year: 2023, revenue: '11.8T', netIncome: '-450B' } // JPY (trillion/billion)
      ],
      balanceSheet: [
        { year: 2024, assets: '22.0T', liabilities: '16.5T', equity: '5.5T' } // JPY (trillion)
      ],
      cashFlow: [
        { year: 2024, operating: '850B', investing: '-780B', financing: '120B' } // JPY (billion)
      ]
    },
    options: {
      calls: [
        { strike: 500, expiry: '2025-06-13', price: 5.2, volume: 860 },
        { strike: 550, expiry: '2025-06-13', price: 2.1, volume: 520 }
      ],
      puts: [
        { strike: 450, expiry: '2025-06-13', price: 18.5, volume: 1200 },
        { strike: 400, expiry: '2025-06-13', price: 9.8, volume: 850 }
      ]
    },
    ownership: {
      institutional: '18%',
      insider: '43.7%',
      topHolders: [
        { name: 'Renault S.A.', percent: '43.4%' },
        { name: 'The Master Trust Bank of Japan', percent: '5.2%' },
        { name: 'Custody Bank of Japan', percent: '3.1%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 475 },
      { date: '2025-05-06', price: 465 },
      { date: '2025-05-07', price: 458 },
      { date: '2025-05-08', price: 452 }
    ]
  },
  {
    name: 'BYD Co. Ltd.',
    ticker: '1211.HK',
    sector: 'Consumer Discretionary',
    index: 'Hang Seng',
    price: 248, // HKD
    change: '-0.8%',
    summary: {
      marketCap: '720B', // HKD (billion)
      pe: 22.4,
      eps: '11.07', // HKD
      dividend: '3.45', // HKD
      yield: '1.4%',
      beta: 1.28,
      volume: '15.2M',
      shares: '2.9B',
      roe: '24.6%',
      revenue: '640B', // CNY (billion)
      grossMargin: '19.2%',
      netMargin: '8.5%',
      debtToEquity: '75.0%'
    },
    news: [
      { title: 'BYD scraps plans for Chile lithium plants due to global market conditions', date: '2025-05-06', url: 'https://news.example.com/byd-lithium-chile' },
      { title: 'BYD surpasses Tesla in global EV sales for second consecutive quarter', date: '2025-04-29', url: 'https://news.example.com/byd-tesla-ev-sales' }
    ],
    profile: {
      description: 'BYD Company Limited is a Chinese manufacturing company based in Shenzhen, Guangdong, China, focusing on automobiles, battery-powered bicycles, buses, forklifts, solar panels, and rechargeable batteries.',
      executives: [
        { name: 'Wang Chuanfu', title: 'Chairman & President' },
        { name: 'Li Ke', title: 'Executive Vice President' }
      ],
      address: 'No. 3009, BYD Road, Pingshan, Shenzhen, 518118, China',
      website: 'https://www.byd.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-28',
      lastEarningsDate: '2025-04-29',
      epsActual: '2.75', // HKD
      epsEstimate: '2.65', // HKD
      revenueActual: '165B', // CNY (billion)
      revenueEstimate: '160B', // CNY (billion)
      surprise: '+3.8%'
    },
    peers: [
      { name: 'Tesla', ticker: 'TSLA' },
      { name: 'Nio', ticker: 'NIO' },
      { name: 'Li Auto', ticker: '2015.HK' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '640B', netIncome: '54B' }, // CNY (billion)
        { year: 2023, revenue: '520B', netIncome: '42B' } // CNY (billion)
      ],
      balanceSheet: [
        { year: 2024, assets: '520B', liabilities: '300B', equity: '220B' } // CNY (billion)
      ],
      cashFlow: [
        { year: 2024, operating: '68B', investing: '-52B', financing: '15B' } // CNY (billion)
      ]
    },
    options: {
      calls: [
        { strike: 260, expiry: '2025-06-27', price: 4.8, volume: 2800 },
        { strike: 280, expiry: '2025-06-27', price: 2.3, volume: 1950 }
      ],
      puts: [
        { strike: 240, expiry: '2025-06-27', price: 5.2, volume: 3100 },
        { strike: 220, expiry: '2025-06-27', price: 2.8, volume: 2400 }
      ]
    },
    ownership: {
      institutional: '24%',
      insider: '19%',
      topHolders: [
        { name: 'Wang Chuanfu', percent: '17.6%' },
        { name: 'Berkshire Hathaway', percent: '7.7%' },
        { name: 'Himalaya Capital Management', percent: '3.2%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 252 },
      { date: '2025-05-06', price: 250 },
      { date: '2025-05-07', price: 249 },
      { date: '2025-05-08', price: 248 }
    ]
  },
  {
    name: 'Rivian Automotive Inc.',
    ticker: 'RIVN',
    sector: 'Consumer Discretionary',
    index: 'NASDAQ',
    price: 11.25,
    change: '-2.3%',
    summary: {
      marketCap: '11.5B',
      pe: 'N/A', // Negative earnings
      eps: '-5.65',
      dividend: 0,
      yield: '0%',
      beta: 2.05,
      volume: '28.5M',
      shares: '1.02B',
      roe: '-65.2%',
      revenue: '4.8B',
      grossMargin: '-28.6%',
      netMargin: '-120.4%',
      debtToEquity: '32.0%'
    },
    news: [
      { title: 'Rivian impacted by punitive tariffs on EVs imported from China', date: '2025-05-04', url: 'https://news.example.com/rivian-tariff-impact' },
      { title: 'Rivian ramps up production as demand grows for R2 SUV', date: '2025-04-22', url: 'https://news.example.com/rivian-r2-production' }
    ],
    profile: {
      description: 'Rivian Automotive, Inc. is an American electric vehicle manufacturer and automotive technology company founded in 2009.',
      executives: [
        { name: 'RJ Scaringe', title: 'Chief Executive Officer' },
        { name: 'Claire McDonough', title: 'Chief Financial Officer' }
      ],
      address: '13250 N. Haggerty Road, Plymouth, MI 48170, United States',
      website: 'https://rivian.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-10',
      lastEarningsDate: '2025-05-07',
      epsActual: '-1.05',
      epsEstimate: '-1.12',
      revenueActual: '1.25B',
      revenueEstimate: '1.18B',
      surprise: '+6.3%'
    },
    peers: [
      { name: 'Tesla', ticker: 'TSLA' },
      { name: 'Lucid Group', ticker: 'LCID' },
      { name: 'Ford', ticker: 'F' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '4.8B', netIncome: '-5.8B' },
        { year: 2023, revenue: '4.0B', netIncome: '-6.6B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '16.0B', liabilities: '6.5B', equity: '9.5B' }
      ],
      cashFlow: [
        { year: 2024, operating: '-3.8B', investing: '-2.0B', financing: '4.5B' }
      ]
    },
    options: {
      calls: [
        { strike: 12, expiry: '2025-06-20', price: 0.85, volume: 12500 },
        { strike: 15, expiry: '2025-06-20', price: 0.35, volume: 9800 }
      ],
      puts: [
        { strike: 10, expiry: '2025-06-20', price: 0.75, volume: 14200 },
        { strike: 8, expiry: '2025-06-20', price: 0.40, volume: 10500 }
      ]
    },
    ownership: {
      institutional: '68%',
      insider: '30.5%',
      topHolders: [
        { name: 'T. Rowe Price', percent: '14.2%' },
        { name: 'Amazon.com', percent: '17.1%' },
        { name: 'Ford Motor Company', percent: '9.8%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 11.85 },
      { date: '2025-05-06', price: 11.60 },
      { date: '2025-05-07', price: 11.40 },
      { date: '2025-05-08', price: 11.25 }
    ]
  },
  {
    name: 'Volvo AB',
    ticker: 'VOLV-B.ST',
    sector: 'Industrials',
    index: 'OMX Stockholm 30',
    price: 245, // SEK
    change: '-1.2%',
    summary: {
      marketCap: '520B', // SEK (billion)
      pe: 14.2,
      eps: '17.25', // SEK
      dividend: '7.5', // SEK
      yield: '3.1%',
      beta: 1.12,
      volume: '3.2M',
      shares: '2.13B',
      roe: '18.2%',
      revenue: '520B', // SEK (billion)
      grossMargin: '22.5%',
      netMargin: '9.3%',
      debtToEquity: '65.0%'
    },
    news: [
      { title: 'Volvo recalls 73,000 plug-in hybrid vehicles over fire risk', date: '2025-05-05', url: 'https://news.example.com/volvo-recall-hybrids' },
      { title: 'Volvo drops S90 from U.S. market due to tariffs', date: '2025-04-26', url: 'https://news.example.com/volvo-s90-us-market' }
    ],
    profile: {
      description: 'Volvo AB is a Swedish multinational manufacturing company headquartered in Gothenburg, Sweden, focusing on trucks, buses, construction equipment, marine and industrial power systems.',
      executives: [
        { name: 'Martin Lundstedt', title: 'President & CEO' },
        { name: 'Jan Ytterberg', title: 'Chief Financial Officer' }
      ],
      address: 'Gropegårdsgatan 2, 417 15 Göteborg, Sweden',
      website: 'https://www.volvogroup.com/'
    },
    earnings: {
      nextEarningsDate: '2025-07-20',
      lastEarningsDate: '2025-04-24',
      epsActual: '4.35', // SEK
      epsEstimate: '4.50', // SEK
      revenueActual: '130B', // SEK (billion)
      revenueEstimate: '132B', // SEK (billion)
      surprise: '-3.3%'
    },
    peers: [
      { name: 'Scania', ticker: 'SCV-B.ST' },
      { name: 'Daimler Truck', ticker: 'DTG.DE' },
      { name: 'Traton', ticker: '8TRA.DE' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '520B', netIncome: '48B' }, // SEK (billion)
        { year: 2023, revenue: '490B', netIncome: '45B' } // SEK (billion)
      ],
      balanceSheet: [
        { year: 2024, assets: '650B', liabilities: '420B', equity: '230B' } // SEK (billion)
      ],
      cashFlow: [
        { year: 2024, operating: '65B', investing: '-35B', financing: '-25B' } // SEK (billion)
      ]
    },
    options: {
      calls: [
        { strike: 250, expiry: '2025-06-20', price: 5.2, volume: 280 },
        { strike: 260, expiry: '2025-06-20', price: 3.1, volume: 190 }
      ],
      puts: [
        { strike: 240, expiry: '2025-06-20', price: 4.8, volume: 320 },
        { strike: 230, expiry: '2025-06-20', price: 2.9, volume: 240 }
      ]
    },
    ownership: {
      institutional: '65%',
      insider: '8.6%',
      topHolders: [
        { name: 'Industrivärden', percent: '16.8%' },
        { name: 'Geely Holding', percent: '8.2%' },
        { name: 'Alecta Pension Insurance', percent: '5.7%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 249 },
      { date: '2025-05-06', price: 247 },
      { date: '2025-05-07', price: 246 },
      { date: '2025-05-08', price: 245 }
    ]
  },
  {
    name: 'Amazon.com Inc.',
    ticker: 'AMZN',
    sector: 'Consumer Discretionary',
    index: 'NASDAQ-100',
    price: 188,
    change: '-0.7%',
    summary: {
      marketCap: '1.95T',
      pe: 45.8,
      eps: 4.10,
      dividend: 0,
      yield: '0%',
      beta: 1.25,
      volume: '35.2M',
      shares: '10.4B',
      roe: '22.5%',
      revenue: '575.0B',
      grossMargin: '48.2%',
      netMargin: '7.4%',
      debtToEquity: '45.0%'
    },
    news: [
      { title: 'Amazon stock slips on weaker operating profit forecast', date: '2025-05-04', url: 'https://news.example.com/amazon-profit-forecast' },
      { title: 'Amazon cites tariffs and trade policies as challenges to growth', date: '2025-04-28', url: 'https://news.example.com/amazon-tariff-impact' }
    ],
    profile: {
      description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
      executives: [
        { name: 'Andy Jassy', title: 'President & CEO' },
        { name: 'Brian Olsavsky', title: 'Chief Financial Officer' }
      ],
      address: '410 Terry Avenue North, Seattle, WA 98109, United States',
      website: 'https://www.amazon.com/'
    },
    earnings: {
      nextEarningsDate: '2025-07-25',
      lastEarningsDate: '2025-04-30',
      epsActual: 0.98,
      epsEstimate: 1.05,
      revenueActual: '142.5B',
      revenueEstimate: '140.8B',
      surprise: '-6.7%'
    },
    peers: [
      { name: 'Alphabet', ticker: 'GOOGL' },
      { name: 'Microsoft', ticker: 'MSFT' },
      { name: 'Walmart', ticker: 'WMT' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '575.0B', netIncome: '42.5B' },
        { year: 2023, revenue: '538.8B', netIncome: '35.2B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '480.0B', liabilities: '260.0B', equity: '220.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '85.0B', investing: '-48.0B', financing: '-15.0B' }
      ]
    },
    options: {
      calls: [
        { strike: 195, expiry: '2025-06-20', price: 5.8, volume: 22000 },
        { strike: 200, expiry: '2025-06-20', price: 4.2, volume: 18500 }
      ],
      puts: [
        { strike: 185, expiry: '2025-06-20', price: 5.6, volume: 25000 },
        { strike: 180, expiry: '2025-06-20', price: 4.3, volume: 20000 }
      ]
    },
    ownership: {
      institutional: '62%',
      insider: '9.2%',
      topHolders: [
        { name: 'Vanguard Group', percent: '7.5%' },
        { name: 'BlackRock', percent: '6.8%' },
        { name: 'State Street Global Advisors', percent: '4.1%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 190 },
      { date: '2025-05-06', price: 189.2 },
      { date: '2025-05-07', price: 188.5 },
      { date: '2025-05-08', price: 188 }
    ]
  },
  {
    name: 'Cummins Inc.',
    ticker: 'CMI',
    sector: 'Industrials',
    index: 'S&P 500',
    price: 265,
    change: '-1.1%',
    summary: {
      marketCap: '38B',
      pe: 18.2,
      eps: 14.56,
      dividend: 6.52,
      yield: '2.5%',
      beta: 1.05,
      volume: '0.85M',
      shares: '0.14B',
      roe: '16.8%',
      revenue: '34.0B',
      grossMargin: '24.5%',
      netMargin: '8.3%',
      debtToEquity: '38.0%'
    },
    news: [
      { title: 'Cummins withdraws 2025 outlook due to economic uncertainty', date: '2025-05-07', url: 'https://news.example.com/cummins-outlook-withdrawn' },
      { title: 'Cummins share value down 12% year-to-date', date: '2025-04-29', url: 'https://news.example.com/cummins-share-decline' }
    ],
    profile: {
      description: 'Cummins Inc. is an American multinational corporation that designs, manufactures, and distributes engines, filtration, and power generation products.',
      executives: [
        { name: 'Jennifer Rumsey', title: 'President & CEO' },
        { name: 'Mark Smith', title: 'Chief Financial Officer' }
      ],
      address: '500 Jackson Street, Columbus, IN 47201, United States',
      website: 'https://www.cummins.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-01',
      lastEarningsDate: '2025-05-05',
      epsActual: 3.45,
      epsEstimate: 3.80,
      revenueActual: '8.4B',
      revenueEstimate: '8.7B',
      surprise: '-9.2%'
    },
    peers: [
      { name: 'Caterpillar', ticker: 'CAT' },
      { name: 'Deere & Company', ticker: 'DE' },
      { name: 'Paccar', ticker: 'PCAR' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '34.0B', netIncome: '2.8B' },
        { year: 2023, revenue: '32.8B', netIncome: '3.0B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '42.0B', liabilities: '26.0B', equity: '16.0B' }
      ],
      cashFlow: [
        { year: 2024, operating: '4.2B', investing: '-2.1B', financing: '-1.8B' }
      ]
    },
    options: {
      calls: [
        { strike: 270, expiry: '2025-06-20', price: 5.8, volume: 180 },
        { strike: 280, expiry: '2025-06-20', price: 3.5, volume: 120 }
      ],
      puts: [
        { strike: 260, expiry: '2025-06-20', price: 6.2, volume: 210 },
        { strike: 250, expiry: '2025-06-20', price: 4.1, volume: 160 }
      ]
    },
    ownership: {
      institutional: '86%',
      insider: '0.2%',
      topHolders: [
        { name: 'Vanguard Group', percent: '8.6%' },
        { name: 'BlackRock', percent: '7.9%' },
        { name: 'State Street Global Advisors', percent: '5.2%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-05', price: 269 },
      { date: '2025-05-06', price: 267 },
      { date: '2025-05-07', price: 266 },
      { date: '2025-05-08', price: 265 }
    ]
  }
];
