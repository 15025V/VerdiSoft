import Script from "next/script";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";

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
