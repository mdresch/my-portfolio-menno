// filepath: c:\Users\menno\CascadeProjects\personal-website\src\app\contact\metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Menno Drescher',
  description: 'Get in touch with Menno Drescher for project inquiries, collaboration opportunities, or just to say hello.',
  keywords: ['contact', 'hire', 'project inquiry', 'Menno Drescher', 'collaboration'],
  openGraph: {
    title: 'Contact | Menno Drescher',
    description: 'Get in touch with Menno Drescher for project inquiries, collaboration opportunities, or just to say hello.',
    url: 'hhttps://my-portfolio-menno.vercel.app/contact',
    type: 'website',
    images: [
      {
        url: 'https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Menno Drescher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Menno Drescher',
    description: 'Get in touch with Menno Drescher for project inquiries, collaboration opportunities, or just to say hello.',
    images: ['https://my-portfolio-menno.vercel.app/images/showcase-dataviz.jpg'],
  },
  alternates: {
    canonical: 'https://my-portfolio-menno.vercel.app/contact',
  },
};