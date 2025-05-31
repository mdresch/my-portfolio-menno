import CompanyClient from './CompanyClient';

// Define proper types for App Router
interface CompanyPageProps {
  params: Promise<{ ticker: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { ticker } = await params;
  return <CompanyClient ticker={ticker} />;
}
