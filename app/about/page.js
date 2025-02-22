'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const Section = ({
  title,
  text,
  imgSrc,
  reverse,
  bgColor,
  titleColor,
  textColor,
  textCenter,
  showLine = true,
}) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? 'md:flex-row-reverse' : ''
    } items-center ${bgColor} p-8 md:p-16 rounded-3xl max-w-7xl w-full mt-8 md:mt-16 shadow-lg transition-all`}
  >
    <div className="md:w-1/2 p-4 md:p-6">
      <h2
        className={`text-3xl font-semibold leading-tight mb-4 md:mb-6 ${titleColor} uppercase ${
          textCenter ? 'text-center' : 'text-left'
        } tracking-wide`}
      >
        {title}
      </h2>
      {showLine && (
        <div className="h-1 w-16 bg-green-300 mx-auto mb-4 md:mb-6 rounded-full"></div>
      )}
      <p
        className={`mt-4 text-lg ${textColor} ${
          textCenter ? 'text-center' : 'text-justify'
        } leading-relaxed font-light`}
      >
        {text}
      </p>
    </div>

    {imgSrc && (
      <img
        src={imgSrc}
        alt={title}
        className="md:w-1/2 w-full rounded-3xl shadow-lg transition-all hover:scale-105 duration-300 mx-auto mt-4 md:mt-0"
      />
    )}
  </div>
);

const ValueCard = ({ title, text }) => (
  <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md transition-all hover:shadow-xl hover:scale-105">
    <h3 className="text-2xl font-semibold uppercase text-gray-800 mb-4 tracking-wide font-medium">
      {title}
    </h3>
    <p className="text-center text-base text-gray-600 leading-relaxed font-light">
      {text}
    </p>
  </div>
);

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 md:p-16 flex flex-col items-center relative">
    

      {/* Publicidad */}
      <div className="flex justify-center w-full mt-8">
        <Image
          src="/1.jpg"
          alt="Publicidad"
          width={1000}
          height={600}
          className="rounded-3xl shadow-lg"
        />
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-center py-16 px-6 md:gap-4 lg:gap-8">
 {/* Historia con animación */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 }}
  
>
  
  <h2 className="text-5xl font-serif tracking-wide text-center text-green-800">Nuestra Historia</h2>
  <p className="mt-7 text-center text-justify leading-relaxed">
  "Desde 2007, hemos sido reconocidos como la empresa líder en la distribución de verduras frescas, destacándonos por nuestra calidad, sostenibilidad y compromiso con el bienestar de nuestros clientes y el medio ambiente. Nuestra misión es ofrecer productos frescos, saludables y de la más alta calidad, mientras promovemos prácticas responsables que minimizan nuestro impacto ecológico.

A lo largo de los años, hemos trabajado incansablemente para mantener los más altos estándares en cada etapa del proceso: desde la siembra y cultivo, hasta la distribución final en los mercados. La innovación constante en nuestros métodos de producción y la creación de alianzas con proveedores comprometidos con la sostenibilidad han sido clave para garantizar que nuestras verduras no solo sean frescas, sino también cultivadas de manera ética y respetuosa con el planeta.
  </p>
</motion.div>



</div>
      {/* Sección Nuestra Visión */}
      <div className="flex justify-center items-center w-full mt-8 md:mt-16 relative">
        <div className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/galeria_2.jpeg"
            alt="Campo de cultivo"
            className="w-full h-auto max-h-96 object-cover"
          />
        </div>

     {/* Contenido superpuesto (Nuestra Visión) */}
  <div className="absolute md:relative md:w-1/2 inset-0 flex items-center justify-center">
    <div className="bg-white p-8 rounded-3xl shadow-lg max-w-lg text-center">
      <h2 className="text-3xl font-semibold mb-4 tracking-wide font-medium">
        Nuestra Visión
      </h2>
      <p className="text-lg text-gray-700 text-justify">
        Comenzamos como una pequeña empresa familiar, con la misión de ofrecer verduras frescas y saludables, aportando a la comunidad y al entorno. Hoy, nuestra visión se ha expandido con el compromiso de seguir creciendo.
      </p>
    </div>
  </div>
    </div>
{/* Sección Nuestra Vision... */}
<div className="flex justify-center items-center w-full mt-16 relative">
        <div className="w-full max-w-7xl">
          <img src="/12.jpeg" alt="Campo de cultivo" className="w-full h-auto max-h-96 rounded-lg shadow-lg" />
        </div>

        {/* Sección Nuestra Visión */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Nuestra Visión</h2>
            <p className="text-lg text-gray-700 text-justify">
              Comenzamos como una pequeña empresa familiar, con la misión de ofrecer
              verduras frescas y saludables, aportando a la comunidad y al entorno.
              Hoy, nuestra visión se ha expandido con el compromiso de seguir creciendo.
            </p>
          </div>
        </div>
      </div>
   
      {/* Sección Nuestros Valores */}
      <div className="shadow-lg rounded-3xl p-8 md:p-16 max-w-7xl w-full text-center mt-8 md:mt-16 bg-[#14532D]">
        <h2 className="text-3xl font-semibold uppercase tracking-wide mb-6 md:mb-8 text-white">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-6">
          <ValueCard
            title="Calidad"
            text="Nos aseguramos de que cada producto cumpla con los más altos estándares de frescura y sabor."
          />
          <ValueCard
            title="Confianza"
            text="Fomentamos relaciones transparentes con nuestros clientes y proveedores, siempre basadas en la honestidad."
          />
          <ValueCard
            title="Compromiso"
            text="Nuestro compromiso con la satisfacción de nuestros consumidores y el apoyo a las comunidades locales es firme."
          />
        </div>
      </div>
      
        {/* Video */}
        <section className="py-12">
    <h2 className="text-5xl font-bold text-[#014421] mb-8 border-[#014421] font-serif ml-14">Nuestro empaquetado</h2>
    <div className="w-full max-w-none mt-8 md:mt-16 rounded-3xl overflow-hidden shadow-lg">
        <video
          className="w-full h-auto object-cover"
          controls
          poster="/ruta-a-la-imagen-placeholder.jpg"
        >
          <source src="/Legumbres.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

    
</section>
        
      {/* Botón de scroll arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#014421] text-white p-5 rounded-full shadow-lg hover:bg-[#006400] transition-all"
      >
        ↑
      </button>
    </div>
  );
}