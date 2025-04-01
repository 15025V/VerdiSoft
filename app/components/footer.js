import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-4">Información de Contacto</p>
            <div className="flex items-center mb-2 justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-gray-400" />
              <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2 text-gray-400" />
              <a href="tel:+1234567890" className="hover:text-white">+123 456 7890</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Enlaces Rápidos</p>
            <nav className="flex flex-col space-y-2">
           
              <a href="/Privacy" className="hover:text-white transition-colors duration-200">Políticas de privacidad</a>
              <a href="a pp/terms/page.js" className="hover:text-white transition-colors duration-200">Términos y condiciones</a>
             
            </nav>
          </div>
          <div className="text-center md:text-right">
            <p className="text-lg font-semibold mb-4">Síguenos</p>
            <div className="flex justify-center md:justify-end space-x-4 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <FaFacebook />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <FaTiktok />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;