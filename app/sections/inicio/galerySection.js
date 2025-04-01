import Image from 'next/image';
import React from 'react';
import { useTranslation } from '@/app/hooks/useTranslation';

export default function GallerySplitSection() {
  const translations = useTranslation();
  
  const enterpriseImages = [
    { src: "/galeria_2.webp", alt: "Nuestras instalaciones" },
    { src: "/galeria_2.webp", alt: "Equipo de trabajo" },
    { src: "/galeria_2.webp", alt: "Proceso de empaque" },
    { src: "/galeria_2.webp", alt: "Control de calidad" }
  ];

  const fieldImages = [
    { src: "/galeria_2.webp", alt: "Cultivos en campo abierto" },
    { src: "/galeria_2.webp", alt: "Invernaderos de producción" },
    { src: "/galeria_2.webp", alt: "Cosecha sostenible" },
    { src: "/galeria_2.webp", alt: "Tecnología agrícola" }
  ];

  return (
    <section className="relative py-20 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección Empresa */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif relative inline-block">
              {translations.gallery?.enterpriseTitle || "Nuestra Empresa"}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
            </h2>
            <p className="mt-6 text-lgmax-w-3xl mx-auto font-serif">
              {translations.gallery?.enterpriseSubtitle || "Conoce nuestras instalaciones y procesos internos"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseImages.map((image, index) => (
              <GalleryCard key={`empresa-${index}`} image={image} />
            ))}
          </div>
        </div>

        {/* Sección Campo */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif relative inline-block">
              {translations.gallery?.fieldTitle || "Nuestro Campo"}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
            </h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto font-serif">
              {translations.gallery?.fieldSubtitle || "Descubre nuestros cultivos y prácticas sostenibles"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fieldImages.map((image, index) => (
              <GalleryCard key={`campo-${index}`} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente de tarjeta reutilizable
function GalleryCard({ image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 h-64">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {image.alt}
        </p>
      </div>
    </div>
  );
}