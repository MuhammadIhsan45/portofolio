import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-amber text-ink-950 font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs">
          <span>[03] Rekam Jejak</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink-950 dark:text-white tracking-tight">
          Pengalaman & Kontribusi
        </h2>
        <p className="text-base text-ink-700 dark:text-ink-300 max-w-xl">
          Pengalaman menangani arsitektur sistem, memimpin riset AI terapan, dan menghantarkan perangkat lunak berkinerja tinggi.
        </p>
      </div>

      <div className="space-y-8">
        {WORK_EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid space-y-6"
          >
            {/* Experience Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-ink-900/10 dark:border-ink-700">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-black text-2xl text-ink-950 dark:text-white">
                    {exp.role}
                  </h3>
                  <span
                    className="px-2.5 py-0.5 text-xs font-mono font-bold uppercase text-white border border-ink-900"
                    style={{ backgroundColor: exp.accentColor }}
                  >
                    {exp.type}
                  </span>
                </div>
                <div className="font-sans font-bold text-base text-brand-blue dark:text-blue-400">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-600 dark:text-ink-400">
                <div className="flex items-center gap-1.5 bg-paper-alt dark:bg-paper-darkAlt px-2.5 py-1 border border-ink-900/20 dark:border-ink-700">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-paper-alt dark:bg-paper-darkAlt px-2.5 py-1 border border-ink-900/20 dark:border-ink-700">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-ink-800 dark:text-ink-200 font-sans">
              {exp.description}
            </p>

            {/* Key Achievements */}
            <div className="space-y-2.5">
              <div className="font-mono text-xs uppercase tracking-widest text-ink-500 font-bold">
                Pencapaian Utama & Dampak Teknis:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.achievements.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900/15 dark:border-ink-700 text-xs text-ink-800 dark:text-ink-200 flex items-start gap-2"
                  >
                    <div
                      className="w-4 h-4 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-mono font-bold mt-0.5"
                      style={{ backgroundColor: exp.accentColor }}
                    >
                      ✓
                    </div>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono font-semibold bg-paper-alt dark:bg-paper-darkAlt text-ink-900 dark:text-white border border-ink-900 dark:border-ink-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
