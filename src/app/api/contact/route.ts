import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Vérification explicite de la clé API
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY manquante dans les variables d'environnement Vercel");
    return NextResponse.json(
      { error: "Configuration serveur manquante. Contactez-nous directement à contact@flotweb.com" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    let body: { company?: string; email?: string; service?: string; message?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
    }

    const { company, email, service, message } = body;

    if (!company || !email || !service || !message) {
      return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
    }

    // ── 1. Notification interne → Flot Web ──
    const { error: errorInternal } = await resend.emails.send({
      from: "Flot Web <contact@flotweb.com>",
      to: [process.env.CONTACT_EMAIL ?? "contact@flotweb.com"],
      replyTo: email,
      subject: `📩 Nouveau message de ${company} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: #183150; padding: 24px; border-radius: 10px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #C3D8EB; margin: 0; font-size: 22px;">📩 Nouveau message Flot Web</h1>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px 8px 0 0;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Entreprise</span><br/>
                <span style="font-size: 15px; font-weight: 600; color: #0f172a;">${company}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-top: none;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Email</span><br/>
                <a href="mailto:${email}" style="font-size: 15px; font-weight: 600; color: #1D6D7A; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0; border-top: none;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Service demandé</span><br/>
                <span style="font-size: 15px; font-weight: 600; color: #0f172a;">${service}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Message</span><br/>
                <p style="font-size: 14px; color: #334155; margin: 8px 0 0; line-height: 1.6; white-space: pre-line;">${message}</p>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${email}" style="background: #1D6D7A; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 14px;">
              Répondre à ${company}
            </a>
          </div>
          <p style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 24px;">
            Message reçu via flotweb.com/contacter
          </p>
        </div>
      `,
    });

    if (errorInternal) {
      console.error("Resend error (internal):", errorInternal);
      return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
    }

    // ── 2. Email de confirmation → Client ──
    await resend.emails.send({
      from: "Flot Web <contact@flotweb.com>",
      to: [email],
      subject: `✅ Nous avons bien reçu votre message — Flot Web`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">

          <div style="background: linear-gradient(135deg, #183150, #1D6D7A); padding: 32px 24px; border-radius: 10px; margin-bottom: 28px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0 0 8px; font-size: 24px;">✅ Message bien reçu !</h1>
            <p style="color: #C3D8EB; margin: 0; font-size: 14px;">Nous vous répondons sous <strong>24h</strong></p>
          </div>

          <p style="font-size: 15px; color: #334155; line-height: 1.7; margin-bottom: 20px;">
            Bonjour <strong>${company}</strong>,<br/><br/>
            Merci pour votre message ! Notre équipe a bien reçu votre demande concernant
            <strong style="color: #1D6D7A;">${service}</strong> et vous recontactera sous <strong>24h ouvrées</strong>.
          </p>

          <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin: 0 0 8px;">Récapitulatif de votre message</p>
            <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0; white-space: pre-line;">${message}</p>
          </div>

          <p style="font-size: 13px; color: #64748b; line-height: 1.6; margin-bottom: 24px;">
            En attendant, n'hésitez pas à consulter nos <a href="https://flotweb.com/#tarifs" style="color: #1D6D7A;">tarifs</a> ou nos <a href="https://flotweb.com/#services" style="color: #1D6D7A;">services</a> pour préparer notre échange.
          </p>

          <div style="text-align: center; margin-bottom: 28px;">
            <a href="https://calendly.com/contact-flotweb/30min" style="background: #1D6D7A; color: white; padding: 12px 32px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">
              Prendre randez-vous
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin-bottom: 20px;" />
          <p style="text-align: center; font-size: 12px; color: #94a3b8; margin: 0;">
            Flot Web — Agence digitale premium · Paris, Île-de-France<br/>
            <a href="mailto:contact@flotweb.com" style="color: #1D6D7A; text-decoration: none;">contact@flotweb.com</a> · +33 6 13 92 01 50
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}

