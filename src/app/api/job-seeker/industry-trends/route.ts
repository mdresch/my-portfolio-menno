import { NextRequest, NextResponse } from "next/server";

// Sample industry trends data
const industryTrendsData = {
  articles: [
    {
      id: "1",
      title: "The Rise of AI in Software Development: What Developers Need to Know",
      summary: "Artificial Intelligence is transforming how we write, test, and deploy code. Learn about the latest AI tools and how they're changing the development landscape.",
      category: "Technology",
      industry: ["Software", "AI", "Development"],
      publishedDate: "2024-01-20",
      readTime: "5 min",
      source: "TechCrunch",
      url: "#", // Use placeholder for security
      relevanceScore: 95,
      trending: true,
      tags: ["AI", "Machine Learning", "Development Tools", "Automation"]
    },
    {
      id: "2",
      title: "Remote Work Trends: The Future of Distributed Teams",
      summary: "How companies are adapting to permanent remote work and what skills are most valuable for remote professionals.",
      category: "Workplace",
      industry: ["General", "Management", "HR"],
      publishedDate: "2024-01-18",
      readTime: "7 min",
      source: "Harvard Business Review",
      url: "#", // Use placeholder for security
      relevanceScore: 88,
      trending: true,
      tags: ["Remote Work", "Team Management", "Digital Collaboration", "Work-Life Balance"]
    },
    {
      id: "3",
      title: "Cybersecurity Skills Gap: Opportunities for Career Changers",
      summary: "The growing demand for cybersecurity professionals creates opportunities for those looking to transition into the field.",
      category: "Security",
      industry: ["Cybersecurity", "Technology"],
      publishedDate: "2024-01-15",
      readTime: "6 min",
      source: "InfoSec Magazine",
      url: "#", // Use placeholder for security
      relevanceScore: 82,
      trending: false,
      tags: ["Cybersecurity", "Career Change", "Skills Gap", "Information Security"]
    },
    {
      id: "4",
      title: "Green Technology Jobs: The Next Big Career Opportunity",
      summary: "Sustainability initiatives are creating new job categories and transforming traditional roles across industries.",
      category: "Sustainability",
      industry: ["Green Tech", "Energy", "Engineering"],
      publishedDate: "2024-01-12",
      readTime: "8 min",
      source: "Environmental Tech",
      url: "#", // Use placeholder for security
      relevanceScore: 75,
      trending: false,
      tags: ["Green Technology", "Sustainability", "Clean Energy", "Environmental Engineering"]
    },
    {
      id: "5",
      title: "Data Science Evolution: From Analytics to AI Strategy",
      summary: "How data science roles are evolving beyond traditional analytics to strategic AI implementation and business transformation.",
      category: "Data Science",
      industry: ["Technology", "Analytics", "AI"],
      publishedDate: "2024-01-10",
      readTime: "9 min",
      source: "Data Science Central",
      url: "#", // Use placeholder for security
      relevanceScore: 90,
      trending: true,
      tags: ["Data Science", "Analytics", "AI Strategy", "Business Intelligence"]
    }
  ],
  skillTrends: [
    {
      skill: "Artificial Intelligence/Machine Learning",
      growth: 45,
      demand: "high",
      category: "Technical",
      description: "AI and ML skills are in extremely high demand across all industries",
      averageSalary: "$135,000",
      jobOpenings: 89000,
      relatedSkills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"]
    },
    {
      skill: "Cloud Computing (AWS, Azure, GCP)",
      growth: 38,
      demand: "high",
      category: "Technical",
      description: "Cloud infrastructure skills continue to be essential for modern development",
      averageSalary: "$125,000",
      jobOpenings: 156000,
      relatedSkills: ["Docker", "Kubernetes", "DevOps", "Microservices"]
    },
    {
      skill: "Data Analysis & Visualization",
      growth: 32,
      demand: "high",
      category: "Technical",
      description: "Data-driven decision making increases demand for analytical skills",
      averageSalary: "$95,000",
      jobOpenings: 78000,
      relatedSkills: ["SQL", "Python", "Tableau", "Power BI"]
    },
    {
      skill: "Cybersecurity",
      growth: 28,
      demand: "high",
      category: "Technical",
      description: "Growing security threats drive demand for cybersecurity expertise",
      averageSalary: "$115,000",
      jobOpenings: 67000,
      relatedSkills: ["Network Security", "Penetration Testing", "Risk Assessment", "Compliance"]
    },
    {
      skill: "Digital Marketing",
      growth: 25,
      demand: "medium",
      category: "Marketing",
      description: "Digital transformation continues to drive marketing skill demand",
      averageSalary: "$75,000",
      jobOpenings: 45000,
      relatedSkills: ["SEO", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      skill: "Project Management",
      growth: 22,
      demand: "medium",
      category: "Management",
      description: "Agile and remote work environments increase PM skill value",
      averageSalary: "$95,000",
      jobOpenings: 123000,
      relatedSkills: ["Agile", "Scrum", "Risk Management", "Stakeholder Management"]
    }
  ],
  marketInsights: [
    {
      title: "Tech Job Openings",
      metric: "2.3M",
      change: 15,
      period: "vs last quarter",
      description: "Technology sector continues strong hiring growth",
      positive: true,
      category: "job_market"
    },
    {
      title: "Remote Job Postings",
      metric: "42%",
      change: 8,
      period: "of all postings",
      description: "Remote work options remain prevalent",
      positive: true,
      category: "work_trends"
    },
    {
      title: "Average Salary Growth",
      metric: "6.2%",
      change: 6.2,
      period: "year over year",
      description: "Salaries continue to rise across most sectors",
      positive: true,
      category: "compensation"
    },
    {
      title: "Time to Hire",
      metric: "23 days",
      change: -12,
      period: "vs last year",
      description: "Companies are hiring faster in competitive market",
      positive: true,
      category: "hiring_process"
    },
    {
      title: "Skills-Based Hiring",
      metric: "67%",
      change: 23,
      period: "of companies",
      description: "More employers prioritizing skills over degrees",
      positive: true,
      category: "hiring_trends"
    },
    {
      title: "Diversity Hiring Focus",
      metric: "78%",
      change: 18,
      period: "of organizations",
      description: "Increased emphasis on diverse talent acquisition",
      positive: true,
      category: "diversity"
    }
  ],
  jobCategories: [
    { category: "Software Engineering", growth: "+23%", openings: "145K", averageSalary: "$128K" },
    { category: "Data Science", growth: "+19%", openings: "89K", averageSalary: "$132K" },
    { category: "Cybersecurity", growth: "+31%", openings: "67K", averageSalary: "$115K" },
    { category: "Product Management", growth: "+15%", openings: "45K", averageSalary: "$135K" },
    { category: "UX/UI Design", growth: "+12%", openings: "38K", averageSalary: "$95K" },
    { category: "DevOps Engineering", growth: "+27%", openings: "52K", averageSalary: "$125K" },
    { category: "Digital Marketing", growth: "+14%", openings: "78K", averageSalary: "$75K" },
    { category: "Cloud Architecture", growth: "+35%", openings: "34K", averageSalary: "$145K" }
  ]
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'articles' | 'skills' | 'market' | 'categories'
    const industry = searchParams.get('industry');
    const category = searchParams.get('category');
    const trending = searchParams.get('trending');

    // Validate input parameters
    const validTypes = ['articles', 'skills', 'market', 'categories'];
    if (type && !validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid type parameter" },
        { status: 400 }
      );
    }

    // Sanitize string inputs
    const sanitizedIndustry = industry?.replace(/[<>]/g, '').slice(0, 50);
    const sanitizedCategory = category?.replace(/[<>]/g, '').slice(0, 50);

    let data = industryTrendsData;

    // Filter by type
    if (type) {
      if (type === 'articles') {
        let articles = data.articles;
        
        // Filter by industry
        if (sanitizedIndustry && sanitizedIndustry !== 'all') {
          articles = articles.filter(article => 
            article.industry.some(ind => 
              ind.toLowerCase().includes(sanitizedIndustry.toLowerCase())
            )
          );
        }
        
        // Filter by category
        if (sanitizedCategory) {
          articles = articles.filter(article => 
            article.category.toLowerCase() === sanitizedCategory.toLowerCase()
          );
        }
        
        // Filter by trending
        if (trending === 'true') {
          articles = articles.filter(article => article.trending);
        }
        
        return NextResponse.json(articles);
      }
      
      if (type === 'skills') {
        let skills = data.skillTrends;
        
        // Filter by category
        if (sanitizedCategory) {
          skills = skills.filter(skill => 
            skill.category.toLowerCase() === sanitizedCategory.toLowerCase()
          );
        }
        
        return NextResponse.json(skills);
      }
      
      if (type === 'market') {
        return NextResponse.json(data.marketInsights);
      }
      
      if (type === 'categories') {
        return NextResponse.json(data.jobCategories);
      }
    }

    // Return all data if no specific type requested
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching industry trends:", error);
    return NextResponse.json(
      { error: "Failed to fetch industry trends" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Type and data are required" },
        { status: 400 }
      );
    }

    // In a real application, you would save this to a database
    // For now, we'll just return a success response
    return NextResponse.json({
      message: `${type} data saved successfully`,
      data
    });
  } catch (error) {
    console.error("Error saving industry trends data:", error);
    return NextResponse.json(
      { error: "Failed to save industry trends data" },
      { status: 500 }
    );
  }
}