import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatBar } from './components/StatBar';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ColorPaletteShowcase } from './components/ColorPaletteShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project, PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#1D4ED8', '#D97706', '#059669', '#DC2626', '#11141A'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      setCopiedEmail(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-paper-canvas text-ink-950 dark:bg-paper-darkCanvas dark:text-ink-50 font-sans selection:bg-brand-blue selection:text-white transition-colors duration-200">
      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Sections */}
      <main>
        <Hero onCopyEmail={handleCopyEmail} copied={copiedEmail} />
        <StatBar />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <TechStackSection />
        <ExperienceSection />
        <PhilosophySection />
        <ColorPaletteShowcase />
        <ContactSection onCopyEmail={handleCopyEmail} copied={copiedEmail} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
