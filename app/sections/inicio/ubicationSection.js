import React from 'react';
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbicationSection() {
  const translations = useTranslation();

  return (
    <div role="region" aria-labelledby="ubicacion-heading">
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-200 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <h2 id="ubicacion-heading" className="text-5xl md:text-5xl font-semibold text-green-900 tracking-wide font-serif pb-4">
              {translations.ubicacion?.title}
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Mapa de ubicación */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-xl shadow-2xl border border-gray-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
                  className="w-full h-[300px] md:h-[450px] rounded-xl"
                  title="Mapa de Ubicación de Flores Sons Farms"
                  aria-label="Mapa de Ubicación de Flores Sons Farms"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="w-full md:w-1/2 text-left">
              <div className="p-8 md:p-14 rounded-xl shadow-2xl border border-gray-400 bg-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-['Playfair_Display'] tracking-wide uppercase">
                  Flores Sons Farms
                </h3>
                <div className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed font-serif text-gray-700">
                  <p className="flex items-center gap-4 mb-3 md:mb-4">
                    <HiLocationMarker className="text-green-500 text-3xl" />
                    <span>{translations.ubicacion?.direccion}</span>
                  </p>
                  <p className="flex items-center gap-4 mb-3 md:mb-4">
                    <HiPhone className="text-green-500 text-3xl" />
                    <span>{translations.ubicacion?.telefono}</span>
                  </p>
                  <p className="flex items-center gap-4 mb-3 md:mb-4">
                    <HiMail className="text-green-500 text-3xl" />
                    <span>{translations.ubicacion?.correo}</span>
                  </p>
                </div>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-green-700 to-green-900 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl inline-block"
                  aria-label={translations.ubicacion?.boton}
                  role="button"
                >
                  {translations.ubicacion?.boton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
