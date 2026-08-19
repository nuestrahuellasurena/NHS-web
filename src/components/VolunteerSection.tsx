import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  return (
    <section id="voluntariados" className="py-20 bg-niebla-50 text-niebla-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Volunteer Photo with Badge */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-niebla-200">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop"
                alt="Voluntarios realizando trabajo en el sur de Chile"
                className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge Tag */}
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BD6836] text-niebla-950 text-xs sm:text-sm font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-niebla-900 animate-pulse"></span>
                  Inscripciones Abiertas
                </span>
              </div>
            </div>
          </div>

          {/* Right Text & CTA Box */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-niebla-900 leading-tight">
                ¿Qué huella quieres dejar en el sur?
              </h2>
              <p className="text-base sm:text-lg text-niebla-600 leading-relaxed">
                Únete a nuestra red de voluntariado. Buscamos personas apasionadas, profesionales y estudiantes que deseen aportar su conocimiento para fortalecer la trama social y económica de nuestra región.
              </p>
            </div>

            {/* Conversation Box */}
            <div className="bg-niebla-100/80 rounded-2xl p-6 sm:p-8 border border-niebla-200 space-y-5">
              <h3 className="text-lg font-bold text-niebla-900">
                Inicia la conversación
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/56949991768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-sm hover:shadow transition-all"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  WhatsApp
                </a>

                {/* Email Button */}
                <a
                  href="mailto:nuestrahuellasurena@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-niebla-50 border border-niebla-300 text-niebla-700 hover:text-niebla-900 font-semibold text-sm shadow-sm transition-all"
                >
                  <Mail className="w-5 h-5 text-niebla-600" />
                  Enviar Correo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
