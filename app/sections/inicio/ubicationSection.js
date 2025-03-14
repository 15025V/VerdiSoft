import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function UbicationSection() {
  const translations = useTranslation();

  return (
    <div role="region" aria-labelledby="ubicacion-heading">
      <section className="py-16 text-center">
        <div className="flex items-center justify-center mb-10">
          <h2 id="ubicacion-heading" className="text-5xl font-bold text-[#49c351] inline-block pb-3 font-serif">
            {translations.ubicacion?.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 px-8 items-center">
          <div className="md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
              className="w-full h-96 rounded-xl shadow-lg"
              title="Mapa de Ubicación de Flores Sons Farms"
              aria-label="Mapa de Ubicación de Flores Sons Farms"
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/2 text-left">
            <div className="p-10 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-[#49c351] font-['Playfair_Display']">
                Flores Sons Farms
              </h3>
              <div className="mb-6 text-lg text leading-relaxed">
                <p>{translations.ubicacion?.direccion}</p>
                <p>{translations.ubicacion?.telefono}</p>
                <p>{translations.ubicacion?.correo}</p>
              </div>
              <a
                href="/contact"
                className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#008000] transition-all duration-300 shadow-md hover:shadow-xl inline-block"
                aria-label={translations.ubicacion?.boton}
                role="button"
              >
                {translations.ubicacion?.boton}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}