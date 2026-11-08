import React, { useEffect } from 'react';
import { X, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-none transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-paper-surface dark:bg-paper-darkSurface border-3 border-ink-900 dark:border-white shadow-solid-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        style={{ borderWidth: '3px' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup Modal"
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-paper-alt dark:bg-paper-darkAlt text-ink-900 dark:text-white border-2 border-ink-900 dark:border-white shadow-solid-xs hover:bg-brand-crimson hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="px-2.5 py-1 text-xs font-mono font-bold uppercase text-white border-2 border-ink-900"
              style={{ backgroundColor: project.solidAccentColor }}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase bg-brand-amber text-ink-950 border-2 border-ink-900">
                ★ Proyek Unggulan
              </span>
            )}
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-ink-950 dark:text-white leading-tight">
            {project.title}
          </h3>

          <p className="text-base text-ink-700 dark:text-ink-300 font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-3 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 space-y-1"
            >
              <div className="font-mono text-xs text-ink-500 uppercase tracking-wider">
                {m.label}
              </div>
              <div
                className="font-display font-extrabold text-lg sm:text-xl"
                style={{ color: project.solidAccentColor }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Technical Overview */}
        <div className="space-y-4 my-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 font-bold flex items-center gap-1.5">
            <Cpu size={15} style={{ color: project.solidAccentColor }} />
            Arsitektur & Penjelasan Teknis
          </h4>
          <p className="text-sm leading-relaxed text-ink-800 dark:text-ink-200">
            {project.longDescription}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="space-y-3 my-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 font-bold flex items-center gap-1.5">
            <ShieldCheck size={15} style={{ color: project.solidAccentColor }} />
            Keunggulan Implementasi
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-sm text-ink-800 dark:text-ink-200"
              >
                <div
                  className="w-5 h-5 flex-shrink-0 flex items-center justify-center text-white text-xs font-mono font-bold mt-0.5"
                  style={{ backgroundColor: project.solidAccentColor }}
                >
                  {i + 1}
                </div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2 my-6 pt-4 border-t-2 border-ink-900/10 dark:border-ink-700">
          <div className="font-mono text-xs uppercase tracking-widest text-ink-500 font-bold">
            Teknologi & Dependensi
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono font-semibold bg-paper-alt dark:bg-paper-darkAlt text-ink-900 dark:text-white border border-ink-900 dark:border-ink-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t-2 border-ink-900 dark:border-ink-700 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-ink-500">
            Arsitektur Terverifikasi Skala Produksi
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-bold text-sm border-2 border-ink-900 dark:border-white shadow-solid-xs hover:bg-brand-blue hover:text-white transition-colors"
            >
              Diskusikan Solusi Serupa
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-paper-alt dark:bg-paper-darkAlt text-ink-900 dark:text-white font-bold text-sm border-2 border-ink-900 dark:border-ink-700 hover:bg-ink-200 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
