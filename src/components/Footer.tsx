import React from 'react';
import { TreePine, MapPin, Mail, Phone, Globe, Users, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1A15] text-gray-300 border-t border-fiordo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-fiordo-800/80 border border-musgo-500/50 flex items-center justify-center text-[#BD6836]">
                <TreePine className="w-6 h-6" />
              </div>
              <span className="font-display font-semibold text-xl text-white tracking-tight">
                Nuestra Huella Sureña
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Innovación social y conexión territorial desde el corazón de la Región de Los Lagos.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-label text-xs font-medium uppercase tracking-[0.2em] text-[#BD6836]">
              CONTACTO
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-musgo-400 shrink-0" />
                <span>Puerto Montt - Región de Los Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-musgo-400 shrink-0" />
                <a
                  href="mailto:nuestrahuellasurena@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  nuestrahuellasurena@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-musgo-400 shrink-0" />
                <a href="tel:+56949991768" className="hover:text-white transition-colors">
                  +56 9 4999 1768
                </a>
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-label text-xs font-medium uppercase tracking-[0.2em] text-[#BD6836]">
              REDES SOCIALES
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="#web"
                aria-label="Sitio Web"
                className="w-10 h-10 rounded-full bg-fiordo-950 hover:bg-musgo-600/80 border border-musgo-600/60 flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#comunidad"
                aria-label="Comunidad"
                className="w-10 h-10 rounded-full bg-fiordo-950 hover:bg-musgo-600/80 border border-musgo-600/60 flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <Users className="w-5 h-5" />
              </a>
              <a
                href="#compartir"
                aria-label="Compartir"
                className="w-10 h-10 rounded-full bg-fiordo-950 hover:bg-musgo-600/80 border border-musgo-600/60 flex items-center justify-center text-gray-300 hover:text-white transition-all"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-fiordo-950/80 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Nuestra Huella Sureña. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#privacidad" className="hover:text-gray-300 transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="hover:text-gray-300 transition-colors">
              Términos
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
