import Link from "next/link";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-sm font-semibold underline"
        >
          ← Volver al inicio
        </Link>

        <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
          Servicios
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nuestros servicios de maquillaje profesional
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mb-12">
          Ofrecemos servicios pensados para realzar tu imagen con un acabado
          elegante, moderno y adaptado a cada ocasión.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-3">Maquillaje social</h2>
              <p className="text-gray-600 mb-6">
                Ideal para eventos, cenas, fiestas y graduaciones.
              </p>
            </div>

            <Link
              href="/servicios/social"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition text-center"
            >
              Ver servicio
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-3">Maquillaje para novias</h2>
              <p className="text-gray-600 mb-6">
                Un look refinado y duradero para tu gran día.
              </p>
            </div>

            <Link
              href="/servicios/novias"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition text-center">
              Ver servicio
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="
          group relative rounded-2xl border border-[#e7ddd6] bg-white p-8 shadow-sm transition hover:shadow-lg
          border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-3">Maquillaje editorial</h2>
              <p className="text-gray-600 mb-6">
                Pensado para fotografía, branding y campañas visuales.
              </p>
            </div>

             <Link
             
              href="/servicios/editorial"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition text-center">
              Ver servicio
            </Link>


          
          </div>


          
          

        </div>
      </div>
    </main>
  );
}