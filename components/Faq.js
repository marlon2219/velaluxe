export default function Faq() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
            Preguntas frecuentes
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Resolvemos tus dudas
          </h3>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h4 className="font-semibold mb-2">
              ¿Con cuánto tiempo debo reservar?
            </h4>
            <p className="text-gray-600">
              Lo ideal es reservar con varios días de antelación, especialmente
              para fines de semana y eventos importantes.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h4 className="font-semibold mb-2">
              ¿También realizas maquillaje para novias?
            </h4>
            <p className="text-gray-600">
              Sí, ofrecemos maquillaje para novias con enfoque duradero,
              elegante y totalmente personalizado.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h4 className="font-semibold mb-2">
              ¿Te desplazas a domicilio?
            </h4>
            <p className="text-gray-600">
              Depende de la ubicación y del tipo de servicio. Eso se confirma al
              momento de la reserva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}