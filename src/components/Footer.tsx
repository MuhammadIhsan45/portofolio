import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-3 border-ink-900 dark:border-ink-700 bg-ink-950 text-white" style={{ borderTopWidth: '3px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1 */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-emerald text-white flex items-center justify-center font-mono font-bold text-sm border border-white">
                QA
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-ink-300 font-sans max-w-md leading-relaxed">
              Quality Assurance Engineer & Test Automation Specialist yang berdedikasi menjaga integritas sistem finansial perbankan, memelopori Agentic AI, dan memastikan Zero Defect Escape.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-ink-800 text-xs font-mono text-ink-200 border border-ink-700">
                100% Solid Colors
              </span>
              <span className="px-2 py-0.5 bg-brand-emerald text-xs font-mono text-white font-bold">
                Zero Defect Escape
              </span>
              <span className="px-2 py-0.5 bg-brand-blue text-xs font-mono text-white font-bold">
                Zero Gradients
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-ink-400 font-bold">
              Navigasi Portofolio
            </div>
            <ul className="space-y-1.5 text-sm font-sans text-ink-200">
              <li><a href="#projects" className="hover:text-brand-emerald transition-colors">Kasus Uji & Proyek QA</a></li>
              <li><a href="#skills" className="hover:text-brand-emerald transition-colors">Tools & Arsenal QA</a></li>
              <li><a href="#experience" className="hover:text-brand-emerald transition-colors">Pengalaman Kerja QA</a></li>
              <li><a href="#philosophy" className="hover:text-brand-emerald transition-colors">Filosofi Zero Defect</a></li>
              <li><a href="#palette" className="hover:text-brand-emerald transition-colors">Palet Warna Solid</a></li>
              <li><a href="#contact" className="hover:text-brand-emerald transition-colors">Hubungi / Rekrut</a></li>
            </ul>
          </div>

          {/* Col 3: Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink-800 hover:bg-brand-emerald text-white font-mono text-xs font-bold uppercase border-2 border-white shadow-solid-white-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <span>Kembali Ke Atas</span>
              <ArrowUp size={14} />
            </button>

            <div className="text-xs font-mono text-ink-400 text-left md:text-right">
              <div>© {new Date().getFullYear()} {PERSONAL_INFO.preferredName}.</div>
              <div>Quality Assurance & Test Automation.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
