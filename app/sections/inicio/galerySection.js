import Image from 'next/image';
import React from 'react';

export default function GalerySection() {
  const imagesLeft = ["/13.webp", "/13.jpeg"]; // Dos imágenes a la izquierda
  const imagesCenter = ["/13.webp", "/13.webp", "/13.webp"]; // Tres imágenes en el centro
  const imagesRight = ["/13.webp", "/13.webp"]; // Dos imágenes a la derecha

  return (
    <div role="region" aria-labelledby="galeria-heading">
      <section className="py-16 text-center"> {/* bg-gray-100 eliminado */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-10 relative">
            <h2 id="galeria-heading" className="text-5xl font-bold text-[#014421] inline-block pb-3 font-serif relative">
              <span className="relative z-10">Descubre nuestras instalaciones, procesos, productos y más</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-800 transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">“Todo a través de imágenes que reflejan nuestro compromiso con la calidad y el servicio.”</p>
          <div className="flex justify-center">
            {/* Imágenes de la izquierda */}
            <div className="grid grid-cols-1 gap-0 mr-4">
              {imagesLeft.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative aspect-square group">
                  <Image
                    src={src}
                    alt={`Galería izquierda ${index + 1}`}
                    width={200}
                    height={300}
                    className="rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Imágenes del centro */}
            <div className="grid grid-cols-1 gap-6 mx-4">
              {imagesCenter.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative aspect-square group">
                  <Image
                    src={src}
                    alt={`Galería centro ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Imágenes de la derecha */}
            <div className="grid grid-cols-1 gap-0 ml-4">
              {imagesRight.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative aspect-square group">
                  <Image
                    src={src}
                    alt={`Galería derecha ${index + 1}`}
                    width={200}
                    height={300}
                    className="rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* certificaciones  */}
      <div className="max-w-6xl mx-auto text-center mt-12">
        <div className="border-t-4 border-b -4 border-green-600 py-10">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <Image src="/bro.jpg" alt="High Quality" width={80} height={80} />
              <span className="text-lg font-semibold mt-3">High Quality</span>
              <span className="text-md text-gray-500">Crafted from top materials</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/bro.jpg" alt="Warranty Protection" width={80} height={80} />
              <span className="text-lg font-semibold mt-3">Warranty Protection</span>
              <span className="text-md text-gray-500">Over 2 years</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/bro.jpg" alt="Free Shipping" width={80} height={80} />
              <span className="text-lg font-semibold mt-3">Free Shipping</span>
              <span className="text-md text-gray-500">Order over $150</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/bro.jpg" alt="24/7 Support" width={80} height={80} />
              <span className="text-lg font-semibold mt-3">24/7 Support</span>
              <span className="text-md text-gray-500">Dedicated support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}