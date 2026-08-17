interface ShowMoreButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
  moreText?: string;
  lessText?: string;
}

export function ShowMoreButton({
  isExpanded,
  onClick,
  className = '',
  moreText = 'Show More',
  lessText = 'Show Less',
}: ShowMoreButtonProps) {
  return (
    <div className={`mt-12 flex justify-center ${className}`}>
      <button
        onClick={onClick}
        className="px-6 py-3 rounded-xl font-mono text-sm border border-(--cyan-primary) text-(--cyan-primary) bg-(--cyan-primary)/5 hover:bg-(--cyan-primary)/20 hover:shadow-[0_0_15px_var(--cyan-primary)] transition-all duration-300 flex items-center gap-2"
      >
        {isExpanded ? lessText : moreText}
        <svg
          className={`w-4 h-4 transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}