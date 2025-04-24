'use client';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbiSection() {
  const translations = useTranslation();
  return (
    <section id='locatedin' className="px-8 py-16 md:px-24 lg:px-40 ">
      <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] mb-10 font-serif ml-14  border-[#014421] pb-2 font-serif border-l-8 border-[#5DBE66] pl-4">
        {translations.ubi?.title}
      </h2>
      <p className="text-lg leading-relaxed text-justify px-7 font-serif max-w-3xl mx-auto ">
        {translations.ubi?.description}
      </p>

      <div className="flex flex-col  justify-center gap-10 mt-12">

        {/* Sucursal 1 */}
        <div className="w-full text-left">
          <div className="p-8 md:p-14 rounded-xl shadow-2xl border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-lg dark:hover:shadow-green-900/20">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-500 font-['Playfair_Display'] tracking-wide uppercase relative">
              {translations.suc1?.title}
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 dark:bg-green-400"></span>
            </h1>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3774.847936954381!2d-97.65377199999999!3d18.893826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDUzJzM3LjgiTiA5N8KwMzknMTMuNiJX!5e0!3m2!1ses-419!2smx!4v1744227943018!5m2!1ses-419!2smx"
              className="w-full h-[300px] md:h-[450px] lg:h-[700px] rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] mb-6"
              title="Mapa de Ubicación de Flores Sons Farms"
              aria-label="Mapa de Ubicación de Flores Sons Farms"
              loading="lazy"
            />


            <div className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed font-serif text-gray-700 dark:text-gray-300 space-y-4">
              <p
                className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm"
                aria-label="Dirección"
              >
                <span className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300">
                  <FaMapMarkerAlt className="text-2xl" />
                </span>
                <span>{translations.suc1?.description}</span>
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}