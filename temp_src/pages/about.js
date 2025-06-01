import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
