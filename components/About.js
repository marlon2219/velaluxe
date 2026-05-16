import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}


        {/* IMAGEN */}
        <div className="relative w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/imagen4.png"
            alt="Maquillaje profesional"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-6">Sobre mí</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Soy una profesional del maquillaje enfocada en resaltar la belleza
            natural de cada cliente con un estilo elegante, moderno y
            personalizado. Trabajo con dedicación, detalle y pasión para crear
            looks memorables para eventos, sesiones y ocasiones especiales.
          </p>
        </div>

      </div>
    </section>

  );
}