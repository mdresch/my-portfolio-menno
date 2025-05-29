import { NextRequest, NextResponse } from 'next/server';

// Example: This could be replaced with a database or dynamic source
const maturityData = [
  { title: "Design & Aesthetics", value: "4.5/5", change: "Modern, clean, consistent" },
  { title: "Content Quality", value: "4.5/5 (Depth: 3/5)", change: "Clear, relevant; expand project details" },
  { title: "User Experience (UX)", value: "5/5", change: "Excellent navigation, mobile, accessibility" },
  { title: "Technical Implementation", value: "5/5 (SEO: 4/5)", change: "Modern stack, secure, fast; improve title tag" },
  { title: "Interactivity & Engagement", value: "4/5", change: "Smooth, contact form, social links" },
  { title: "Innovation & Creativity", value: "4/5", change: "Polished, modern, well-executed" },
];

export async function GET(request: NextRequest) {
  // In a real app, fetch from DB or external API here
  return NextResponse.json(maturityData);
}
