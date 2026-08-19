import React from 'react';

export const SpeakersSection: React.FC = () => {
  const speakers = [
    {
      name: 'Ignacio Alexander Navarro',
      role: 'Director y Fundador / Productor de Eventos, Comunicador y Relator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      quote:
        '“Conectar es conectar con nuestras huellas, con nuestras tierras y raíces, para recuperar nuestra identidad local. Nuestra Huella Sureña será leyenda.”',
    },
    {
      name: 'Diego Vallejos Guzmán',
      role: 'Relator y Contador Auditor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
      quote:
        '“Ninguna persona puede decirle a otra si puede o no hacer algo; basta con proponérselo. Ser parte de este proyecto me cambió la perspectiva: hay personas que quieren cambiar la vida de otras, y esa es nuestra huella.”',
    },
  ];

  return (
    <section id="relatores" className="py-20 bg-niebla-50 text-niebla-800 border-t border-niebla-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 bg-[#BD6836]"></span>
            <span className="font-label text-xs sm:text-sm tracking-[0.2em] font-medium uppercase text-[#BD6836]">
              VOCES DEL TERRITORIO
            </span>
            <span className="h-[2px] w-6 bg-[#BD6836]"></span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-niebla-900">
            Nuestros Relatores y Liderazgo
          </h2>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-niebla-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              {/* Photo */}
              <div className="w-28 h-32 sm:w-36 sm:h-40 rounded-xl overflow-hidden shrink-0 shadow-sm border border-niebla-200 grayscale contrast-110">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Content */}
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-bold text-niebla-900">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#BD6836] tracking-wide mt-0.5">
                    {speaker.role}
                  </p>
                </div>
                <p className="text-sm italic text-niebla-600 leading-relaxed font-serif">
                  {speaker.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
