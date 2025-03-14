'use client';
import React from 'react';

export default function HistoriaSection() {
    return (
        <section className="px-6 py-12 md:px-16 lg:px-32">

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] mb-8 font-serif ml-14">
                        Conoce nuestros Inicios<br />Conoce nuestra historia
                    </h2>
                    <p className="text-justify px-7 font-scrip">
                        Desde la siembra hasta la entrega, garantizamos un proceso impecable, asegurando que cada flor conserve su frescura, color y aroma, ofreciendo a nuestros clientes un producto premium que supera las expectativas. En Sons Farms, florecemos con cada envío.
                    </p>
                </div>
                <div className="relative bg-white shadow-xl rounded-3xl overflow-visible ">
                    <img src="/galeria_6.jpeg" alt="Campo de flores" className="w-full h-90 object-cover rounded-3xl " />
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg text-gray-800 font-bold text-lg">
                        Desde 2007
                    </div>
                </div>
                <div className="relative bg-white shadow-xl rounded-3xl overflow-visible ">
                    <img src="/galeria_6.jpeg " alt="Campo de cosecha" className="w-full h-90 object-cover rounded-3xl" />
                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-lg shadow-lg text-gray-800 font-bold text-lg">
                        Sus inicios
                    </div>
                </div>
                <div>
                    <p className="text-justify px-7 font-scrip">
                        Somos una empresa dedicada a la exportación de flores frescas de la más alta calidad, cultivadas con pasión y cuidado en nuestros campos. Nuestro compromiso con la excelencia, la sostenibilidad y la innovación nos ha posicionado como un referente en el mercado internacional, llevando la belleza de nuestras flores a cada rincón del mundo.
                    </p>
                </div>
            </div>
        </section>
    );
}