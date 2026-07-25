import style from './style.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-(--bg) text-white px-6 py-10 md:px-12 shadow-[0_-10px_50px_var(--bg)]">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0 text-sm">
        {/* Left Content: Copyright */}
        <div className="w-full md:w-1/3 text-center md:text-left text-zinc-400 gap-3 flex flex-col md:flex-row items-center justify-center md:justify-start">
          <span className="font-light text-base opacity-50">Copyright&copy; {currentYear}</span>{'  '}
          <span className="font-semibold text-white tracking-wider font-(family-name:--title-font) text-2xl">Baku-Stark</span>
        </div>

        {/* Center Content: Logo n Languages */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center text-center leading-tight gap-4">
            {/* <div className="font-extrabold text-xl tracking-tighter uppercase italic fon font-(family-name:--title-font)">
              Baku
            </div> */}
            <div className="text-3xl font-black -mt-3 text-white">
              <img src="/icons/favicon.ico" alt="BS Logo" />
            </div>
            {/* <div className="font-extrabold text-xl tracking-tighter uppercase italic fon font-(family-name:--title-font)">
              Stark
            </div> */}
          </div>

          <div className="flex gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
            <button className="text-white hover:text-white transition-colors cursor-pointer">
                PT
            </button>
            <span className="text-zinc-700">/</span>
            <button className="hover:text-white transition-colors cursor-pointer">
                EN
            </button>
          </div>
        </div>

        {/* Right Content: Social Media */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-6 text-zinc-400">
          <a
            href="https://www.instagram.com/wallace_emc2/"
            className={style.icon_style}
            aria-label="Instagram"
            target="_blank">
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/wallace-freitas-92a2061b6/"
            className={style.icon_style}
            aria-label="LinkedIn (imita o Bē)"
            target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://github.com/Baku-Stark"
            className={style.icon_style}
            aria-label="GitHub"
            target="_blank">
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://gitlab.com/Baku-Stark"
            className={style.icon_style}
            aria-label="GitLab"
            target="_blank">
            <i className="bi bi-gitlab"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};