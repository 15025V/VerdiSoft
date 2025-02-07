import Image from "next/image";


export default function Home() {
  const services = [
  {
    icon: "/icons/quality.png",
    text: "Aseguramos que cada producto cumpla con los estándares más altos de calidad y frescura.",
  },
  {
    icon: "/icons/logistics.png",
    text: "Contamos con una logística optimizada para que tus pedidos lleguen a tiempo.",
  },
  {
    icon: "/icons/products.png",
    text: "Ofrecemos una amplia gama de productos agrícolas empaquetados.",
  },
  {
    icon: "/icons/support.png",
    text: "Nuestro equipo estará siempre disponible para resolver tus dudas y necesidades.",
  },
];
  return (
    <div className="Montserrat">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        {/* Columna Izquierda: Título y Botones */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold italic  mb-6">
            Flores Sons Farms
          </h1>
          <h3 className=" md:text-5x1 font-semibold italic mb-6" >Explora la riqueza de productos que ofrecemos, fruto del esfuerzo y dedicación de nuestros productores en el Valle de Palmarito.</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Ver productos
            </button>
            <button className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
              Contáctanos
            </button>
          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/tuna.png"
            alt="Vegetales"
            className="w-80 h-auto object-cover transition-transform transform hover:scale-110 "
          />

        </div>
      </section>

      {/* Categorías */}
      <section className="text-center py-12 bg-green-600">
        <h2 className="text-xl text-black font-bold">Nuestras Categorías</h2>
        <div className="gallery grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-10">
        {[ 
            { src:"/brocoli.png", alt: "Brócoli", name: "BRÓCOLI" },
            { src: "/repollo.jpeg", alt: "Repollo", name: "REPOLLO" },
            { src: "/cilantroo.jpeg", alt: "Cilantro", name: "CILANTRO" },
            { src: "/tunaa.jpeg", alt: "Tuna", name: "TUNA" },
            { src: "/cebollin.jpeg", alt: "Cebollin", name: "CEBOLLIN" },
          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden group rounded-lg animate-fadeInUp">
              <Image
                className="mx-auto rounded transition-transform duration-300 group-hover:scale-150"
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-lg group-hover:text-2xl">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      <section className="flex justify-around px-8 py-12">
        <div>
          <h3 className="text-xl text-white font-bold">NUESTROS PRODUCTOS</h3>
          <p className="text-black">Nos especializamos en la venta de legumbres de la mejor calidad.</p>
        </div>
        <div>
          <h3 className="text-xl text-white font-bold">ENTREGAS</h3>
          <p className="text-black">Ofrecemos servicio de entrega. No dude en comunicarse con nosotros.</p>
        </div>
      </section>
        
      </section>

     

      {/* Video Placeholder */}
    <div className="bg-gray-300 text-center py-16 mx-8">Video</div>

      {/* Servicios Exclusivos */}
      <section className="bg-green-600 text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Título */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold">Nuestros Servicios<br />Exclusivos</h2>
        </div>

        {/* Tarjetas */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center text-gray-800">
              <Image src={service.icon} alt="Icono" width={40} height={40} />
              <p className="mt-4">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      

    </div>
  );
}
