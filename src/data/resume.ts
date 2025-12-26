export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null for current positions
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100 for visualization
  category: "technical" | "soft" | "language" | "tool";
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  certifications?: Array<{name: string, issuer: string, date: string}>;
  languages?: Array<{name: string, proficiency: string}>;
}

const resumeData: Resume = {
  name: "Menno Drescher",
  title: "Managed Service Professinal",
  summary: "Our extensive experience in Human Capital Management (HCM), combined with a strong background in Finance, ICT employee HR system adoption, and HR consultancy, brings a compelling value proposition. Our expertise in transformations to Entra, Organizational Performance Management, Analytical Skills, Security and Compliance, and End User Adoption is crucial in today’s rapidly evolving business landscape. Our approach to providing value-added services and products, along with our commitment to a clear end-user experience, perfectly aligns with the needs of modern organizations. By focusing on best practices in Project Management, Human Resources, Transactional Data Processing, and Operating Areas, we are well-equipped to help clients navigate the complexities of project and change management within HCM. Our mission to maintain a client-centric approach and our passion for performance exemplify the qualities of dedicated professionals who prioritize the success and well-being of both clients and their human capital. It’s evident that our role is pivotal in ensuring that clients’ HCM strategies are not only effective but also sustainable and aligned with their overall business objectives.",
  contact: {
    email: "menno.drescher@gmail.com",
    location: "Netherlands",
    linkedin: "https://linkedin.com/in/menno.drescher",
    github: "https://github.com/mdresch",
    website: "https://my-portfolio-menno.vercel.app/",
  },
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2014-09-01",
      endDate: "2018-06-30",
      achievements: [
        "Graduated with honors",
        "Senior project: Developed a real-time collaboration platform"
      ]
    }
  ],
  workExperience: [
    {
      company: "CBA Consult",
      position: "Managed HCM Services Professional",
      startDate: "2014-11-01",
      endDate: null,
      description: "Value in services and products in Human Capital Management Area. Ensure these services are aligned to be successful to current business environment. End User Client Centric, Agile and as a Business Partner, Just in Time with the right information. Professional services covering large amount of world best in class practices within the working areas as for example Project Management (PMI standards), Human Resources (SOPs), Transactional Data Processing and Solutions in Operating Areas.",
      achievements: [
        "Delivered client-centric HCM services aligned with business environment and regulatory compliance",
        "Implemented standard frameworks focusing on clear end-user experience with exceptional gains",
        "Applied PMI standards, HR SOPs, and best practices in transactional data processing",
        "Ensured client success through understanding business requirements and priorities"
      ],
      technologies: ["Microsoft 365", "Dynamics 365", "Power Platform", "SharePoint", "Azure", "Microsoft Entra", "Microsoft Fabric", "Microsoft Power BI", "SAP Successfactors", "Azure Active Directory", "Microsoft Lighthouse"]
    },
    {
      company: "Deutsche Bank",
      position: "Payroll Benefits Operations (SME)",
      startDate: "2008-02-01",
      endDate: null,
      description: "Supporting Deutsche Bank's people and places strategy across 4 pillars: Optimized Workforce, Leaders of the future, Empowered employees, and Safe bank. Contributing to workforce development and employee engagement initiatives.",
      achievements: [
        "Project Payroll Migration Lead",
        "Integration of 1500 employees from other banks due to merger and acquisition",
        "Fully integrate the current Collective Labour Agreement into new payroll system",
        "Migrate the 1500 employees on their current CLA",
        "Migrate all employees into a new Collective Labour Agreement effective on go live date"
      ],
      technologies: ["HR Analytics", "Business Intelligence Tools", "Data Analysis", "Financial Reporting", "Data Modeling"]
    },
    {
      company: "ADP",
      position: "HR Payroll Benefit Consultant",
      startDate: "2008-02-01",
      endDate: null,
      description: "Providing HR payroll and benefits consulting services to clients, ensuring accurate and compliant payroll processing and benefits administration.",
      achievements: [
        "Delivered comprehensive payroll and benefits consulting services",
        "Ensured compliance with statutory requirements and best practices",
        "Maintained high standards in analytical and systems thinking approaches"
      ],
      technologies: ["ADP Systems", "Payroll Processing", "Benefits Administration"]
    },
    {
      company: "EPEX SPOT",
      position: "Payroll Consultant",
      startDate: "2008-01-01",
      endDate: null,
      description: "Providing payroll consulting services, ensuring accurate payroll processing and compliance with regulatory requirements.",
      achievements: [
        "Delivered accurate and timely payroll processing services",
        "Maintained compliance with statutory accounting principles",
        "Applied analytical skills and systems thinking to optimize payroll operations"
      ],
      technologies: ["Payroll Systems", "Financial Reporting", "Data Analysis"]
    },
    {
      company: "Resources Global Professionals (RGP)",
      position: "Senior Payroll Administrator",
      startDate: "2006-07-01",
      endDate: null,
      description: "Working with a global consulting firm that pioneered 'Consulting: From the inside out'. Supporting clients across Finance, Information Management, Risk & Compliance, Supply Chain and Human Capital. Client base includes 86 of the Fortune 100 and over half of the Fortune Global 500.",
      achievements: [
        "Supported Fortune 100 and Fortune Global 500 clients in Human Capital projects",
        "Applied inside-out approach to business for effective resource utilization",
        "Delivered projects and change initiatives across multiple business areas",
        "Contributed to organizational performance management and HR transformation"
      ],
      technologies: ["HR Systems", "Business Analytics", "Data Analysis", "Financial Reporting", "Business Process Mapping", "Information Security Management"]
    },
    {
      company: "Liberty Global",
      position: "Payroll Coordinator",
      startDate: "2003-11-01",
      endDate: null,
      description: "Supporting payroll operations for Liberty Global, a telecommunications company. Maintaining simplicity in processes while ensuring accuracy and compliance.",
      achievements: [
        "Coordinated payroll operations across multiple locations",
        "Maintained accurate financial reporting and data analysis",
        "Applied organizational performance management principles",
        "Ensured compliance with statutory accounting principles"
      ],
      technologies: ["Payroll Systems", "Financial Reporting", "Data Analysis", "Business Process Mapping", "Information Security Management"]
    },
    {
      company: "DENSO Europe",
      position: "Administrative Assistant",
      startDate: "2002-09-01",
      endDate: null,
      description: "European Management at Denso Europe ensuring reconciliation from Article Delivery Processing and Self Billing Invoicing. Making sustainable contribution to Open Transparent Debtors Ledger Balance (Days Outstanding) in newly designed Debtor Management System. Managing full life cycle from product initiation to end of life cycle.",
      achievements: [
        "Designed and implemented Debtor Management System reducing days outstanding",
        "Reduced dispute resolution to near article delivery disputes",
        "Managed full product life cycle from initiation to end of life",
        "Ensured efficient debtors' management system reflecting product life cycle management"
      ],
      technologies: ["Debtor Management Systems", "Financial Reporting", "Data Analysis"]
    },
    {
      company: "Bentley Systems",
      position: "Compensation & Benefits Officer International",
      startDate: "2002-02-01",
      endDate: null,
      description: "Responsible for payroll changes and computations of Headquarters personnel, maintenance of HR database enabling control of payrolls in up to 20 countries throughout EMA. Timely and accurate reporting of employment related budgets, statistics, reports and analyses. Assist in compilation, analysis and gradual harmonization of employee benefit programs.",
      achievements: [
        "Managed payroll operations across up to 20 countries in EMA region",
        "Implemented new HR database enabling e-linked payroll bureau control",
        "Delivered timely and accurate employment-related budgets and statistics",
        "Joined Digital Twin Partner project when funding was acquired through Nasdaq IPO ($100M funding)"
      ],
      technologies: ["HR Database Systems", "Payroll Systems", "Financial Reporting", "Data Analysis", "Business Process Mapping", "Information Security Management"]
    },
    {
      company: "Moore Kingston Smith",
      position: "Client Accounts Administrator",
      startDate: "2000-01-01",
      endDate: null,
      description: "Managing client accounts administration, ensuring accurate financial reporting and compliance with statutory accounting principles.",
      achievements: [
        "Maintained accurate client account records and financial reporting",
        "Ensured compliance with statutory accounting principles",
        "Applied analytical skills to optimize account management processes"
      ],
      technologies: ["Financial Reporting", "Account Management Systems", "Data Analysis"]
    },
    {
      company: "Dixon Wilson",
      position: "Junior Office Manager",
      startDate: "2000-01-01",
      endDate: null,
      description: "Office management and administrative support, ensuring efficient operations and compliance with statutory requirements.",
      achievements: [
        "Supported office operations and administrative functions",
        "Ensured compliance with statutory accounting principles",
        "Maintained efficient office management processes"
      ],
      technologies: ["Office Management Systems", "Administrative Tools"]
    },
    {
      company: "Garanti BBVA International",
      position: "Senior Human Resource Specialist",
      startDate: "2018-10-01",
      endDate: "2018-10-31",
      description: "Short-term assignment as Senior Human Resource Specialist, providing HR expertise and support.",
      achievements: [
        "Delivered HR specialist services during short-term assignment",
        "Applied business analytics and key performance indicators",
        "Contributed to HR analysis and reporting"
      ],
      technologies: ["HR Analytics", "Business Analytics", "Key Performance Indicators"]
    }
  ],
  skills: [
    { name: "React", level: 90, category: "technical" },
    { name: "TypeScript", level: 88, category: "technical" },
    { name: "Next.js", level: 85, category: "technical" },
    { name: "Next.js App Router", level: 85, category: "technical" },
    { name: "Next.js Server Components", level: 85, category: "technical" },
    { name: "Next.js API Routes", level: 85, category: "technical" },
    { name: "Node.js", level: 80, category: "technical" },
    { name: "CSS/Tailwind", level: 88, category: "technical" },
    { name: "Advanced Tailwind CSS", level: 88, category: "technical" },
    { name: "Framer Motion", level: 83, category: "technical" },
    { name: "Radix UI", level: 78, category: "technical" },
    { name: "GraphQL", level: 70, category: "technical" },
    { name: "PostgreSQL", level: 83, category: "technical" },
    { name: "Supabase PostgreSQL", level: 80, category: "technical" },
    { name: "pg (node-postgres)", level: 85, category: "technical" },
    { name: "Redis", level: 80, category: "technical" },
    { name: "ioredis", level: 75, category: "technical" },
    { name: "JSONB Operations", level: 80, category: "technical" },
    { name: "Prisma ORM", level: 85, category: "technical" },
    { name: "Interactive Data Visualization", level: 80, category: "technical" },
    { name: "Chart.js / React-Chartjs-2", level: 75, category: "technical" },
    { name: "Recharts", level: 78, category: "technical" },
    { name: "Gantt Charts", level: 75, category: "technical" },
    { name: "React Simple Maps", level: 65, category: "technical" },
    { name: "Accessibility (WCAG, ARIA)", level: 75, category: "technical" },
    { name: "SEO & Structured Data", level: 75, category: "technical" },
    { name: "React Markdown", level: 78, category: "technical" },
    { name: "Markdown Processing (remark/rehype)", level: 80, category: "technical" },
    { name: "Handlebars Templates", level: 85, category: "technical" },
    { name: "Puppeteer", level: 80, category: "technical" },
    { name: "Adobe PDF Services SDK", level: 75, category: "technical" },
    { name: "docx (Word Export)", level: 75, category: "technical" },
    { name: "Sharp (Image Processing)", level: 75, category: "technical" },
    { name: "Turndown (HTML to Markdown)", level: 70, category: "technical" },
    { name: "Marked", level: 75, category: "technical" },
    { name: "CodeMirror", level: 65, category: "technical" },
    { name: "HTML to PDF", level: 65, category: "technical" },
    { name: "Document Versioning", level: 85, category: "technical" },
    { name: "Document Conversion", level: 80, category: "technical" },
    { name: "Entity Extraction", level: 85, category: "technical" },
    { name: "Baseline Management", level: 85, category: "technical" },
    { name: "Drift Detection", level: 85, category: "technical" },
    { name: "Context Management", level: 85, category: "technical" },
    { name: "Multi-Stage Document Processing", level: 85, category: "technical" },
    { name: "Analytics Integration", level: 75, category: "technical" },
    { name: "Sentry Error Tracking", level: 70, category: "technical" },
    { name: "Hotjar Analytics", level: 60, category: "technical" },
    { name: "State Management (React Context/Hooks)", level: 80, category: "technical" },
    { name: "Performance Optimization", level: 75, category: "technical" },
    { name: "Testing (unit/integration)", level: 75, category: "technical" },
    { name: "Jest", level: 80, category: "technical" },
    { name: "Supertest", level: 75, category: "technical" },
    { name: "Playwright", level: 75, category: "technical" },
    { name: "TypeScript Strict Mode", level: 90, category: "technical" },
    { name: "Professional UX/UI Design", level: 85, category: "technical" },
    { name: "User Feedback & Interactivity", level: 80, category: "technical" },
    { name: "Problem Solving", level: 90, category: "soft" },
    { name: "Communication", level: 85, category: "soft" },
    { name: "Git", level: 80, category: "tool" },
    { name: "Docker", level: 75, category: "tool" },
    { name: "Python", level: 75, category: "technical" },
    { name: "Code Analysis", level: 80, category: "technical" },
    { name: "Algorithmic Thinking", level: 80, category: "technical" },
    { name: "Team Role Classification (Belbin)", level: 70, category: "soft" },
    { name: "Meeting Contribution Analysis", level: 70, category: "soft" },
    { name: "Applied Organizational Psychology", level: 65, category: "soft" },
    { name: "Report Generation/Visualization", level: 75, category: "technical" },
    { name: "Technical Documentation", level: 80, category: "tool" },
    { name: "English", level: 95, category: "language" },
    { name: "Dutch", level: 100, category: "language" },
    { name: "Azure DevOps", level: 40, category: "tool" },
    { name: "Microsoft 365", level: 40, category: "tool" },
    { name: "Microsoft Power Platform", level: 40, category: "tool" },
    { name: "Microsoft Dynamics 365", level: 40, category: "tool" },
    { name: "Microsoft SharePoint", level: 40, category: "tool" },
    { name: "Microsoft Power BI", level: 40, category: "tool" },
    { name: "Microsoft Power Automate", level: 40, category: "tool" },
    { name: "Microsoft Power Apps", level: 40, category: "tool" },
    { name: "Microsoft Teams", level: 40, category: "tool" },
    { name: "Microsoft OneDrive", level: 40, category: "tool" },
    { name: "Microsoft Outlook", level: 40, category: "tool" },
    { name: "Microsoft Word", level: 40, category: "tool" },
    { name: "Microsoft Excel", level: 40, category: "tool" },
    { name: "Microsoft PowerPoint", level: 40, category: "tool" },
    { name: "Microsoft Visio", level: 40, category: "tool" },
    { name: "Microsoft Project", level: 40, category: "tool" },
    { name: "Microsoft Access", level: 40, category: "tool" },
    { name: "Microsoft Publisher", level: 40, category: "tool" },
    { name: "Microsoft OneNote", level: 40, category: "tool" },
    { name: "Microsoft SharePoint Designer", level: 40, category: "tool" },
    { name: "Microsoft InfoPath", level: 40, category: "tool" },
    { name: "Jira", level: 70, category: "tool" },
    { name: "Confluence", level: 70, category: "tool" },
    { name: "Confluence API", level: 80, category: "tool" },
    { name: "Jira API v3", level: 80, category: "tool" },
    { name: "SharePoint / Microsoft Graph API", level: 75, category: "tool" },
    { name: "Slack", level: 60, category: "tool" },
    { name: "Trello", level: 60, category: "tool" },
    { name: "Asana", level: 60, category: "tool" },
    { name: "Notion", level: 60, category: "tool" },
    { name: "Adobe XD", level: 70, category: "tool" },
    { name: "Sketch", level: 70, category: "tool" },
    { name: "Bitbucket", level: 60, category: "tool" },
    { name: "GitHub", level: 60, category: "tool" },
    { name: "GitLab", level: 60, category: "tool" },
    { name: "Adobe Illustrator", level: 70, category: "tool" },
    { name: "Adobe Photoshop", level: 70, category: "tool" },
    { name: "Adobe After Effects", level: 70, category: "tool" },
    { name: "Adobe Premiere Pro", level: 70, category: "tool" },
    { name: "Adobe Indesign", level: 70, category: "tool" },
    { name: "Figma", level: 70, category: "tool" },
    { name: "InVision", level: 70, category: "tool" },
    { name: "Axure", level: 70, category: "tool" },
    { name: "Balsamiq", level: 70, category: "tool" },
    { name: "Lucidchart", level: 70, category: "tool" },
    { name: "Miro", level: 70, category: "tool" },
    { name: "Mural", level: 70, category: "tool" },
    { name: "Canva", level: 70, category: "tool" },
    { name: "Google Analytics", level: 70, category: "tool" },
    { name: "Google Tag Manager", level: 70, category: "tool" },
    { name: "Google Search Console", level: 70, category: "tool" },
    { name: "Google Data Studio", level: 70, category: "tool" },
    { name: "Google Optimize", level: 70, category: "tool" },
    { name: "Google Ads", level: 70, category: "tool" },
    { name: "Facebook Ads", level: 70, category: "tool" },
    { name: "LinkedIn Ads", level: 70, category: "tool" },
    { name: "Twitter Ads", level: 70, category: "tool" },
    { name: "Instagram Ads", level: 70, category: "tool" },
    { name: "Pinterest Ads", level: 70, category: "tool" },
    { name: "Snapchat Ads", level: 70, category: "tool" },
    { name: "TikTok Ads", level: 70, category: "tool" },
    { name: "YouTube Ads", level: 70, category: "tool" },
    { name: "Reddit Ads", level: 70, category: "tool" },
    { name: "Quora Ads", level: 70, category: "tool" },
    { name: "Spotify Ads", level: 70, category: "tool" },
    { name: "Twitch Ads", level: 70, category: "tool" },
    { name: "Discord Ads", level: 70, category: "tool" },
    { name: "WhatsApp Ads", level: 70, category: "tool" },
    { name: "Telegram Ads", level: 70, category: "tool" },
    { name: "WeChat Ads", level: 70, category: "tool" },
    { name: "Line Ads", level: 70, category: "tool" },
    { name: "KakaoTalk Ads", level: 70, category: "tool" },
    { name: "Viber Ads", level: 70, category: "tool" },
    { name: "Signal Ads", level: 70, category: "tool" },
    { name: "Slack Ads", level: 70, category: "tool" },
    { name: "Discord Ads", level: 70, category: "tool" },
    { name: "Reddit Ads", level: 70, category: "tool" },
    { name: "Quora Ads", level: 70, category: "tool" },
    { name: "Blogspot", level: 70, category: "tool" },
    { name: "WordPress", level: 70, category: "tool" },
    { name: "Wix", level: 70, category: "tool" },
    { name: "Squarespace", level: 70, category: "tool" },
    { name: "Weebly", level: 70, category: "tool" },
    { name: "Shopify", level: 70, category: "tool" },
    { name: "Magento", level: 70, category: "tool" },
    { name: "WooCommerce", level: 70, category: "tool" },
    { name: "BigCommerce", level: 70, category: "tool" },
    { name: "PrestaShop", level: 70, category: "tool" },
    { name: "OpenCart", level: 70, category: "tool" },
    { name: "Zen Cart", level: 70, category: "tool" },
    { name: "osCommerce", level: 70, category: "tool" },
    { name: "Joomla", level: 70, category: "tool" },
    { name: "Drupal", level: 70, category: "tool" },
    { name: "Magento", level: 70, category: "tool" },
    { name: "Shopware", level: 70, category: "tool" },
    { name: "OpenCart", level: 70, category: "tool" },
    { name: "PrestaShop", level: 70, category: "tool" },
    { name: "WooCommerce", level: 70, category: "tool" },
    { name: "BigCommerce", level: 70, category: "tool" },
    { name: "Zen Cart", level: 70, category: "tool" },
    { name: "osCommerce", level: 70, category: "tool" },
    { name: "Hashnode", level: 70, category: "tool" },
    { name: "Medium", level: 70, category: "tool" },
    { name: "Projeect Management", level: 70, category: "tool" },
    { name: "Agile Methodologies", level: 70, category: "tool" },
    { name: "Scrum", level: 70, category: "tool" },
    { name: "Kanban", level: 70, category: "tool" },
    { name: "Lean", level: 70, category: "tool" },
    { name: "Waterfall", level: 70, category: "tool" },
    { name: "Gitbook", level: 70, category: "tool" },
    { name: "Confluence", level: 70, category: "tool" },
    { name: "Firebase", level: 80, category: "tool" },
    { name: "Firebase Authentication", level: 80, category: "tool" },
    { name: "Firebase Firestore", level: 75, category: "tool" },
    { name: "Firebase App Check", level: 65, category: "tool" },
    { name: "Firebase Remote Config", level: 65, category: "tool" },
    { name: "Google Cloud Platform", level: 75, category: "tool" },
    { name: "Vertex AI", level: 75, category: "tool" },
    { name: "Genkit", level: 70, category: "tool" },
    { name: "Gemini AI Models", level: 75, category: "tool" },
    { name: "RAG (Retrieval Augmented Generation)", level: 78, category: "technical" },
    { name: "Vercel AI SDK", level: 80, category: "technical" },
    { name: "OpenAI API", level: 85, category: "technical" },
    { name: "Google Generative AI (Gemini)", level: 80, category: "technical" },
    { name: "Anthropic Claude", level: 75, category: "technical" },
    { name: "Mistral AI", level: 75, category: "technical" },
    { name: "Azure OpenAI", level: 75, category: "technical" },
    { name: "DeepSeek AI", level: 70, category: "technical" },
    { name: "X.AI (Grok)", level: 70, category: "technical" },
    { name: "AI Provider Fallback", level: 85, category: "technical" },
    { name: "AI Caching", level: 80, category: "technical" },
    { name: "AI Analytics & Tracking", level: 80, category: "technical" },
    { name: "Vercel", level: 80, category: "tool" },
    { name: "Vercel Analytics", level: 73, category: "tool" },
    { name: "Vercel Speed Insights", level: 70, category: "tool" },
    { name: "GitHub API", level: 75, category: "tool" },
    { name: "Octokit", level: 75, category: "tool" },
    { name: "Cloud-Native Architecture", level: 75, category: "technical" },
    { name: "Environment Variable Management", level: 80, category: "technical" },
    { name: "AI Prompt Engineering", level: 80, category: "technical" },
    { name: "Real-Time Data Handling", level: 75, category: "technical" },
    { name: "Socket.io", level: 85, category: "technical" },
    { name: "WebSocket Architecture", level: 85, category: "technical" },
    { name: "Supabase Realtime", level: 75, category: "technical" },
    { name: "Real-Time Collaboration", level: 80, category: "technical" },
    { name: "Authentication & Security", level: 83, category: "technical" },
    { name: "JWT (jsonwebtoken)", level: 85, category: "technical" },
    { name: "bcryptjs", level: 80, category: "technical" },
    { name: "Role-Based Access Control (RBAC)", level: 85, category: "technical" },
    { name: "Helmet.js", level: 75, category: "technical" },
    { name: "CORS", level: 75, category: "technical" },
    { name: "Input Validation", level: 85, category: "technical" },
    { name: "Audit Logging", level: 80, category: "technical" },
    { name: "Scalable Web App Deployment", level: 80, category: "technical" },
    { name: "Database Migrations", level: 83, category: "technical" },
    { name: "Bull (Redis Queue)", level: 85, category: "technical" },
    { name: "Queue Orchestration", level: 85, category: "technical" },
    { name: "Background Job Processing", level: 85, category: "technical" },
    { name: "Data Seeding", level: 75, category: "technical" },
    { name: "Static Site Generation (SSG)", level: 85, category: "technical" },
    { name: "Server-Side Rendering (SSR)", level: 85, category: "technical" },
    { name: "Dynamic Routes", level: 85, category: "technical" },
    { name: "Metadata API", level: 80, category: "technical" },
    { name: "Express.js", level: 85, category: "technical" },
    { name: "React Hook Form", level: 85, category: "technical" },
    { name: "Zod Validation", level: 80, category: "technical" },
    { name: "Joi Validation", level: 80, category: "technical" },
    { name: "Microservices Architecture", level: 80, category: "technical" },
    { name: "Modular Architecture", level: 85, category: "technical" },
    { name: "Event-Driven Architecture", level: 85, category: "technical" },
    { name: "Caching Strategies", level: 85, category: "technical" },
    { name: "Error Handling", level: 85, category: "technical" },
    { name: "API Design", level: 85, category: "technical" },
    { name: "Markdown as Canonical Format", level: 85, category: "technical" },
    { name: "Template Engine", level: 85, category: "technical" },
    { name: "Document Lifecycle Management", level: 85, category: "technical" },
    { name: "OAuth2 Integration", level: 80, category: "technical" },
    { name: "API Gateway Pattern", level: 75, category: "technical" },
    { name: "Webhook Handling", level: 75, category: "technical" },
    { name: "Semantic Versioning", level: 85, category: "technical" },
    { name: "Conflict Detection", level: 85, category: "technical" },
    { name: "Search Functionality", level: 80, category: "technical" },
    { name: "Analytics & Reporting", level: 85, category: "technical" },
    { name: "Winston Logging", level: 85, category: "technical" },
    { name: "OpenTelemetry", level: 75, category: "technical" },
    { name: "System Monitoring", level: 80, category: "technical" },
    { name: "Multer", level: 75, category: "technical" },
    { name: "UUID Generation", level: 80, category: "technical" },
    { name: "Date-fns", level: 75, category: "technical" },
    { name: "Node-cron", level: 75, category: "technical" },
    { name: "CSV/Excel Processing", level: 70, category: "technical" },
    { name: "CI/CD Patterns", level: 75, category: "technical" },
  ],
  certifications: [
    {
      name: "PMI Membership",
      issuer: "Project Management Institute (PMI)",
      date: new Date().toISOString().split('T')[0] // Current date - update with actual membership date if known
    }
  ]
};

export default resumeData;