import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
{/* Galería de Productos */}
<section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Brócoli", img: "/broccoli.png" },
              { name: "Lechuga", img: "/lettuce.png" },
              { name: "Cilantro", img: "/cilantro.png" },
              { name: "Zanahorias", img: "/carrots.png" },
            ].map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <Image src={product.img} width={150} height={150} alt={product.name} className="mx-auto mb-4"/>
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Más información
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
