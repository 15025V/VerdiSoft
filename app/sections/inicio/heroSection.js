import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-20 bg-cover bg-center pt-16 md:pt-24"
      style={{ backgroundImage: "url('/12.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Texto y botón a la izquierda */}
        <div className="w-full md:w-1/2 flex mt-20 justify-center md:justify-start text-white flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl  md:text-8xl  font-serif font-bold tracking-wide font-playfair italic">
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
            src="/repollo.jpeg"
            alt="Imagen Redonda"
            width={320}
            height={380}
            className="rounded-full"
          />
        </div>

        {/* Redes Sociales */}
        <div className="absolute bottom-10 right-10 flex space-x-6 text-white text-2xl">
          <a href="https://instagram.com" className="hover:text-green-400" aria-label="Instagram">
            <FaInstagram /> {/* Icono de Instagram */}
          </a>
          <a href="https://facebook.com" className="hover:text-green-400" aria-label="Facebook">
            <FaFacebook /> {/* Icono de Facebook */}
          </a>
          <a href="https://twitter.com" className="hover:text-green-400" aria-label="Twitter">
            <FaTwitter /> {/* Icono de Twitter */}
          </a>
        </div>
      </div>
    </section>
  );
}