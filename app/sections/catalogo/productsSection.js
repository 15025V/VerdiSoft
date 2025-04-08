'use client';

import { useState, useEffect } from 'react';
import { Presentation, X } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import { useTranslation } from '@/app/hooks/useTranslation';
import { FaAngleDown } from 'react-icons/fa';

export default function ProductsSection() {
  const translations = useTranslation();

  const allProducts = [
    { name: translations.cebollita?.nombre ?? "Nombre no disponible", category: translations.categ2?.option2, img: "brocolii_zo1vy8", presentacion: translations.cebollita?.presentacion, piezas: translations.cebollita?.piezas, kilos: translations.cebollita?.kilos },
    { name: translations.calabacita?.nombre ?? "Nombre no disponible", category: translations.categ4?.option4, img: "zanahoria_iauh13", presentacion: translations.calabacita?.presentacion, kilos: "16" },
    { name: translations.brocoli?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "Rabano_j7xmnv", presentacion: translations.brocoli?.presentacion, piezas: "24", kilos: "10" },
    { name: translations.zanahoria?.nombre ?? "Nombre no disponible", category: translations.categ2?.option2, img: "calabazaa_hlnads", presentacion: translations.zanahoria?.presentacion, kilos: "22" },
    { name: translations.repollo?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "repollo_mltjbn", presentacion: translations.repollo?.presentacion, piezas: "30", kilos: "23" },
    { name: translations.tomatillo?.nombre ?? "Nombre no disponible", category: translations.categ4?.option4, img: "tomate_ay5n88", presentacion: translations.tomatillo?.presentacion, kilos: "18 ½" },
    { name: translations.epazote?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "epazote_sn2uij", presentacion: translations.epazote?.presentacion, piezas: translations.epazote?.piezas, kilos: "6 - 7" },
    { name: translations.betabel?.nombre ?? "Nombre no disponible", category: translations.categ2?.option2, img: "betabel_ti1igv", presentacion: translations.betabel?.presentacion, piezas: "24", kilos: "10" },
    { name: translations.hoja_de_platano?.nombre ?? "Nombre no disponible", category: translations.categ1?.option1, img: "cebollinn_y1fnpw", presentacion: translations.hoja_de_platano?.presentacion, piezas: translations.hoja_de_platano?.piezas, kilos: "8" },
    { name: "Cilantro", category: translations.categ1?.option1, img: "cilantroo_tzjgva", presentacion: [], kilos: "" },
    { name: "Tuna verde", category: translations.categ3?.option3, img: "Tuna_verde_wdv7ok", presentacion: [], kilos: "" },
    { name: "Tuna roja", category: translations.categ3?.option3, img: "tunaa_hzpmit", presentacion: [], kilos: "" },
    { name: "Nopal", category: translations.categ3?.option3, img: "nopall_ckidee", presentacion: [], kilos: "" },
    { name: "Cebollín", category: translations.categ1?.option1, img: "cebollinn_y1fnpw", presentacion: [], kilos: "" },
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
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h2 className="text-5xl font-bold text-[#014421] text-center mb-8 border-b-2 border-[#014421] pb-2 font-serif">
        {translations.catalogo?.title}
      </h2>

      <div className="flex flex-col font-serif md:flex-row justify-center gap-4 mb-8 relative">
        <input
          type="text"
          placeholder={translations.buscar_pro?.description}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-200 placeholder-black"
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

              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h1>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">{translations.catego?.description}</h3>
                      <span className="inline-block mt-3 px-4 py-1 text-sm font-serif font-semibold text-green-800">
                        {selectedProduct.category}
                      </span>
                    </div>

                    {selectedProduct.presentacion?.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">{translations.pres?.description}</h3>
                        {selectedProduct.presentacion.map((pres, index) => (
                          <span key={index} className="inline-block mt-3 px-4 py-1 text-sm font-serif font-semibold text-green-800">
                            {pres}
                          </span>
                        ))}
                      </div>
                    )}

                    {selectedProduct.piezas && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">{translations.pieza?.description}</h3>
                        <span className="inline-block mt-3 px-4 py-1 text-sm font-serif font-semibold text-green-800">
                          {selectedProduct.piezas}
                        </span>
                      </div>
                    )}

                    {selectedProduct.kilos && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">{translations.kilos?.description}</h3>
                        <span className="inline-block mt-3 px-4 py-1 text-sm font-serif font-semibold text-green-800">
                          {selectedProduct.kilos}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md"
                    >
                      {translations.but_contacto?.description}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
