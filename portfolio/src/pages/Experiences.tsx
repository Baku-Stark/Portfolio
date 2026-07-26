import { useState } from 'react';
import { BADGE_URLS } from '../hooks/badgeUrls';
import { experiencesData } from '../hooks/experienceData';

export function Experiences() {
  const [activeTab, setActiveTab] = useState<string>(experiencesData[0]?.id || '');

  return (
    <section id="experiences" className="w-full min-h-screen bg-(--bg) text-white py-20 px-6 flex flex-col items-center justify-center relative">
      
      {/* SECTION Header */}
      <div className="flex flex-col items-center gap-2 mb-16 text-center">
        <span className="text-(--cyan-primary) font-mono text-sm tracking-widest uppercase">
          03. Where I've Worked & Learned
        </span>
        <h2 className="text-3xl md:text-5xl tracking-wide">
          Experiences
        </h2>
        <div className="w-16 h-[2px] bg-(--cyan-primary) shadow-[0_0_10px_var(--cyan-primary)] mt-2" />
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        
        {/* SIDE NAVIGATION (Tabs for Desktop / Scroll for Mobile) */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-(--border) min-w-[200px]">
          {experiencesData.map((exp) => {
            const isActive = activeTab === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`
                  px-5 py-3 text-left font-mono text-sm transition-all duration-300 relative whitespace-nowrap
                  ${isActive
                    ? 'text-(--cyan-primary) bg-(--cyan-primary)/10 md:border-l-2 md:border-(--cyan-primary) -md:ml-[1px]'
                    : 'text-zinc-400 hover:text-white hover:bg-(--bg-surface)'
                  }
                `}
              >
                {exp.company}
              </button>
            );
          })}
        </div>

        {/* DETAILS OF THE SELECTED EXPERIENCE */}
        <div className="flex-1 bg-(--bg-surface) border border-(--border) rounded-2xl p-6 md:p-8 min-h-[360px] flex flex-col justify-between shadow-xl">
          {experiencesData
            .filter((exp) => exp.id === activeTab)
            .map((exp) => (
              <div key={exp.id} className="flex flex-col gap-6 animate-fadeIn">
                
                {/* Exp Header */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl text-white font-semibold">
                      {exp.role} <span className="text-(--cyan-primary)">@ {exp.company}</span>
                    </h3>
                    <span className="px-3 py-1 bg-(--cyan-primary)/10 border border-(--cyan-primary)/30 text-(--cyan-primary) rounded-full text-xs font-mono">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-xs font-mono text-zinc-400">
                    {exp.period} | {exp.location}
                  </p>
                </div>

                {/* Bullets de Conquistas/Responsabilidades */}
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base leading-relaxed">
                      <span className="text-(--cyan-primary) font-mono mt-1">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges de Tecnologias */}
                <div className="pt-4 border-t border-(--border)/60 flex flex-wrap items-center gap-2">
                  {exp.technologies.map((tech, idx) => {
                    const badgeUrl = BADGE_URLS[tech];
                    return badgeUrl ? (
                      <img
                        key={idx}
                        src={badgeUrl}
                        alt={`${tech} badge`}
                        className="h-6 rounded border border-(--border)"
                      />
                    ) : (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-(--bg) border border-(--border) rounded-full text-xs font-mono text-zinc-300"
                      >
                        #{tech}
                      </span>
                    );
                  })}
                </div>

              </div>
            ))}
        </div>

      </div>

    </section>
  );
}