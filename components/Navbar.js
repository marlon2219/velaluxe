export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center gap-6 mb-20">
      <h1 className="text-2xl font-bold tracking-wide">Estefania Velasco</h1>

      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm font-medium">
        <li>
          <a href="#inicio" className="hover:text-pink-300 transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#servicios" className="hover:text-pink-300 transition">
            Servicios
          </a>
        </li>
        <li>
          <a href="#sobre-mi" className="hover:text-pink-300 transition">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-pink-300 transition">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}