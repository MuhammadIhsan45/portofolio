import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="border-3 border-ink-900 dark:border-ink-700 bg-paper-surface dark:bg-paper-darkSurface p-8 sm:p-12 shadow-solid-lg" style={{ borderWidth: '3px' }}>
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-crimson text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs">
            <span>[04] Prinsip & Desain</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-ink-950 dark:text-white tracking-tight">
            Filosofi: Warna Tegas, Nol Gradien
          </h2>
          <p className="text-base sm:text-lg text-ink-700 dark:text-ink-300 leading-relaxed font-sans">
            Dalam dunia perangkat lunak modern yang sering terjebak dalam efek kosmetik kabur (blur gradients dan AI slop), kami memilih pendekatan <strong>arsitektur editorial & Bauhaus modern</strong>: palet solid berani, batas garis tegas, dan hierarki visual yang jujur.
          </p>
        </div>

        {/* 4 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-6 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 space-y-4 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-lg font-black px-2.5 py-0.5 text-white border-2 border-ink-900"
                  style={{ backgroundColor: principle.color }}
                >
                  {principle.number}
                </span>
                <span className="font-mono text-xs font-bold uppercase text-ink-500 tracking-wider">
                  {principle.badge}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl text-ink-950 dark:text-white">
                {principle.title}
              </h3>

              <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300 font-sans">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Callout */}
        <div className="mt-8 p-5 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-display font-bold text-base text-ink-950 dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-emerald inline-block border border-ink-900"></span>
              Kontras Terverifikasi WCAG AAA
            </div>
            <p className="text-xs text-ink-600 dark:text-ink-400">
              Setiap kombinasi warna pada portofolio ini memiliki rasio kontras ketat sehingga ramah di mata untuk membaca kode dan dokumen teknis.
            </p>
          </div>
          <a
            href="#palette"
            className="px-4 py-2 bg-brand-blue text-white font-mono text-xs font-bold uppercase border-2 border-ink-900 shadow-solid-xs hover:bg-brand-blueDark transition-colors flex-shrink-0"
          >
            Lihat Palet Warna
          </a>
        </div>
      </div>
    </section>
  );
};
