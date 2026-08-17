import { useLanguage } from '../../context/LanguageContext';
import { useTypingEffect } from '../../hooks/userTypingEffect';
import style from './style.module.css';

export function LandingPage() {
  const { t } = useLanguage();
  const typedText = useTypingEffect(
    t(`I'm Wallace de Freitas, also known as Baku-Stark!`, 'Eu sou Wallace de Freitas, conhecido como Baku-Start!'),
    60,
    true
  );

  return (
    <section className={`${style.landing_bg} relative w-full h-screen bg-cover bg-center bg-fixed`}>
      <div className="absolute inset-0 w-full h-full bg-(--bg)/75 backdrop-blur-md flex flex-col items-center justify-center gap-6 px-4">
        
        {/* Glitch Title */}
        <h1 
          data-text="Welcome to My Portfolio"
          className={`
            ${style.glitch_title} 
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-(--title-font)
            text-white 
            text-center 
            tracking-wider 
            drop-shadow-[0_0_25px_var(--cyan-glow,#38bdf840)]
            w-full max-w-4xl px-2 leading-tight
          `}
        >
          WELCOME TO MY PORTFOLIO
        </h1>

        {/* Typing Effect (UPDATE NEW MODEL) */}
        <div className="min-h-[56px] flex items-center justify-center max-w-2xl">
          <p className="text-zinc-300 text-lg md:text-xl text-center opacity-75">
            {typedText}
            <span className="inline-block w-[2px] h-5 bg-(--cyan-primary) ml-1 animate-pulse" />
          </p>
        </div>

        {/* --- DIVIDER LINE --- */}
        <div className="w-full max-w-md my-2 flex items-center justify-center">
          <hr className="w-full border-0 h-px bg-linear-to-r from-transparent via-(--cyan-primary) to-transparent opacity-60 shadow-[0_0_10px_var(--cyan-primary)]" />
        </div>

        {/* --- INTERACTIVE LINKS --- */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-base md:text-lg font-medium text-zinc-300">
          <a
            href="#about"
            className="group relative px-3 py-1 transition-colors hover:text-white"
          >
            <span className="text-(--cyan-primary) font-mono mr-1 text-xs opacity-70 group-hover:opacity-100">
              01.
            </span>
                {t("ABOUT", 'SOBRE')}
            {/* Animation of the small bar appearing at the bottom on hover. */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--cyan-primary) transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--cyan-primary)]" />
          </a>

          <a
            href="#projects"
            className="group relative px-3 py-1 transition-colors hover:text-white"
          >
            <span className="text-(--cyan-primary) font-mono mr-1 text-xs opacity-70 group-hover:opacity-100">
              02.
            </span>
                {t("PROJECTS", 'PROJETOS')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--cyan-primary) transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--cyan-primary)]" />
          </a>

          <a
            href="#experiences"
            className="group relative px-3 py-1 transition-colors hover:text-white"
          >
            <span className="text-(--cyan-primary) font-mono mr-1 text-xs opacity-70 group-hover:opacity-100">
              03.
            </span>
                {t("EXPERIENCES", 'EXPERIENCIAS')}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--cyan-primary) transition-all duration-300 group-hover:w-full shadow-[0_0_8px_var(--cyan-primary)]" />
          </a>
        </nav>

      </div>
    </section>
  );
}