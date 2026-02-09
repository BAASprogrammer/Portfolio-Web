import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';
const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validar campos
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Campos requeridos faltantes' });
    }

    const result = await resend.emails.send({
      from: 'noreply@resend.dev', // Cambiar a tu dominio verificado en Resend
      to: 'barbara.arias.salvo@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de ${name}: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>De:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    return res.status(200).json({ success: true, data: result.data });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
};
