import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

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

        <div className="container mx-auto px-6 relative z-10 flex items-center h-full">
          {/* Texto y botón a la izquierda */}
          <div className="w-1/2 flex justify-center text-white flex-col items-center"> {/* Centrado con flex */}
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-wide font-playfair italic">
              Flores Sons Farms
            </h1>
            <p className="text-xl mt-4 md:mt-6 text-gray-200 italic text-center"> {/* Texto centrado */}
              "Calidad que se siente,<br />frescura que se nota."
            </p>
            <a
              href="/contact"
              className="mt-6 md:mt-9 inline-block px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all"
              aria-label="Contáctanos"
              role="button"
            >
              Contáctanos
            </a>
          </div>

          {/* Imagen redonda a la derecha */}
          <div className="w-1/2 flex justify-center items-center"> {/* Cambiado justify-end a justify-center */}
            <Image
              src="/repollo.jpeg"
              alt="Imagen Redonda"
              width={320}
              height={380}
              className="rounded-full"
            />


            {/* Redes Sociales */}
            <div className="absolute bottom-10 right-10 flex space-x-6 text-white text-2xl">
              <a href="https://instagram.com" className="hover:text-green-400" aria-label="Instagram">
                <FaInstagram /> {/* Icono de Instagram */}
              </a>
              <a href="https://facebook.com" className="hover:text-green-400" aria-label="Facebook">
                <FaFacebook /> {/* Icono de Facebook */}
              </a>
              <a href="https://twitter.com" className="hover:text-green-400" aria-label="Twitter"> {/* Enlace corregido a Twitter */}
                <FaTwitter /> {/* Icono de Twitter */}
              </a>
            </div>
          </div> {/* Cierre del div para la imagen redonda */}
        </div>
      </section>
    </div>
  );
}