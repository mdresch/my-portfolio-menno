import React from "react";

interface ValidationMetric {
  title: string;
  score: number;
  description: string;
  icon: string;
  color: string;
}

const validationMetrics: ValidationMetric[] = [
  {
    title: "Relevant Experience",
    score: 96,
    description: "25+ years spanning HCM, Finance, and Technology with enterprise-grade projects",
    icon: "💼",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Skills & Competencies",
    score: 96,
    description: "150+ technologies: Full-stack, AI/ML, Enterprise integrations, Modern frameworks",
    icon: "⚡",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Education & Training",
    score: 88,
    description: "Continuous learning and professional certifications",
    icon: "🎓",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Achievements & Results",
    score: 93,
    description: "Enterprise AI systems, entity extraction, multi-provider orchestration, document processing",
    icon: "🏆",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Career Progression",
    score: 94,
    description: "Consistent growth from Developer to HCM Specialist with advanced technical expertise",
    icon: "📈",
    color: "from-teal-500 to-green-600"
  },
  {
    title: "Job Alignment",
    score: 93,
    description: "Excellent alignment with modern tech stack and enterprise requirements",
    icon: "🎯",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Formatting & Presentation",
    score: 94,
    description: "Professional, clear, and ATS-optimized presentation",
    icon: "✨",
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Additional Contributions",
    score: 91,
    description: "Portfolio projects, enterprise applications, continuous learning and innovation",
    icon: "🌟",
    color: "from-yellow-500 to-orange-600"
  }
];

const overallScore = Math.round(validationMetrics.reduce((sum, metric) => sum + metric.score, 0) / validationMetrics.length);

export default function ResumeValidationScores() {
  return (
    <div className="space-y-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Resume Validation Scores
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Objective evaluation across key professional metrics
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {validationMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                {metric.title}
              </h4>
              <span className="text-lg">{metric.icon}</span>
            </div>
            
            <div className="flex items-center mb-2">
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                <div 
                  className={`bg-gradient-to-r ${metric.color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${metric.score}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[3rem]">
                {metric.score}%
              </span>
            </div>
            
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Overall Score */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="text-center">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Overall Resume Score
          </h4>
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">{overallScore}%</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Exceptional candidate with enterprise-grade technical expertise, AI/ML integration, and proven track record
          </p>
        </div>
      </div>

      {/* Scoring Methodology */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
          Scoring Methodology
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
          Scores are based on industry-standard resume evaluation criteria including relevant experience, 
          technical competencies, career progression, and alignment with modern hiring practices. 
          This objective assessment helps employers quickly evaluate candidate qualifications.
        </p>
      </div>
    </div>
  );
}
