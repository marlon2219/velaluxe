import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-300 mb-4">
          Makeup profesional
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Realza tu belleza con un estilo elegante y profesional
        </h2>

        <p className="text-gray-300 mb-8 max-w-lg text-lg leading-relaxed mx-auto md:mx-0">
          Maquillaje personalizado para eventos, novias, sesiones de fotos y
          ocasiones especiales. Cada look está pensado para resaltar tu esencia
          con un acabado sofisticado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contacto"
            className="bg-pink-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Reservar cita
          </a>

          {/* Botón secundario. --con link funciona mejor mas fluidez
          <Link
            href="/servicios"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Ver servicios
          </Link>
          */}
          
          <a
            href="#servicios"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Ver servicios
          </a>

        </div>
      </div>

      <div className="order-1 md:order-2 relative w-full h-[350px] sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/images/makeportada.jpeg"
          alt="Maquillaje profesional"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}