import { FaWhatsapp } from "react-icons/fa";
import { contact } from "../../data/contact";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;