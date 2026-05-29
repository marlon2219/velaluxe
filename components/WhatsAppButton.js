

export default function WhatsAppButton() {
  const phone = "593999933455"; 
  const message = "Hola, quiero información sobre sus servicios de maquillaje.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg hover:bg-green-600 transition font-semibold"
    >
      WhatsApp
    </a>
  );
}