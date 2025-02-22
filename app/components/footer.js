import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm py-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-center">© Todos los derechos reservados</p>
        <nav className="flex space-x-4">
          <a href="/nosotros" className="hover:underline">
            Nosotros
          </a>
          <a href="/products" className="hover:underline">
            Productos
          </a>
          <a href="/privacidad" className="hover:underline">
            Políticas de privacidad
          </a>
          <a href="/terminos" className="hover:underline">
            Términos y condiciones
          </a>
          <a href="/contact" className="hover:underline">
            Contacto
          </a>
        </nav>
        <div className="flex space-x-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
