'use client';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbiSection() {
  const translations = useTranslation();
  return (
    <section className="px-8 py-16 md:px-24 lg:px-40 ">
      <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] mb-10 font-serif ml-14  border-[#014421] pb-2 font-serif border-l-8 border-[#5DBE66] pl-4">
        {translations.ubi?.title}
      </h2>
      <p className="text-lg leading-relaxed text-justify px-7 font-serif max-w-3xl mx-auto ">
        {translations.ubi?.description}
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-12">
        {/* Sucursal 1 */}
        <div className="w-full md:w-3/5 lg:w-2/3 bg-gray-50 p-6 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105">
          <h3 className="text-3xl font-semibold text-[#014421] border-b pb-2 mb-4">
            {translations.suc1?.title}
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
            className="w-full h-64 rounded-xl shadow-md"
            title="Mapa de Ubicación de Flores Sons Farms"
            aria-label="Mapa de Ubicación de Flores Sons Farms"
            loading="lazy"
          ></iframe>
          <div className="mt-4 flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <p className="text-lg font-serif">{translations.suc1?.description}</p>
          </div>
        </div>

        {/* Sucursal 2 */}
        <div className="w-full md:w-3/5 lg:w-2/3 bg-gray-50 p-6 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105">
          <h3 className="text-3xl font-semibold text-[#014421] border-b pb-2 mb-4">
            {translations.suc2?.title}
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
            className="w-full h-64 rounded-xl shadow-md"
            title="Mapa de Ubicación de Flores Sons Farms"
            aria-label="Mapa de Ubicación de Flores Sons Farms"
            loading="lazy"
          ></iframe>
          <div className="mt-4 flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <p className="text-lg font-serif">{translations.suc2?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}