import { NextRequest, NextResponse } from 'next/server';

// Example: This could be replaced with a database or dynamic source
const maturityData = [
  { title: "Accessibility", value: "80%", change: "+10% YoY" },
  { title: "Performance", value: "A (Lighthouse)", change: "+5 pts" },
  { title: "Automated Testing", value: "60% Coverage", change: "+20%" },
  { title: "CI/CD Automation", value: "Enabled", change: "Stable" },
  { title: "Branding & Storytelling", value: "Evolving", change: "+1 new case" },
  { title: "Azure Best Practices", value: "Adopted", change: "+2 WAF pillars" },
];

export async function GET(request: NextRequest) {
  // In a real app, fetch from DB or external API here
  return NextResponse.json(maturityData);
}
