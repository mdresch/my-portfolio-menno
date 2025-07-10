import React from "react";
import type { Metadata } from "next";
import {
  ClientMotionWrapper,
  ClientMotionItem
} from "../../components/modern/ClientMotionWrapper";
import { MaturityDashboard } from "../../components/dashboards/MaturityDashboard";
import { MaturityAssessmentDashboard } from "../../components/dashboards/MaturityAssessmentDashboard";
import { SectionDivider } from "../../components/modern/SectionDivider";
import { ScrollProgress } from "../../components/modern/ScrollProgress";
import { FloatingActionButton } from "../../components/modern/FloatingActionButton";
import { ModernTooltip } from "../../components/modern/ModernTooltip";
import { ModernCard, GlassCard } from "../../components/modern/ModernCard";

export const metadata: Metadata = {
  title: "What I'm Doing Now | Menno Drescher",
  description: "Current projects, learning initiatives, and focus areas.",
};

export default function NowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <ScrollProgress />
      <FloatingActionButton />

      <main className="relative max-w-4xl mx-auto py-16 px-4">
        <ClientMotionWrapper className="space-y-8">
          <ClientMotionItem className="text-center mb-16">
            <ModernTooltip content="This page is updated regularly to reflect current activities">
              <div className="inline-block cursor-help">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                  What I'm Doing Now
                </h1>
              </div>
            </ModernTooltip>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A real-time snapshot of my current projects, learning journey, and focus areas.
            </p>
          </ClientMotionItem>

          <ClientMotionItem>
            <MaturityDashboard />
          </ClientMotionItem>

          <SectionDivider variant="wave" />

          <ClientMotionItem>
            <MaturityAssessmentDashboard />
          </ClientMotionItem>

          <ClientMotionItem>
            <GlassCard hoverEffect="lift">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Current Focus Areas
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">Enhancing my portfolio with modern design and animations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">Learning advanced Azure cloud architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">Exploring AI/ML integrations in web applications</span>
              </li>
            </ul>
            </GlassCard>
          </ClientMotionItem>
        </ClientMotionWrapper>
      </main>
    </div>
  );
}
