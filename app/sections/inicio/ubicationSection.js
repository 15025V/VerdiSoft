import React from 'react';
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbicationSection() {
  const translations = useTranslation();

  return (
    <div role="region" aria-labelledby="ubicacion-heading">
      <section id='find us on' className="py-1 md:py-1 text-center transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12 md:mb-16">
            <h2
              id="ubicacion-heading"
              className="text-5xl md:text-5xl font-semibold  tracking-wide font-serif pb-3 relative inline-block"
            >
              {translations.ubicacion?.title}
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center max-w-7xl mx-auto">
            {/* Mapa de ubicación */}
            <div className="w-full md:w-1/2 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="overflow-hidden rounded-xl shadow-2xl border-2 border-gray-300 dark:border-gray-600 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
                  className="w-full h-[300px] md:h-[450px] rounded-xl relative z-0"
                  title="Mapa de Ubicación de Flores Sons Farms"
                  aria-label="Mapa de Ubicación de Flores Sons Farms"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="w-full md:w-1/2 text-left">
              <div className="p-8 md:p-14 rounded-xl shadow-2xl border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-lg dark:hover:shadow-green-900/20">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white font-['Playfair_Display'] tracking-wide uppercase relative">
                  Flores Sons Farms
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 dark:bg-green-400"></span>
                </h1>

                <div className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed font-serif text-gray-700 dark:text-gray-300 space-y-4">
                  {[
                    {
                      icon: <FaMapMarkerAlt className="text-2xl " />,
                      label: translations.ubicacion?.direccion,
                      aria: "Dirección",
                    },
                    {
                      icon: <FaPhoneAlt className="text-2xl" />,
                      label: translations.ubicacion?.telefono,
                      aria: "Teléfono",
                    },
                    {
                      icon: <FaEnvelope className="text-2xl" />,
                      label: translations.ubicacion?.correo,
                      aria: "Correo",
                    }
                  ].map((item, index) => (
                    <p
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm"
                      aria-label={item.aria}
                    >
                      <span className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </p>
                  ))}
                </div>


                <a
                  href="/contact"
                  className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-900 dark:from-green-600 dark:to-green-800 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl inline-block group"
                  aria-label={translations.ubicacion?.boton}
                  role="button"
                >
                  <span className="relative z-10">{translations.ubicacion?.boton}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}