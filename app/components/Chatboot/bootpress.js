'use client';
import { useEffect } from "react";

const BotpressChatbot = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.3/inject.js";
    script1.async = true;

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/02/23/04/20250223044823-TC06RID3.js";
      script2.async = true;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
      // No podemos remover script2 directamente porque se crea dentro del onload
      // Solo lo eliminamos si existe
      const existingScript2 = document.querySelector(`script[src="${"https://files.bpcontent.cloud/2025/02/23/04/20250223044823-TC06RID3.js"}"]`);
      if (existingScript2) {
        document.body.removeChild(existingScript2);
      }
    };
  }, []);

  return null;
};

export default BotpressChatbot;
