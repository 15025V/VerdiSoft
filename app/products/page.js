'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function page() {
  const allProducts = [
    { name: "Brócoli", category: "Hortaliza de Hoja Verde", img: "/brocoli.png" },
    { name: "Cilantro", category: "Hierbas y Especias", img: "/cilanttro.jpeg" },
    { name: "Zanahoria", category: "Hortaliza de Raíces y Tuberculos", img: "/zanahoria.jpg" },
    { name: "Rábano", category: "Hortaliza de Raíces y Tuberculos", img: "/Rabano.jpg" },
    { name: "Repollo", category: "Hortaliza de Hoja Verde", img: "/repolloo.jpeg" },
    { name: "Betabel", category: "Hortaliza de Raíces y Tuberculos", img: "/betabel.jpg" },
    { name: "Calabaza", category: "Hortaliza de Fruto", img: "/calabaza.jpeg" },
    { name: "Calabaza de bola", category: "Hortaliza de Fruto", img: "/calabazaa.jpeg" },
    { name: "Tomatillo milpero", category: "Hortaliza de Fruto", img: "/tomate.jpeg" },
    { name: "Nopal", category: "Cactaceas y Nopales", img: "/nopall.jpeg" },
    { name: "Tuna verde", category: "Cactaceas y Nopales", img: "/tuna.png" },
    { name: "Tuna roja", category: "Cactaceas y Nopales", img: "/Tuna_verde.jpg" },
    { name: "Epazote", category: "Hierbas y Especias", img: "/epazote.jpg" },
    { name: "Cebollin", category: "Hierbas y Especias", img: "/cebollin.jpeg" },
  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) && (filter === '' || product.category === filter));

  return (
    <div className="container mx-auto px-9 pt-24 pb-19">  {/* Agregado espacio superior */}
      
      <div className="mb-12">
        {/* Colocamos el anuncio al inicio */}
        <div className="col-span-full p-6 text-center bg-white">
          <Image src="/Anuncio.png" width={900} height={400} alt="Anuncio" className="mx-auto mb-4 rounded-md" />
        </div>
        
        {/* Título de los productos más vendidos debajo del anuncio */}
        <h3 className="text-2xl font-medium text-center text-gray-700 mb-6">Productos Más Vendidos</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.slice(0, 4).map((product, index) => (
            <div key={index} className="p-6 text-center bg-white hover:shadow-xl transition-all">
              <Image src={product.img} width={150} height={150} alt={product.name} className="mx-auto mb-4 rounded-md"/>
              <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        <input type="text" placeholder="Buscar producto..." className="border border-gray-300 px-6 py-3 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-200" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select className="border border-gray-300 px-6 py-3 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-green-200" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="Hortaliza de Hoja Verde">Hortaliza de Hoja Verde</option>
          <option value="Hierbas y Especias">Hierbas y Especias</option>
          <option value="Hortaliza de Raíces y Tuberculos">Hortaliza de Raíces y Tuberculos</option>
          <option value="Cactaceas y Nopales">Cactaceas y Nopales</option>
          <option value="Hortaliza de Fruto">Hortaliza de Fruto</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
            <div key={index} className="p-6 text-center bg-white hover:shadow-xl transition-all border border-black"> {/* Contorno negro */}
                <Image src={product.img} width={150} height={150} alt={product.name} className="mx-auto mb-4 rounded-md"/>
                <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                <p className="text-gray-400">{product.category}</p>
                <div className="mt-4">
                    <a href={`/about/${product.id}`} className="inline-flex items-center text-green-800 hover:text-gren-700 transition-colors"> {/* Enlace con flecha */}
                        Ver producto
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        ))
    ) : (
        <p className="text-center text-gray-500 col-span-full">No se encontraron productos.</p>
    )}
</div>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#014421] text-white p-5 rounded-full shadow-lg hover:bg-[#006400] transition-all"
      >
        ↑
      </button>
    </div>
  );
}