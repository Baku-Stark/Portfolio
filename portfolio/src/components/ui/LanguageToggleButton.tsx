import { useLanguage } from '../../context/LanguageContext';

export function LanguageToggleButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-(--bg-surface)/80 backdrop-blur-md border border-(--cyan-primary)/40 text-white font-mono text-xs shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:border-(--cyan-primary) hover:shadow-[0_0_20px_var(--cyan-primary)] hover:scale-105 active:scale-95 transition-all duration-300"
    >
      <span className="text-base leading-none">
        {language === 'en' ? '🇺🇸' : '🇧🇷'}
      </span>
      <span className="font-bold tracking-wider">
        {language === 'en' ? 'EN' : 'PT'}
      </span>
      <span className="text-zinc-500">|</span>
      <span className="text-(--cyan-primary) font-semibold">
        {language === 'en' ? 'PT-BR' : 'EN-US'}
      </span>
    </button>
  );
}