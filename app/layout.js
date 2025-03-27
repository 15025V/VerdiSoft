
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="en" translate="no" >
        <body>
         
          {/*<NavBar />
          {children}
          <Footer />*/}
              {children}
        </body>
      </html>

    </LanguageProvider>
  );
}
