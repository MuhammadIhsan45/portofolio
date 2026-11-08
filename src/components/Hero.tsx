import React, { useState } from 'react';
import { ArrowDown, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, copied }) => {
  const [activeTab, setActiveTab] = useState<'status' | 'stack' | 'manifesto'>('status');

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 dark:border-white shadow-solid-xs">
          <span className="w-2 h-2 bg-brand-emerald"></span>
          Portofolio Rekayasa Perangkat Lunak
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-blue text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 dark:border-white shadow-solid-xs">
          Nol Gradien • Warna Tegas & Presisi
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Headline & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="font-mono text-sm uppercase tracking-widest text-brand-blue dark:text-blue-400 font-bold">
              // {PERSONAL_INFO.name}
            </h2>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink-950 dark:text-white tracking-tight leading-[1.08]">
              Software Engineer & <span className="bg-brand-amber text-ink-950 px-2 py-0.5 inline-block border-2 border-ink-900 shadow-solid-xs">AI Systems</span> Builder.
            </h1>
          </div>

          <p className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed font-sans max-w-2xl">
            {PERSONAL_INFO.tagline} Berfokus pada perancangan sistem end-to-end: mulai dari 
            <strong className="text-ink-950 dark:text-white font-semibold"> Fullstack Web (Next.js/React)</strong>, 
            <strong className="text-ink-950 dark:text-white font-semibold"> Otomasi AI Enterprise (Azure OpenAI)</strong>, 
            hingga arsitektur <strong className="text-ink-950 dark:text-white font-semibold"> Desktop Native berkecepatan tinggi</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-bold text-base border-2 border-ink-900 dark:border-white shadow-solid hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-solid-sm transition-all"
            >
              <span>Jelajahi Proyek</span>
              <ArrowDown size={18} />
            </a>

            <button
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-paper-surface dark:bg-paper-darkSurface text-ink-900 dark:text-white font-bold text-base border-2 border-ink-900 dark:border-ink-700 shadow-solid hover:bg-paper-alt dark:hover:bg-paper-darkAlt hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-solid-sm transition-all"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-brand-emerald" />
                  <span className="text-brand-emerald">Email Disalin!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Salin Email</span>
                </>
              )}
            </button>
          </div>

          {/* Core Strengths Checklist */}
          <div className="pt-4 border-t-2 border-ink-900/10 dark:border-ink-700/60 grid grid-cols-2 sm:grid-cols-2 gap-3 text-sm font-medium">
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-blue inline-block border border-ink-900"></span>
              <span>Fullstack Next.js & TypeScript</span>
            </div>
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-emerald inline-block border border-ink-900"></span>
              <span>Azure OpenAI & Agentic QA</span>
            </div>
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-crimson inline-block border border-ink-900"></span>
              <span>macOS Cocoa & Windows Hooks</span>
            </div>
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-amber inline-block border border-ink-900"></span>
              <span>Zero-Gradient Solid Aesthetic</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Terminal / Code Card */}
        <div className="lg:col-span-5">
          <div className="border-2 border-ink-900 dark:border-ink-700 bg-paper-surface dark:bg-paper-darkSurface shadow-solid-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-ink-900 text-white px-4 py-3 flex items-center justify-between border-b-2 border-ink-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-brand-crimson inline-block border border-black"></span>
                <span className="w-3 h-3 bg-brand-amber inline-block border border-black"></span>
                <span className="w-3 h-3 bg-brand-emerald inline-block border border-black"></span>
                <span className="font-mono text-xs font-semibold ml-2 text-ink-300">
                  ihsan@system-core ~ v2.4
                </span>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 bg-brand-blue text-white font-bold">
                PROD READY
              </span>
            </div>

            {/* Sub Tabs */}
            <div className="flex border-b-2 border-ink-900 dark:border-ink-700 bg-paper-alt dark:bg-paper-darkAlt">
              <button
                onClick={() => setActiveTab('status')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                  activeTab === 'status'
                    ? 'bg-paper-surface dark:bg-paper-darkSurface text-ink-950 dark:text-white border-r-2 border-ink-900 dark:border-ink-700'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-950'
                }`}
              >
                // System Status
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                  activeTab === 'stack'
                    ? 'bg-paper-surface dark:bg-paper-darkSurface text-ink-950 dark:text-white border-r-2 border-ink-900 dark:border-ink-700'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-950'
                }`}
              >
                // Core Stack
              </button>
              <button
                onClick={() => setActiveTab('manifesto')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                  activeTab === 'manifesto'
                    ? 'bg-paper-surface dark:bg-paper-darkSurface text-ink-950 dark:text-white'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-950'
                }`}
              >
                // Design Rule
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs space-y-4">
              {activeTab === 'status' && (
                <div className="space-y-3">
                  <div className="p-3 bg-paper-alt dark:bg-paper-darkAlt border border-ink-900/20 dark:border-ink-700">
                    <div className="flex items-center justify-between text-brand-emerald font-bold">
                      <span>[ONLINE] FinTrack AI Engine</span>
                      <span>v1.0.0</span>
                    </div>
                    <p className="text-ink-600 dark:text-ink-400 mt-1">
                      Azure OpenAI GPT-4o + IMAP parser mutasi BCA, Mandiri, BRI, e-Wallet.
                    </p>
                  </div>

                  <div className="p-3 bg-paper-alt dark:bg-paper-darkAlt border border-ink-900/20 dark:border-ink-700">
                    <div className="flex items-center justify-between text-brand-crimson font-bold">
                      <span>[ACTIVE] Hide Your Interview</span>
                      <span>Cocoa / Win32</span>
                    </div>
                    <p className="text-ink-600 dark:text-ink-400 mt-1">
                      100% Invisible to Zoom/GMeet capture via NSWindowSharingNone.
                    </p>
                  </div>

                  <div className="p-3 bg-paper-alt dark:bg-paper-darkAlt border border-ink-900/20 dark:border-ink-700">
                    <div className="flex items-center justify-between text-brand-amber font-bold">
                      <span>[READY] Agentic QA Generator</span>
                      <span>Baydo AI</span>
                    </div>
                    <p className="text-ink-600 dark:text-ink-400 mt-1">
                      Automated SRS decomposition & multi-level test case DOCX generation.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">Frontend:</span>
                    <span className="font-bold text-ink-900 dark:text-white">Next.js 14, React 18, Tailwind CSS</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">AI / LLM:</span>
                    <span className="font-bold text-brand-emerald">Azure OpenAI (GPT-4o), Agentic Workflows</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">Backend:</span>
                    <span className="font-bold text-ink-900 dark:text-white">Python FastAPI, Node.js, SQLite/Postgres</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">Systems:</span>
                    <span className="font-bold text-brand-blue">macOS Cocoa API, Win32 Affinity, Rust/Tauri</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-ink-500">Tooling:</span>
                    <span className="font-bold text-brand-amber">Docker, Git CI/CD, Chrome Extensions V3</span>
                  </div>
                </div>
              )}

              {activeTab === 'manifesto' && (
                <div className="p-3 bg-brand-blue/10 dark:bg-brand-blue/20 border-2 border-brand-blue text-ink-900 dark:text-ink-100 space-y-2">
                  <div className="font-bold text-brand-blue dark:text-blue-400">
                    // STRICT DESIGN CONSTRAINT:
                  </div>
                  <p className="leading-relaxed">
                    "Tanpa gradien sama sekali. Warna solid yang berani (Electric Cobalt, Warm Ochre, Forest Jade, Crimson Red) dengan tipografi tegas menghasilkan tampilan yang bersih, kontras tinggi, dan nyaman dibaca berjam-jam."
                  </p>
                </div>
              )}

              {/* Status Footer */}
              <div className="pt-2 flex items-center justify-between text-ink-500 text-[11px] border-t border-ink-900/10 dark:border-ink-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping"></span>
                  Latency: 14ms (Optimal)
                </span>
                <span className="font-bold text-ink-700 dark:text-ink-300">
                  ID: {PERSONAL_INFO.preferredName.toUpperCase()}@DEV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
