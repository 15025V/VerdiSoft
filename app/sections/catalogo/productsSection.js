'use client';

import { useState, useEffect } from 'react';
import { Presentation, X } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';
import { FaAngleDown } from 'react-icons/fa';

export default function ProductsSection() {
  const translations = useTranslation();

  const allProducts = [
    { name: translations.cebollita?.nombre ?? "Nombre no disponible", category: translations.categ2?.option2, img: "cebollinn_y1fnpw", presentacion: translations.cebollita?.presentacion, piezas: translations.cebollita?.piezas, kilos: translations.cebollita?.kilos },
    { name: translations.calabacita?.nombre ?? "Nombre no disponible", category: translations.categ4?.option4, img: "calabazaa_hlnads", presentacion: translations.calabacita?.presentacion, kilos: "16" },
    { name: translations.brocoli?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "brocolii_zo1vy8", presentacion: translations.brocoli?.presentacion, piezas: "24", kilos: "10" },
    { name: translations.zanahoria?.nombre ?? "Nombre no disponible", category: translations.categ2?.option2, img: "zana_wfx3ge", presentacion: translations.zanahoria?.presentacion, kilos: "22" },
    { name: translations.repollo?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "repollo_c29b9u", presentacion: translations.repollo?.presentacion, piezas: "30", kilos: "23" },
    { name: translations.tomatillo?.nombre ?? "Nombre no disponible", category: translations.categ4?.option4, img: "tom_hncty3", presentacion: translations.tomatillo?.presentacion, kilos: "18 ½" },
    { name: translations.epazote?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "epazote_sn2uij", presentacion: translations.epazote?.presentacion, piezas: translations.epazote?.piezas, kilos: "6 - 7" },
    { name: translations.betabel?.nombre ?? "Nombre no disponible", category: translations.categ2?.option2, img: "beta_nplon0", presentacion: translations.betabel?.presentacion, piezas: "24", kilos: "10" },
    { name: translations.hoja_de_platano?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "hp_xpu0hq", presentacion: translations.hoja_de_platano?.presentacion, piezas: translations.hoja_de_platano?.piezas, kilos: "8" },
    { name: translations.cilantro?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "c_tmb2xc", presentacion: translations.cilantro?.presentacion, piezas: translations.cilantro?.piezas, kilos: "30-60 pieces" },
    { name: "Tuna verde", category: translations.categ3?.option3, img: "Tuna_verde_wdv7ok", presentacion: [], kilos: "" },
    { name: "Tuna roja", category: translations.categ3?.option3, img: "tunaa_hzpmit", presentacion: [], kilos: "" },
    { name: "Nopal", category: translations.categ3?.option3, img: "nopall_ckidee", presentacion: [], kilos: "" },

  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [modalIsOpen]);

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === '' || product.category === filter)
  );

  return (
    <section className="bg-[#f3fdf3] py-20 scroll-mt-20">
      <div id='cata' className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-[#014421] text-center mb-10 font-serif border-b-2 pb-2 border-[#014421]">
          {translations.catalogo?.title}
        </h2>

        {/* Búsqueda y filtro */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10 font-serif relative">
          <input
            type="text"
            placeholder={translations.buscar_pro?.description}
            className="border border-gray-300 text-black px-4 py-2 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-200 placeholder-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="relative w-full md:w-1/4">
            <select
              className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-200 text-black appearance-none pr-10"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="">{translations.categ0?.option0}</option>
              {[...new Set(allProducts.map((product) => product.category))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FaAngleDown className="text-black" />
            </div>
          </div>
        </div>

        {/* Productos */}
        <div className="grid font-serif sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  {translations.ver_pro?.description}
                </button>
              </div>
            ))
          ) : (
            <p className="text-center font-serif text-gray-500 col-span-full py-8">
              {translations.no_encontrado?.description}
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
      {modalIsOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto"
          onClick={() => setModalIsOpen(false)}
        >
          <div className="bg-white rounded-t-2xl md:rounded-lg shadow-lg w-full md:w-1/2 h-[85vh] md:max-h-[90vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar - Mejor posicionado */}
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white hover:bg-gray-100 transition-all shadow-md border border-gray-200"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Contenido del modal con scroll interno */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col md:flex-row">
                {/* Imagen */}
                <div className="w-full md:w-1/2 h-56 md:h-auto relative group overflow-hidden">
                  <CldImage
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Contenido */}
                <div className="w-full md:w-1/2 p-4 md:p-6 pb-20 md:pb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{selectedProduct.name}</h1>

                  <div className="mt-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 border-b pb-1">
                      {translations.catego?.description}
                    </h3>
                    <span className="inline-block mt-2 px-3 py-1 text-xs md:text-sm font-serif font-semibold text-green-800">
                      {selectedProduct.category}
                    </span>
                  </div>

                  {selectedProduct.presentacion?.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 border-b pb-1">
                        {translations.pres?.description}
                      </h3>
                      <div className="mt-2 space-y-1">
                        {selectedProduct.presentacion.map((pres, index) => (
                          <span key={index} className="inline-block px-3 py-1 text-xs md:text-sm font-serif font-semibold text-green-800">
                            {pres}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProduct.piezas && (
                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 border-b pb-1">
                        {translations.pieza?.description}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 text-xs md:text-sm font-serif font-semibold text-green-800">
                        {selectedProduct.piezas}
                      </span>
                    </div>
                  )}

                  {selectedProduct.kilos && (
                    <div className="mt-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 border-b pb-1">
                        {translations.kilos?.description}
                      </h3>
                      <span className="inline-block mt-2 px-3 py-1 text-xs md:text-sm font-serif font-semibold text-green-800">
                        {selectedProduct.kilos}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botón fijo en móvil */}
            <div className="md:hidden absolute bottom-15 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => window.location.href = '/contact'}
                className="justify-context px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                {translations.but_contacto?.description}
              </button>
            </div>

            {/* Botón en desktop */}
            <div className="hidden md:block p-4 md:p-6">
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                {translations.but_contacto?.description}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}