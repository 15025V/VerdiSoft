'use client';

import dynamic from 'next/dynamic';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

// Lazy load de secciones
const AnunciSection = dynamic(() => import('../sections/catalogo/anunciSection'), { loading: () => <p>Cargando...</p> });
const VendidoSection = dynamic(() => import('../sections/catalogo/vendidoSection'), { loading: () => <p>Cargando...</p> });
const ProductsSection = dynamic(() => import('../sections/catalogo/productsSection'), { loading: () => <p>Cargando...</p> });
const PubliSection = dynamic(() => import('../sections/catalogo/publiSection'), { loading: () => <p>Cargando...</p> });

export default function ClientCatalogoPage() {
  return (
    <>
      <WhatsAppButton />
      <BotpressChatbot />
      <Navbar />
      <AnunciSection />
      <VendidoSection />
      <PubliSection />
      <ProductsSection />
      <Footer />
    </>
  );
}
