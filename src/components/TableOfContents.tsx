'use client';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium mb-3">Table of Contents</h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li 
              key={heading.id}
              className="hover:text-blue-600"
              style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
            >
              <a 
                href={`#${heading.id}`}
                className="transition hover:text-blue-600 no-underline" 
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
