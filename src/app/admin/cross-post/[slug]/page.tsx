import CrossPostClient from "./CrossPostClient";

// Loose typing for Next.js PageProps compatibility
export default function CrossPostPage({ params }: any) {
  return <CrossPostClient slug={params.slug} />;
}