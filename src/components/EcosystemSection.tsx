import React from 'react';
import { Video, Briefcase, Mic, ArrowRight } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  const identityCards = [
    {
      tag: 'LA ESENCIA',
      title: 'Comunidad',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    },
    {
      tag: 'LA MISIÓN',
      title: 'Equipo',
      brandBadge: 'HUELLA SUREÑA',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    },
    {
      tag: 'LA VISIÓN',
      title: 'Aliados',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const services = [
    {
      icon: Video,
      title: 'Servicios Audiovisuales',
      description:
        'Producción de contenido con identidad local. Relatos visuales que conectan marcas y proyectos con su audiencia de forma auténtica.',
      href: '#servicios-audiovisuales',
    },
    {
      icon: Briefcase,
      title: 'Bolsa de Empleo',
      description:
        'Plataforma dedicada a conectar el talento de Los Lagos con oportunidades laborales que valoran el arraigo y la capacidad técnica.',
      href: '#bolsa-empleo',
    },
    {
      icon: Mic,
      title: 'Estudio de Grabación',
      description:
        'Espacio profesional para podcasts, locuciones y proyectos musicales, equipado con tecnología de punta en el corazón de Puerto Montt.',
      href: '#estudio-grabacion',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-[#0D211B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#BD6836]"></span>
            <span className="font-label text-xs sm:text-sm tracking-[0.2em] font-medium uppercase text-[#BD6836]">
              ECOSISTEMA DE VALOR
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Nuestra Identidad y Servicios
          </h2>
        </div>

        {/* 3 Identity Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {identityCards.map((card, idx) => (
            <div
              key={idx}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group border border-fiordo-800/60 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Optional Top Brand Tag */}
              {card.brandBadge && (
                <div className="absolute top-4 left-4 text-[10px] tracking-wider uppercase font-semibold text-gray-300 bg-black/40 px-2.5 py-1 rounded border border-white/20">
                  {card.brandBadge}
                </div>
              )}

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="font-label text-[11px] font-medium tracking-[0.2em] uppercase text-[#BD6836]">
                  {card.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Territorial Solutions Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Soluciones Territoriales
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Ofrecemos herramientas prácticas y plataformas creativas para impulsar el desarrollo profesional y organizacional en la región.
            </p>
          </div>

          {/* Right Services List */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <a
                  key={idx}
                  href={service.href}
                  className="group flex items-start sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-xl bg-[#0A1A15]/80 hover:bg-[#122B1F] border border-fiordo-800/50 hover:border-musgo-500/60 transition-all duration-300 shadow-inner"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-fiordo-800/80 border border-musgo-500/40 flex items-center justify-center shrink-0 text-[#BD6836] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Text */}
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#BD6836] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="shrink-0 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
