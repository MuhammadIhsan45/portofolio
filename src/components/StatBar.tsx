import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatBar: React.FC = () => {
  return (
    <section className="border-y-2 border-ink-900 dark:border-ink-700 bg-ink-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => {
            const borderColors = ['#1D4ED8', '#059669', '#D97706', '#DC2626'];

            return (
              <div
                key={stat.label}
                className="border-l-4 pl-4 space-y-1"
                style={{
                  borderLeftColor: borderColors[idx % borderColors.length],
                }}
              >
                <div className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="font-sans font-bold text-sm text-ink-200">
                  {stat.label}
                </div>
                <div className="font-mono text-xs text-ink-400">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
