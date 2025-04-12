import React from 'react';
import ResumeContainer from '@/components/resume/ResumeContainer';

export const metadata = {
  title: 'Interactive Resume | Menno Drescher',
  description: 'View my interactive resume with expandable sections and skill visualizations',
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Interactive Resume</h1>
      <ResumeContainer />
    </div>
  );
}