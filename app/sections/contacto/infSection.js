'use client';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';
import Head from 'next/head';

export default function HeroSection() {
  const translations = useTranslation();

  // Configuración de la imagen de Cloudinary
  const contactImage = {
    publicId: 'galeria_6_pacikz', // Reemplaza con tu publicId en Cloudinary
    alt: translations.atencion?.title || 'Atención al cliente',
    transformations: {
      width: 600,
      height: 400,
      crop: 'fill',
      gravity: 'auto',
      quality: 'auto'
    }
  };

  return (
    <>
      <Head>
        <title>{translations.atencion?.title || 'Contacto'} - Flores Sons Farms</title>
        <meta name="description" content={translations.atencion?.description || 'Información de contacto'} />
      </Head>

      <section id='information' className="px-8 py-16 md:px-20 lg:px-36 flex flex-col md:flex-row items-center gap-12">
        {/* Información de contacto */}
        <div className="md:w-1/2 space-y-8">
          <h2
            id="quienes-somos-heading"
            className="text-5xl font-bold text-[#014421] font-serif border-l-8 border-[#5DBE66] pl-4"
          >
            {translations.atencion?.title}
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-transparent dark:from-green-500 dark:to-transparent"></span>
          </h2>

          <p className="text-lg leading-relaxed px-2 font-serif">
            {translations.atencion?.description}
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <FaPhoneAlt className="text-2xl" />,
                title: translations.tele?.title,
                description: translations.tele?.description,
                aria: translations.tele?.title || 'Teléfono',
              },
              {
                icon: <FaEnvelope className="text-2xl" />,
                title: translations.correo?.title,
                description: translations.correo?.description,
                aria: translations.correo?.title || 'Correo electrónico',
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl" />,
                title: translations.dire?.title,
                description: translations.dire?.description,
                aria: translations.dire?.title || 'Dirección',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-xl shadow-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-lg dark:hover:shadow-green-900/20"
                aria-label={item.aria}
              >
                <div className="flex items-center gap-5">
                  <span className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300">
                    {React.cloneElement(item.icon, {
                      className: `${item.icon.props.className} text-green-600 dark:text-white`,
                    })}
                  </span>
                  <div>
                    <p className="font-serif text-gray-900 dark:text-gray-100 font-semibold text-lg">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen de atención al cliente con Cloudinary */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative transform hover:scale-[1.01] transition-transform duration-300">
            <div className="overflow-hidden rounded-xl shadow-2xl border-gray-300 dark:border-gray-600 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <CldImage
                src={contactImage.publicId}
                alt={contactImage.alt}
                width={contactImage.transformations.width}
                height={contactImage.transformations.height}
                crop={contactImage.transformations.crop}
                gravity={contactImage.transformations.gravity}
                quality={contactImage.transformations.quality}
                className="rounded-lg w-full max-w-md h-auto relative z-0"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500 rounded-full opacity-30 blur-lg"></div>
          </div>
        </div>
      </section>
    </>
  );
}