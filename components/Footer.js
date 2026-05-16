export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <h4 className="text-xl font-semibold mb-3">Estefania Velasco</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Maquillaje profesional para eventos, novias y sesiones especiales.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Navegación</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="hover:text-white transition">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contacto</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Quito, Ecuador</li>
            <li>contacto@estefaniavelasco.com</li>
            <li>WhatsApp disponible</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-white/10 text-sm text-gray-500">
        © 2026 Estefania Velasco. Todos los derechos reservados.
      </div>
    </footer>
  );
}