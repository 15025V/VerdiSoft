'use client';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbiSection() {
  const translations = useTranslation();

  return (
    <section id='locatedin' className="px-8 py-16 md:px-24 lg:px-40">
      <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] mb-10 font-serif ml-14 border-[#014421] pb-2 border-l-8 border-[#5DBE66] pl-4">
        {translations.ubi?.title}
      </h2>

      <p className="text-lg leading-relaxed text-justify px-7 font-serif max-w-3xl mx-auto">
        {translations.ubi?.description}
      </p>

      <div className="mt-16 flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">

        {/* Mapa */}
        <div className=" w-full h-[400px] md:h-[500px] lg:h-[600px]">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3774.847936954381!2d-97.65377199999999!3d18.893826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDUzJzM3LjgiTiA5N8KwMzknMTMuNiJX!5e0!3m2!1ses-419!2smx!4v1744227943018!5m2!1ses-419!2smx"
            className="w-full h-full border-0"
            title="Mapa de Ubicación de Flores Sons Farms"
            aria-label="Mapa de Ubicación de Flores Sons Farms"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.847297515729!2d-97.65647192533913!3d18.89385435766649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565007e40e58d%3A0xa1e827010fcd9082!2sFLORES%20SON&#39;S%20FARMS!5e0!3m2!1ses!2smx!4v1748653077290!5m2!1ses!2smx" 
               className="w-full h-full border-0"
            title="Mapa de Ubicación de Flores Sons Farms"
            aria-label="Mapa de Ubicación de Flores Sons Farms"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade" ></iframe>
        </div>


        {/* Información */}
        <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-green-500 mb-4 font-['Playfair_Display'] uppercase tracking-wide">
            {translations.suc1?.title}
          </h3>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-white/10 dark:bg-white/10 backdrop-blur-sm">
            <span className="p-3 bg-white/10 rounded-full">
              <FaMapMarkerAlt className="text-2xl text-green-500" />
            </span>
            <span className="text-gray-800 dark:text-gray-200 font-serif">
              Calle 3 Sur S/N, Froylán C. Manjarrez, Palmarito Tochapan, Puebla. C.P. 75470.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
