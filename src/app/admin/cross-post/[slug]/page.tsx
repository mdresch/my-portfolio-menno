"use client";

import CrossPostClient from "./CrossPostClient";

export default function CrossPostPage({ params }: { params: { slug: string } }) {
  return <CrossPostClient slug={params.slug} />;
}