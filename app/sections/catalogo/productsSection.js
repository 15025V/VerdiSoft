'use client';

import { useState, useEffect } from 'react';
import { Presentation, X, ShoppingCart, Leaf, Scale, Package } from 'lucide-react';
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
  const [imageLoaded, setImageLoaded] = useState(false);

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
                className="p-4 text-center bg-white hover:shadow-lg transition-shadow border border-green-100 rounded-lg flex flex-col group"
              >
                <div className="h-48 mb-4 relative overflow-hidden rounded-md">
                  <CldImage
                    src={product.img}
                    alt={product.name}
                    width={300}
                    height={200}
                    crop="fill"
                    gravity="auto"
                    className={`rounded-md object-cover transition-transform duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 768px) 100vw, 300px"
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.category}</p>
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setModalIsOpen(true);
                  }}
                  className="mt-auto px-4 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Presentation size={16} />
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

      {/* Modal Mejorado */}
      {modalIsOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setModalIsOpen(false)}
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white hover:bg-gray-100 transition-all shadow-lg border border-gray-200 hover:scale-110"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Contenido del modal */}
            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              {/* Imagen con efecto de zoom */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-gray-100">
                <CldImage
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">
                  {selectedProduct.name}
                </span>
              </div>

              {/* Contenido */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full mb-4">
                    {selectedProduct.category}
                  </span>

                  {/* Sección de Presentación */}
                  {selectedProduct.presentacion?.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Package className="text-green-600" size={20} />
                        <h3 className="text-lg font-bold text-gray-800">
                          {translations.pres?.description}
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProduct.presentacion.map((pres, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-2 text-sm bg-gray-50 rounded-lg border border-gray-200 text-gray-700 flex items-center gap-2"
                          >
                            <Presentation size={14} className="text-green-500" />
                            {pres}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sección de Piezas */}
                  {selectedProduct.piezas && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <ShoppingCart className="text-green-600" size={20} />
                        <h3 className="text-lg font-bold text-gray-800">
                          {translations.pieza?.description}
                        </h3>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                        {selectedProduct.piezas}
                      </div>
                    </div>
                  )}

                  {/* Sección de Kilos */}
                  {selectedProduct.kilos && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Scale className="text-green-600" size={20} />
                        <h3 className="text-lg font-bold text-gray-800">
                          {translations.kilos?.description}
                        </h3>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                        {selectedProduct.kilos}
                      </div>
                    </div>
                  )}
                </div>

                {/* Botón de contacto */}
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg"
                >
                  <Leaf size={18} />
                  {translations.but_contacto?.description}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}