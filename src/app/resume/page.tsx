import React from "react";
import { Metadata } from "next";
import ResumeContainer from "../../components/resume/ResumeContainer";

export const metadata: Metadata = {
  title: "Interactive Resume | Menno Drescher",
  description: "View my professional experience, skills, and qualifications in an interactive resume format.",
  keywords: ["resume", "CV", "professional experience", "skills", "Menno Drescher", "HCM specialist", "HR consultant"],
  openGraph: {
    title: "Interactive Resume | Menno Drescher",
    description: "View my professional experience, skills, and qualifications in an interactive resume format.",
    type: "profile",
    images: [
      {
        url: "https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Menno Drescher - Interactive Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Resume | Menno Drescher",
    description: "View my professional experience, skills, and qualifications in an interactive resume format.",
    images: ["https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg"], // Create this image
  },
  alternates: {
    canonical: "https://my-portfolio-menno.vercel.app/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Interactive Resume</h1>
      <ResumeContainer />
    </div>
  );
}