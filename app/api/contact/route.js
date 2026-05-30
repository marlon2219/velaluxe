import { Resend } from "resend";
import ContactEmail from "../../../components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function GET() {
  return Response.json({
    ok: true,
    message: "La API de contacto funciona correctamente",
  });
}

export async function POST(request) {
  try {
    console.log("Entró al POST /api/contact");

    const body = await request.json();
    console.log("BODY:", body);

    const {
      name = "",
      email = "",
      phone = "",
      message = "",
      website = "",
    } = body;

    if (website) {
      return Response.json({
        ok: true,
        message: "Mensaje recibido",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const cleanPhone = phone.trim();

    if (!cleanName || !cleanEmail || !cleanMessage || !cleanPhone) {
      return Response.json(
        {
          ok: false,
          message: "Todos los campos son obligatorios",
        },
        { status: 400 }
      );
    }

    if (!isValidEcuadorPhone(cleanPhone)) {
      return Response.json(
        {
          ok: false,
          message: "El número de teléfono no es válido para Ecuador",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return Response.json(
        {
          ok: false,
          message: "El correo no es válido",
        },
        { status: 400 }
      );
    }

    if (cleanMessage.length < 20) {
      return Response.json(
        {
          ok: false,
          message: "El mensaje es demasiado corto",
        },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!toEmail) {
      return Response.json(
        {
          ok: false,
          message: "Falta configurar el correo de destino",
        },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
  from: "Formulario Web <contacto@estefaniavelasco.com>",
  to: [toEmail],
  replyTo: cleanEmail,
  subject: `Nuevo mensaje de ${cleanName}`,
  react: ContactEmail({
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone,
    message: cleanMessage,
  }),
});
    console.log("RESPUESTA RESEND:", data);

    if (data.error) {
      console.error("ERROR REAL:", data.error);

      return Response.json(
        {
          ok: false,
          message: "No se pudo enviar el email",
          details: data.error.message,
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.error("ERROR EN /api/contact:", error);

    return Response.json(
      {
        ok: false,
        message: "Error al procesar la solicitud",
        error: String(error),
      },
      { status: 500 }
    );
  }
}