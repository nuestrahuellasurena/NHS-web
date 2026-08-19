import React from 'react';
import { Users, Sparkles, MessageCircleHeart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Inclusión como motor de cambio',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      icon: Users,
      description:
        'Es el corazón de nuestra huella sureña. Trabajamos día a día para derribar barreras sociales y culturales, garantizando que personas de todas las realidades, orígenes y condiciones tengan un rol activo y protagónico en nuestra sociedad.',
    },
    {
      title: 'Empleabilidad y desarrollo de talento',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      icon: Sparkles,
      description:
        'Creemos en el potencial de nuestra gente y los preparamos para los desafíos del futuro. Impulsamos la empleabilidad facilitando herramientas que fomentan la innovación y el emprendimiento como motores clave para el crecimiento sostenible. Conectamos los talentos locales con oportunidades reales para mejorar la calidad de vida en nuestra región.',
    },
    {
      title: 'Comunicaciones con sentido',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
      icon: MessageCircleHeart,
      description:
        'Generamos instancias de diálogo, capacitación y reflexión. A través de nuestras charlas, compartimos saberes, visibilizamos historias de superación y entregamos herramientas prácticas que inspiran a la comunidad a convertirse en agentes de cambio dentro de su propio entorno.',
    },
  ];

  return (
    <section id="quienes-somos" className="bg-niebla-50 text-niebla-800">
      
      {/* 1. Bloque: ¿Qué es nuestra huella sureña? */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-niebla-900">
          ¿Qué es nuestra huella sureña?
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-niebla-600 leading-relaxed max-w-4xl mx-auto font-normal text-justify sm:text-center">
          <p>
            Somos un ecosistema creado para proyectar la identidad de nuestra tierra hacia el futuro. En{' '}
            <strong className="text-niebla-900 font-semibold italic">Nuestra Huella Sureña</strong>, utilizamos la tecnología, la inclusión y la conexión en red como un puente para visibilizar las historias, tradiciones, y los rostros de nuestra gente para trascender fronteras.
          </p>

          <p>
            No somos solo un archivo de memoria; somos una comunidad viva y en constante evolución. Transformamos el patrimonio cultural, el esfuerzo de nuestros emprendedores y la sabiduría de nuestras agrupaciones en una red interactiva que inspira, une y empodera. Es el lugar donde nuestra historia abraza la innovación y la inclusión, asegurando que el latido del sur resuene fuerte en las nuevas generaciones.
          </p>
        </div>
      </div>

      {/* 2. Banner Intermedio: ¿Qué hacemos? Nuestro compromiso en acción */}
      <div className="relative py-14 bg-forest-pattern text-white text-center shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#14312A]/90 via-[#14312A]/80 to-[#0D211B]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-md">
            ¿Qué hacemos? Nuestro compromiso en acción
          </h2>
        </div>
      </div>

      {/* 3. Las 3 Tarjetas de Pilares */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-niebla-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image Placeholder Container */}
                <div className="relative h-64 bg-niebla-100 overflow-hidden border-b border-niebla-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge Floating Icon */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-musgo-600/90 text-[#BD6836] flex items-center justify-center backdrop-blur-md shadow-md border border-musgo-500/40">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-niebla-900 leading-snug group-hover:text-fiordo-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-niebla-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
