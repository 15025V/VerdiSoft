
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { LanguageProvider } from "./context/languageContext";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <LanguageProvider>


      <html lang="en" translate="no" >
        <body>
          <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
          <script src="https://files.bpcontent.cloud/2025/02/23/04/20250223044823-TC06RID3.js"></script>

          <NavBar />
          {children}
          <Footer />
        </body>
      </html>

    </LanguageProvider>
  );
}
