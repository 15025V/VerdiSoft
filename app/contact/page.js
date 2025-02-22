'use client';
import React from 'react';
import Image from 'next/image';

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
    } items-center ${bgColor} p-8 md:p-16 rounded-xl max-w-7xl w-full mt-8 md:mt-16 shadow-md transition-all`}
  >
    <div className="md:w-1/2 p-4 md:p-6">
      <h2 className={`text-3xl font-semibold leading-tight mb-4 md:mb-6 ${titleColor} uppercase ${textCenter ? 'text-center' : 'text-left'}`}>
        {title}
      </h2>
      {showLine && <div className="h-1 w-16 bg-green-500 mx-auto mb-4 md:mb-6"></div>}
      <p className={`mt-4 text-lg ${textColor} ${textCenter ? 'text-center' : 'text-justify'} leading-relaxed`}>
        {text}
      </p>
    </div>

    {imgSrc && (
      <img
        src={imgSrc}
        alt={title}
        className="md:w-1/2 w-full rounded-lg shadow-md transition-all hover:scale-105 duration-300 mx-auto mt-4 md:mt-0"
      />
    )}
  </div>
);

const ValueCard = ({ title, text }) => (
  <div className="flex flex-col items-center bg-white p-6 md:p-8 rounded-lg shadow-md transition-all hover:shadow-xl hover:scale-105">
    <h3 className="text-2xl font-semibold uppercase text-gray-800 mb-4">{title}</h3>
    <p className="text-center text-base text-gray-600 leading-relaxed">{text}</p>
  </div>
);

export default function CompanyInfo() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center relative">
      {/* Video */}
      <div className="w-full max-w-none mt-8 md:mt-16">
        <video
          className="w-full h-auto object-cover rounded-lg shadow-md"
          controls
          poster="/ruta-a-la-imagen-placeholder.jpg"
        >
          <source src="/Legumbres.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      {/* Publicidad */}
      <div className="flex justify-center w-full mt-8">
        <Image src="/1.jpg" alt="Publicidad" width={800} height={200} className="rounded-lg shadow-lg" />
      </div>

      <Section
        title="Nuestra Historia"
        text="Queremos ser reconocidos como la empresa líder en distribución de verduras frescas en el país, distinguiéndonos por la calidad de nuestros productos, la sostenibilidad y nuestro compromiso social."
        imgSrc="/galeria_2.jpeg"
        reverse={true}
        bgColor="bg-[#14532D]"
        titleColor="text-white center"
        textColor="text-white"
        showLine={false}
      />

      {/* Sección Nuestra Misión */}
      <div className="flex justify-center items-center w-full mt-8 md:mt-16 relative">
        <div className="w-full max-w-7xl">
          <img src="/galeria_2.jpeg" alt="Campo de cultivo" className="w-full h-auto max-h-96 rounded-lg shadow-lg" />
        </div>

        {/* Sección Nuestra Visión */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Nuestra Visión</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Comenzamos como una pequeña empresa familiar, con la misión de ofrecer verduras frescas y saludables, aportando a la comunidad y al entorno. Hoy, nuestra visión se ha expandido con el compromiso de seguir creciendo.
            </p>
          </div>
        </div>
      </div>

      <Section
        title="Nuestra Misión"
        text="Desde 2007, hemos sido líderes en la distribución de verduras frescas de alta calidad, con un enfoque constante en la sostenibilidad y el bienestar de nuestros clientes y el medio ambiente."
        imgSrc="/galeria_2.jpeg"
        bgColor="bg-[#14532D]"
        titleColor="text-white"
        textColor="text-white"
        showLine={false}
      />

      {/* Sección Nuestros Valores */}
      <div className="shadow-lg rounded-xl p-6 md:p-16 max-w-7xl w-full text-center mt-8 md:mt-16 bg-[#14532D]">
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