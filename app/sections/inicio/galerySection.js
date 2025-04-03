import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function GallerySplitSection() {
  const translations = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null); // Estado para el modal

  const enterpriseImages = [
    { src: "/galeria_2.webp", alt: "Nuestras instalaciones" },
    { src: "/galeria_2.webp", alt: "Equipo de trabajo" },
    { src: "/galeria_2.webp", alt: "Proceso de empaque" },
    { src: "/galeria_2.webp", alt: "Control de calidad" },
  ];

  const fieldImages = [
    { src: "/galeria_2.webp", alt: "Cultivos en campo abierto" },
    { src: "/galeria_2.webp", alt: "Invernaderos de producción" },
    { src: "/galeria_2.webp", alt: "Cosecha sostenible" },
    { src: "/galeria_2.webp", alt: "Tecnologia agricola" },
  ];

  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-6">
        <GallerySection
          title={translations.gallery?.enterpriseTitle || "Nuestra Empresa"}
          subtitle={translations.gallery?.enterpriseSubtitle || "Conoce nuestras instalaciones y procesos internos"}
          images={enterpriseImages}
          onImageClick={setSelectedImage}
        />

        <GallerySection
          title={translations.gallery?.fieldTitle || "Nuestro Campo"}
          subtitle={translations.gallery?.fieldSubtitle || "Descubre nuestros cultivos y practicas sostenibles"}
          images={fieldImages}
          onImageClick={setSelectedImage}
        />
      </div>

      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
}

// Seccion de galeria con titulo, subtitulo y grid de imagenes
function GallerySection({ title, subtitle, images, onImageClick }) {
  return (
    <div className="mb-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-serif relative inline-block pb-3">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></span>
        </h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto font-light">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <GalleryCard key={index} image={image} onClick={() => onImageClick(image)} />
        ))}
      </div>
    </div>
  );
}

//  Tarjeta de imagen con hover y overlay elegante
function GalleryCard({ image, onClick }) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 h-72 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        quality={90}
        placeholder="blur"
        blurDataURL={image.src}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <p className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {image.alt}
        </p>
      </div>
    </div>
  );
}
//  Lightbox con animacion y boton de cierre elegante
function Lightbox({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full p-4">
        {/*  Boton de cierre elegante */}
        <button
          className="absolute top-5 right-5 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          className="rounded-lg shadow-lg object-contain w-full"
        />
      </div>
    </div>
  );
}