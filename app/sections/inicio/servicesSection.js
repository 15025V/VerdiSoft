
import React from 'react';

export default function ServicesSection() {
  return (
    <div role="region" aria-labelledby="servicios-heading"> {/* Rol y etiqueta ARIA para accesibilidad */}
      <section className="bg-green-900 text-white py-20 px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 id="servicios-heading" className="text-5xl font-semibold  mb-16 border-b-4 border-white inline-block pb-3 font-serif">
            CONOCE MAS DE FLORES SONS FARMS
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
                role="article" 
                aria-labelledby={`servicio-${index + 1}-heading`} 
              >
                <p id={`servicio-${index + 1}-heading`} className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}