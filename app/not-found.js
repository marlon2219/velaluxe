import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black px-6">
      <div className="text-center max-w-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Esta página no existe
        </h1>
        <p className="text-gray-600 mb-8">
          Puede que el enlace esté roto o que la página haya sido movida.
        </p>

        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}