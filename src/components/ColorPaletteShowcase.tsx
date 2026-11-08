import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { COLOR_PALETTE_GUIDE } from '../data/portfolioData';

export const ColorPaletteShowcase: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <section id="palette" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs">
          <span>[05] Sistem Warna Solid</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink-950 dark:text-white tracking-tight">
          Palet Warna Tegas & Ergonomis
        </h2>
        <p className="text-base text-ink-700 dark:text-ink-300 max-w-2xl font-sans">
          Semua elemen website ini dibangun 100% menggunakan warna murni tanpa gradien. Klik pada swatch warna di bawah untuk menyalin kode HEX langsung ke clipboard Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COLOR_PALETTE_GUIDE.map((color) => {
          const isCopied = copiedHex === color.hex;
          const isLightSwatch = color.hex === '#F6F6F2' || color.hex === '#FFFFFF';

          return (
            <div
              key={color.hex}
              onClick={() => handleCopy(color.hex)}
              className="group cursor-pointer p-4 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-solid-lg transition-all space-y-3"
            >
              {/* Color Block */}
              <div
                className="h-24 w-full border-2 border-ink-900 relative flex items-end p-2 transition-transform"
                style={{ backgroundColor: color.hex }}
              >
                <div
                  className={`px-2 py-0.5 font-mono text-xs font-bold border border-ink-900 ${
                    isLightSwatch ? 'bg-ink-950 text-white' : 'bg-white text-ink-950'
                  }`}
                >
                  {color.hex}
                </div>

                <div className="absolute top-2 right-2">
                  <div className={`p-1 border border-ink-900 ${
                    isLightSwatch ? 'bg-ink-950 text-white' : 'bg-white text-ink-950'
                  }`}>
                    {isCopied ? <Check size={14} /> : <Copy size={14} />}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-base text-ink-950 dark:text-white">
                    {color.name}
                  </h4>
                  {isCopied && (
                    <span className="font-mono text-[10px] text-brand-emerald font-bold uppercase">
                      Tersalin!
                    </span>
                  )}
                </div>
                <p className="text-xs text-ink-600 dark:text-ink-400 font-sans leading-relaxed">
                  {color.role}
                </p>
              </div>

              <div className="pt-2 border-t border-ink-900/10 dark:border-ink-700 flex items-center justify-between text-[11px] font-mono text-ink-500">
                <span>Peran:</span>
                <span className="font-bold text-ink-800 dark:text-ink-200">
                  {color.lightMode !== 'N/A' ? color.lightMode : color.darkMode}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
