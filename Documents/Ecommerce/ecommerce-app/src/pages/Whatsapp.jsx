import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/919967690655" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-105"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppFloating;
