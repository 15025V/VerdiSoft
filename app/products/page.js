import dynamic from 'next/dynamic';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

// Carga diferida de secciones
const AnunciSection = dynamic(() => import('../sections/catalogo/anunciSection'), { 
  loading: () => <p>Cargando...</p> 
});
const VendidoSection = dynamic(() => import('../sections/catalogo/vendidoSection'), { 
  loading: () => <p>Cargando...</p> 
});
const ProductsSection = dynamic(() => import('../sections/catalogo/productsSection'), { 
  loading: () => <p>Cargando...</p> 
});
const PubliSection = dynamic(() => import('../sections/catalogo/publiSection'), {
  loading: () => <p>Cargando...</p>
});

export const metadata = {
  title: 'Catálogo | Flores Sons Farms - Productos Agrícolas Frescos',
  description: 'Explora nuestro catálogo de productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito.',
  keywords: [
    'catálogo agrícola',
    'productos frescos',
    'hortalizas de exportación',
    'cilantro fresco',
    'vegetales premium México'
  ],
  openGraph: {
    title: 'Catálogo de Productos | Flores Sons Farms',
    description: 'Descubre nuestra selección de productos agrícolas para exportación',
    images: [
      {
        url: 'https://www.floressonsfarms.com/logo.png',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function CatalogoPage() {
  return (
    <>
      <WhatsAppButton/>
      <BotpressChatbot/>
      <Navbar/>
      <AnunciSection />
      <VendidoSection/>
      <PubliSection/>
      <ProductsSection/>
      <Footer/>
    </>
  );
}