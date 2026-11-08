import React, { useState } from 'react';
import { ArrowDown, Copy, Check, Play, CheckCircle2, ShieldCheck, Bug, Terminal } from 'lucide-react';
import { PERSONAL_INFO, LIVE_TEST_CONSOLE } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, copied }) => {
  const [activeTab, setActiveTab] = useState<'console' | 'stack' | 'sla'>('console');
  const [runningTest, setRunningTest] = useState(false);
  const [completedSuites, setCompletedSuites] = useState(LIVE_TEST_CONSOLE);

  const handleRerun = () => {
    setRunningTest(true);
    setTimeout(() => {
      setRunningTest(false);
    }, 600);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 dark:border-white shadow-solid-xs">
          <span className="w-2 h-2 bg-brand-emerald"></span>
          Quality Assurance & Test Automation Specialist
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-blue text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 dark:border-white shadow-solid-xs">
          Nol Gradien • Zero Defect Escapes
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
              <span className="bg-brand-emerald text-white px-2 py-0.5 inline-block border-2 border-ink-900 shadow-solid-xs">QA Engineer</span> & Test Automation.
            </h1>
          </div>

          <p className="text-lg text-ink-700 dark:text-ink-300 leading-relaxed font-sans max-w-2xl">
            {PERSONAL_INFO.tagline} Menguasai spektrum pengujian menyeluruh: dari 
            <strong className="text-ink-950 dark:text-white font-semibold"> UAT Finansial Multi-Role (BCA Finance One ME)</strong>, 
            <strong className="text-ink-950 dark:text-white font-semibold"> Otomasi Agentic QA (Azure AI Foundry)</strong>, 
            hingga arsitektur pengujian <strong className="text-ink-950 dark:text-white font-semibold"> API & Visual Regression tingkat tinggi</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue text-white font-bold text-base border-2 border-ink-900 dark:border-white shadow-solid hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-solid-sm transition-all"
            >
              <span>Jelajahi Proyek QA</span>
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
                  <span>Salin Email Rekrutmen</span>
                </>
              )}
            </button>
          </div>

          {/* Core Strengths Checklist */}
          <div className="pt-4 border-t-2 border-ink-900/10 dark:border-ink-700/60 grid grid-cols-2 sm:grid-cols-2 gap-3 text-sm font-medium">
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-blue inline-block border border-ink-900"></span>
              <span>BCA Finance Core UAT Testing</span>
            </div>
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-amber inline-block border border-ink-900"></span>
              <span>Baydo AI & Agentic QA Engine</span>
            </div>
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-emerald inline-block border border-ink-900"></span>
              <span>Postman, Newman & API Suites</span>
            </div>
            <div className="flex items-center gap-2 text-ink-800 dark:text-ink-200">
              <span className="w-2.5 h-2.5 bg-brand-crimson inline-block border border-ink-900"></span>
              <span>Boundary Value & Security QA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive QA Test Runner */}
        <div className="lg:col-span-5">
          <div className="border-2 border-ink-900 dark:border-ink-700 bg-paper-surface dark:bg-paper-darkSurface shadow-solid-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-ink-900 text-white px-4 py-3 flex items-center justify-between border-b-2 border-ink-900">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-brand-crimson inline-block border border-black"></span>
                <span className="w-3 h-3 bg-brand-amber inline-block border border-black"></span>
                <span className="w-3 h-3 bg-brand-emerald inline-block border border-black"></span>
                <span className="font-mono text-xs font-semibold ml-2 text-ink-300">
                  pytest-runner --all-suites
                </span>
              </div>
              <button
                onClick={handleRerun}
                disabled={runningTest}
                className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 bg-brand-emerald text-white font-bold border border-black hover:bg-emerald-600 transition-colors"
              >
                <Play size={10} className={runningTest ? 'animate-spin' : ''} />
                <span>{runningTest ? 'TESTING...' : 'RUN TESTS'}</span>
              </button>
            </div>

            {/* Sub Tabs */}
            <div className="flex border-b-2 border-ink-900 dark:border-ink-700 bg-paper-alt dark:bg-paper-darkAlt">
              <button
                onClick={() => setActiveTab('console')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                  activeTab === 'console'
                    ? 'bg-paper-surface dark:bg-paper-darkSurface text-ink-950 dark:text-white border-r-2 border-ink-900 dark:border-ink-700'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-950'
                }`}
              >
                // Live Test Suites
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                  activeTab === 'stack'
                    ? 'bg-paper-surface dark:bg-paper-darkSurface text-ink-950 dark:text-white border-r-2 border-ink-900 dark:border-ink-700'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-950'
                }`}
              >
                // QA Arsenal
              </button>
              <button
                onClick={() => setActiveTab('sla')}
                className={`flex-1 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                  activeTab === 'sla'
                    ? 'bg-paper-surface dark:bg-paper-darkSurface text-ink-950 dark:text-white'
                    : 'text-ink-600 dark:text-ink-400 hover:text-ink-950'
                }`}
              >
                // Quality Metrics
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 font-mono text-xs space-y-3 max-h-[360px] overflow-y-auto">
              {activeTab === 'console' && (
                <div className="space-y-3">
                  {runningTest ? (
                    <div className="py-8 text-center space-y-2 text-brand-blue font-bold">
                      <div className="inline-block animate-spin font-display text-2xl">⚙</div>
                      <p className="text-xs font-mono">Menjalankan 12 assertion suite...</p>
                    </div>
                  ) : (
                    completedSuites.map((suite, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900/15 dark:border-ink-700 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-ink-950 dark:text-white truncate pr-2">
                            {suite.suiteName}
                          </span>
                          <span className="px-1.5 py-0.5 bg-brand-emerald text-white text-[10px] font-bold">
                            {suite.status} ({suite.duration})
                          </span>
                        </div>
                        <div className="space-y-1 text-[11px] text-ink-600 dark:text-ink-400">
                          {suite.assertions.map((assertion, aIdx) => (
                            <div key={aIdx} className="flex items-center justify-between">
                              <span className="truncate pr-2 font-mono">
                                ✓ {assertion.name}
                              </span>
                              <span className="text-brand-emerald font-bold">PASS</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">Automation:</span>
                    <span className="font-bold text-ink-950 dark:text-white">Playwright, PyTest, Selenium, Cypress</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">API Testing:</span>
                    <span className="font-bold text-brand-emerald">Postman, Newman, REST Assured, OAuth2</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">AI Testing:</span>
                    <span className="font-bold text-brand-amber">Azure AI Foundry, LLM Prompt Eval, BVA</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-ink-900/10 dark:border-ink-700">
                    <span className="text-ink-500">Domain QA:</span>
                    <span className="font-bold text-brand-blue">BCA Finance One ME, Credit & SLIK</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-ink-500">Management:</span>
                    <span className="font-bold text-brand-crimson">JIRA, TestRail, Confluence, GitLab CI/CD</span>
                  </div>
                </div>
              )}

              {activeTab === 'sla' && (
                <div className="p-3 bg-brand-emerald/10 dark:bg-brand-emerald/20 border-2 border-brand-emerald text-ink-900 dark:text-ink-100 space-y-2">
                  <div className="font-bold text-brand-emerald">
                    // QA STANDAR EMAS (ZERO DEFECT ESCAPE):
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    "Setiap pengujian mematuhi matriks pelacakan (Traceability Matrix) penuh. Pengujian batas nilai (BVA) dan kasus ekstrim (Edge cases) diuji sebelum rilis UAT agar integritas transaksi finansial 100% terjamin tanpa risiko finansial."
                  </p>
                </div>
              )}

              {/* Status Footer */}
              <div className="pt-2 flex items-center justify-between text-ink-500 text-[11px] border-t border-ink-900/10 dark:border-ink-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping"></span>
                  QA Health: 100% Passed
                </span>
                <span className="font-bold text-ink-700 dark:text-ink-300">
                  QA-ID: {PERSONAL_INFO.preferredName.toUpperCase()}@TEST-LAB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
