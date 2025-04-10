'use client';

interface JumpToCommentsProps {
  count?: number;
}

export default function JumpToComments({ count }: JumpToCommentsProps) {
  const handleClick = () => {
    const comments = document.getElementById('comments');
    if (comments) {
      comments.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      {count !== undefined ? (
        <>Comments ({count})</>
      ) : (
        <>View Comments</>
      )}
    </button>
  );
}
