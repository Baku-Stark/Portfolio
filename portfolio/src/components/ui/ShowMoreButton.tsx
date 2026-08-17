import { useLanguage } from "../../context/LanguageContext";

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
  moreText,
  lessText,
}: ShowMoreButtonProps) {
  const { t } = useLanguage();

  // If no custom prop is passed, the translated value is used.
  const defaultMoreText = t('Show More', 'Ver Mais');
  const defaultLessText = t('Show Less', 'Ver Menos');

  const resolvedMoreText = moreText ?? defaultMoreText;
  const resolvedLessText = lessText ?? defaultLessText;

  return (
    <div className={`mt-12 flex justify-center ${className}`}>
      <button
        onClick={onClick}
        className="px-6 py-3 rounded-xl font-mono text-sm border border-(--cyan-primary) text-(--cyan-primary) bg-(--cyan-primary)/5 hover:bg-(--cyan-primary)/20 hover:shadow-[0_0_15px_var(--cyan-primary)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        {isExpanded ? resolvedLessText : resolvedMoreText}
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