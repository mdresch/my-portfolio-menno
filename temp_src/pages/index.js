import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>My Portfolio</h1>
      <p>This is a minimal version of the portfolio site.</p>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}
