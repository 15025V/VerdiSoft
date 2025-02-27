import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div role="banner">
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(31,64,55,0.8), rgba(31,64,55,0.6))",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Imagen de fondo optimizada con lazy loading */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/14.webp"
            alt="Fondo de Flores Sons Farms"
            layout="fill"
            objectFit="cover"
            quality={75}
            loading="lazy" // Carga diferida
          />
        </div>

        <div className="text-white px-6 relative z-10">
          <h1 className="text-8xl font-serif font-bold tracking-wide font-playfair italic text-center">
            Flores Sons Farms
          </h1>
          <p className="text-xl mt-6 text-gray-200 italic">
            "Explora la riqueza de productos que ofrecemos, fruto del esfuerzo y dedicación de nuestros productores en el Valle de Palmarito."
          </p>
          <a
            href="/contact"
            className="mt-9 inline-block px-8 py-3 border-2 border-gold-500 text-lg text-gold-500 rounded-full hover:bg-gold-500 hover:text-white transition-all"
            aria-label="Contáctanos"
            role="button"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}