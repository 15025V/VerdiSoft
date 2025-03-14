'use client';
import Image from 'next/image';
import React from 'react'

export default function VendidoSection() {
    return (
        <div>
            {/* Sección de productos más vendidos */}
            <section className="py-14 text-center">
                <h2 id="categorias-heading" className="text-5xl font-bold text-[#49c351] mb-2 font-serif">
                    Productos Más Vendidos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                    {["/cilantroo.jpeg", "/cilantroo.jpeg", "/cilantroo.jpeg", "/galeria_5.jpeg"].map((src, index) => (
                        <div key={index} className="relative overflow-hidden group rounded-lg">
                            <Image
                                src={src}
                                alt="Producto"
                                width={130} // Cambiado a 130px para que coincida con la altura
                                height={130} // Mantenido en 130px
                                className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
