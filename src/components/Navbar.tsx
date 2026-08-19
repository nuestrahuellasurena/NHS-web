import React, { useState, useEffect } from 'react';
import { Menu, X, TreePine } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Aliados', href: '#aliados' },
  { label: 'Voluntariados', href: '#voluntariados' },
  { label: 'Relatores', href: '#relatores' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Scroll-spy: resalta el enlace de la sección visible en pantalla
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClasses = (href: string, isMobile = false) => {
    const isActive = activeSection === href.replace('#', '');
    if (isMobile) {
      return `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
        isActive
          ? 'bg-fiordo-800/40 text-[#BD6836]'
          : 'text-gray-300 hover:bg-fiordo-800/20 hover:text-white'
      }`;
    }
    return `text-sm font-medium transition-colors hover:text-[#BD6836] relative py-1 ${
      isActive
        ? 'text-[#BD6836] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#BD6836]'
        : 'text-gray-300'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#14312A]/95 backdrop-blur-md border-b border-fiordo-800/40 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-musgo-600/60 border border-musgo-500/30 flex items-center justify-center text-lago-300 group-hover:scale-105 transition-transform">
            <TreePine className="w-6 h-6 text-[#BD6836]" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-white group-hover:text-[#D0854F] transition-colors">
            Nuestra Huella Sureña
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
              className={linkClasses(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-fiordo-800/50"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D211B] border-b border-fiordo-800/50 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
              className={linkClasses(link.href, true)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
