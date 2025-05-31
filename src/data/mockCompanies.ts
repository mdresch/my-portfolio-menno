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
    },    news: [
      { title: 'Microsoft to announce new AI integrations at Build 2025 developer conference', date: '2025-05-13', url: 'https://news.example.com/microsoft-build-ai-integrations' },
      { title: 'Microsoft expanding enterprise AI capabilities through joint venture with Oracle and SoftBank', date: '2025-05-13', url: 'https://news.example.com/microsoft-ai-data-centers' },
      { title: 'Microsoft negotiates reduced stake in OpenAI in exchange for guaranteed access to future AI models', date: '2025-05-12', url: 'https://news.example.com/microsoft-openai-stake' },
      { title: 'Microsoft lays off 2,000 employees as regulatory oversight increases', date: '2025-05-11', url: 'https://news.example.com/microsoft-layoffs' },
      { title: 'Microsoft bans Deepseek AI app over data vulnerability, funds $1M AI Accelerator Grant for ovarian cancer research', date: '2025-05-10', url: '' }
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
    news: [ 
      { title: 'Alphabet stock drops 8% as Apple explores AI-powered search features for Safari', date: '2025-05-13', url: 'https://news.example.com/alphabet-stock-drop-apple-ai' },
      { title: 'Alphabet announces partnership with UniCredit to migrate IT architecture to Google Cloud', date: '2025-05-13', url: 'https://news.example.com/alphabet-unicredit-cloud' },
      { title: 'Alphabet faces DOJ antitrust pressure to share search data with competitors', date: '2025-05-12', url: 'https://news.example.com/alphabet-doj-antitrust' },
      { title: 'Google market share in search traffic declines from 93% to under 90% after ChatGPT debut', date: '2025-05-11', url: 'https://news.example.com/google-market-share' },
      { title: 'Alphabet launches new search AI', date: '2025-04-19', url: '#' } 
    ],
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
    name: 'IBM Corp.',
    ticker: 'IBM',
    sector: 'Information Technology',
    index: 'S&P 500',
    price: 178.25,
    change: '+0.8%',
    summary: {
      marketCap: '163B',
      pe: 21.7,
      eps: 8.21,
      dividend: 6.64,
      yield: '3.72%',
      beta: 0.85,
      volume: '4.2M',
      shares: '0.91B',
      roe: '26.8%',
      revenue: '62.5B',
      grossMargin: '55.4%',
      netMargin: '12.5%',
      debtToEquity: '220.0%'
    },
    news: [
      { title: 'IBM stock drops 7.5% despite better-than-expected Q1 results due to weak consulting sales', date: '2025-05-13', url: 'https://news.example.com/ibm-stock-drop-consulting' },
      { title: 'IBM positions z17 mainframe to reclaim workloads from x86 servers and cloud platforms', date: '2025-05-13', url: 'https://news.example.com/ibm-z17-mainframe' },
      { title: 'IBM expands watsonx AI platform with new foundation models', date: '2025-05-10', url: 'https://news.example.com/ibm-watsonx-expansion' },
      { title: 'IBM completes acquisition of HashiCorp to enhance hybrid cloud strategy', date: '2025-05-02', url: 'https://news.example.com/ibm-hashicorp-acquisition' },
      { title: 'IBM reports Q1 2025 revenue growth of 2.6%, driven by software segment', date: '2025-04-24', url: 'https://news.example.com/ibm-q1-2025-earnings' },
      { title: 'IBM enhances AI with DataStax acquisition, expands watsonx portfolio', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
    ],
    profile: {
      description: 'International Business Machines Corporation (IBM) is an American multinational technology corporation headquartered in Armonk, New York, specializing in cloud computing, artificial intelligence, and quantum computing.',
      executives: [
        { name: 'Arvind Krishna', title: 'Chairman & Chief Executive Officer' },
        { name: 'James Kavanaugh', title: 'Senior Vice President & Chief Financial Officer' }
      ],
      address: '1 New Orchard Road, Armonk, NY 10504, United States',
      website: 'https://www.ibm.com/'
    },
    earnings: {
      nextEarningsDate: '2025-07-18',
      lastEarningsDate: '2025-04-24',
      epsActual: 1.68,
      epsEstimate: 1.65,
      revenueActual: '15.3B',
      revenueEstimate: '15.1B',
      surprise: '+1.8%'
    },
    peers: [
      { name: 'Microsoft', ticker: 'MSFT' },
      { name: 'Oracle', ticker: 'ORCL' },
      { name: 'Hewlett Packard Enterprise', ticker: 'HPE' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '62.5B', netIncome: '7.8B' },
        { year: 2023, revenue: '60.8B', netIncome: '7.2B' }
      ],
      balanceSheet: [
        { year: 2024, assets: '150.2B', liabilities: '124.5B', equity: '25.7B' }
      ],
      cashFlow: [
        { year: 2024, operating: '13.5B', investing: '-5.8B', financing: '-7.1B' }
      ]
    },
    options: {
      calls: [
        { strike: 185, expiry: '2025-06-20', price: 3.85, volume: 850 },
        { strike: 195, expiry: '2025-06-20', price: 1.65, volume: 620 }
      ],
      puts: [
        { strike: 170, expiry: '2025-06-20', price: 3.20, volume: 780 },
        { strike: 160, expiry: '2025-06-20', price: 1.75, volume: 560 }
      ]
    },
    ownership: {
      institutional: '72%',
      insider: '0.12%',
      topHolders: [
        { name: 'Vanguard Group', percent: '8.8%' },
        { name: 'BlackRock', percent: '7.9%' },
        { name: 'State Street Global Advisors', percent: '5.6%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-08', price: 175.80 },
      { date: '2025-05-09', price: 176.45 },
      { date: '2025-05-10', price: 177.20 },
      { date: '2025-05-11', price: 177.85 },
      { date: '2025-05-12', price: 178.25 }
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
      { title: 'Mercedes-Benz pulls earnings forecasts due to tariff uncertainty', date: '2025-05-13', url: 'https://news.example.com/mercedes-tariff-uncertainty' },
      { title: 'Mercedes-Benz earnings fell 28 percent to EUR10 billion, dividend cut by a fifth', date: '2025-05-13', url: 'https://news.example.com/mercedes-earnings-dividend-cut' },
      { title: 'Mercedes-Benz launches new CLA in UK, featuring electric and hybrid options built on MMA', date: '2025-05-13', url: 'https://news.example.com/mercedes-cla-uk-launch' },
      { title: 'Mercedes-Benz revenue declined by 7.4% in Q1 2025', date: '2025-05-04', url: 'https://news.example.com/mercedes-q1-2025' },
      { title: 'Mercedes-Benz cuts dividend as net income drops 43% in Q1', date: '2025-04-26', url: 'https://news.example.com/mercedes-dividend-cut' },
      { title: 'Mercedes-Benz wins €9.6M e-bus depot contract, expands EV infrastructure', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
    },    news: [
      { title: 'Tesla sales plunge in China and Europe despite surge in overall EV adoption', date: '2025-05-13', url: 'https://news.example.com/tesla-sales-plunge-global' },
      { title: 'Tesla halts Model Y and Cybertruck production due to inventory surplus and softening demand', date: '2025-05-12', url: 'https://news.example.com/tesla-halts-production' },
      { title: 'Tesla car sales in Europe fall to two-year low', date: '2025-05-07', url: 'https://news.example.com/tesla-europe-sales-drop' },
      { title: 'Tesla disappoints with Q1 earnings amid slumping China sales', date: '2025-04-25', url: 'https://news.example.com/tesla-q1-2025-earnings' },
      { title: 'Tesla cancels Cybertruck range extender, refunds deposits to customers', date: '2025-05-10', url: '' }
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
      { title: 'Porsche completes acquisition of majority stake in V4Smart GmbH for battery technology', date: '2025-05-13', url: 'https://news.example.com/porsche-v4smart-acquisition' },
      { title: 'Porsche invests over €200 million in strategic projects during Q1 2025', date: '2025-05-13', url: 'https://news.example.com/porsche-q1-investments' },
      { title: 'Porsche partners with VARTA for high-performance battery cell development', date: '2025-05-13', url: 'https://news.example.com/porsche-varta-partnership' },
      { title: 'Porsche signs e-Fuels agreement with HIF Global and Shell for Chilean facility', date: '2025-05-13', url: 'https://news.example.com/porsche-efuels-chile' },
      { title: 'Porsche reports 43.8% drop in operating profit', date: '2025-05-06', url: 'https://news.example.com/porsche-profit-drop' },
      { title: 'Porsche plans to cut 2,000 jobs amid financial pressure', date: '2025-04-30', url: 'https://news.example.com/porsche-job-cuts' },
      { title: 'Ferrari CEO Benedetto Vigna drives company growth, praised by Bernstein Research', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
      { title: 'Ferrari Elettrica expected to benefit from favorable Chinese tax structure', date: '2025-05-13', url: 'https://news.example.com/ferrari-elettrica-china' },
      { title: 'Ferrari reports 25% sales drop in greater China region', date: '2025-05-08', url: 'https://news.example.com/ferrari-china-sales' },
      { title: 'Ferrari global shipments up 1% despite regional challenges', date: '2025-05-03', url: 'https://news.example.com/ferrari-shipments-2025' },
      { title: 'Ferrari maintains confident 2025 outlook despite tariffs, first EV deliveries expected', date: '2025-05-10', url: '' },
      { title: 'Ferrari CEO Benedetto Vigna drives company growth, praised by Bernstein Research', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
      { name: 'Mercedes-Benz Group', ticker: 'MBG.DE' },
      { name: 'Ferrari', ticker: 'RACE' }
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
      { date: '2025-04-16', price: 395 },
      { date: '2025-04-17', price: 396 },
      { date: '2025-04-18', price: 395.5 },
      { date: '2025-04-19', price: 395 }
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
      { title: 'Nissan plans to cut 20,000 jobs globally, 15% of workforce amid declining sales', date: '2025-05-13', url: 'https://news.example.com/nissan-job-cuts' },
      { title: 'Nissan considering closing domestic factory as part of production capacity optimization', date: '2025-05-13', url: 'https://news.example.com/nissan-factory-closure' },
      { title: 'Nissan expects net loss of up to 750 billion yen for fiscal year ended March', date: '2025-05-12', url: 'https://news.example.com/nissan-financial-loss' },
      { title: 'Nissan to announce recovery actions with full-year financial results', date: '2025-05-11', url: 'https://news.example.com/nissan-recovery-plan' },
      { title: 'Nissan reshuffles management team to address business turmoil', date: '2025-05-08', url: 'https://news.example.com/nissan-management-changes' }
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
    },    news: [
      { title: 'BYD faces delays in Brazilian factory completion due to labor abuse accusations', date: '2025-05-13', url: 'https://news.example.com/byd-brazil-factory-delays' },
      { title: 'BYD expands lithium-ion battery recycling capabilities in Oceania with Livium', date: '2025-05-13', url: 'https://news.example.com/byd-battery-recycling' },
      { title: 'BYD adjusts Chile supply chain plans due to lithium price crash, focuses on Chinese facilities', date: '2025-05-12', url: 'https://news.example.com/byd-chile-plan-changes' },
      { title: 'BYD emphasizes Europe expansion as pivotal to 2030 target amid US market lockout', date: '2025-05-11', url: 'https://news.example.com/byd-europe-expansion' },
      { title: 'BYD scraps plans for Chile lithium plants due to global market conditions', date: '2025-05-06', url: 'https://news.example.com/byd-lithium-chile' },
      { title: 'BYD surpasses Tesla in global EV sales for second consecutive quarter', date: '2025-04-29', url: 'https://news.example.com/byd-tesla-ev-sales' },
      { title: 'BYD aims for 5 million global sales, 80% from China, expands into Europe despite geopolitical challenges', date: '2025-05-10', url: '' },
      { title: 'BYD Targets Doubling Foreign Sales in 2025', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
      { title: 'Rivian ramps up production as demand grows for R2 SUV', date: '2025-04-22', url: 'https://news.example.com/rivian-r2-production' },
      { title: 'Rivian R2 pre-orders surpass 100,000, strong demand for new model', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
    },    news: [
      { title: 'Volvo AB faces market challenges due to Chinese ownership', date: '2025-05-12', url: 'https://news.example.com/volvo-chinese-ownership' },
      { title: 'Volvo and Daimler Truck announce joint venture for software-defined vehicle platform', date: '2025-05-11', url: 'https://news.example.com/volvo-daimler-jv' },
      { title: 'Volvo recalls 413,151 vehicles due to camera display issue', date: '2025-05-09', url: 'https://news.example.com/volvo-recall-camera' },
      { title: 'Volvo recalls 73,000 plug-in hybrid vehicles over fire risk', date: '2025-05-05', url: 'https://news.example.com/volvo-recall-hybrids' },
      { title: 'Volvo drops S90 from U.S. market due to tariffs', date: '2025-04-26', url: 'https://news.example.com/volvo-s90-us-market' },
      { title: 'Volvo closes Silicon Valley innovation hub, delivers 5,000+ battery-electric trucks globally, sees increased demand for gas-powered trucks', date: '2025-05-10', url: '' },
      { title: 'Volvo faces U.S. market risk from 2027 ban on Chinese-controlled automakers', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
    },    news: [
      { title: 'Amazon enters quantum-computing race with launch of Ocelot quantum chip', date: '2025-05-12', url: 'https://news.example.com/amazon-quantum-chip' },
      { title: 'Amazon faces backlash from Trump administration over labor practices', date: '2025-05-10', url: 'https://news.example.com/amazon-trump-labor' },
      { title: 'Amazon fails to stop NLRB from acting on labor practice allegations', date: '2025-05-09', url: 'https://news.example.com/amazon-nlrb-decision' },
      { title: 'Amazon stock slips on weaker operating profit forecast', date: '2025-05-04', url: 'https://news.example.com/amazon-profit-forecast' },
      { title: 'Amazon cites tariffs and trade policies as challenges to growth', date: '2025-04-28', url: 'https://news.example.com/amazon-tariff-impact' },
      { title: 'Amazon removes dangerous products after US safety ruling', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
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
      { title: 'Cummins withdraws full-year guidance due to Trump administration tariff uncertainty', date: '2025-05-13', url: 'https://news.example.com/cummins-guidance-withdrawn-tariffs' },
      { title: 'Cummins stock suffers 19.5% negative return due to trade policy uncertainty', date: '2025-05-13', url: 'https://news.example.com/cummins-stock-decline' },
      { title: 'Cummins X15 engine part of HELM platform offers compatibility with multiple fuel types', date: '2025-05-13', url: 'https://news.example.com/cummins-x15-engine' },
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
  },
  {
    name: 'Sono Motors GmbH',
    ticker: 'SONO',
    sector: 'Automotive',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'Sono Motors shifts focus to solar kits for trucks, buses, and RVs after cancelling Sion project',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Sono Motors GmbH is a German company specializing in solar technology for vehicles.',
      executives: [],
      address: '',
      website: 'https://sonomotors.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Denso Corp.',
    ticker: '6902',
    sector: 'Automotive',
    index: '',
    price: null,
    change: null,
    summary: {},    news: [
      {
        title: 'Denso solidifies strategic partnership with ROHM Co. in semiconductor field',
        date: '2025-05-12',
        url: 'https://news.example.com/denso-rohm-partnership'
      },
      {
        title: 'Denso to acquire portion of ROHM shares to ensure stable semiconductor supply',
        date: '2025-05-11', 
        url: 'https://news.example.com/denso-rohm-shares'
      },
      {
        title: 'Denso strengthens innovation and semiconductor partnerships, targets next-generation vehicle systems',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Denso Corporation is a global automotive components manufacturer headquartered in Japan.',
      executives: [],
      address: '',
      website: 'https://www.denso.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Dassault Systemes SE',
    ticker: 'DSY',
    sector: 'Technology',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'Dassault Systemes driven by strong growth expectations, faces risks with high P/E ratio',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Dassault Systemes SE is a French software company specializing in 3D design and engineering software.',
      executives: [],
      address: '',
      website: 'https://www.3ds.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Aptera Motors Corp.',
    ticker: '',
    sector: 'Automotive',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'Aptera integrates 700W solar panels, aims for 20,000 cars/year by 2027',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Aptera Motors Corp. is an American startup developing ultra-efficient solar electric vehicles.',
      executives: [],
      address: '',
      website: 'https://aptera.us/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Schneider Electric',
    ticker: 'SU.PA',
    sector: 'Industrials',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'Schneider Electric has 7 factories recognized as Global Lighthouse Network sites, including Shanghai and Monterrey',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Schneider Electric SE is a French multinational company providing energy and automation digital solutions for efficiency and sustainability.',
      executives: [],
      address: '',
      website: 'https://www.se.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Agilent Technologies',
    ticker: 'A',
    sector: 'Health Care',
    index: 'S&P 500',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'Agilent Technologies has two smart factories in Asia named as Global Lighthouse Network sites',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Agilent Technologies, Inc. is an American public research, development and manufacturing company.',
      executives: [],
      address: '',
      website: 'https://www.agilent.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'UMC',
    ticker: '2303.TW',
    sector: 'Information Technology',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'UMC’s Fab 12A in Tainan, Taiwan is the first semiconductor foundry globally to earn Lighthouse status',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'United Microelectronics Corporation (UMC) is a Taiwanese company specializing in semiconductor foundry services.',
      executives: [],
      address: '',
      website: 'https://www.umc.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Aramco',
    ticker: '2222.SR',
    sector: 'Energy',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'Five Aramco facilities, including North Ghawar, added to the Global Lighthouse Network',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Saudi Aramco is a Saudi Arabian public petroleum and natural gas company.',
      executives: [],
      address: '',
      website: 'https://www.aramco.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'CITIC Dicastal',
    ticker: '',
    sector: 'Metals & Mining',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'CITIC Dicastal’s Morocco factory is the first Lighthouse site in Africa',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'CITIC Dicastal is a Chinese manufacturer of aluminum wheels and automotive components.',
      executives: [],
      address: '',
      website: 'https://www.citicdicastal.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Hindustan Unilever Limited (HUL)',
    ticker: 'HINDUNILVR.NS',
    sector: 'Consumer Goods',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'HUL’s Doomdummer factory recognized as an end-to-end value chain Lighthouse',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'Hindustan Unilever Limited is an Indian consumer goods company headquartered in Mumbai, India.',
      executives: [],
      address: '',
      website: 'https://www.hul.co.in/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'CEAT',
    ticker: 'CEATLTD.NS',
    sector: 'Automotive',
    index: '',
    price: null,
    change: null,
    summary: {},
    news: [
      {
        title: 'CEAT recognized in the Global Lighthouse Network for innovation in tire manufacturing',
        date: '2025-05-10',
        url: ''
      }
    ],
    profile: {
      description: 'CEAT Limited is an Indian multinational tyre manufacturing company.',
      executives: [],
      address: '',
      website: 'https://www.ceat.com/'
    },
    earnings: {},
    peers: [],
    financials: {},
    options: {},
    ownership: {},
    priceHistory: []
  },
  {
    name: 'Bentley Systems Inc.',
    ticker: 'BSY',
    sector: 'Technology',
    index: 'NASDAQ',
    price: 56.42,
    change: '+0.3%',
    summary: {
      marketCap: '15.8B',
      pe: 47.8,
      eps: 1.18,
      dividend: 0.20,
      yield: '0.35%',
      beta: 1.15,
      volume: '1.5M',
      shares: '280.4M',
      roe: '26.3%',
      revenue: '1.2B',
      grossMargin: '79.2%',
      netMargin: '21.5%',
      debtToEquity: '65.4%'
    },
    news: [
      { title: 'Bentley Systems identifies India as primary growth driver in Asia Pacific', date: '2025-05-12', url: 'https://news.example.com/bentley-india-growth' },
      { title: 'Bentley Systems earnings per share estimates upgraded by analysts', date: '2025-05-10', url: 'https://news.example.com/bentley-eps-upgrade' },
      { title: 'Bentley Systems expands infrastructure digital twin capabilities', date: '2025-04-22', url: 'https://news.example.com/bentley-digital-twins' }
    ],
    profile: {
      description: 'Bentley Systems, Inc. is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure.',
      executives: [
        { name: 'Greg Bentley', title: 'Chief Executive Officer' },
        { name: 'Keith Bentley', title: 'Chief Technology Officer' }
      ],
      address: '685 Stockton Drive, Exton, PA 19341, United States',
      website: 'https://www.bentley.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-10',
      lastEarningsDate: '2025-05-05',
      epsActual: 0.32,
      epsEstimate: 0.29,
      revenueActual: '320M',
      revenueEstimate: '315M',
      surprise: '+10.3%'
    },
    peers: [
      { name: 'Autodesk', ticker: 'ADSK' },
      { name: 'Trimble', ticker: 'TRMB' },
      { name: 'AVEVA Group', ticker: 'AVV.L' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '1.2B', netIncome: '258M' },
        { year: 2023, revenue: '1.1B', netIncome: '220M' }
      ],
      balanceSheet: [
        { year: 2024, assets: '3.2B', liabilities: '1.8B', equity: '1.4B' }
      ],
      cashFlow: [
        { year: 2024, operating: '450M', investing: '-120M', financing: '-80M' }
      ]
    },
    options: {
      calls: [
        { strike: 60, expiry: '2025-06-20', price: 2.15, volume: 320 },
        { strike: 65, expiry: '2025-06-20', price: 0.85, volume: 180 }
      ],
      puts: [
        { strike: 55, expiry: '2025-06-20', price: 1.75, volume: 290 },
        { strike: 50, expiry: '2025-06-20', price: 0.65, volume: 140 }
      ]
    },
    ownership: {
      institutional: '62%',
      insider: '21.5%',
      topHolders: [
        { name: 'Bentley Family', percent: '17.8%' },
        { name: 'Vanguard Group', percent: '8.6%' },
        { name: 'BlackRock', percent: '6.4%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-08', price: 55.80 },
      { date: '2025-05-09', price: 55.95 },
      { date: '2025-05-10', price: 56.10 },
      { date: '2025-05-11', price: 56.25 },
      { date: '2025-05-12', price: 56.42 }
    ]
  },
  {
    name: 'Waymo LLC',
    ticker: 'Private (Alphabet subsidiary)',
    sector: 'Technology',
    index: 'N/A (Private)',
    price: 'N/A',
    change: 'N/A',
    summary: {
      marketCap: 'Est. $30B',
      pe: 'N/A',
      eps: 'N/A',
      dividend: 0,
      yield: '0%',
      beta: 'N/A',
      volume: 'N/A',
      shares: 'N/A',
      roe: 'N/A',
      revenue: 'Est. $1B',
      grossMargin: 'N/A',
      netMargin: 'N/A',
      debtToEquity: 'N/A'
    },
    news: [
      { title: 'Waymo faces increased regulatory scrutiny with crash rate of 1,000 per 100 million miles', date: '2025-05-13', url: 'https://news.example.com/waymo-regulatory-scrutiny' },
      { title: 'Waymo partnership with Uber evolving, Austin pilot exceeds expectations', date: '2025-05-12', url: 'https://news.example.com/waymo-uber-partnership' },
      { title: 'Uber expands partnerships with WeRide and Volkswagen beyond Waymo', date: '2025-05-11', url: 'https://news.example.com/uber-autonomous-partnerships' },
      { title: 'Waymo plans rollout of autonomous ride service in Atlanta', date: '2025-05-08', url: 'https://news.example.com/waymo-atlanta-rollout' },
      { title: 'Waymo involved in multi-car crash in Scottsdale, Arizona', date: '2025-05-05', url: 'https://news.example.com/waymo-arizona-crash' },
      { title: 'Waymo robotaxi service surpasses 10 million paid trips, competes with Tesla', date: '2025-05-31', url: '/blog/self-charging-car-brief-31052025' }
    ],
    profile: {
      description: 'Waymo LLC is an American autonomous driving technology company and subsidiary of Alphabet Inc. The company develops autonomous driving technology for ride-hailing services, trucking, and last-mile delivery.',
      executives: [
        { name: 'Tekedra Mawakana', title: 'Co-Chief Executive Officer' },
        { name: 'Dmitri Dolgov', title: 'Co-Chief Executive Officer and CTO' }
      ],
      address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States',
      website: 'https://waymo.com/'
    },
    earnings: {
      nextEarningsDate: 'N/A',
      lastEarningsDate: 'N/A',
      epsActual: 'N/A',
      epsEstimate: 'N/A',
      revenueActual: 'N/A',
      revenueEstimate: 'N/A',
      surprise: 'N/A'
    },
    peers: [
      { name: 'Cruise', ticker: 'Private (GM subsidiary)' },
      { name: 'Tesla', ticker: 'TSLA' },
      { name: 'Uber', ticker: 'UBER' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: 'Est. $1B', netIncome: 'Est. -$500M' }
      ],
      balanceSheet: [
        { year: 2024, assets: 'N/A', liabilities: 'N/A', equity: 'N/A' }
      ],
      cashFlow: [
        { year: 2024, operating: 'Est. -$600M', investing: 'Est. -$1.2B', financing: 'Est. $1.8B' }
      ]
    },
    options: {
      calls: [],
      puts: []
    },
    ownership: {
      institutional: '0%',
      insider: '100%',
      topHolders: [
        { name: 'Alphabet Inc.', percent: '100%' }
      ]
    },
    priceHistory: []
  },
  {
    name: 'Peugeot Invest S.A.',
    ticker: 'PEUG.PA',
    sector: 'Financials',
    index: 'CAC Mid 60',
    price: 103.80,
    change: '+0.6%',
    summary: {
      marketCap: '2.6B',
      pe: 10.8,
      eps: 9.60,
      dividend: 3.15,
      yield: '3.04%',
      beta: 0.92,
      volume: '11K',
      shares: '24.9M',
      roe: '9.2%',
      revenue: '380M',
      grossMargin: 'N/A',
      netMargin: '62.8%',
      debtToEquity: '25.3%'
    },
    news: [
      { title: 'Peugeot Invest partners with Charterhouse Capital in EUR105M Novétude investment', date: '2025-05-12', url: 'https://news.example.com/peugeot-invest-novetude' },
      { title: 'Peugeot Invest expands healthcare education portfolio through 19% stake in Novétude', date: '2025-05-11', url: 'https://news.example.com/peugeot-novetude-stake' },
      { title: 'Peugeot Invest reports solid portfolio performance despite market turbulence', date: '2025-04-25', url: 'https://news.example.com/peugeot-invest-q1-results' }
    ],
    profile: {
      description: 'Peugeot Invest S.A. (formerly FFP) is a French investment company and holding company owned by the Peugeot family with investments in various sectors including automotive, healthcare, technology, and consumer goods.',
      executives: [
        { name: 'Robert Peugeot', title: 'Chairman of the Board' },
        { name: 'Bertrand Finet', title: 'Chief Executive Officer' }
      ],
      address: '66 Avenue Charles de Gaulle, 92200 Neuilly-sur-Seine, France',
      website: 'https://www.peugeot-invest.com/'
    },
    earnings: {
      nextEarningsDate: '2025-08-15',
      lastEarningsDate: '2025-03-20',
      epsActual: 2.45,
      epsEstimate: 2.30,
      revenueActual: '95M',
      revenueEstimate: '92M',
      surprise: '+6.5%'
    },
    peers: [
      { name: 'Wendel', ticker: 'MF.PA' },
      { name: 'Eurazeo', ticker: 'RF.PA' },
      { name: 'GBL', ticker: 'GBLB.BR' }
    ],
    financials: {
      incomeStatement: [
        { year: 2024, revenue: '380M', netIncome: '238M' },
        { year: 2023, revenue: '360M', netIncome: '224M' }
      ],
      balanceSheet: [
        { year: 2024, assets: '6.5B', liabilities: '1.4B', equity: '5.1B' }
      ],
      cashFlow: [
        { year: 2024, operating: '250M', investing: '-325M', financing: '120M' }
      ]
    },
    options: {
      calls: [
        { strike: 110, expiry: '2025-06-20', price: 2.50, volume: 85 },
        { strike: 115, expiry: '2025-06-20', price: 0.95, volume: 40 }
      ],
      puts: [
        { strike: 100, expiry: '2025-06-20', price: 2.20, volume: 95 },
        { strike: 95, expiry: '2025-06-20', price: 1.10, volume: 65 }
      ]
    },
    ownership: {
      institutional: '18%',
      insider: '76.5%',
      topHolders: [
        { name: 'Établissements Peugeot Frères', percent: '76.5%' },
        { name: 'Amundi Asset Management', percent: '3.2%' },
        { name: 'BNP Paribas Asset Management', percent: '2.1%' }
      ]
    },
    priceHistory: [
      { date: '2025-05-08', price: 102.90 },
      { date: '2025-05-09', price: 103.20 },
      { date: '2025-05-10', price: 103.40 },
      { date: '2025-05-11', price: 103.30 },
      { date: '2025-05-12', price: 103.80 }
    ]
  }
];
