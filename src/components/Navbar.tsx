import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proyek', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Filosofi', href: '#philosophy' },
    { name: 'Palet Warna', href: '#palette' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-paper-surface/95 dark:bg-paper-darkSurface/95 border-b-2 border-ink-900 dark:border-ink-700 py-3 backdrop-blur-none'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 bg-ink-900 dark:bg-brand-blue text-white flex items-center justify-center font-mono font-bold text-base tracking-wider border-2 border-ink-900 dark:border-white shadow-solid-xs group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            IS
          </div>
          <div>
            <div className="font-display font-bold text-base leading-tight tracking-tight text-ink-950 dark:text-white flex items-center gap-2">
              <span>M. Ihsan Syarifudin</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span className="text-xs font-mono text-brand-emerald font-semibold uppercase tracking-wider">
                Tersedia untuk Kolaborasi
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-paper-alt dark:bg-paper-darkAlt px-3 py-1.5 border-2 border-ink-900 dark:border-ink-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 text-sm font-semibold text-ink-800 dark:text-ink-200 hover:text-white hover:bg-brand-blue dark:hover:bg-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Tema Gelap/Terang"
            className="w-10 h-10 flex items-center justify-center bg-paper-surface dark:bg-paper-darkSurface text-ink-900 dark:text-ink-100 border-2 border-ink-900 dark:border-ink-700 shadow-solid-xs hover:bg-brand-amber hover:text-ink-950 dark:hover:bg-brand-amber dark:hover:text-ink-950 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Direct CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-brand-blue text-white text-sm font-bold border-2 border-ink-900 dark:border-white shadow-solid-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-solid-xs transition-all"
          >
            <span>Hubungi</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu"
            className="md:hidden w-10 h-10 flex items-center justify-center bg-paper-surface dark:bg-paper-darkSurface border-2 border-ink-900 dark:border-ink-700 shadow-solid-xs text-ink-900 dark:text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 border-t-2 border-ink-900 dark:border-ink-700 bg-paper-surface dark:bg-paper-darkSurface px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-bold text-ink-900 dark:text-white hover:bg-brand-blue hover:text-white border border-transparent hover:border-ink-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 py-2.5 bg-brand-blue text-white font-bold border-2 border-ink-900 dark:border-white shadow-solid-sm"
          >
            Mulai Diskusi Proyek
          </a>
        </div>
      )}
    </header>
  );
};
