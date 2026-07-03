import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const CRM_API_URL = process.env.CRM_API_URL || "https://api.solomycrm.com";
const WEBHOOK_INTERNAL_SECRET = process.env.WEBHOOK_INTERNAL_SECRET;

export const config = {
  api: { bodyParser: false },
};

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => resolve(Buffer.from(data)));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo no permitido" });
  }

  const sig = req.headers["stripe-signature"];
  const rawBody = await getRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Firma de webhook invalida:", err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (session.payment_status !== "paid") {
      return res.status(200).json({ received: true });
    }

    const { usuario, nombre, email, telefono, plan, contrasena_hash } = session.metadata || {};

    if (!usuario || !nombre || !email || !plan || !contrasena_hash) {
      console.error("Metadata incompleta en sesion:", session.id, session.metadata);
      return res.status(200).json({ received: true });
    }

    console.log("Pago confirmado para:", usuario, "plan:", plan, "Creando cuenta en CRM...");

    try {
      const crmRes = await fetch(`${CRM_API_URL}/api/auth/register-paid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-internal-secret": WEBHOOK_INTERNAL_SECRET,
        },
        body: JSON.stringify({
          usuario,
          "contrasenya_hash": contrasena_hash,
          nombre,
          email,
          telefono: telefono || "",
          plan,
          stripe_customer_id: session.customer || null,
          stripe_subscription_id: session.subscription || null,
        }),
      });

      const crmData = await crmRes.json();

      if (!crmRes.ok) {
        if (crmData.code === "USUARIO_DUPLICADO" || crmData.code === "EMAIL_DUPLICADO") {
          console.warn("Cuenta ya existia para", usuario);
        } else {
          console.error("Error creando cuenta en CRM para", usuario, crmData);
        }
      } else {
        console.log("Cuenta creada en CRM para:", usuario);
      }
    } catch (crmErr) {
      console.error("Error llamando al CRM:", crmErr.message);
    }
  }

  return res.status(200).json({ received: true });
}
