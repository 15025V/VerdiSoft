'use client';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CldImage } from 'next-cloudinary';


export default function ProductsSection() {
  
  // Lista de productos
  const allProducts = [
    { name: "Brócoli", category: "Hortaliza de Hoja Verde", img: "brocolii_zo1vy8" },
    { name: "Zanahoria", category: "Hortaliza de Raíces y Tuberculos", img: "zanahoria_iauh13" },
    { name: "Rábano", category: "Hortaliza de Raíces y Tuberculos", img: "Rabano_j7xmnv" },
    { name: "Tuna verde", category: "Cactaceas y Nopales", img: "Tuna_verde_wdv7ok" },
    { name: "Tuna roja", category: "Cactaceas y Nopales", img: "tunaa_hzpmit" },
    { name: "Tomatillo milpero", category: "Hortaliza de Fruto", img: "tomate_ay5n88" },
    { name: "Cilantro", category: "Hierbas y Especias", img: "cilantroo_tzjgva" },
    { name: "Repollo", category: "Hortaliza de Hoja Verde", img: "repollo_mltjbn" },
    { name: "Betabel", category: "Hortaliza de Raíces y Tuberculos", img: "betabel_ti1igv" },
    { name: "Calabaza de bola", category: "Hortaliza de Fruto", img: "calabazaa_hlnads" },
    { name: "Nopal", category: "Cactaceas y Nopales", img: "nopall_ckidee" },
    { name: "Epazote", category: "Hierbas y Especias", img: "epazote_sn2uij" },
    { name: "Cebollín", category: "Hierbas y Especias", img: "cebollinn_y1fnpw" },
    // ... (resto de tus productos)
  ];

  // Estados
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [modalIsOpen]);

  // Filtrar productos
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === '' || product.category === filter)
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Encabezado */}
      <h2 className="text-5xl font-bold text-[#014421] text-center mb-8 border-b-2 border-[#014421] pb-2 font-serif">
        Nuestro Catálogo
      </h2>

      {/* Controles de búsqueda */}
      <div className="flex flex-col font-serif md:flex-row justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-green-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Hortaliza de Hoja Verde">Hortaliza de Hoja Verde</option>
          <option value="Hierbas y Especias">Hierbas y Especias</option>
          {/* ... (resto de opciones) */}
        </select>
      </div>

      {/* Listado de productos */}
      <div className="grid grid-cols-1 font-serif sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="p-4 text-center bg-white hover:shadow-lg transition-shadow border border-green-100 rounded-lg flex flex-col"
            >
              <div className="h-48 mb-4 relative">
                <CldImage
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={200}
                  crop="fill"
                  gravity="auto"
                  className="rounded-md object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{product.category}</p>
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setModalIsOpen(true);
                }}
                className="mt-auto px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
              >
                Ver detalles
              </button>
            </div>
          ))
        ) : (
          <p className="text-center font-serif text-gray-500 col-span-full py-8">
            No se encontraron productos con esos criterios.
          </p>
        )}
      </div>

      {/* Modal profesional */}
      {modalIsOpen && selectedProduct && (
        <div 
          className="fixed inset-0 z-50 font-serif flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setModalIsOpen(false)}
        >
          <div 
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-all shadow-md"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Imagen del producto */}
              <div className="md:w-1/2 h-64 md:h-auto relative group overflow-hidden">
                <CldImage
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Información del producto */}
              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h1>
                    <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                      {selectedProduct.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Características</h3>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Disponibilidad: Todo el año</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Origen: Cultivo local</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Beneficios</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {['Rico en vitaminas', 'Alto en fibra', 'Bajo en calorías', 'Antioxidantes'].map((benefit) => (
                          <span key={benefit} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md"
                  >
                    Contactar para pedidos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
