import React from 'react';

export const SponsorsSection: React.FC = () => {
  const sponsors = [
    {
      name: 'GOB. REG',
      icon: (
        <span className="w-5 h-5 bg-niebla-400 rounded-sm inline-block"></span>
      ),
    },
    {
      name: 'INACAP',
      icon: (
        <span className="w-5 h-5 bg-niebla-400 rounded-full inline-block"></span>
      ),
    },
    {
      name: 'CORFO',
      icon: (
        <span className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-niebla-400 inline-block"></span>
      ),
    },
    {
      name: 'FOSIS',
      icon: (
        <span className="w-4 h-4 bg-niebla-400 rotate-45 inline-block"></span>
      ),
    },
  ];

  return (
    <section id="aliados" className="py-16 bg-niebla-100/60 border-t border-niebla-200/80 text-niebla-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        {/* Title */}
        <p className="font-label text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-niebla-500">
          ORGANIZACIONES QUE CONFÍAN EN NUESTRO IMPACTO
        </p>

        {/* Sponsor Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-niebla-600 hover:text-niebla-900 transition-colors cursor-pointer group"
            >
              <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                {sponsor.icon}
              </div>
              <span className="font-bold tracking-wider text-base sm:text-lg">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
