"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidEcuadorPhone(phone) {
    const cleanPhone = phone.replace(/\s|-/g, "");

    return (
      /^09\d{8}$/.test(cleanPhone) ||
      /^\+5939\d{8}$/.test(cleanPhone) ||
      /^5939\d{8}$/.test(cleanPhone)
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setStatus({
      message: "",
      type: "",
    });

    const cleanName = form.name.trim();
    const cleanEmail = form.email.trim();
    const cleanPhone = form.phone.trim();
    const cleanMessage = form.message.trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
      setStatus({
        message: "Completa todos los campos obligatorios",
        type: "error",
      });
      setLoading(false);
      return;
    }

    if (cleanName.length < 2) {
      setStatus({
        message: "El nombre debe tener al menos 2 caracteres",
        type: "error",
      });
      setLoading(false);
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setStatus({
        message: "Introduce un correo válido",
        type: "error",
      });
      setLoading(false);
      return;
    }

    if (!isValidEcuadorPhone(cleanPhone)) {
      setStatus({
        message: "Introduce un número válido de Ecuador. Ejemplo: 0991234567",
        type: "error",
      });
      setLoading(false);
      return;
    }

    if (cleanMessage.length < 20) {
      setStatus({
        message: "El mensaje debe tener al menos 20 caracteres",
        type: "error",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          message: cleanMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          message: data.message || "Algo salió mal",
          type: "error",
        });
        setLoading(false);
        return;
      }

      setStatus({
        message: "Mensaje enviado correctamente. Te responderemos pronto.",
        type: "success",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        message: "Error de conexión con el servidor",
        type: "error",
      });
    }

    setLoading(false);
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-400 mb-4">
            Contacto
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Reserva tu próxima cita
          </h3>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para
            confirmar disponibilidad, horario y detalles del servicio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-3xl p-8 shadow-sm space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Ejemplo: Carmen López"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Teléfono Ecuador <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0991234567"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
            <p className="text-xs text-gray-500 mt-2">
              Acepta formatos: 0991234567, +593991234567 o 593991234567.
            </p>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Mensaje <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntanos qué servicio necesitas, fecha, hora y sector."
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div className="hidden">
            <label>Website</label>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status.message !== "" && (
            <div
              className={`mt-4 p-3 rounded-xl text-sm font-medium ${
                status.type === "error"
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}