import React, { useState } from 'react';
import { ChevronRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (p: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Agentic & AI QA', 'Fintech & Enterprise UAT', 'Automation Tools', 'API & Performance'];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs">
            <span>[01] Portofolio Kasus Uji & Sistem QA</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink-950 dark:text-white tracking-tight">
            Pengujian Sistem & Rekayasa QA
          </h2>
          <p className="text-base text-ink-700 dark:text-ink-300 max-w-xl">
            Dari pengujian UAT inti multifinance BCA Finance One ME, generator test case Agentic AI, hingga verifikasi regresi dokumen native dan validasi model ekstraksi perbankan.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-950 border-2 border-ink-900 shadow-solid-xs'
                  : 'text-ink-700 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid hover:-translate-x-1 hover:-translate-y-1 hover:shadow-solid-lg transition-all group overflow-hidden"
          >
            {/* Solid Accent Top Bar */}
            <div
              className="h-2 w-full border-b-2 border-ink-900"
              style={{ backgroundColor: project.solidAccentColor }}
            />

            {/* Card Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="px-2 py-0.5 text-xs font-mono font-bold uppercase text-white border border-ink-900"
                    style={{ backgroundColor: project.solidAccentColor }}
                  >
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-mono font-bold text-brand-amber uppercase flex items-center gap-1">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display font-extrabold text-xl text-ink-950 dark:text-white leading-snug group-hover:text-brand-blue transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed font-sans">
                  {project.tagline}
                </p>
              </div>

              {/* Metrics Box */}
              <div className="pt-4 border-t-2 border-ink-900/10 dark:border-ink-700 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {project.metrics.slice(0, 2).map((m) => (
                    <div
                      key={m.label}
                      className="p-2 bg-paper-alt dark:bg-paper-darkAlt border border-ink-900/15 dark:border-ink-700"
                    >
                      <div className="text-[10px] font-mono text-ink-500 uppercase">{m.label}</div>
                      <div
                        className="font-display font-black text-sm"
                        style={{ color: project.solidAccentColor }}
                      >
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono bg-paper-alt dark:bg-paper-darkAlt text-ink-800 dark:text-ink-200 border border-ink-900/20 dark:border-ink-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-ink-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="p-4 bg-paper-alt dark:bg-paper-darkAlt border-t-2 border-ink-900 dark:border-ink-700 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(project)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-bold text-xs font-mono uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs hover:bg-brand-emerald hover:text-white dark:hover:bg-brand-emerald dark:hover:text-white transition-colors"
              >
                <span>Inspeksi Strategi & Artefak QA</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
