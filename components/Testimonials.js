export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
            Testimonios
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestras clientas
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Opiniones reales sobre la experiencia, el acabado y la atención.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              “Me encantó el resultado. El maquillaje duró toda la noche y me
              sentí guapísima.”
            </p>
            <h4 className="font-semibold">Camila R.</h4>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              “Muy profesional, puntual y con muchísimo detalle. Repetiría sin
              duda.”
            </p>
            <h4 className="font-semibold">Valeria M.</h4>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              “El look quedó elegante y natural, justo como lo quería para mi
              sesión de fotos.”
            </p>
            <h4 className="font-semibold">Daniela P.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}