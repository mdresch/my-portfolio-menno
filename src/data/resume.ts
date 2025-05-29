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
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      startDate: "2021-03-01",
      endDate: null,
      description: "Lead frontend development for client projects focusing on performance and accessibility.",
      achievements: [
        "Reduced load time by 40% through code optimization and modern loading techniques",
        "Implemented comprehensive testing strategy increasing code coverage to 85%",
        "Mentored junior developers and led internal training sessions"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      company: "Digital Innovations",
      position: "Web Developer",
      startDate: "2018-07-01",
      endDate: "2021-02-28",
      description: "Developed and maintained responsive web applications for various clients.",
      achievements: [
        "Built e-commerce platform serving over 10,000 daily users",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["JavaScript", "Vue.js", "Node.js", "Express", "MongoDB"]
    }
  ],
  skills: [
    { name: "React", level: 90, category: "technical" },
    { name: "TypeScript", level: 85, category: "technical" },
    { name: "Next.js", level: 80, category: "technical" },
    { name: "Next.js App Router", level: 80, category: "technical" },
    { name: "Node.js", level: 75, category: "technical" },
    { name: "CSS/Tailwind", level: 85, category: "technical" },
    { name: "Advanced Tailwind CSS", level: 80, category: "technical" },
    { name: "GraphQL", level: 70, category: "technical" },
    { name: "Interactive Data Visualization", level: 80, category: "technical" },
    { name: "Accessibility (WCAG, ARIA)", level: 75, category: "technical" },
    { name: "SEO & Structured Data", level: 75, category: "technical" },
    { name: "Analytics Integration", level: 70, category: "technical" },
    { name: "State Management (React Context/Hooks)", level: 80, category: "technical" },
    { name: "Performance Optimization", level: 75, category: "technical" },
    { name: "Testing (unit/integration)", level: 70, category: "technical" },
    { name: "Professional UX/UI Design", level: 85, category: "technical" },
    { name: "User Feedback & Interactivity", level: 80, category: "technical" },
    { name: "Problem Solving", level: 90, category: "soft" },
    { name: "Communication", level: 85, category: "soft" },
    { name: "Git", level: 80, category: "tool" },
    { name: "Docker", level: 65, category: "tool" },
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
    { name: "Jira", level: 60, category: "tool" },
    { name: "Confluence", level: 60, category: "tool" },
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
    { name: "Vertex AI", level: 70, category: "tool" },
    { name: "Vercel", level: 75, category: "tool" },
    { name: "Cloud-Native Architecture", level: 70, category: "technical" },
    { name: "Environment Variable Management", level: 65, category: "technical" },
    { name: "AI Prompt Engineering", level: 70, category: "technical" },
    { name: "Real-Time Data Handling", level: 70, category: "technical" },
    { name: "Authentication & Security", level: 75, category: "technical" },
    { name: "Scalable Web App Deployment", level: 70, category: "technical" },
  ]
};

export default resumeData;