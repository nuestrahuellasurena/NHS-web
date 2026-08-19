import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-forest-pattern text-white min-h-[90vh] flex items-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 w-full z-10">
        <div className="max-w-3xl space-y-6">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#BD6836]"></span>
            <span className="font-label text-xs sm:text-sm tracking-[0.2em] font-medium uppercase text-[#D0854F]">
              Región de Los Lagos
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
            Nuestra Huella Sureña:
            <br />
            <span className="text-[#D0854F]">el futuro de nuestras raíces.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-niebla-200 font-normal leading-relaxed max-w-2xl">
            Conectando el alma del sur de Chile con el mundo de mañana.
            Innovación social, empleabilidad e inclusión impulsada por la fuerza de nuestro territorio.
          </p>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#BD6836] hover:bg-[#A2532B] text-fiordo-950 font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
            >
              Explorar proyecto
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#voluntariados"
              className="inline-flex items-center px-6 py-3.5 rounded-lg border border-[#BD6836]/70 hover:border-[#BD6836] text-white hover:bg-[#BD6836]/10 font-medium text-sm transition-all"
            >
              Conocer voluntariado
            </a>
          </div>
        </div>
      </div>

      {/* Firma visual: hilera de tejuelas de alerce, el revestimiento de madera
          característico de las fachadas de Puerto Montt y Chiloé */}
      <div
        className="shingle-divider absolute bottom-0 left-0 w-full z-10"
        style={{ ['--shingle-color' as string]: 'var(--color-niebla-50)' }}
        aria-hidden="true"
      />
    </section>
  );
};
