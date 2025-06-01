import React from 'react';
import ComplexityFactors from './ComplexityFactors';
import KeyChallenges from './KeyChallenges';

type CountrySectionProps = {
  id: string;
  name: string;
  rank: number;
  previousRank?: number;
  description: React.ReactNode;
  factors: Array<{
    label: string;
    level: string;
    percentage: number;
    color?: string;
  }>;
  challenges: Array<{
    category: string;
    description: string;
  }>;
  quote?: {
    text: string;
    author: string;
  }
};

export default function CountrySection({ 
  id, 
  name, 
  rank, 
  previousRank, 
  description, 
  factors, 
  challenges,
  quote 
}: CountrySectionProps) {
  const rankChange = previousRank ? 
    previousRank > rank ? `↑ From ${previousRank}${getOrdinal(previousRank)} in 2023` :
    previousRank < rank ? `↓ From ${previousRank}${getOrdinal(previousRank)} in 2023` :
    "No change from 2023" : null;

  return (
    <section id={id} className="mb-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-600 p-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{rank}. {name}</h3>
          {rankChange && (
            <span className="text-black bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
              {rankChange}
            </span>
          )}
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-gray-700">
              {description}
            </div>
            
            <div>
              <ComplexityFactors factors={factors} />
            </div>
          </div>
          
          {quote && (
            <div className="border-l-4 border-amber-500 pl-4 py-2 mb-4">
              <blockquote className="italic text-gray-700 mb-2">
                "{quote.text}"
              </blockquote>
              <p className="text-sm text-gray-600">— {quote.author}</p>
            </div>
          )}
          
          <KeyChallenges challenges={challenges} />
        </div>
      </div>
    </section>
  );
}

function getOrdinal(n: number): string {
  if (n > 3 && n < 21) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}
