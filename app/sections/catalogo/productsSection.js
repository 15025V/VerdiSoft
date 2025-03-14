'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { X } from 'lucide-react';


export default function ProductsSection() {
  const allProducts = [
    { name: "Brócoli", category: "Hortaliza de Hoja Verde", img: "/brocoli.png" },
    { name: "Cilantro", category: "Hierbas y Especias", img: "/cilantroo.jpeg" },
    { name: "Zanahoria", category: "Hortaliza de Raíces y Tuberculos", img: "/zanahoria.jpg" },
    { name: "Rábano", category: "Hortaliza de Raíces y Tuberculos", img: "/rabano.jpg" },
    { name: "Repollo", category: "Hortaliza de Hoja Verde", img: "/repollo.jpeg" },
    { name: "Betabel", category: "Hortaliza de Raíces y Tuberculos", img: "/betabel.jpg" },
    { name: "Calabaza", category: "Hortaliza de Fruto", img: "/calabaza.jpeg" },
    { name: "Calabaza de bola", category: "Hortaliza de Fruto", img: "/calabazaa.jpeg" },
    { name: "Tomatillo milpero", category: "Hortaliza de Fruto", img: "/tomate.jpeg" },
    { name: "Nopal", category: "Cactaceas y Nopales", img: "/nopall.jpeg" },
    { name: "Tuna verde", category: "Cactaceas y Nopales", img: "/Tuna_verde.jpg" },
    { name: "Tuna roja", category: "Cactaceas y Nopales", img: "/tunaa.jpeg" },
    { name: "Epazote", category: "Hierbas y Especias", img: "/epazote.jpg" },
    { name: "Cebollín", category: "Hierbas y Especias", img: "/cebollin.jpeg" },
  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === '' || product.category === filter)
  );

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto px-9 pt-24 pb-19">
      <h2 className="text-5xl font-bold text-[#014421] text-center mb-8 border-[#014421] block pb-2 font-serif">
        Nuestro Catálogo
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="border border-gray-300 px-6 py-3 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 px-6 py-3 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-green-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Hortaliza de Hoja Verde">Hortaliza de Hoja Verde</option>
          <option value="Hierbas y Especias">Hierbas y Especias</option>
          <option value="Hortaliza de Raíces y Tuberculos">Hortaliza de Raíces y Tuberculos</option>
          <option value="Cactaceas y Nopales">Cactáceas y Nopales</option>
          <option value="Hortaliza de Fruto">Hortaliza de Fruto</option>
        </select>
      </div>

      <div className="container mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="p-4 text-center bg-white dark:bg-gray-700 hover:shadow-xl transition-all border border-green-500 rounded-lg flex flex-col items-center"
              >
                <Image
                  src={product.img}
                  width={150}
                  height={200}
                  alt={product.name}
                  className="mx-auto mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{product.name}</h3>
                <p className="text-gray-400 dark:text-gray-300">{product.category}</p>
                <div className="mt-4">
                  <button
                    onClick={() => openModal(product)}
                    className="inline-flex items-center text-[#49c351] dark:text-green-400 hover:text-green-700 transition-colors"
                  >
                    Ver producto
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No se encontraron productos.</p>
          )}
        </div>
      </div>

      {selectedProduct && (
        <Modal isOpen={modalIsOpen} onClose={closeModal} product={selectedProduct} />
      )}
    </div>
  );
}

// Componente de Modal corregido
const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-20 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        <div className="flex">
          <div className="w-1/2 pr-4 flex flex-col items-center">
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-semibold text-green-700 mb-4">{product.name}</h1>
            <div className="text-gray-700 mb-4">
              <p className="font-semibold mb-2">Características generales</p>
              <p className="mb-1">Categoría: {product.category}</p>
              <p className="mb-1">* Calorías: Aproximadamente 35 kcal</p>
              <p className="mb-1">* Agua: 89%</p>
              <p className="mb-1">* Proteína: 2.8g</p>
              <p className="mb-1">* Carbohidratos: 7g</p>
              <p className="mb-1">* Fibra: 2.6g</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Ideal para</p>
              <div className="flex space-x-2">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Ensaladas</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Guisos</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Sopas</span>
              </div>
            </div>
            <a
              href="/contact"
              className="mt-6 md:mt-9 inline-block px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all ml-auto mr-24 block"
              aria-label="Contáctanos"
              role="button"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
