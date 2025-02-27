import Image from 'next/image';
import React from 'react';

export default function CategorySection() {
    return (
        <div role="region" aria-labelledby="categorias-heading"> {/* Rol y etiqueta ARIA para accesibilidad */}
            <section className="py-12 bg-white text-center">
                <h2 id="categorias-heading" className="text-5xl font-bold text-[#014421] mb-8 border-b-2 border-[#014421] inline-block pb-2 font-serif">
                    Nuestras Categorías
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                    {["/galeria_5.webp", "/galeria_5.webp", "/galeria_5.webp", "/galeria_5.webp"].map((src, index) => (
                        <div key={index} className="relative overflow-hidden group aspect-square"> {/* Aspect ratio para evitar saltos de layout */}
                            <Image
                                src={src}
                                alt={`Producto ${index + 1}`} 
                                width={400} 
                                height={400}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                loading="lazy" 
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}