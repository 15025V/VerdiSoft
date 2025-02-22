'use client';

import Image from 'next/image';
import React from 'react';
import { MapPin, CheckCircle, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <>
     <section 
  className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" 
  style={{ 
    backgroundImage: "linear-gradient(to bottom, rgba(31,64,55,0.8), rgba(31,64,55,0.6)), url('/14.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="text-white px-6">
    <h1 className="text-8xl font-serif font-bold tracking-wide font-playfair  italic text-center ">Flores Sons Farms</h1>
    <p className="text-xl mt-6 text-gray-200 italic">"Explora la riqueza de productos que ofrecemos, fruto del esfuerzo y dedicación de nuestros productores en el Valle de Palmarito."</p>
    <a 
      href="/contact" 
      className="mt-9 inline-block px-8 py-3 border-2 border-gold-500 text-lg text-gold-500 rounded-full hover:bg-gold-500 hover:text-white transition-all"
    >
      Contáctanos
    </a>
  </div>
</section>

<section className="py-12">
    <h2 className="text-5xl font-bold text-[#014421] mb-8 border-[#014421] font-serif ml-14">¿Quiénes Somos?</h2>
    <div className="w-3/4 mx-auto"> 
        <p className="text-justify px-7 font-scrip">
            Somos una empresa dedicada a la exportación de flores frescas de la más alta calidad, cultivadas con pasión y cuidado en nuestros campos. Nuestro compromiso con la excelencia, la sostenibilidad y la innovación nos ha posicionado como un referente en el mercado internacional, llevando la belleza de nuestras flores a cada rincón del mundo. Desde la siembra hasta la entrega, garantizamos un proceso impecable, asegurando que cada flor conserve su frescura, color y aroma, ofreciendo a nuestros clientes un producto premium que supera las expectativas. En Sons Farms, florecemos con cada envío.
        </p>
    </div>
</section>

  {/* Sección de categorías */}
<section className="py-12 bg-white text-center">
  <h2 className="text-5xl font-bold text-[#014421] mb-8 border-[#014421] inline-block pb-2 font-serif">
    Nuestras Categorías
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
    {["/galeria_5.jpeg", "/galeria_5.jpeg", "/galeria_5.jpeg", "/galeria_5.jpeg"].map((src, index) => (
      <div key={index} className="relative overflow-hidden group">
        <Image
          src={src}
          alt="Producto"
          width={200} // Ajusta el ancho según tus necesidades
          height={200} // Ajusta la altura según tus necesidades
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</section>
    {/* Por qué elegirnos */}
<section className="py-12 bg-green-900 text-center">
  <h2 className="text-5xl font-bold text-[#FFFFFF] mb-8 border-b-2 border-[#FFFFFF] inline-block pb-2 font-serif">
    ¿Por qué elegir Flores Sons Farms?
  </h2>
  <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <CheckCircle className="text-[#014421] w-12 h-12 mb-4 mx-auto" />
      <h3 className="text-2xl font-semibold text-[#014421] mb-2">Frescura Garantizada</h3>
      <p className="text-lg text-gray-700 text-justify">
  Nuestros productos son cultivados con los más altos estándares de calidad y frescura, directamente del campo a tu mesa.
</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <Star className="text-[#014421] w-12 h-12 mb-4 mx-auto" />
      <h3 className="text-2xl font-semibold text-[#014421] mb-2">Calidad Superior</h3>
      <p className="text-lg text-gray-700">Nos comprometemos a ofrecerte productos de la más alta calidad, seleccionados cuidadosamente para brindarte lo mejor de la cosecha.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
      <MapPin className="text-[#014421] w-12 h-12 mb-4 mx-auto" />
      <h3 className="text-2xl font-semibold text-[#014421] mb-2">Producción Sostenible</h3>
      <p className="text-lg text-gray-700 text-justify">Practicamos métodos de cultivo sostenibles y respetuosos con el medio ambiente, para cuidar la tierra que nos alimenta.</p>
    </div>
  </div>
</section>

   {/* Galería */}
<section className="py-16 bg-gray-100 text-center">
  <div className="max-w-7xl mx-auto px-6">
    {/* Título sofisticado */}
    <div className="flex items-center justify-center mb-10 relative">
      <span className="border-b-2 border-green-800 w-24 mr-4 transform transition-all duration-500 hover:scale-x-125 hover:border-green-600"></span>
      <h2 className="text-5xl font-bold text-[#014421] inline-block pb-3 font-serif relative">
        <span className="relative z-10">Galería</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-green-800 transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
      </h2>
      <span className="border-b-2 border-green-800 w-24 ml-4 transform transition-all duration-500 hover:scale-x-125 hover:border-green-600"></span>
    </div>

    {/* Contenido de la galería */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["/13.jpeg", "/13.jpeg", "/13.jpeg", "/13.jpeg", "/13.jpeg", "/13.jpeg"].map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative aspect-square group">
            <Image
              src={src}
              alt={`Galería pequeña ${index + 1}`}
              width={200}
              height={200}
              className="rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Caption or description */}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1">
        {["/galeria_2.jpeg"].map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 relative group">
            <Image
              src={src}
              alt={`Galería grande ${index + 1}`}
              width={600}
              height={400}
              className="rounded-2xl object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Caption or description */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Anuncio (Imagen) */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <Image
            src="/1.jpg"
            alt="Anuncio"
            width={1200}
            height={300}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Certificaciones 
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 text-center">
        <h2 className="text-5xl font-bold text-[#014421] mb-8 border-[#014421] inline-block pb-2 font-serif">
          Certificaciones
        </h2>

        <div className="max-w-4xl mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination, Autoplay]}
            className="pb-10"
          >
            {["/12.jpeg", "/12.jpeg", "/12.jpeg"].map((src, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl shadow-xl backdrop-blur-lg bg-white/50 p-6 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
                  <Image src={src} alt="Certificación" width={200} height={200} className="rounded-lg object-cover shadow-md" />
              
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>*/}

     {/* Mapa de Ubicación */}
<section className="py-16 bg-gray-50 text-center font-['Lora']">
  <div className="flex items-center justify-center mb-10">
    <span className="border-b-2 border-green-800 w-24 mr-19"></span>
    <h2 className="text-5xl font-bold text-[#014421]  inline-block pb-3 font-serif">
      Ubicación
    </h2>
    <span className="border-b-2 border-green-800 w-24 mr-19"></span>
  </div>
  <div className="flex flex-col md:flex-row gap-12 px-8 items-center">
    <div className="md:w-1/2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.29880001141!2d-97.65535688162016!3d18.887294427587825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c565aa31a9d30b%3A0xa29268a004b4c9c8!2sSAN%20REY%20PRODUCE!5e0!3m2!1ses-419!2smx!4v1740106822096!5m2!1ses-419!2smx"
        className="w-full h-96 rounded-xl shadow-lg"
        title="Mapa"
      ></iframe>
    </div>
    <div className="md:w-1/2 text-left">
      <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold mb-6 text-[#014421] font-['Playfair_Display']">
          Flores Sons Farms
        </h3>
        <div className="mb-6 text-lg text-gray-700 leading-relaxed">
          <p>📍 Dirección: Froylán C. Manjarrez, 75470 Froylán C. Manjarrez, Pue.</p>
          <p>📞 Teléfono: 0000-000-00-00</p>
          <p>📧 Correo electrónico: ooooooogmail.com</p>
        </div>
        <a
          href="/contact"
          className="bg-[#014421] text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#008000] transition-all duration-300 shadow-md hover:shadow-xl inline-block" // Usamos <a> en lugar de <button>
        >
          Visítanos
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Servicios Exclusivos */}
      <section className=" bg-green-900 text-white py-20 px-8 text-center">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-semibold mb-16 border-b-4 border-white inline-block pb-3 font-serif">
      Nuestros Servicios Exclusivos
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {[
        { description: "Aseguramos que cada producto cumpla con los estándares más altos de calidad y frescura." },
        { description: "Ofrecemos una amplia gama de productos agrícolas empaquetados." },
        { description: "Contamos con una logística optimizada para que tus pedidos lleguen a tiempo." },
        { description: "Nuestro equipo estará siempre disponible para resolver tus dudas y necesidades." },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white text-[#014421] p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center relative"
        >
          <p className="text-gray-600">{service.description}</p>
        </div>
            ))}
          </div>
          <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#014421] text-white p-5 rounded-full shadow-lg hover:bg-[#006400] transition-all"
      >
        ↑
      </button>
  
    
        </div>
        
      </section>
      
    </>
  );
}