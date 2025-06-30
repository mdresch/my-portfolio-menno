import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Friends Contact - Portfolio Menno',
  description: 'Share your cosmic details with Menno! An Elio-inspired contact form for friends.',
  keywords: ['friends', 'contact', 'elio', 'space', 'cosmic', 'portfolio', 'menno'],
  openGraph: {
    title: 'Friends Contact - Portfolio Menno',
    description: 'Share your cosmic details with Menno! An Elio-inspired contact form for friends.',
    type: 'website',
  },
};

export default function FriendsContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
