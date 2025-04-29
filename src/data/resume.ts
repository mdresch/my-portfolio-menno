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
  category: 'technical' | 'soft' | 'language' | 'tool';
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
    { name: "Node.js", level: 75, category: "technical" },
    { name: "CSS/Tailwind", level: 85, category: "technical" },
    { name: "GraphQL", level: 70, category: "technical" },
    { name: "Problem Solving", level: 90, category: "soft" },
    { name: "Communication", level: 85, category: "soft" },
    { name: "Git", level: 80, category: "tool" },
    { name: "Docker", level: 65, category: "tool" },
    { name: "English", level: 95, category: "language" },
    { name: "Dutch", level: 100, category: "language" }
  ]
};

export default resumeData;