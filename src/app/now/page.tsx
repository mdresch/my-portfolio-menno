import React from "react";
import type { Metadata } from "next";
import { MaturityDashboard } from "../../components/dashboards/MaturityDashboard";
import { MaturityAssessmentDashboard } from "../../components/dashboards/MaturityAssessmentDashboard";
import { FloatingActionButton } from "../../components/modern/FloatingActionButton";
import { ScrollProgress } from "../../components/modern/ScrollProgress";
import { SectionDivider } from "../../components/modern/SectionDivider";
import { ModernCard, GlassCard } from "../../components/modern/ModernCard";
import { 
  ClientMotionWrapper, 
  ClientMotionItem, 
  ClientAnimatedBackground
} from "../../components/modern/ClientMotionWrapper";
import { HeroSection } from "../../components/modern/HeroSection";
import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  LightBulbIcon, 
  AcademicCapIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ClockIcon,
  FireIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "What I'm Doing Now | Menno Drescher",
  description: "Current projects, learning initiatives, and focus areas. See what Menno Drescher is working on right now including portfolio maturity assessments and professional development.",
  keywords: ["current projects", "now page", "professional development", "portfolio maturity", "learning", "focus areas"],
  openGraph: {
    title: "What I'm Doing Now | Menno Drescher",
    description: "Current projects, learning initiatives, and focus areas. See what Menno Drescher is working on right now.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "What I'm Doing Now | Menno Drescher",
    description: "Current projects, learning initiatives, and focus areas. See what Menno Drescher is working on right now.",
  },
};

export default function NowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Modern UI Components */}
      <ScrollProgress />
      <FloatingActionButton />
      
      {/* Animated background elements */}
      <ClientAnimatedBackground />

      <main className="relative max-w-4xl mx-auto py-16 px-4">
        <ClientMotionWrapper className="space-y-8">
          {/* Hero Section */}
          <ClientMotionItem>
            <HeroSection />
          </ClientMotionItem>

          {/* Maturity Dashboard Section */}
          <ClientMotionItem>
            <MaturityDashboard />
          </ClientMotionItem>

          <SectionDivider variant="wave" />

          {/* Portfolio Maturity Assessment Section */}
          <ClientMotionItem>
            <MaturityAssessmentDashboard />
          </ClientMotionItem>

          <SectionDivider variant="dots" />

          {/* Portfolio Assessment Results */}
          <ModernCard 
            variant="gradient"
            hoverEffect="glow"
            className="p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <SparklesIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Portfolio Maturity Assessment
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">May 2025</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl p-6 mb-6">
              <p className="text-gray-700 dark:text-gray-100 leading-relaxed">
                <strong className="text-green-700 dark:text-green-200">Overall Impression:</strong> Clean, modern, and professional portfolio. Clear structure, fast load times, and effective presentation as a Full Stack Developer & AI Enthusiast. Dark theme is well-executed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/70 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-gray-100">Design & Aesthetics</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">4.5/5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/70 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-gray-100">Content Quality</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">4.5/5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/70 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-gray-100">User Experience</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">5/5</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/70 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-gray-100">Technical Implementation</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">4.5/5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/70 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-gray-100">Professional Presentation</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">5/5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/70 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-gray-100">SEO & Performance</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">4/5</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-6">
              <p className="text-green-700 dark:text-green-200 font-medium">
                <strong>Conclusion:</strong> Your portfolio is excellent—technically sound, visually appealing, and clearly communicates your skills. Adding depth to project showcases will elevate it further. Well done!
              </p>
            </div>
          </ModernCard>

          <SectionDivider variant="gradient" />

          {/* Current Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Learning Section */}
            <GlassCard 
              hoverEffect="lift"
              borderColor="border-indigo-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <AcademicCapIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Learning</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Deepening expertise in Azure cloud architecture and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Exploring advanced data visualization with D3.js and React</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Experimenting with AI/ML integrations in web apps</span>
                </li>
              </ul>
            </GlassCard>

            {/* Current Projects Section */}
            <GlassCard 
              hoverEffect="tilt"
              borderColor="border-green-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <CodeBracketIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Current Projects</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Enhancing my portfolio with interactive dashboards and a maturity self-assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Writing blog posts on web security and modern authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Contributing to open-source HR analytics tools</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          <SectionDivider variant="zigzag" />

          {/* Focus Areas and Recent Activities */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Focus Areas Section */}
            <GlassCard 
              hoverEffect="scale"
              borderColor="border-orange-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <LightBulbIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Focus Areas</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Accessibility and performance optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Automated testing and CI/CD improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Personal branding and storytelling</span>
                </li>
              </ul>
            </GlassCard>

            {/* Recent Activities Section */}
            <GlassCard 
              hoverEffect="glow"
              borderColor="border-blue-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <BookOpenIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recently Read / Watched / Attended</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Azure Well-Architected Framework documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">React Advanced Patterns (video series)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Next.js Conf 2024 highlights</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Footer */}
          <ClientMotionItem className="text-center pt-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Inspired by{" "}
              <a 
                href="https://nownownow.com/about" 
                className="text-blue-600 dark:text-blue-400 hover:underline transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                nownownow.com
              </a>
              . Last updated: May 2025.
            </p>
          </ClientMotionItem>
        </ClientMotionWrapper>
      </main>
    </div>
  );
}
