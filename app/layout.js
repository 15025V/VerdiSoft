import Script from "next/script";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";

export const metadata = {
  title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
  description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito.',
  keywords: ['productos agrícolas', 'frescos', 'calidad', 'sostenibilidad', 'Flores Sons Farms'],
  openGraph: {
    title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
    description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms.',
    url: 'https://flores-sons-farms.vercel.app/',
    siteName: 'Flores Sons Farms',
    images: [
      {
        url: 'https://flores-sons-farms.vercel.app/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
    description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms.',
    images: ['https://flores-sons-farms.vercel.app/logo.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="en" translate="no">
        <head />
        <body>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-CYMCBRPS98"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CYMCBRPS98');
            `}
          </Script>

          {/* Tu contenido */}
          {/* <NavBar /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </LanguageProvider>
  );
}
