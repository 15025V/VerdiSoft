import Script from "next/script";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";

export const metadata = {
  title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
  description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms. Cultivados con pasión y dedicación en el Valle de Palmarito.',
  keywords: [
    // Core Business
    'agricultural exporter', 'exportadora agrícola',
    'packing house', 'empacadora de vegetales',
    'fresh vegetables', 'hortalizas frescas',
    
    // Cilantro (Main Product)
    'fresh coriander export', 'exportación de cilantro fresco',
    'organic cilantro bulk', 'cilantro orgánico al mayoreo',
    'Mexican coriander supplier', 'proveedor mexicano de cilantro',
    'washed cilantro for export', 'cilantro lavado para exportación',
    'cilantro with long shelf life', 'cilantro con larga vida de anaquel',
    
    // Other Products
    'green onions export', 'exportación de cebollín',
    'fresh scallions supplier', 'proveedor de cebollita fresca',
    'Mexican zucchini exporter', 'exportador de calabacita mexicana',
    'fresh squash packing', 'empaque de calabaza fresca',
    'broccoli florets export', 'exportación de brócoli en floretes',
    'organic broccoli supplier', 'proveedor de brócoli orgánico',
    'baby carrots export', 'exportación de zanahorias baby',
    'washed carrots packing', 'empaque de zanahoria lavada',
    'organic beets exporter', 'exportador de betabel orgánico',
    'vacuum-packed beets', 'betabel al vacío',
    'cabbage for export', 'repollo para exportación',
    'shredded cabbage packing', 'empaque de repollo rallado',
    'banana leaves export', 'exportación de hojas de plátano',
    'plant leaves for tamales', 'hojas para tamales',
    'cactus pads exporter', 'exportador de nopales',
    'cleaned nopal packing', 'empaque de nopal limpio',
    'prickly pear fruit export', 'exportación de tuna',
    'red cactus fruit supplier', 'proveedor de tuna roja',
    'yellow pitaya exporter', 'exportador de tuna amarilla',
    'radish bunch export', 'exportación de rábanos en manojos',
    'washed radish packing', 'empaque de rábano lavado',
    'Mexican tea herb export', 'exportación de epazote',
    'fresh epazote leaves', 'hojas frescas de epazote',
    'Mexican husk tomato export', 'exportación de tomatillo',
    'green husk tomatoes', 'tomate verde para salsas',
    
    // Certifications & Processes
    'GlobalG.A.P. certified packing', 'empaque certificado GlobalG.A.P.',
    'USDA organic certified', 'certificado orgánico USDA',
    'FDA approved facility', 'instalaciones aprobadas por FDA',
    'HACCP compliance', 'cumplimiento HACCP',
    'cold chain logistics', 'logística de cadena de frío',
    
    // Market-Specific
    'USA agricultural imports', 'importaciones agrícolas USA',
    'Canadian vegetable market', 'mercado canadiense de hortalizas',
    'Asian produce distributors', 'distribuidores asiáticos de vegetales',
    'European organic market', 'mercado orgánico europeo',
    
    // Operational
    'field to port logistics', 'logística campo-puerto',
    'customs clearance produce', 'despacho aduanal agrícola',
    'phytosanitary certification', 'certificación fitosanitaria',
    'bulk vegetable packing', 'empaque de vegetales a granel',
    'private label packing', 'empaque de marca privada'
  ],
  openGraph: {
    title: 'Flores Sons Farms - Productos Agrícolas Frescos y de Calidad',
    description: 'Explora la riqueza de productos agrícolas frescos y de alta calidad de Flores Sons Farms.',
    url: 'https://www.floressonsfarms.com/',
    siteName: 'Flores Sons Farms',
    images: [
      {
        url: 'https://www.floressonsfarms.com/logo.png',
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
    images: ['https://www.floressonsfarms.com/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="es" translate="no">
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
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}