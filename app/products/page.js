import ClientCatalogoPage from './ClientCatalogoPage';

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
  twitter: {
    card: 'summary_large_image',
    title: 'Catálogo | Flores Sons Farms',
    description: 'Explora nuestro catálogo de productos agrícolas frescos y de alta calidad cultivados en el Valle de Palmarito.',
    image: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
  },
};

export default function CatalogoPage() {
  return <ClientCatalogoPage />;
}
