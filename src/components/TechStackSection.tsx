import React, { useState } from 'react';
import { Code2, Layout, Palette, Server, Bot, Cpu, Terminal, GitBranch, Layers } from 'lucide-react';
import { TECH_SKILLS, TechSkill } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Frontend & UI', 'Backend & Cloud', 'AI & LLM Systems', 'Systems & Tooling'];

  const filteredSkills = selectedCategory === 'Semua'
    ? TECH_SKILLS
    : TECH_SKILLS.filter((s) => s.category === selectedCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Palette': return <Palette size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Bot': return <Bot size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      case 'GitBranch': return <GitBranch size={20} />;
      default: return <Layers size={20} />;
    }
  };

  const getCategoryColor = (category: TechSkill['category']) => {
    switch (category) {
      case 'Frontend & UI': return '#1D4ED8';     // Cobalt
      case 'Backend & Cloud': return '#D97706';    // Amber
      case 'AI & LLM Systems': return '#059669';   // Jade
      case 'Systems & Tooling': return '#DC2626';  // Crimson
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs">
          <span>[02] Kapabilitas Teknis</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink-950 dark:text-white tracking-tight">
          Stack & Keahlian Rekayasa
        </h2>
        <p className="text-base text-ink-700 dark:text-ink-300 max-w-2xl">
          Fokus pada arsitektur modern yang teruji di lingkungan produksi: dari frontend reaktif, integrasi model AI skala korporat, hingga integrasi native level sistem operasi.
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase border-2 border-ink-900 transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-blue text-white shadow-solid-xs'
                  : 'bg-paper-surface dark:bg-paper-darkSurface text-ink-800 dark:text-ink-200 hover:bg-paper-alt'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const accentColor = getCategoryColor(skill.category);

          return (
            <div
              key={skill.name}
              className="p-5 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid flex flex-col justify-between space-y-3 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              <div className="space-y-3">
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 flex items-center justify-center text-white border-2 border-ink-900 shadow-solid-xs"
                    style={{ backgroundColor: accentColor }}
                  >
                    {getIcon(skill.iconName)}
                  </div>
                  <span
                    className="text-[11px] font-mono font-bold px-2 py-0.5 border border-ink-900 uppercase"
                    style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-lg text-ink-950 dark:text-white leading-tight">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-ink-600 dark:text-ink-400 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Category indicator */}
              <div className="pt-3 border-t border-ink-900/10 dark:border-ink-700/60 flex items-center justify-between text-[11px] font-mono text-ink-500">
                <span>Kategori:</span>
                <span className="font-bold text-ink-800 dark:text-ink-200">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
