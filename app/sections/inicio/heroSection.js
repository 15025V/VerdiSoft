import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-25 pt-28">

      {/* Imagen de fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('/12.jpeg')" }}></div>

      {/* Contenedor principal */}
      <div className="relative z-16 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

        {/* Texto y botón a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start text-white flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wide font-playfair italic text-white">
            Flores Sons Farms
          </h1>
          <p className="text-lg md:text-xl mt-4 md:mt-6 text-gray-200 italic">
            "Calidad que se siente,<br />frescura que se nota."
          </p>
          <a
            href="/contact"
            className="mt-6 md:mt-9 inline-block px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all"
            aria-label="Contáctanos"
            role="button"
          >
            Contáctanos
          </a>
        </div>

        {/* Imagen redonda a la derecha */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <Image
            src="/galeria_3.jpeg"
            alt="Imagen Redonda"
            width={320}
            height={380}
            className="rounded-full"
          />
        </div>

        {/* Redes Sociales con estilo profesional */}
        <div className="absolute bottom-[-55] left-1/2 transform -translate-x-1/2 flex flex-row gap-4 text-white text-3xl md:text-4xl">
          <a
            href="https://instagram.com"
            className="p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            className="p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-all"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-all"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

      </div>
    </section>
  );
}