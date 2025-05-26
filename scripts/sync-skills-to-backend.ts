// This script will synchronize the backend Skills table with the canonical skills list from resume.ts
// Run with: npx ts-node scripts/sync-skills-to-backend.ts

// At the top of your script, replace the imports with:
const resumeData = require('../src/data/resume').default;

let fetchFn: typeof fetch;
// Use node-fetch only if fetch is not available (Node 18+ has global fetch)
try {
  fetchFn = fetch;
} catch {
  fetchFn = require('node-fetch');
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5154/api';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

async function main() {
  const skills = resumeData.skills;
  if (!skills || !Array.isArray(skills)) {
    console.error('No skills found in resume data.');
    process.exit(1);
  }

  // Fetch all current backend skills
  const currentSkills = await fetchFn(`${API_BASE_URL}/skills`, {
    headers: { 'Authorization': `Bearer ${ADMIN_TOKEN}` }
  }).then(r => r.json()) as any[];

  // Delete all current backend skills
  for (const skill of currentSkills) {
    await fetchFn(`${API_BASE_URL}/skills/${skill.id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${ADMIN_TOKEN}` }
    });
  }

  // Add all skills from resume
  for (const skill of skills) {
    // Map resume skill to backend DTO
    const backendSkill = {
      name: skill.name,
      category: skill.category,
      proficiencyLevel: Math.round((skill.level / 100) * 5) || 1, // Map 1-100 to 1-5
      iconUrl: null
    };
    await fetchFn(`${API_BASE_URL}/skills`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ADMIN_TOKEN}`
      },
      body: JSON.stringify(backendSkill)
    });
  }

  console.log('Skills synchronized successfully.');
}

main().catch(e => { console.error(e); process.exit(1); });
