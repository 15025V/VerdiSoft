'use client';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbiSection() {
  const translations = useTranslation();
  return (
    <section id='located in' className="px-8 py-16 md:px-24 lg:px-40 ">
      <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] mb-10 font-serif ml-14  border-[#014421] pb-2 font-serif border-l-8 border-[#5DBE66] pl-4">
        {translations.ubi?.title}
      </h2>
      <p className="text-lg leading-relaxed text-justify px-7 font-serif max-w-3xl mx-auto ">
        {translations.ubi?.description}
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-12">
      
       {/* Sucursal 1 */}
<div className="w-full text-left">
  <div className="p-8 md:p-14 rounded-xl shadow-2xl border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-lg dark:hover:shadow-green-900/20">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white font-['Playfair_Display'] tracking-wide uppercase relative">
      {translations.suc1?.title}
      <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 dark:bg-green-400"></span>
    </h1>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
      className="w-full h-64 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] mb-6"
      title="Mapa de Ubicación de Flores Sons Farms"
      aria-label="Mapa de Ubicación de Flores Sons Farms"
      loading="lazy"
    ></iframe>

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

       {/* Sucursal 1 */}
       <div className="w-full text-left">
  <div className="p-5 md:p-14 rounded-xl shadow-2xl border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-lg dark:hover:shadow-green-900/20">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white font-['Playfair_Display'] tracking-wide uppercase relative">
      {translations.suc2?.title}
      <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-500 dark:bg-green-400"></span>
    </h1>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
      className="w-full h-64 rounded-lg shadow-md transition-all duration-300 hover:scale-[1.02] mb-6"
      title="Mapa de Ubicación de Flores Sons Farms"
      aria-label="Mapa de Ubicación de Flores Sons Farms"
      loading="lazy"
    ></iframe>

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