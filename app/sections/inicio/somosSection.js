import React from 'react';

export default function SomosSection() {
    return (
        <div role="main"> {/* Rol para accesibilidad */}
            <section className="py-12" aria-labelledby="quienes-somos-heading">
                <header> {/* Etiqueta semántica para el encabezado */}
                    <h2 id="quienes-somos-heading" className="text-5xl font-bold text-[#014421] mb-8 border-b-2 border-[#014421] font-serif ml-14">
                        ¿Quiénes Somos?
                    </h2>
                </header>
                <div className="w-3/4 mx-auto">
                    <p className="text-justify px-7 font-scrip">
                        Somos una empresa dedicada a la exportación de flores frescas de la más alta calidad, cultivadas con pasión y cuidado en nuestros campos. Nuestro compromiso con la excelencia, la sostenibilidad y la innovación nos ha posicionado como un referente en el mercado internacional, llevando la belleza de nuestras flores a cada rincón del mundo. Desde la siembra hasta la entrega, garantizamos un proceso impecable, asegurando que cada flor conserve su frescura, color y aroma, ofreciendo a nuestros clientes un producto premium que supera las expectativas. En Sons Farms, florecemos con cada envío.
                    </p>
                </div>
            </section>
        </div>
    );
}