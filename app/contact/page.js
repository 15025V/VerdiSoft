// app/contact/page.js (NO lleva "use client")
import ClientContactPage from './clientContactPage';

// Exporta metadata desde el componente del servidor
export const metadata = {
  title: 'Contacto - Flores Sons Farms',
  description: 'Ponte en contacto con Flores Sons Farms...',
  robots: 'index, follow',
  openGraph: {
    title: 'Contacto - Flores Sons Farms',
    description: 'Ponte en contacto con Flores Sons Farms...',
    url: 'https://www.floressonsfarms.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg',
        width: 800,
        height: 600,
      },
    ],
    site_name: 'Flores Sons Farms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto - Flores Sons Farms',
    description: 'Ponte en contacto con Flores Sons Farms...',
    images: ['https://res.cloudinary.com/dguinjztv/image/upload/v1744336833/logoo_gm49ee.jpg'],
  },
};

export default function ContactPage() {
  return <ClientContactPage/>;
}
