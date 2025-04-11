import React from 'react';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="prose lg:prose-xl">
        <p className="mb-4">
          Hello! Im a passionate professional dedicated to creating meaningful solutions through technology.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">My Journey</h2>
        <p className="mb-4">
          [Your journey and experience details will go here]
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Skills</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Web Development</li>
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
          <li>Project Management</li>
        </ul>
      </div>
    </main>
  );
}
