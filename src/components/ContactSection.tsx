import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, copied }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Proyek Fullstack / AI',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link
    const subject = encodeURIComponent(`[Inquiry] ${formData.topic} - dari ${formData.name}`);
    const body = encodeURIComponent(
      `Halo Ihsan,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nTopik: ${formData.topic}\n\nPesan:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink-900 shadow-solid-xs">
              <span>[06] Hubungi & Kolaborasi</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-ink-950 dark:text-white tracking-tight">
              Mari Bangun Sesuatu yang Berdampak
            </h2>
            <p className="text-base text-ink-700 dark:text-ink-300 font-sans leading-relaxed">
              Tertarik mendiskusikan integrasi sistem AI, arsitektur fullstack skala enterprise, atau proyek rekayasa perangkat lunak custom? Saya siap berkolaborasi.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="p-6 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid space-y-4">
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink-900/10 dark:border-ink-700">
              <span className="font-mono text-xs text-ink-500 uppercase tracking-wider font-bold">
                Email Utama
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-emerald text-white text-[10px] font-mono font-bold uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Fast Response
              </span>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-sm sm:text-base font-bold text-ink-950 dark:text-white break-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={onCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-paper-alt dark:bg-paper-darkAlt text-ink-900 dark:text-white font-mono text-xs font-bold uppercase border-2 border-ink-900 dark:border-white shadow-solid-xs hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-brand-emerald" />
                      <span>Email Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-mono text-xs font-bold uppercase border-2 border-ink-900 dark:border-white shadow-solid-xs hover:bg-brand-emerald hover:text-white transition-colors"
                >
                  <Mail size={14} />
                  <span>Kirim Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid-xs hover:bg-paper-alt dark:hover:bg-paper-darkAlt flex items-center justify-between font-mono text-xs font-bold text-ink-900 dark:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <Github size={16} />
                <span>GitHub</span>
              </div>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid-xs hover:bg-paper-alt dark:hover:bg-paper-darkAlt flex items-center justify-between font-mono text-xs font-bold text-ink-900 dark:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-brand-blue" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Quick Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 bg-paper-surface dark:bg-paper-darkSurface border-3 border-ink-900 dark:border-ink-700 shadow-solid-lg space-y-5"
            style={{ borderWidth: '3px' }}
          >
            <div className="border-b-2 border-ink-900/10 dark:border-ink-700 pb-3">
              <h3 className="font-display font-bold text-xl text-ink-950 dark:text-white">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-ink-600 dark:text-ink-400 font-sans mt-0.5">
                Pesan akan langsung diarahkan ke email pribadi saya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold uppercase text-ink-800 dark:text-ink-200">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Misal: Budi Santoso"
                  className="w-full px-3 py-2.5 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 text-sm font-sans text-ink-950 dark:text-white focus:outline-none focus:border-brand-blue"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold uppercase text-ink-800 dark:text-ink-200">
                  Alamat Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@perusahaan.com"
                  className="w-full px-3 py-2.5 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 text-sm font-sans text-ink-950 dark:text-white focus:outline-none focus:border-brand-blue"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-xs font-bold uppercase text-ink-800 dark:text-ink-200">
                Topik Kolaborasi
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-3 py-2.5 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 text-sm font-sans text-ink-950 dark:text-white focus:outline-none focus:border-brand-blue"
              >
                <option value="Proyek Fullstack / AI">Proyek Fullstack / Solusi AI Enterprise</option>
                <option value="Desktop & Native Systems">Desktop & Native Systems Engineering</option>
                <option value="Peluang Kerja / Rekrutmen">Peluang Karir / Rekrutmen Tim</option>
                <option value="Konsultasi Teknis Lainnya">Konsultasi Teknis Lainnya</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-xs font-bold uppercase text-ink-800 dark:text-ink-200">
                Isi Pesan *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ceritakan gambaran proyek atau kebutuhan teknis Anda..."
                className="w-full px-3 py-2.5 bg-paper-alt dark:bg-paper-darkAlt border-2 border-ink-900 dark:border-ink-700 text-sm font-sans text-ink-950 dark:text-white focus:outline-none focus:border-brand-blue resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-brand-blue text-white font-mono text-sm font-bold uppercase tracking-wider border-2 border-ink-900 dark:border-white shadow-solid hover:bg-brand-blueDark hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-solid-sm transition-all flex items-center justify-center gap-2"
            >
              {formSubmitted ? (
                <>
                  <Check size={18} className="text-white" />
                  <span>Aplikasi Email Terbuka!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Kirim Pesan Sekarang</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
