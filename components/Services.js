export default function Services() {
  const services = [
    {
      title: "Maquillaje social",
      description:
        "Ideal para fiestas, cenas, graduaciones y eventos especiales.",
      image: "/images/makeup.jpeg",
    },
    {
      title: "Maquillaje para novias",
      description:
        "Un look duradero, elegante y cuidado al detalle para tu gran día.",
      image: "/images/mk3.jpg",
    },
    {
      title: "Maquillaje editorial",
      description:
        "Perfecto para fotografía, redes sociales, branding y campañas.",
      image: "/images/t4.jpg",
    },
  ];

  return (
    <section id="servicios" className="max-w-6xl mx-auto px-6 py-24">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Servicios
      </h3>

      <p className="text-[#5f524c] text-center max-w-2xl mx-auto mb-12">
        Servicios diseñados para ofrecer una experiencia de maquillaje moderna,
        elegante y adaptada a cada ocasión.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="text-center rounded-2xl border border-[#e7ddd6] bg-white shadow-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* IMAGEN */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />

            {/* CONTENIDO */}
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-3">
                {service.title}
              </h4>
              <p className="text-[#5f524c]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}