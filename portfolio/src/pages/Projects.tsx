import { useState } from 'react';
import { BADGE_URLS } from '../hooks/badgeUrls';
import { projectsData } from '../hooks/projectData';

export function Projects() {
  // Alterado a tipagem do filtro para incluir 'networks' e 'devops'
  type FilterCategory = 'all' | 'fullstack' | 'frontend' | 'backend' | 'security' | 'networks' | 'devops';

  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [showAll, setShowAll] = useState(false);

  // Visible Card Limit
  const INITIAL_LIMIT = 4;

  // Filters projects by the selected category.
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === activeFilter);

  // Defines the projects to be displayed according to the slice limit.
  const visibleProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, INITIAL_LIMIT);

  // Resets "showAll" when the user changes the filter.
  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="w-full min-h-screen bg-(--bg) text-white py-20 px-6 flex flex-col items-center justify-center relative">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col items-center gap-2 mb-10 text-center">
        <span className="text-(--cyan-primary) font-mono text-sm tracking-widest uppercase">
          02. What I've Built
        </span>
        <h2 className="text-3xl md:text-5xl tracking-wide">
          Projects
        </h2>
        <div className="w-16 h-[2px] bg-(--cyan-primary) shadow-[0_0_10px_var(--cyan-primary)] mt-2" />
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {[
          { label: 'All', value: 'all' },
          { label: 'Full Stack', value: 'fullstack' },
          { label: 'Frontend', value: 'frontend' },
          { label: 'Backend', value: 'backend' },
          { label: 'Cybersecurity', value: 'security' },
          { label: 'Networks', value: 'networks' },
          { label: 'DevOps', value: 'devops' }
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilterChange(filter.value as FilterCategory)}
            className={`
              px-4 py-2 rounded-xl text-sm font-mono transition-all duration-300 border
              ${activeFilter === filter.value
                ? 'bg-(--cyan-primary)/10 text-(--cyan-primary) border-(--cyan-primary) shadow-[0_0_12px_var(--cyan-primary)]'
                : 'bg-(--bg-surface) text-zinc-400 border-(--border) hover:text-white hover:border-zinc-500'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {visibleProjects.map((project) => {
          const isRestricted = project.githubUrl === '#';

          return (
            <div
              key={project.id}
              className="bg-(--bg-surface) border border-(--border) rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 relative group hover:border-(--cyan-primary)/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-300"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Terminal Icon */}
                  <div className="text-(--cyan-primary) text-2xl font-mono font-bold">
                    &#x203A;_
                  </div>

                  {/* Highlight or Restriction Badge */}
                  {isRestricted ? (
                    <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full text-xs font-mono flex items-center gap-1.5">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                      </svg>
                      Restricted Repo
                    </span>
                  ) : (
                    project.isFeatured && (
                      <span className="px-3 py-1 bg-(--cyan-primary)/10 border border-(--cyan-primary)/30 text-(--cyan-primary) rounded-full text-xs font-mono">
                        Featured Project
                      </span>
                    )
                  )}
                </div>

                {/* PROJECT TITLE */}
                <h3 className="text-xl md:text-2xl text-white group-hover:text-(--cyan-primary) transition-colors mb-3">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed text-justify">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Badges + Links */}
              <div className="flex flex-col gap-4 pt-4 border-t border-(--border)/60">
                {/* Badges de Tecnologia */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag, idx) => {
                    const badgeUrl = BADGE_URLS[tag];
                    return badgeUrl ? (
                      <img
                        key={idx}
                        src={badgeUrl}
                        alt={`${tag} badge`}
                        className="h-6 rounded border border-(--border)"
                      />
                    ) : (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-(--bg) border border-(--border) rounded-full text-xs font-mono text-zinc-300"
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  {isRestricted ? (
                    <span
                      title="Academic / Private repository protected under NDAs or internal policies"
                      className="flex items-center gap-2 text-sm font-mono text-zinc-500 cursor-not-allowed select-none bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-800"
                    >
                      <svg className="w-4 h-4 fill-current text-amber-500/80" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                      </svg>
                      Private / Academic Code
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-mono text-zinc-300 hover:text-(--cyan-primary) transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Repository
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-mono text-zinc-300 hover:text-(--cyan-primary) transition-colors"
                    >
                      <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SHOW MORE / SHOW LESS BUTTON */}
      {filteredProjects.length > INITIAL_LIMIT && (
        <div className="mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-xl font-mono text-sm border border-(--cyan-primary) text-(--cyan-primary) bg-(--cyan-primary)/5 hover:bg-(--cyan-primary)/20 hover:shadow-[0_0_15px_var(--cyan-primary)] transition-all duration-300 flex items-center gap-2"
          >
            {showAll ? 'Show Less' : 'Show More'}
            <svg
              className={`w-4 h-4 transform transition-transform duration-300 ${
                showAll ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

    </section>
  );
}