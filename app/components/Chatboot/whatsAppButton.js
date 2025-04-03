import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "2491387526";
  const message = encodeURIComponent("Hola, me gustaría obtener más información.");
  const whatsappUrl = 'https://wa.me/${phoneNumber}?text=${message}';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "110px",
        right: "25px",
        zIndex: 1000,
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
        alt="WhatsApp"
        width="50"
        height="50"
      />
    </a>
  );
};

export default WhatsAppButton;