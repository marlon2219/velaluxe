import Link from "next/link";

const services = {
  social: {
    title: "Maquillaje social",
    description:
      "Ideal para fiestas, cenas, graduaciones y eventos especiales. Diseñado para realzar tu belleza con un acabado elegante y duradero.",
  },
  novias: {
    title: "Maquillaje para novias",
    description:
      "Un look refinado, duradero y cuidado al detalle para uno de los días más importantes de tu vida.",
  },
  editorial: {
    title: "Maquillaje editorial",
    description:
      "Perfecto para sesiones de fotos, branding, contenido para redes sociales y proyectos visuales profesionales.",
  },
};

export function generateStaticParams() {
  return [
    { slug: "social" },
    { slug: "novias" },
    { slug: "editorial" },
  ];
}

export default async function ServicioDetallePage({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Servicio no encontrado</h1>
          <Link href="/servicios" className="underline">
            Volver a servicios
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/servicios"
          className="inline-block mb-8 text-sm font-semibold underline"
        >
          ← Volver a servicios
        </Link>

        <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
          Servicio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {service.title}
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          {service.description}
        </p>
      </div>
    </main>
  );
}