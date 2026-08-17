import { educationData } from '../data/educationData';
import { useLanguage } from '../context/LanguageContext';

export function Education() {
  const { language, t } = useLanguage();

  return (
    <section 
      id="education" 
      className="w-full min-h-screen bg-(--bg) text-white py-20 px-6 flex flex-col items-center justify-center relative"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center gap-2 mb-16 text-center">
        <span className="text-(--cyan-primary) font-mono text-sm tracking-widest uppercase">
          {t('04. Education & Certifications', '04. Formação & Certificações')}
        </span>
        <h2 className="text-3xl md:text-5xl tracking-wide">
          {t('Education', 'Educação')}
        </h2>
        {/* Divider */}
        <div className="w-16 h-[2px] bg-(--cyan-primary) shadow-[0_0_10px_var(--cyan-primary)] mt-2" />
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="group relative bg-(--bg-surface) border border-(--border) hover:border-(--cyan-primary)/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]"
          >
            {/* Header do Card */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-mono text-(--cyan-primary) bg-(--cyan-primary)/10 rounded-full border border-(--cyan-primary)/30">
                  {edu.type}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-(--cyan-primary) transition-colors">
                  {edu.degree[language]}
                </h3>
                <p className="text-zinc-400 font-medium text-sm mt-1">
                  {edu.institution} {edu.location && `• ${edu.location}`}
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 w-fit">
                {edu.period}
              </span>
            </div>

            {/* Descrição */}
            <ul className="space-y-2.5 my-5 text-zinc-300 text-sm md:text-base">
              {edu.description[language].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 leading-relaxed">
                  <span className="text-(--cyan-primary) font-mono mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Badges de Skills/Tecnologias */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-(--border)/60">
              {edu.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-(--bg) text-zinc-300 border border-(--border)"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}