import dynamic from 'next/dynamic';
import WhatsAppButton from '../components/Chatboot/whatsAppButton';
import BotpressChatbot from '../components/Chatboot/bootpress';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import Head from 'next/head';

// Carga diferida de secciones
const AnunciSection = dynamic(() => import('../sections/catalogo/anunciSection'), { loading: () => <p>Cargando...</p>});
const VendidoSection = dynamic(() => import('../sections/catalogo/vendidoSection'), { loading: () => <p>Cargando...</p>});
const ProductsSection = dynamic(() => import('../sections/catalogo/productsSection'), {loading: () => <p>Cargando...</p>});
const PubliSection = dynamic(() => import('../sections/catalogo/publiSection'), {loading: () => <p>Cargando...</p>});

export const metadata = {
  title: 'Catálogo Agrícola | Flores Sons Farms - Productos Agrícolas Frescos',
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
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function CatalogoPage() {
  return (
    <>
    {/* Metadatos para SEO */}
    <Head>
      <title>Catálogo | Flores Sons Farms - Productos Agrícolas Frescos</title>
      <meta name="description" content="Explora nuestro catálogo de productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Catálogo de Productos | Flores Sons Farms" />
      <meta property="og:description" content="Descubre nuestra selección de productos agrícolas para exportación" />
      <meta property="og:url" content="https://www.floressonsfarms.com/products" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Catálogo | Flores Sons Farms" />
      <meta name="twitter:description" content="Explora nuestro catálogo de productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito." />
      <meta name="twitter:image" content="https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg" />
    </Head>

    {/* Secciones de la página */}
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