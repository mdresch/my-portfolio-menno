import React from 'react';

type KeyChallengesProps = {
  challenges: Array<{
    category: string;
    description: string;
  }>;
};

export default function KeyChallenges({ challenges }: KeyChallengesProps) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg mt-6">
      <h4 className="font-medium mb-3 text-gray-800">Key Challenges for Foreign Businesses</h4>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {challenges.map((challenge, index) => (
          <li key={index}>
            <span className="font-medium">{challenge.category}:</span> {challenge.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
